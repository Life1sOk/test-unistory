import BlockTitle from '../../components/block-title/block-title.component';
import TextBox from '../../components/text-box/text-box.component';

import SignUp from '../../blocks/sign-up/sign-up.block';

import { SignUpContainer, TextBoxWrapper } from './registration.style.js';

const Registration = () => {

    return (
        <SignUpContainer>
            <BlockTitle title='Beta test registration' />
            <TextBoxWrapper>
                <TextBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            </TextBoxWrapper>
            <SignUp />
        </SignUpContainer>
    )
};

export default Registration;