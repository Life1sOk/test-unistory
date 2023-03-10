import { useRef, useState } from 'react';

import { useEthers } from '@usedapp/core';

import { useAppDispatch, useAppSelector } from '../../app-redux/hooks';
import { addUser } from '../../app-redux/slices/participant.slice';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import UserField from '../../components/user-field/user-field.component';

import { ButtonWrapper, SignUpForm, UserStyle } from './sign-up.style';

interface IUser {
    username: string,
    email: string,
    address: string | undefined,
};

const SignUp = () => {
    const dispatch = useAppDispatch();
    const [responseImitation, setResponseImitation] = useState<IUser>();
    const signed = useAppSelector((state) => state.participant.userIn);

    const { account } = useEthers();

    const nameRef = useRef() as any;
    const emailRef = useRef() as any;

    const signUpHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();

        if (nameRef && emailRef) {
            // Refs values from the input 
            let usersData = {
                username: nameRef.current.value,
                email: emailRef.current.value,
                address: account,
            };

            // If we dont have wallet - alert;
            if (!account) return alert('pls connect your metamask wallet - Top-Right corner button');

            // Add user to the list;
            dispatch(addUser(usersData));

            // Imitate API response with user's data from the server;
            setResponseImitation(usersData);

            // Clear input values
            nameRef.current.value = '';
            emailRef.current.value = '';
        };
    };

    return (
        <>
            {
                !signed ?
                    <SignUpForm onSubmit={signUpHandler}>
                        <Input label='NAME' placeholder='We will display your name in participation list' required ref={nameRef} type='text' />
                        <Input label='EMAIL' placeholder='We will display your email in participation list' required ref={emailRef} type='email' />
                        <ButtonWrapper>
                            <Button label='Get early access' type='submit' />
                        </ButtonWrapper>
                    </SignUpForm>
                    :
                    <UserStyle>
                        <UserField label='NAME' text={responseImitation?.username} />
                        <UserField label='EMAIL' text={responseImitation?.email} />
                        <ButtonWrapper>
                            <Button label='List me to the table' inactive />
                        </ButtonWrapper>
                    </UserStyle>
            }
        </>
    )
};

export default SignUp;