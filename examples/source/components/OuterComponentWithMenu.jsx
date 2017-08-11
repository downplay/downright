import React, { Component } from "react";
import { contextMenu } from "downright";
import BigBox from "../layout/BigBox";

@contextMenu(() => [
    <h2>Outer menu</h2>,
    "Items will be apprended",
    "to child menus",
    [("Back to home", "/")],
    [
        "Close",
        () => {
            /* Noop - just close the menu */
        }
    ]
])
export default class OuterComponentWithMenu extends Component {
    render = () =>
        <BigBox>
            {this.props.children}
        </BigBox>;
}
