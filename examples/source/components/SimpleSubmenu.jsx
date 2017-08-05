import React, { Component } from "react";
import { contextMenu } from "downright";
import BigBox from "../layout/BigBox";

@contextMenu(props => (
    [
        "Submenu demo",
        ["Cats", [
            ["Garfield", props.onCat],
            ["Macavity", props.onCat],
            ["Fritz", props.onCat],
        ]],
        ["Dogs", [
            ["Snoopy", props.onDog],
            ["Scooby Doo", props.onDog],
            ["The Hound", props.onDog],
        ]],
        ["Back to home", "/"],
        ["Close", () => { /* Noop - just close the menu */ }],
    ]
))
export default class SimpleSubmenu extends Component {

    render = () => (
        <BigBox blue>
            <div>
                { this.props.item
                    ? `You chose item ${this.props.item}!`
                    : "Right-click anywhere here for a menu!" }
            </div>
        </BigBox>
    )

}
