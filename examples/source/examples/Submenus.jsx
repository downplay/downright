import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";
import SimpleSubmenu from "../components/SimpleSubmenu";
import OnDemandSubmenu from "../components/OnDemandSubmenu";

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

    onChooseColour = (hex) => {
        this.setState({
            chosenColour: hex,
        });
    }

    render = () => (
        <ContextMenuProvider>
            <FullWidthFullHeight>
                <OnDemandSubmenu
                    onChooseColour={this.onChooseColour}
                    chosenColour={this.state.chosenColour}
                />
                <SimpleSubmenu onCat={this.onCat} onDog={this.onDog} item={this.state.animalName} />
            </FullWidthFullHeight>
        </ContextMenuProvider>
    )

}
