import { useRef } from 'react';

import { useEthers } from '@usedapp/core';

import { useAppDispatch, useAppSelector } from '../../app-redux/hooks';
import { openList } from '../../app-redux/slices/participant.slice';
import { addUser } from '../../app-redux/slices/user.slice';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import UserField from '../../components/user-field/user-field.component';

import { ButtonWrapper, SignUpForm, UserStyle } from './sign-up.style';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const { userIn, userData } = useAppSelector((state) => state.user);
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

            // Add user and open list;
            dispatch(addUser(usersData));
            dispatch(openList());

            // Clear input values
            nameRef.current.value = '';
            emailRef.current.value = '';
        };
    };

    return (
        <>
            {
                !userIn ?
                    <SignUpForm onSubmit={signUpHandler}>
                        <Input label='NAME' placeholder='We will display your name in participation list' required ref={nameRef} type='text' />
                        <Input label='EMAIL' placeholder='We will display your email in participation list' required ref={emailRef} type='email' />
                        <ButtonWrapper>
                            <Button label='Get early access' type='submit' />
                        </ButtonWrapper>
                    </SignUpForm>
                    :
                    <UserStyle>
                        <UserField label='NAME' text={userData?.username} />
                        <UserField label='EMAIL' text={userData?.email} />
                        <ButtonWrapper>
                            <Button label='List me to the table' inactive />
                        </ButtonWrapper>
                    </UserStyle>
            }
        </>
    )
};

export default SignUp;