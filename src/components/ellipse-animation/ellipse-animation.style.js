import styled from 'styled-components';

export const EllipseAnimationStyle = styled.div`
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background: conic-gradient(
        var(--orange) 50%,
        rgba(255,255,255, 0) 50%
    );
    transition: 2s;
    z-index: 2;
    
    position: absolute;
    left: 23px;
    top: 23px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HidenCircle = styled.div`
    width: 483px;
    height: 483px;
    border-radius: 50%;
    background-color: var(--main-background);
    z-index: 3;
`;

export const Point = styled.div`
    width: 6px;
    height: 6px;
    background-color: var(--orange);
    border-radius: 50%;
    z-index: 4;

    position: absolute;
`;

export const PointBox = styled.div`
    padding: 8px 12px;
    width: 80px;
    max-height: 30px;
    background-color: var(--white);
    border-radius: 15px;
    color: var(--main-background);
    z-index: 3;
    
    position: absolute;
    left: 50%;
    top: -14px;
    transform: translateX(calc(-50% - 21.5px)); 

    font-family: 'Bebas Neue';
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