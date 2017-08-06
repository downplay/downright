import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Index from "./Index";
import Simple from "./examples/Simple";
import Submenus from "./examples/Submenus";

import "./styles/main.css";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/simple" component={Simple} />
            <Route path="/submenus" component={Submenus} />
        </Switch>
    </HashRouter>
);

/*
    Examples TODO:
        - Promise submenu
        - Icons
        - Custom style
        - Custom animation
        - Custom elements
        - Custom properties/data
        - Nested menus
*/
