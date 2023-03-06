import { forwardRef } from 'react';

import { InputWrapper, InputStyle, InputLabel } from './input.style';

interface IInput {
    placeholder: string,
    label?: string,
    required: boolean,
    type: string
};

const Input = forwardRef<HTMLInputElement, IInput>(({ placeholder, label, required, type }, ref) => {

    return (
        <InputWrapper>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <InputStyle
                ref={ref}
                type={type}
                placeholder={placeholder}
                id={label}
                name={label}
                required={required}
            />
        </InputWrapper>
    )
});

export default Input;