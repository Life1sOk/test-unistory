import { EllipseAnimationStyle, HidenCircle, Point, PointBox } from './ellipse-animation.style';

const EllipseAnimation = () => {
    return (
        <EllipseAnimationStyle>
            <HidenCircle />
            <PointBox>
                <span>Q1 2022</span>
            </PointBox>
            <Point style={{ top: '0', left: '50%', transform: 'translate(-50%, -2.5px)' }} />
            <Point style={{ top: '50%', right: '0', transform: 'translate(2.5px, -50%)' }} />
            <Point style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 2.5px)' }} />
            <Point style={{ top: '50%', left: '0', transform: 'translate(-2.5px, -50%)' }} />
        </EllipseAnimationStyle>
    )
};

export default EllipseAnimation;