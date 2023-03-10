import styled from 'styled-components';

export const ButtonStyle = styled.button`
    width: fit-content;
    min-width: fit-content;
    max-height: 38px;
    padding: 8px 24px;
    transition: background-color .3s;
    flex-shrink: 0;
    
    color: var(--white);
    background-color: var(--orange);

    border: none;
    border-radius: 30px;

    font-family: 'Bebas Neue', cursive;
    font-weight: 700;
    font-size: 18px;

    opacity: ${({ unactive }) => !unactive ? '1' : '.5'};

    &:hover {

        cursor: ${({ unactive }) => !unactive ? 'pointer' : 'initial'};
        background-color: ${({ unactive }) => !unactive ?
        'var(--orange-dark)' : 'var(--orange)'};
    }
`;