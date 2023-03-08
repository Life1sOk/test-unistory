import { useEffect } from 'react';

import { useGetParticipantsQuery } from '../../app-redux/api/participantsAPI';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { addParticipantList } from '../../app-redux/slices/participant.slice';

import LoadingSpinner from '../../shared/loading-spinner/loading-spinner.component';
import ScrollList from '../../features/scroll-list/scroll-list';

import { ParticipantsStyle, Title, ParticipantsHeader, SpinnerWrapper } from './participants.style';

const Participants = () => {
    // Redux state - dispatch
    const dispatch = useAppDispatch();

    // Redux hook fetch 1st(0) page; And always listening if Page is change
    // If PAGE change ---> Hook re-fetch and take new items;
    const page = useAppSelector((state) => state.participant.page);
    const { data, isLoading } = useGetParticipantsQuery(page);

    // // useEffect listening if data change
    // // When it change send this new data to the redux store;
    useEffect(() => {
        // On data change it send to the redux store
        if (data) dispatch(addParticipantList(data));
    }, [data, dispatch]);

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
            <ScrollList />
        </ParticipantsStyle>
    )
};

export default Participants;