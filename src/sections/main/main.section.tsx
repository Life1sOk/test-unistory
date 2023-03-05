import TextBox from '../../components/text-box/text-box.component';
import Planet from '../../blocks/planet/planet.block';

import { MainStyle, TextCallFirstLine, TextCallSecondLine, MarkText, TextWrapper, StatusBox, StatsTitle, Stat, Number, Label } from './main.style';

const Main = () => {
    console.log('main')
    return (
        <MainStyle>
            <TextCallFirstLine>EXPLORE YOUR OWN PLANET</TextCallFirstLine>
            <TextCallSecondLine>IN <MarkText>OUR NEW</MarkText> METAVERSE</TextCallSecondLine>
            <Planet pointBox top={0} left={621}>
                <TextCallFirstLine type='orange'>EXPLORE YOUR OWN PLANET</TextCallFirstLine>
                <TextCallSecondLine type='orange'>IN <MarkText>OUR NEW</MarkText> METAVERSE</TextCallSecondLine>
            </Planet>
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