import styled from 'styled-components';

export const TextCallStyle = styled.div`
    position: absolute;
    top: ${({ top }) => top ? `${top}px` : '156px'};
    left:${({ left }) => left ? `${left}px` : '64px'};

    width: 1008px;
    height: fit-content;
    text-align: left;
    color: ${({ type }) => type !== 'orange' ? 'var(--white)' : 'var(--orange)'};
    z-index: ${({ type }) => type !== 'orange' ? '18' : '4'};

    display: flex;
    flex-direction: column;
`;

export const TextCallLine = styled.p`
    width: 100%;
    height: 120px;
`;

export const MarkText = styled.span`
    color: var(--main-background);
    text-shadow: 0 0 5px var(--white);
`;