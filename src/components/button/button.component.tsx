import { ChangeEventHandler } from "react";

import { ButtonStyle } from './button.style';

interface IButtonPros {
    label: string;
    inactive?: boolean;
    onClickHandler?: ChangeEventHandler<HTMLButtonElement>,
    type?: string,
}

export const Button = ({ label, inactive, onClickHandler, type }: IButtonPros) => {

    return (
        <ButtonStyle
            unactive={inactive}
            onClick={onClickHandler}
            type={type}
        >
            {label}
        </ButtonStyle>
    )
};

export default Button;