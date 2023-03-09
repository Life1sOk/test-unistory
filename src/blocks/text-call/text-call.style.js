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
    text-shadow: rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 0.540302px 0.841471px 0px, rgb(255, 255, 255) -0.416147px 0.909297px 0px, rgb(255, 255, 255) -0.989992px 0.14112px 0px, rgb(255, 255, 255) -0.653644px -0.756802px 0px, rgb(255, 255, 255) 0.283662px -0.958924px 0px, rgb(255, 255, 255) 0.96017px -0.279415px 0px;
`;