import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";
import SimpleSubmenu from "../components/SimpleSubmenu";

export default class Submenus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animalType: null,
            animalName: null,
        };
    }

    onDog = (event, item) => {
        this.setState({
            animalType: "dog",
            animalName: item.content,
        });
    }

    onCat = (event, item) => {
        this.setState({
            animalType: "cat",
            animalName: item.content,
        });
    }

    render = () => (
        <ContextMenuProvider>
            <FullWidthFullHeight>
                <SimpleSubmenu onCat={this.onCat} onDog={this.onDog} />
            </FullWidthFullHeight>
        </ContextMenuProvider>
    )

}
