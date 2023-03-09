import { TextCallStyle, TextCallLine, MarkText } from './text-call.style';

interface ITextCall {
    type?: string,
    top?: number,
    left?: number,
};

const TextCall = ({ type, top, left }: ITextCall) => {
    return (
        <TextCallStyle type={type} top={top} left={left}>
            <TextCallLine>EXPLORE YOUR OWN PLANET</TextCallLine>
            <TextCallLine>IN <MarkText>OUR NEW</MarkText> METAVERSE</TextCallLine>
        </TextCallStyle>
    )
};

export default TextCall;