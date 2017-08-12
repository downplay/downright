import React, { Component } from "react";
import { contextMenu } from "downright";
import BigBox from "../layout/BigBox";

@contextMenu(props => [
    "Simple menu",
    ["Item #1", () => props.onClickItem(1)],
    ["Item #2", () => props.onClickItem(2)],
    ["Back to home", "/"],
    [
        "Close",
        () => {
            /* Noop - just close the menu */
        }
    ]
])
export default class SimpleComponentWithMenu extends Component {
    render = () =>
        <BigBox green={this.props.green} blue={this.props.blue}>
            <div>
                <div>
                    blue
                    {this.props.item
                        ? `You chose item ${this.props.item}!`
                        : this.props.children ||
                          "Right-click anywhere here for a menu!"}
                </div>
            </div>
        </BigBox>;
}
