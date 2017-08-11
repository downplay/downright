import React, { Component } from "react";
import { contextMenu } from "downright";
import BigBox from "../layout/BigBox";
import Heading from "../styles/Heading";

@contextMenu(() => [
    <Heading>Outer menu</Heading>,
    "Items will be combined",
    "with child menus",
    ["Back to home", "/"],
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
