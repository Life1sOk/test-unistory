import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { addCurrentNameAndEmail } from '../../app-redux/slices/participant.slice';

import Button from '../../shared/button/button.component';
import SignUp from '../../entities/sign-up/sign-up.block';
import User from '../../entities/user/user.block';

import { } from './by-form.style';

interface ISingUp {
    event: React.MouseEvent<HTMLButtonElement>,
    nameRef: any,
    emailRef: any,
};

const ByForm = () => {
    const dispatch = useAppDispatch();
    const signedUp = useAppSelector((state) => state.participant.regRespImitation);

    const signUpHandler = ({ event, nameRef, emailRef }: ISingUp) => {
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
                    <SignUp submitHandler={signUpHandler}>
                        <Button label='Get early access' type='submit' />
                    </SignUp>
                    :
                    <User />
            }
        </>
    )
};

export default ByForm;