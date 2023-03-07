import styled from 'styled-components';

export const ParticipantsWrapper = styled.div`
    position: relative;

    width: 100%;
    height: fit-content;
`;

export const ParticipantStyle = styled.div`
    height: 50px;
    margin-right: 18.25px;
    color: var(--white);
    border-bottom: 1px solid var(--white);

    font-family: 'Avenir Next Cyr';
    font-weight: 400;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ParticipantsMainStyle = styled(ParticipantStyle)`
    color: var(--orange);
`;

// ---------------------------- //

const BaseP = styled.span`
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const NameP = styled(BaseP)`
    width: 110px;
`;

export const EmailP = styled(BaseP)`
    width: 173px;
`;

export const WalletP = styled(BaseP)`
    width: 195px;
    margin-right: 29px;
`;

// ------------------------------ //

export const Сross = styled.span`
    position: absolute;
    top: 50%;
    right: 0;

    padding: 10px;
    color: var(--orange);
    z-index: 2;
    transform: translate(-50%, -50%);

    &:hover {
        cursor: pointer;
    }
`;