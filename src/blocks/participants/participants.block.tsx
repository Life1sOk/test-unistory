import { useEffect } from 'react';

import { useGetParticipantsQuery } from '../../app-redux/api/participantsAPI';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { addParticipantList, nextPageHandler } from '../../app-redux/slices/participant.slice';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import Participant from '../../components/participant/participant.component';

import { ParticipantsStyle, Title, ParticipantsHeader, ParticipantsMain, SpinnerWrapper } from './participants.style';

const Participants = () => {
    // Redux state - dispatch
    const dispatch = useAppDispatch();

    // Step 1 ---> redux hook fetch 1st(0) page; And always listening if Page is change
    // If PAGE change ---> Hook re-fetch and take new items;
    const page = useAppSelector((state) => state.user.page);
    const { data, isLoading } = useGetParticipantsQuery(page);

    // Step 2 ---> useEffect listening if data change
    // When it change send this new data to the redux store;
    useEffect(() => {
        // On data change it send to the redux store
        if (data) dispatch(addParticipantList(data));
    }, [data, dispatch]);

    // Step 3 ---> After new data sended to the Redux they merge into one big array
    const uppdatedData = useAppSelector((state) => state.user.allParticipants);

    // Step 4 ---> when the user scrolls to the bottom of the block at the end we trigger a scroll event and change PAGE from Step 1;
    const scrollHandler = (e: any) => {
        // scrollBarHeight = currentBlockHeight + scrolledNumber;
        let scrollBarHeight = e.currentTarget.scrollHeight;
        let currentBlockHeight = e.target.clientHeight;
        let scrolledNumber = e.currentTarget.scrollTop;

        // if page number more then tital pages - stop function;
        if (data && page === data?.meta.totalPages) return;

        // Change page on scroll bottom
        if (scrollBarHeight - (currentBlockHeight + scrolledNumber) < 1) {
            dispatch(nextPageHandler())
        }
    };

    // =--------------------------------------------------------------------------------//

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