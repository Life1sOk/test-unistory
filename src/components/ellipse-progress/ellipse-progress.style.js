import styled from 'styled-components';

export const EllipseAnimationWrapper = styled.div`
    width: 486px;
    height: 486px;
    z-index: 2;

    position: absolute;
    left: 23px;
    top: 23px;
`;

export const Point = styled.div`
    width: 6px;
    // Привязка к состоянию чтобы анимация не началась раньше
    height: ${({ state }) => state === 0 ? '0' : '6px'};
    background-color: var(--orange);
    border-radius: 50%;
    z-index: 4;
    
    position: absolute;

    // Искусственная задержка под прогресс анимацию -- Нужно будет найти лучший способ...
    // Привязка к состоянию чтобы анимация не началась раньше
    animation-name: ${({ state }) => state === 0 ? 'none' : 'show'};
    animation-duration: ${({ time }) => time ? `${time + time / 50}s` : '0'};

    @keyframes show {
        0% {
            height: 0;
        }

        99% {
            height: 0;
        }

        100% {
            height: 6px;
        }
    }
`;

export const PointBox = styled.div`
    padding: 8px 12px;
    width: 80px;
    max-height: 30px;
    background-color: var(--white);
    border-radius: 15px;
    color: var(--main-background);
    z-index: 4;
    
    position: absolute;
    left: 50%;
    top: -14px;
    transform: translateX(calc(-50% - 21.5px)); 

    font-weight: 700;
    font-size: 14px;

    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;

    &::after {
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        z-index: 3;

        background-color: var(--white);
        box-shadow: -2px -2px 6px rgba(50, 50, 50, 0.25), 2px 2px 6px rgba(50, 50, 50, 0.25);
    }
`;