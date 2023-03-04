import EllipseAnimation from '../../components/ellipse-animation/ellipse-animation.component';
import TextBox from '../../components/text-box/text-box.component';

import { MainStyle, TextCallFirstLine, TextCallSecondLine, PlanetImage, MarkText, EllipseOneMain, EllipseTwo, EllipseThree, EllipseFour, EllipseFive, TextWrapper, StatusBox, StatsTitle, Stat, Number, Label } from './main.style';

const Main = () => {

    return (
        <MainStyle>
            <TextCallFirstLine>EXPLORE YOUR OWN PLANET</TextCallFirstLine>
            <TextCallSecondLine>IN <MarkText>OUR NEW</MarkText> METAVERSE</TextCallSecondLine>
            <PlanetImage>
                <TextCallFirstLine type='orange'>EXPLORE YOUR OWN PLANET</TextCallFirstLine>
                <TextCallSecondLine type='orange'>IN <MarkText>OUR NEW</MarkText> METAVERSE</TextCallSecondLine>
            </PlanetImage>
            <EllipseOneMain>
                <EllipseTwo />
                <EllipseThree />
                <EllipseFour />
                <EllipseFive />
                <EllipseAnimation />
            </EllipseOneMain>
            <TextWrapper>
                <TextBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            </TextWrapper>
            <StatusBox>
                <StatsTitle>ROADMAP STATS</StatsTitle>
                {   // Массив статистики 
                    [1, 2, 3].map((num, _, array) => (
                        <Stat key={num} last={num === array.length}>
                            <Number>12,345</Number>
                            <Label>Lorem ipsum dolor</Label>
                        </Stat>))
                }
            </StatusBox>
        </MainStyle>
    )
};

export default Main;