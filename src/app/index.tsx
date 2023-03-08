import { DAppProvider } from "@usedapp/core";
import { usedappConfig } from "../utils/usedapp.config";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../app-redux/store";

import Routing from "../pages";

import './index.css';

const App = () => {
    return (
        <DAppProvider config={usedappConfig}>
            <BrowserRouter>
                <Provider store={store}>
                    <Routing />
                </Provider>
            </BrowserRouter>
        </DAppProvider>
    )
};

export default App;
