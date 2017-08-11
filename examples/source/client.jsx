import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App";

const render = () => {
    const rootNode = document.getElementById("root");
    ReactDOM.render(
        // eslint-disable-next-line react/jsx-filename-extension
        <AppContainer>
            <App />
        </AppContainer>,
        rootNode
    );
};

render();

if (module.hot) {
    module.hot.accept(["./App"], () => {
        render();
    });
}
