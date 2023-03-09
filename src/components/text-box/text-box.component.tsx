import { FC, memo } from "react";


import { TextBoxStyle } from './text-box.style';

const TextBox: FC<{ text: string }> = memo(({ text }) => {

    return (
        <TextBoxStyle>{text}</TextBoxStyle>
    )
});

export default TextBox;