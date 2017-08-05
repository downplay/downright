import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import SimpleComponentWithMenu from "../components/SimpleComponentWithMenu";
import StretchWidthHeight from "../styles/stretchWidthHeight";

export default class Simple extends Component {

    constructor(props) {
        super(props);
        this.state = { itemChosen: null };
    }

    onClickItem = (item) => {
        this.setState({ itemChosen: item });
    }

    render = () => (
        <ContextMenuProvider>
            <StretchWidthHeight>
                <SimpleComponentWithMenu
                    onClickItem={this.onClickItem}
                    item={this.state.itemChosen}
                />
            </StretchWidthHeight>
        </ContextMenuProvider>
    )

}
