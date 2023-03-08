import styled from 'styled-components';

export const ParticipantsStyle = styled.div`
    max-height: 663px;
    flex-shrink: 0;
    text-align: start;
`;

export const Title = styled.h3`
    min-height: 37px;
    font-weight: 700;
    font-size: 36px;
    color: var(--white);
`;

export const ParticipantsHeader = styled.div`
    width: 668px;
    padding-bottom: 16px;
    min-height: 25px;
    margin-top: 35px;
    margin-right: 28.25px;
    border-bottom: 1px solid var(--white);

    font-weight: 700;
    font-size: 24px;

    display: flex;
    justify-content: space-between;

    .name {
        width: 110px;
        text-align: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .email {
        width: 173px;
        text-align: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .wallet {
        width: 195px;
        text-align: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const ParticipantsMain = styled.div`
    max-height: 550px;
    /* border-right: 1px solid var(--white); */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px;
        background-color: var(--white);
    }

    &::-webkit-scrollbar-track {
        width: 1px;
        background-color: var(--main-background);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--orange);
        border: 3px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }
`;

export const SpinnerWrapper = styled.div`
    width: 668px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;