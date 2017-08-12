/*
    Styling Example #1 - BEM and global style overrides

    If you want the same context menu look across your whole site this is a
    straightforward option.

    Import the BEM build of Downright and its theme.css - this uses
    friendly global BEM class names instead of randomly-generated ones
    like the vanilla build, then you can just override them in your
    own stylesheet.
    */

import { ContextMenuProvider } from "downright";
import bemTheme from "downright/themes/bem";
import "downright/themes/bem.css";

import React, { Component } from "react";
import styled from "styled-components";

import SimpleComponentWithMenu from "../components/SimpleComponentWithMenu";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";

// Global styles imported after the BEM theme to override it
import "./Styling.css";

import myTheme from "../styles/customMenuTheme";

const Subtitle = styled.h1`
    text-align: center;
    font-size: 3rem;
`;

export default class Styling extends Component {
    constructor(props) {
        super(props);
        this.state = { itemChosen: null };
    }

    onClickItem = item => {
        this.setState({ itemChosen: item });
    };

    render = () =>
        <div>
            <FullWidthFullHeight>
                <ContextMenuProvider theme={bemTheme}>
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        theme={bemTheme}
                    >
                        Right-click for a menu with overriden styles
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
                <ContextMenuProvider theme={bemTheme} className="green">
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        green
                    >
                        Right-click for menu with an additional class added
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
                <ContextMenuProvider theme={myTheme}>
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        blue
                    >
                        Advanced styling using completely custom theme
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
            </FullWidthFullHeight>
            <Subtitle>
                Three menus operating independently with different providers
            </Subtitle>
        </div>;
}
