import { InputStyle } from './input.style';

interface IInput {
    placeholder: string,
};

const Input = ({ placeholder }: IInput) => {
    return (
        <InputStyle placeholder={placeholder} />
    )
};

export default Input;