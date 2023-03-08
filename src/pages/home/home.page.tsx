import { useAppSelector } from "../../app-redux/hooks";

import { HomePageStyle, FooterStyle } from "./home.style";

import Registration from "../../widgets/registration/registration.section";
import Participants from "../../widgets/participants/participants.block";
import Main from "../../widgets/main/main.section";
import ExtentionWindow from "../../entities/extention-window/extention-window.section";

const HomePage = () => {
    const signedUp = useAppSelector((state) => state.participant.regRespImitation);

    return (
        <HomePageStyle>
            <ExtentionWindow />
            <Main />
            <FooterStyle>
                <Registration />
                {signedUp && <Participants />}
            </FooterStyle>
        </HomePageStyle>
    )
};

export default HomePage;