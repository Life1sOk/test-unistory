import styled from 'styled-components';

export const ParticipantsMain = styled.div`
    max-height: 550px;
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