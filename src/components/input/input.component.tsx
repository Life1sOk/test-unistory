import { InputWrapper, InputStyle, InputLabel } from './input.style';

interface IInput {
    placeholder: string,
    label?: string,
};

const Input = ({ placeholder, label }: IInput) => {
    return (
        <InputWrapper>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <InputStyle placeholder={placeholder} id={label} />
        </InputWrapper>
    )
};

export default Input;