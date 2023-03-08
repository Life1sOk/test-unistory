import { useAppSelector } from '../../app-redux/hooks';

import SignUp from '../../blocks/sign-up/sign-up.block';
import User from '../../blocks/user/user.block';
import Participants from '../../blocks/participants/participants.block';

import BlockTitle from '../../components/block-title/block-title.component';
import TextBox from '../../components/text-box/text-box.component';

import { FooterStyle, SignUpContainer, TextBoxWrapper } from './footer.style';

const Footer = () => {
    const signedUp = useAppSelector((state) => state.participant.regRespImitation);

    return (
        <FooterStyle>
            <SignUpContainer>
                <BlockTitle title='Beta test registration' />
                <TextBoxWrapper>
                    <TextBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
                </TextBoxWrapper>
                {
                    !signedUp ?
                        <SignUp /> :
                        <User />
                }
            </SignUpContainer>
            {signedUp &&
                <Participants />
            }
        </FooterStyle>
    )
};

export default Footer;