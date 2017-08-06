/*
    Styling Example #1 - BEM and global style overrides

    If you want the same context menu look across your whole site this is a
    straightforward option.

    Import the BEM build of Downright and its theme.css - this uses
    friendly global BEM class names instead of randomly-generated ones
    like the vanilla build, then you can just override them in your
    own stylesheet.
    */

import { ContextMenuProvider } from "downright/dist/bem/main.js";
import "downright/dist/bem/theme.css";

import React, { Component } from "react";
import styled from "styled-components";

import SimpleComponentWithMenu from "../components/SimpleComponentWithMenu";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";

// Important, this must be imported AFTER the base theme
import "./Styling.css";

const Subtitle = styled.h1`
    text-align: center;
    font-size: 3rem;
`;

export default class Styling extends Component {

    constructor(props) {
        super(props);
        this.state = { itemChosen: null };
    }

    onClickItem = (item) => {
        this.setState({ itemChosen: item });
    }

    render = () => (
        <div>
            <FullWidthFullHeight>
                <ContextMenuProvider>
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                    >
                        Right-click for a menu with overriden styles
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
                <ContextMenuProvider className="green">
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        green
                    >
                        Right-click for menu with an additional class added
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
            </FullWidthFullHeight>
            <Subtitle>Two menus operating independently with different providers</Subtitle>
        </div>
    )

}
