import { useRef } from 'react';

import Input from '../../shared/input/input.component';

import { ButtonWrapper, SignUpForm } from './sign-up.style';

const SignUp = ({ submitHandler, children }: any) => {
    const nameRef = useRef() as any;
    const emailRef = useRef() as any;

    const signUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        submitHandler({ e, nameRef, emailRef })
    };

    return (
        <SignUpForm onSubmit={signUpHandler}>
            <Input label='NAME' placeholder='We will display your name in participation list' required ref={nameRef} type='text' />
            <Input label='EMAIL' placeholder='We will display your email in participation list' required ref={emailRef} type='email' />
            <ButtonWrapper>
                {children}
            </ButtonWrapper>
        </SignUpForm>
    )
};

export default SignUp;