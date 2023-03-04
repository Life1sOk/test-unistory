import { ChangeEventHandler } from "react";

import { ButtonStyle } from './button.style';

interface IButtonPros {
    label: string;
    inactive?: boolean;
    onClickHandler: ChangeEventHandler<HTMLButtonElement>
}

export const Button = ({ label, inactive, onClickHandler }: IButtonPros) => {
    return (
        <ButtonStyle unactive={inactive} onClick={onClickHandler}>{label}</ButtonStyle>
    )
};

export default Button;