import BlockTitle from '../../components/block-title/block-title.component';
import TextBox from '../../components/text-box/text-box.component';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

import { SignUpStyle, TextBoxWrapper, ButtonWrapper } from './sign-up.style';

const SignUp = () => {
    return (
        <SignUpStyle>
            <BlockTitle title='Beta test registration' />
            <TextBoxWrapper>
                <TextBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            </TextBoxWrapper>
            <Input label='NAME' placeholder='We will display your name in participation list' />
            <Input label='EMAIL' placeholder='We will display your email in participation list' />
            <ButtonWrapper>
                <Button label='Get early access' onClickHandler={(e) => console.log(e)} />
            </ButtonWrapper>
        </SignUpStyle>
    )
};

export default SignUp;