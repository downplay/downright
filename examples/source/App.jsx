import React from "react";
import { AppContainer } from "react-hot-loader";
import { HashRouter, Switch, Route } from "react-router-dom";

import Index from "./Index";
import Simple from "./examples/Simple";

import "./styles/main.css";

export default () => (

    <AppContainer>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/simple" component={Simple} />
            </Switch>
        </HashRouter>
    </AppContainer>

);
