import { useState, useEffect } from 'react';

import { ParticipantStyle, NameP, EmailP, WalletP, Сross } from './participant.style';

import { useAppSelector } from '../../app-redux/hooks';

export interface IParticipant {
    username?: string,
    email?: string,
    address?: string
};

const Participant = ({ username, email, address }: IParticipant) => {
    const [current, setCurrent] = useState(false);
    const currentUserAddress = useAppSelector((state) => state.user.current.address);

    useEffect(() => {
        if (currentUserAddress === address) setCurrent(true);
    }, [address, currentUserAddress]);

    return (
        <ParticipantStyle current={current}>
            <NameP>{username}</NameP>
            <EmailP>{email}</EmailP>
            <WalletP>{address}</WalletP>
            {current && <Сross>&times;</Сross>}
        </ParticipantStyle>
    )
};

export default Participant;