import React from "react";

import { TextBoxStyle } from './text-box.style';

const TextBox: React.FC<{ text: string }> = ({ text }) => {
    return (
        <TextBoxStyle>{text}</TextBoxStyle>
    )
};

export default TextBox;