import { FC } from "react";


import { TextBoxStyle } from './text-box.style';

const TextBox: FC<{ text: string }> = ({ text }) => {
    return (
        <TextBoxStyle>{text}</TextBoxStyle>
    )
};

export default TextBox;