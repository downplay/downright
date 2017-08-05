import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const render = () => {
    const rootNode = document.getElementById("root");
    // eslint-disable-next-line react/jsx-filename-extension
    ReactDOM.render(<App />, rootNode);
};

render();

if (module.hot) {
    module.hot.accept(["./client", "./App"], () => {
        render();
    });
}
