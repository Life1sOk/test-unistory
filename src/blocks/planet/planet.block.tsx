import { useRef } from 'react';

import EllipseProgress from '../../components/ellipse-progress/ellipse-progress.component';

import { PlanetStyle, PlanetImage, PlanetAttractionWrapper, EllipseOneMain, EllipseTwo, EllipseThree } from './planet.style';

interface IPlanet {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
    children?: JSX.Element | JSX.Element[];
    pointBox?: boolean,
    ellipse?: boolean,
};

const Planet = ({ children, pointBox, top, left, right, bottom, ellipse }: IPlanet) => {
    const planetRef = useRef<HTMLDivElement>();

    const pointerEnterHandler = () => {
        const planet = planetRef.current as any;
        // As soon as we start the mouse, we create an animation
        planet.style.transition = `transform 30s linear`;
    };

    const mouseMoveHandler = (event: MouseEvent) => {
        const planet = planetRef.current as any;
        // Planet coordinates along the X and Y axes relative to the client
        let planetX = (planet.getBoundingClientRect()?.left) + (planet.clientWidth / 2);
        let planetY = (planet.getBoundingClientRect()?.top) + (planet.clientHeight / 2);
        // X and Y coordinates of the current cursor relative to the client
        let cursoreX = event.clientX;
        let cursoreY = event.clientY;
        //  Finding the difference between coordinates
        let transX = (planetX - cursoreX) * -1;
        let transY = (planetY - cursoreY) * -1;
        // Change the planet's position based on this data from the top
        planet.style.transform = `translate(${transX}px,${transY}px)`;
        // Target child's - Put text 'inside' planet;
        const childrensText = [planet.children[0], planet.children[1]]
        // Change the text's position based on the planet ( opposite to the planet move );
        childrensText.forEach(child => {
            if (child) {
                child.style.transition = 'transform 30s linear';
                child.style.transform = `translate(${-transX}px,${-transY}px)`;
            }
        })
    };

    const pointLeaveHandler = () => {
        const planet = planetRef.current as any;
        // When cursor leave - back default planet's setting
        planet.style.transition = 'transform 3s linear';
        planet.style.transform = `translate(0px, 0px)`;
        // Target child's - Put text 'inside' planet;
        const childrensText = [planet.children[0], planet.children[1]]
        // Back text too
        childrensText.forEach(child => {
            if (child) {
                child.style.transition = 'transform 3s linear';
                child.style.transform = `translate(0px, 0px)`;
            }
        })
    };

    return (
        <PlanetStyle top={top} left={left} right={right} bottom={bottom}>
            <PlanetImage ref={planetRef}>
                {children ? children : null}
            </PlanetImage>
            <PlanetAttractionWrapper
                onPointerLeave={pointLeaveHandler}
                onPointerEnter={pointerEnterHandler}
                onMouseMove={mouseMoveHandler}
            />
            <EllipseOneMain>
                <EllipseTwo />
                <EllipseThree />
                <EllipseProgress
                    size={486}
                    strokeWidth={1}
                    percentage={50}
                    color="rgba(231, 86, 38, 1)"
                    pointBox={pointBox}
                    animation={ellipse}
                />
            </EllipseOneMain>
        </PlanetStyle >
    )
};

export default Planet;