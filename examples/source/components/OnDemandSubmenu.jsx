import React, { Component } from "react";
import { contextMenu } from "downright";
import lodashEntries from "lodash/entries";

import BigBox from "../layout/BigBox";
import { Question, Answer } from "./styles";
import pantone from "../resources/pantone";

const chunkSize = 20;
const artificalDelay = 5;

const delay = ms =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

// A somewhat contrived example, but here we build the menu in batches to simulate something like
// a slow asynchronous network request. This does have a quantifiable benefit; the colours list is
// so long that the synchronous example following blocks the main thread for some time.
const pantoneColoursMenuAsync = async props => {
    const menu = [];
    let i = 0;
    for (const [key, hex] of lodashEntries(pantone)) {
        menu.push({
            type: "button",
            content: key,
            style: {
                backgroundColor: hex
            },
            onClick: () => props.onChooseColour(hex)
        });
        i++;
        if (i % chunkSize === 0) {
            await delay(artificalDelay); // eslint-disable-line no-await-in-loop
        }
    }
    return menu;
};

// Synchronous version of the above
const pantoneColoursMenuSync = props =>
    lodashEntries(pantone).map(([key, hex]) => ({
        type: "button",
        content: key,
        style: {
            backgroundColor: hex
        },
        onClick: () => props.onChooseColour(hex)
    }));

@contextMenu(props => [
    "Colours",
    // Building this menu takes a while so only do it when we need it
    /* TODO: This is a really good use case for
            - Scroll bars
            - Virtualise list to speed up 1st render
            - Custom styling - grid
            */
    {
        type: "submenu",
        content: "Pantone",
        menu: () =>
            props.usePromises
                ? pantoneColoursMenuAsync(props)
                : pantoneColoursMenuSync(props)
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
            <Question>
                Favourite colour?{this.props.usePromises && " (Async version)"}
            </Question>
            {this.props.item &&
                <Answer>{`You chose ${this.props.item}`}</Answer>}
        </BigBox>;
}
