import React, { useEffect, useState } from "react";

import { EllipseAnimationWrapper, Point, PointBox } from './ellipse-progress.style';

interface IProgress {
    size: number,
    strokeWidth: number,
    percentage: number,
    color: string,
    pointBox?: boolean,
};

const EllipseProgress = ({ size, strokeWidth, percentage, color, pointBox }: IProgress) => {
    const [progress, setProgress] = useState(0);

    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (progress * circumference) / 100;

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

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
                    strokeDasharray={`${dash} ${circumference - dash}`}
                    strokeLinecap="round"
                    style={{ transition: "all 3s linear" }}
                />
            </svg>
            {
                pointBox &&
                <PointBox>
                    <span>Q1 2022</span>
                </PointBox>
            }
            <Point
                style={{ top: '0', left: '50%', transform: 'translate(-50%, -2.5px)' }}
                time={0}
                state={progress}
            />
            <Point
                style={{ top: '50%', right: '0', transform: 'translate(2.5px, -50%)' }}
                time={1.5}
                state={progress}
            />
            <Point
                style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 2.5px)' }}
                time={3}
                state={progress}
            />
        </EllipseAnimationWrapper>
    );
};

export default EllipseProgress;
