import { useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app-redux/hooks';
import { addCurrentNameAndEmail } from '../../app-redux/slices/participant.slice';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import UserField from '../../components/user-field/user-field.component';

import { ButtonWrapper, SignUpForm, UserStyle } from './sign-up.style';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const signedUp = useAppSelector((state) => state.participant.regRespImitation);
    const { email, username } = useAppSelector((state) => state.participant.current);

    const nameRef = useRef() as any;
    const emailRef = useRef() as any;


    const signUpHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();

        if (nameRef && emailRef) {
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
        }

    };

    return (
        <>
            {
                !signedUp ?
                    <SignUpForm onSubmit={signUpHandler}>
                        <Input label='NAME' placeholder='We will display your name in participation list' required ref={nameRef} type='text' />
                        <Input label='EMAIL' placeholder='We will display your email in participation list' required ref={emailRef} type='email' />
                        <ButtonWrapper>
                            <Button label='Get early access' type='submit' />
                        </ButtonWrapper>
                    </SignUpForm>
                    :
                    <UserStyle>
                        <UserField label='NAME' text={username} />
                        <UserField label='EMAIL' text={email} />
                        <ButtonWrapper>
                            <Button label='List me to the table' inactive />
                        </ButtonWrapper>
                    </UserStyle>
            }
        </>
    )
};

export default SignUp;