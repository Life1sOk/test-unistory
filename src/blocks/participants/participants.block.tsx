import { useEffect } from 'react';

import { useGetParticipantsQuery } from '../../app-redux/api/participantsAPI';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { addParticipantList, nextPageHandler } from '../../app-redux/slices/user.slice';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import Participant from '../../components/participant/participant.component';

import { ParticipantsStyle, Title, ParticipantsHeader, ParticipantsMain, SpinnerWrapper } from './participants.style';

const Participants = () => {
    // Redux state - dispatch
    const dispatch = useAppDispatch();
    const uppdatedData = useAppSelector((state) => state.user.allParticipants);
    const page = useAppSelector((state) => state.user.page);
    // Hook - fetch list
    const { data, isLoading } = useGetParticipantsQuery(page);

    const scrollHandler = (e: any) => {
        // scrollBarHeight = currentBlockHeight + scrolledNumber;
        let scrollBarHeight = e.currentTarget.scrollHeight;
        let currentBlockHeight = e.target.clientHeight;
        let scrolledNumber = e.currentTarget.scrollTop;

        // Change page
        if (scrollBarHeight - (currentBlockHeight + scrolledNumber) < 100) {
            dispatch(nextPageHandler())
        }
    };

    useEffect(() => {
        // On data change it send to the redux store
        if (data) dispatch(addParticipantList(data));
    }, [data, dispatch]);

    // While loading - show spinner;
    if (isLoading) {
        return (
            <SpinnerWrapper>
                <LoadingSpinner />
            </SpinnerWrapper>)
    }

    return (
        <ParticipantsStyle>
            <Title>Participation listing (enable only for participants)</Title>
            <ParticipantsHeader>
                <span className='name'>NAME</span>
                <span className='email'>EMAIL</span>
                <span className='wallet'>WALLET</span>
            </ParticipantsHeader>
            <ParticipantsMain onScroll={scrollHandler}>
                {
                    uppdatedData?.map((item, index) => (
                        <Participant
                            key={index}
                            username={item.username}
                            email={item.email}
                            address={item.address}
                        />
                    ))
                }
            </ParticipantsMain>
        </ParticipantsStyle>
    )
};

export default Participants;