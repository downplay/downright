import React, { Component } from "react";
import { contextMenu } from "downright";
import styled from "styled-components";
import lodashEntries from "lodash/entries";

import BigBox from "../layout/BigBox";
import { Question, Answer } from "./styles";
import pantone from "../resources/pantone";

const PantoneItem = styled.span`
    display: block;
    width: 2rem;
    height: 2rem;
`;

const pantoneColoursMenu = props =>
    lodashEntries(pantone).map(([key, hex]) => ({
        type: "button",
        // React nodes can be used for the menu content if you
        // want to put something other than text in there
        content: (
            <PantoneItem>
                {key}
            </PantoneItem>
        ),
        style: {
            backgroundColor: hex
        },
        onClick: () => props.onChooseColour(hex)
    }));

@contextMenu(props => [
    "Colours",
    // Building this menu takes a while so only do it when we need it
    // For this you need to specify the full object structure
    /* TODO: This is a really good use case for
            - Scroll bars
            - Virtualise list to speed up 1st render
            - Custom styling - grid
            - Theming, making the whole list item change colour
            */
    {
        type: "submenu",
        content: "Pantone",
        menu: () => pantoneColoursMenu(props)
    },
    ["Octarine", () => props.onChooseColour("Octarine")],
    ["Paisley", () => props.onChooseColour("Paisley")],
    ["Back to home", "/"],
    [
        "Close",
        () => {
            /* Noop - just close the menu */
        }
    ]
])
export default class SimpleSubmenu extends Component {
    static defaultProps = {
        chosenColour: "#9f9"
    };

    render = () =>
        <BigBox color={this.props.chosenColour}>
            <Question>Favourite colour?</Question>
            {this.props.item &&
                <Answer>{`You chose ${this.props.item}`}</Answer>}
        </BigBox>;
}
