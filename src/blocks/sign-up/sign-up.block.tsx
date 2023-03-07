import { useRef } from 'react';

import { useAppDispatch } from '../../app-redux/hooks';
import { addCurrentNameAndEmail } from '../../app-redux/slices/user.slice';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

import { ButtonWrapper, SignUpForm } from './sign-up.style';

const SignUp = () => {
    const dispatch = useAppDispatch();
    // Take ref of the inputs
    const nameRef = useRef() as any;
    const emailRef = useRef() as any;

    const signUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Refs values from the input 
        let usersData = {
            username: nameRef.current.value,
            email: emailRef.current.value,
        }
        // Send form fields to the Redux store
        dispatch(addCurrentNameAndEmail(usersData));

        // Clear input values
        nameRef.current.value = '';
        emailRef.current.value = '';
    };

    return (
        <SignUpForm onSubmit={signUpHandler}>
            <Input label='NAME' placeholder='We will display your name in participation list' required ref={nameRef} type='text' />
            <Input label='EMAIL' placeholder='We will display your email in participation list' required ref={emailRef} type='email' />
            <ButtonWrapper>
                <Button label='Get early access' type='submit' />
            </ButtonWrapper>
        </SignUpForm>
    )
};

export default SignUp;