import { memo } from 'react';

import TextBox from '../../components/text-box/text-box.component';
import Planet from '../../blocks/planet/planet.block';

import TextCall from '../../blocks/text-call/text-call.e';

import { MainStyle, TextWrapper, StatusBox, StatsTitle, Stat, Number, Label } from './main.style';

const Main = memo(() => {

    return (
        <MainStyle>
            <TextCall />
            <Planet pointBox top={0} left={621} ellipse={true}>
                <TextCall type='orange' top={51} left={-663} />
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
});

export default Main;