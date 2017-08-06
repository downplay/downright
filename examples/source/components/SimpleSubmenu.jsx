import React, { Component } from "react";
import { contextMenu } from "downright";

import BigBox from "../layout/BigBox";
import { Question, Answer } from "./styles";

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
            <Question>
                Favourite animal?
            </Question>
            { this.props.item &&
                <Answer>{`You chose ${this.props.item}`}</Answer>
            }
        </BigBox>
    )

}
