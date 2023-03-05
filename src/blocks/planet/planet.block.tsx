import { useRef } from 'react';

import EllipseProgress from '../../components/ellipse-progress/ellipse-progress.component';

import { PlanetStyle, PlanetImage, PlanetAttractionWrapper, EllipseOneMain, EllipseTwo, EllipseThree, EllipseFour, EllipseFive } from './planet.style';

interface IPlanet {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
    children: JSX.Element | JSX.Element[];
    pointBox?: boolean,
};

const Planet = ({ children, pointBox, top, left, right, bottom }: IPlanet) => {
    const planetRef = useRef<HTMLDivElement>();

    const mouseMoveHandler = (event: MouseEvent) => {
        const planet = planetRef.current as any;
        // Координаты планеты по осям Х и У относительно клиента
        let planetX = (planet.getBoundingClientRect()?.left) + (planet.clientWidth / 2);
        let planetY = (planet.getBoundingClientRect()?.top) + (planet.clientHeight / 2);
        // Координат текущего курсора Х и У относительно клиента
        let cursoreX = event.clientX;
        let cursoreY = event.clientY;
        //  Находим разницу между координатами и множим на процент 10 (процент на который сдвиниться планета)
        let transX = (planetX - cursoreX) * 5 / 100 * -1;
        let transY = (planetY - cursoreY) * 5 / 100 * -1;
        // Стайлим координаты
        planet.style.transform = `translate(${transX}px,${transY}px)`;
        // Находим текст(детей) внутри планеты
        const childrensText = [planet.children[0], planet.children[1]]
        // Добавляем трансформ анимацию с дилеем и противоположные значения трансХ и трансУ
        childrensText.forEach(child => {
            child.style.transition = 'transform 1s linear';
            child.style.transform = `translate(${-transX}px,${-transY}px)`;
        })
    };

    const pointLeaveHandler = () => {
        const planet = planetRef.current as any;
        // При выходе - возвращаем в исходное положение
        planet.style.transform = `translate(0px, 0px)`;
        // Находим текст(детей) внутри планеты
        const childrensText = [planet.children[0], planet.children[1]]
        // Возвращаем детей на место
        childrensText.forEach(child => {
            // child.style.transition = 'transform 1s linear';
            child.style.transform = `translate(0px, 0px)`;
        })
    };

    return (
        <PlanetStyle top={top} left={left} right={right} bottom={bottom}>
            <PlanetImage ref={planetRef}>
                {children ? children : null}
            </PlanetImage>
            <PlanetAttractionWrapper
                onPointerLeave={pointLeaveHandler}
                onMouseMove={mouseMoveHandler}
            />
            <EllipseOneMain>
                <EllipseTwo />
                <EllipseThree />
                <EllipseFour />
                <EllipseFive />
                <EllipseProgress
                    size={486}
                    strokeWidth={1}
                    percentage={50}
                    color="rgba(231, 86, 38, 1)"
                    pointBox={pointBox}
                />
            </EllipseOneMain>
        </PlanetStyle >
    )
};

export default Planet;