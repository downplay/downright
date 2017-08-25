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

import darkTheme from "downright/themes/dark";
import "downright/themes/dark.css";

import React, { Component } from "react";
import styled from "styled-components";

import SimpleComponentWithMenu from "../components/SimpleComponentWithMenu";
import SimpleSubmenu from "../components/SimpleSubmenu";
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
                <ContextMenuProvider theme={darkTheme}>
                    <SimpleSubmenu
                        onCat={this.onClickItem}
                        onDog={this.onClickItem}
                        item={this.state.itemChosen}
                    >
                        This menu uses the alternate &quot;dark&quot; theme
                        shipped with Downright
                    </SimpleSubmenu>
                </ContextMenuProvider>
                <ContextMenuProvider theme={bemTheme}>
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                    >
                        This menu uses the BEM-named stylesheet, and we have
                        overriden some classes using global CSS styles
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
                <ContextMenuProvider theme={bemTheme} className="green">
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        green
                    >
                        This also uses the BEM styles, and we passing an
                        additional &quot;green&quot; class to further modify the
                        styles
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
                <ContextMenuProvider theme={myTheme}>
                    <SimpleComponentWithMenu
                        onClickItem={this.onClickItem}
                        item={this.state.itemChosen}
                        blue
                    >
                        This uses a custom theme with multiple modifications
                        including rendering additional HTML elemenets and
                        applying a custom transition
                    </SimpleComponentWithMenu>
                </ContextMenuProvider>
            </FullWidthFullHeight>
            <Subtitle>
                Three menus operating independently with different providers
            </Subtitle>
        </div>;
}
