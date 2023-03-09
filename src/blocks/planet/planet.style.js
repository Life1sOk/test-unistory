import styled from 'styled-components';

import planetImage from '../../assets/planet.png';

export const PlanetStyle = styled.div`
    position: absolute;
    top: ${({ top }) => top ? `${top}px` : 'none'};
    left: ${({ left }) => left ? `${left}px` : 'none'};
    right: ${({ right }) => right ? `${right}px` : 'none'};
    bottom: ${({ bottom }) => bottom ? `${bottom}px` : 'none'};
`;

export const PlanetAttractionWrapper = styled.div`
    width: 532px;
    height: 532px;
    z-index: 29;
    border-radius: 50%;

    position: absolute;
    left: 0px;
    top: 0px;
`;

export const PlanetImage = styled.div`
    width: 320px;
    height: 322px;

    // Сохраняет форму картинки и создает 3д эффект
    mask-image: url(${planetImage});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    background: url(${planetImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 18;
    
    position: absolute;
    left: 106px;
    top: 105px;
`;

// Все элипсы привязаны к основному Мэйн элипсуж, а сам Мейн к текущей секции //
export const EllipseOneMain = styled.div`
    width: 532px;
    height: 532px;
    background-color: rgba(33, 33, 36, 1);
    border-radius: 50%;

    position: absolute;
    left: 0px;
    top: 0px;

    &::before {
        content: '';
        width: 526px;
        height: 526px;
        border-radius: 50%;
        background-color: rgba(23, 23, 25, 1);
        filter: blur(11px);
        z-index: 1;

        position: absolute;
        left: 3px;
        top: 3px;
    }
`;

export const EllipseTwo = styled.div`
    width: 446px;
    height: 446px;
    background-color: rgba(30, 30, 32, 1);
    border-radius: 50%;
    z-index: 3;
    
    position: absolute;
    left: 43px;
    top: 43px;
`;

export const EllipseThree = styled.div`
    width: 384px;
    height: 384px;
    border: 1px solid rgba(50, 50, 50, 1);
    border-radius: 50%;
    z-index: 3;

    position: absolute;
    left: 74px;
    top: 74px;

    &::after {
        content: '';
        width: 370px;
        height: 370px;
        border: 1px solid rgba(50, 50, 50, 1);
        border-radius: 50%;
        z-index: 3;
        
        position: absolute;
        top: 7px;
        left: 7px;
    }
`;