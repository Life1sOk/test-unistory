import BlockTitle from '../../shared/block-title/block-title.component';
import TextBox from '../../shared/text-box/text-box.component';

import ByForm from '../../features/byForm/by-form.f';

import { SignUpContainer, TextBoxWrapper } from './registration.style.js';

const Registration = () => {

    return (
        <SignUpContainer>
            <BlockTitle title='Beta test registration' />
            <TextBoxWrapper>
                <TextBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            </TextBoxWrapper>
            <ByForm />
        </SignUpContainer>
    )
};

export default Registration;