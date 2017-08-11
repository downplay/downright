import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import SimpleComponentWithMenu from "../components/SimpleComponentWithMenu";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";

export default class Simple extends Component {
    constructor(props) {
        super(props);
        this.state = { itemChosen: null };
    }

    onClickItem = item => {
        this.setState({ itemChosen: item });
    };

    render = () =>
        <ContextMenuProvider>
            <FullWidthFullHeight>
                <SimpleComponentWithMenu
                    onClickItem={this.onClickItem}
                    item={this.state.itemChosen}
                />
            </FullWidthFullHeight>
        </ContextMenuProvider>;
}
