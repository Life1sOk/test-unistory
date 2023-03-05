import { HomePageStyle } from "./home.style";

import Main from "../../sections/main/main.section";
import Footer from "../../sections/footer/footer.section";
import ExtentionWindow from "../../sections/extention-window/extention-window.section";

const HomePage = () => {
    return (
        <HomePageStyle>
            <ExtentionWindow />
            <Main />
            <Footer />
        </HomePageStyle>
    )
};

export default HomePage;