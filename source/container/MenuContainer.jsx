import React, { Component } from "react";
import ReactDOM from "react-dom";
import { themed } from "downstyle";
import invariant from "invariant";
import ContainerElement from "../display/ContainerElement";

// HACK: There isn't really a reliable way to get window innerWidth *minus* the width
// of the vertical scrollbar. So at the RHS the menu ends up appearing partially *underneath*
// the scrollbar. Not ideal, but an arbitrary offset of 20 is good enough for now.
// Would be good to have a proper solution for this.
const SCROLLBAR_WIDTH_OFFSET = 20;

class MenuContainer extends Component {
    state = {
        style: { left: 0, top: 0 }
    };

    componentDidMount() {
        this.checkPositionAndTransitions();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.theme !== nextProps.theme) {
            this.Container = null;
        }
    }

    componentDidUpdate() {
        // TODO: Caused stack overflow. Should really check things on update tho.
        // Should also check window.resize
        // this.checkPositionAndTransitions();
    }

    checkPositionAndTransitions() {
        const node = ReactDOM.findDOMNode(this);
        invariant(node, "No DOM node found in MenuContainer!");
        const dims = node.getBoundingClientRect();
        let style = this.state.style;

        // Move menu so it doesn't go out of bounds
        const translate = {
            x: this.props.position.x,
            y: this.props.position.y
        };
        if (
            this.props.position.x + dims.width >
            window.innerWidth - SCROLLBAR_WIDTH_OFFSET
        ) {
            translate.x = Math.floor(
                Math.max(
                    0,
                    window.innerWidth - SCROLLBAR_WIDTH_OFFSET - dims.width
                )
            );
        }
        if (this.props.position.y + dims.height > window.innerHeight) {
            translate.y = Math.floor(
                Math.max(0, window.innerHeight - dims.height)
            );
        }
        // Create vertical scrollbar if menu too tall
        if (
            dims.height > window.innerHeight &&
            style.height > window.innerHeight
        ) {
            style = {
                ...style,
                height: window.innerHeight
            };
        } else if ("height" in style) {
            style = {
                ...style,
                height: undefined
            };
        }
        // Update style in state if needed
        const transform = `translate(${translate.x}px, ${translate.y}px)`;
        if (transform !== style.transform) {
            style = { ...style, transform };
        }
        if (style !== this.state.style) {
            this.setState({ style });
        }
    }

    render() {
        const { theme, children, position, ...others } = this.props;
        if (!this.Container) {
            this.Container = themed(ContainerElement, theme, "container");
        }
        const Container = this.Container;

        return (
            <Container {...others} style={this.state.style}>
                {children}
            </Container>
        );
    }
}
export default MenuContainer;
