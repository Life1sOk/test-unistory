import { useAppSelector } from "../../app-redux/hooks";

import { HomePageStyle, FooterStyle } from "./home.style";

import Registration from "../../sections/registration/registration.section";
import Participants from "../../sections/participants/participants.section";
import Main from "../../sections/main/main.section";
import ExtentionWindow from "../../sections/extention-window/extention-window.section";

const HomePage = () => {
    const signedUp = useAppSelector((state) => state.participant.participantList);

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