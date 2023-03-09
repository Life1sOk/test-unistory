import { FC, memo } from "react";


import { TextBoxStyle } from './text-box.style';

const TextBox: FC<{ text: string }> = memo(({ text }) => {
    console.log('rerun')
    return (
        <TextBoxStyle>{text}</TextBoxStyle>
    )
});

export default TextBox;