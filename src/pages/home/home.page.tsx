import { HomePageStyle } from "./home.style";

import Header from "../../blocks/header/header.block";
import Main from "../../blocks/main/main.block";

const HomePage = () => {
    return (
        <HomePageStyle>
            <Header />
            <Main />
        </HomePageStyle>
    )
};

export default HomePage;