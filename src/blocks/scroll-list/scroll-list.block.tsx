import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { nextPageHandler } from '../../app-redux/slices/participant.slice';

import Participant from '../../components/participant/participant.component';

import { ParticipantsMain } from './scroll-list.style';

const ScrollList = () => {
    const dispatch = useAppDispatch();
    const uppdatedData = useAppSelector((state) => state.participant.allParticipants);
    const stop = useAppSelector((state) => state.participant.noPages);

    // when the user scrolls to the bottom of the block at the end we trigger a scroll event and change PAGE;
    const scrollHandler = (e: any) => {
        // scrollBarHeight = currentBlockHeight + scrolledNumber;
        let scrollBarHeight = e.currentTarget.scrollHeight;
        let currentBlockHeight = e.target.clientHeight;
        let scrolledNumber = e.currentTarget.scrollTop;

        if (stop) return;

        // Change page on scroll bottom
        if (scrollBarHeight - (currentBlockHeight + scrolledNumber) < 1) {
            dispatch(nextPageHandler())
        }
    };

    return (
        <ParticipantsMain onScroll={scrollHandler}>
            {
                uppdatedData?.map((item, index) => (
                    <Participant
                        key={index}
                        id={item.id}
                        username={item.username}
                        email={item.email}
                        address={item.address}
                    />
                ))
            }
        </ParticipantsMain>
    )
};

export default ScrollList;