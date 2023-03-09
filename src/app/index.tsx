import { DAppProvider } from "@usedapp/core";
import { usedappConfig } from "../utils/usedapp.config";

import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../app-redux/store";

import Routing from "../pages";

import './index.css';

const App = () => {
    return (
        <DAppProvider config={usedappConfig}>
            <HashRouter>
                <Provider store={store}>
                    <Routing />
                </Provider>
            </HashRouter>
        </DAppProvider>
    )
};

export default App;
