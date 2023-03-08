import { useState, useEffect, memo } from 'react';

import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { removeUser } from '../../app-redux/slices/participant.slice';

import { ParticipantStyle, ParticipantsWrapper, ParticipantsMainStyle, NameP, EmailP, WalletP, Сross } from './participant.style';

export interface IParticipant {
    username?: string,
    email?: string,
    address?: string
};

const Participant = memo(({ username, email, address }: IParticipant) => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState(false);
    const currentUserAddress = useAppSelector((state) => state.participant.current.address);

    // Re-move user from the list;
    const onDeleteHandler = () => {
        dispatch(removeUser());
        setCurrent(false);
    }

    // Check if current participant is our user base on address
    // If true => change CURRENT state;
    useEffect(() => {
        if (currentUserAddress === address) setCurrent(true);
    }, [address, currentUserAddress]);

    return (
        <>
            {
                current ?

                    <ParticipantsWrapper>
                        <Link to='/profile'>
                            <ParticipantsMainStyle>
                                <NameP>{username}</NameP>
                                <EmailP>{email}</EmailP>
                                <WalletP>{address}</WalletP>
                            </ParticipantsMainStyle>
                        </Link>
                        <Сross onClick={onDeleteHandler}>&times;</Сross>
                    </ParticipantsWrapper>
                    :
                    <ParticipantStyle>
                        <NameP>{username}</NameP>
                        <EmailP>{email}</EmailP>
                        <WalletP>{address}</WalletP>
                    </ParticipantStyle>
            }
        </>
    )
});

export default Participant;