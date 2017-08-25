import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import ContainerElement from "../display/ContainerElement";
import themeShape from "../tool/themeShape";

// HACK: There isn't really a reliable way to get window innerWidth *minus* the width
// of the vertical scrollbar. So at the RHS the menu ends up appearing partially *underneath*
// the scrollbar. Not ideal, but an arbitrary offset of 20 is good enough for now.
// Would be good to have a proper solution for this.
const SCROLLBAR_WIDTH_OFFSET = 20;

class MenuContainer extends Component {
    static propTypes = {
        onTransitionEnd: PropTypes.func.isRequired,
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        theme: themeShape.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    };

    state = {
        style: { left: 0, top: 0 }
    };

    componentDidMount() {
        this.checkPositionAndTransitions();
        window.addEventListener("resize", this.checkPositionAndTransitions);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.theme !== nextProps.theme) {
            this.Container = null;
        }
        if (
            nextProps.width !== this.props.width ||
            nextProps.height !== this.props.height
        ) {
            this.checkPositionAndTransitions(nextProps.width, nextProps.height);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkPositionAndTransitions);
    }

    checkPositionAndTransitions = (
        width = this.props.width,
        height = this.props.height
    ) => {
        let style = this.state.style;
        // Move menu so it doesn't go out of bounds
        const translate = {
            x: this.props.position.x,
            y: this.props.position.y
        };
        if (height && width) {
            if (
                this.props.position.x + width >
                window.innerWidth - SCROLLBAR_WIDTH_OFFSET
            ) {
                translate.x = Math.floor(
                    Math.max(
                        0,
                        window.innerWidth - SCROLLBAR_WIDTH_OFFSET - width
                    )
                );
            }
            if (this.props.position.y + height > window.innerHeight) {
                translate.y = Math.floor(
                    Math.max(0, window.innerHeight - height)
                );
            }
            // Create vertical scrollbar if menu too tall
            if (height > window.innerHeight) {
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
        }
        // Update style in state if needed
        const transform = `translate(${translate.x}px, ${translate.y}px)`;
        if (transform !== style.transform) {
            style = { ...style, transform };
        }
        if (style !== this.state.style) {
            this.setState({ style });
        }
    };

    render() {
        const { theme, children, position, ...others } = this.props;
        const { style } = this.state;
        if (!this.Container) {
            this.Container = themed(ContainerElement, theme, "container");
        }
        const Container = this.Container;

        return (
            <Container {...others} style={style}>
                {children}
            </Container>
        );
    }
}
export default MenuContainer;
