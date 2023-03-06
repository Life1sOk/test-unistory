import styled from 'styled-components';

export const ParticipantStyle = styled.div`
    position: relative;

    height: 50px;
    margin-right: 18.25px;
    color: ${({ current }) => current ? 'var(--orange)' : 'var(--white)'};
    border-bottom: 1px solid var(--white);

    font-family: 'Avenir Next Cyr';
    font-weight: 400;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NameP = styled.span`
    width: 110px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const EmailP = styled.span`
    width: 173px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const WalletP = styled.span`
    width: 195px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 29px;
`;

export const Сross = styled.span`
    position: absolute;
    top: 45%;
    right: 0;

    transform: translate(-50%, -50%);

    &:hover {
        cursor: pointer;
    }
`;