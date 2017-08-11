import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "downright/dist/theme.css";

import Index from "./Index";
import Simple from "./examples/Simple";
import Submenus from "./examples/Submenus";
// import Styling from "./examples/Styling";
import Nested from "./examples/Nested";

import "./styles/main.css";

export default () =>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/simple" component={Simple} />
            <Route path="/submenus" component={Submenus} />
            <Route path="/nested" component={Nested} />
        </Switch>
    </HashRouter>;

/*
    //<Route path="/styling" component={Styling} />
    Examples TODO:
        - Reinstate styling example
        - Promise submenu
        - Icons
        - Custom animation
        - Custom elements
        - Custom properties/data
*/
