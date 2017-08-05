import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import SimpleMenuComponent from "../components/SimpleMenuComponent";
import StretchWidthHeight from "../styles/stretchWidthHeight";

export default class Simple extends Component {

    onClickItem(item) {
        this.setState({ itemChosen: item });
    }

    render = () => (
        <ContextMenuProvider>
            <StretchWidthHeight>
                <SimpleMenuComponent onClickItem={this.onClickItem} />
            </StretchWidthHeight>
        </ContextMenuProvider>
    )

}
