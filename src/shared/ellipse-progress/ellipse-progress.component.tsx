import { useEffect, useState } from "react";

import { useAppSelector } from "../../app-redux/hooks";

import { EllipseAnimationWrapper, Dot, DotBox } from './ellipse-progress.style';

interface IProgress {
    size: number,
    strokeWidth: number,
    percentage: number,
    color: string,
    pointBox?: boolean,
    animation?: boolean,
};

const EllipseProgress = ({ size, strokeWidth, percentage, color, pointBox, animation }: IProgress) => {
    // State of all dots - base on that we display them;
    const [oneDot, setOneDot] = useState(false);
    const [twoDot, setTwoDot] = useState(false);
    const [threeDot, setThreeDot] = useState(false);
    // State of circle 
    const [progress, setProgress] = useState(0);

    // Calculate circle's animation;
    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (progress * circumference) / 100;
    const noAnimation = (50 * circumference) / 100;

    // Window extention state - 
    const extentionIsOpen = useAppSelector((state) => state.extention.extentionReady);

    useEffect(() => {
        // Binding to extension-window so that the animation does not start if the window is open
        if (!extentionIsOpen) {
            setProgress(percentage);
            // Display dots while transition is running
            setOneDot(true);
            setTimeout(() => setTwoDot(true), 1500);
            setTimeout(() => setThreeDot(true), 3000);
        }
    }, [percentage, extentionIsOpen]);

    // If we dont want animation - display all dots and change CIRCLE - strokeDashharray to the noAnimation variable;
    useEffect(() => {
        if (!animation) {
            setOneDot(true);
            setTwoDot(true);
            setThreeDot(true);
        }
    }, [animation])

    return (
        <EllipseAnimationWrapper>
            <svg width={size} height={size} viewBox={viewBox}>
                <circle
                    fill="none"
                    stroke={color}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    strokeDasharray={!animation ? `${noAnimation}` : `${dash} ${circumference - dash}`}
                    strokeLinecap="round"
                    style={{ transition: `all 3s linear` }}
                />
            </svg>
            {
                pointBox &&
                <DotBox>
                    <span>Q1 2022</span>
                </DotBox>
            }
            {oneDot &&
                <Dot style={{ top: '0', left: '50%', transform: 'translate(-50%, -2.5px)' }} />}
            {twoDot &&
                <Dot style={{ top: '50%', right: '0', transform: 'translate(2.5px, -50%)' }} />}
            {threeDot &&
                <Dot style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 2.5px)' }} />}
        </EllipseAnimationWrapper>
    );
};

export default EllipseProgress;
