import React, { Component } from "react";
import { contextMenu } from "downright";
import BigBox from "../layout/BigBox";

@contextMenu(props => (
    [
        "Simple menu",
        ["Item #1", () => props.onClickItem(1)],
        ["Item #2", () => props.onClickItem(2)],
        ["Back to home", "/"],
        ["Close", () => { /* Noop - just close the menu */ }],
    ]
))
export default class SimpleComponentWithMenu extends Component {

    render = () => (
        <BigBox green={this.props.green}>
            <div>
                { this.props.item
                    ? `You chose item ${this.props.item}!`
                    : "Right-click anywhere here for a menu!" }
            </div>
        </BigBox>
    )

}
