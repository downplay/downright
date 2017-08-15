import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import ContextMenu from "./container/ContextMenu";
import ContainerElement from "./display/ContainerElement";

// The Manager sits in the DOM layer where we want to render
// menus, and manages their rendering and positioning
export default class MenuManager extends Component {
    static propTypes = {
        menus: PropTypes.arrayOf(PropTypes.object),
        onMenuClick: PropTypes.func.isRequired,
        // TODO: Not very happy how this property has to be hoisted all the way
        // up from the item. Might be better to use context to facilitate this.
        onSubmenuOpen: PropTypes.func.isRequired
    };

    static defaultProps = {
        menus: []
    };

    storeOuterNode = ref => {
        this.outerNode = ref;
    };

    render() {
        const { children, theme, menus, ...others } = this.props;

        if (!this.Container) {
            this.Container = themed(ContainerElement, theme, "container");
        }
        const Container = this.Container;

        return (
            <div>
                {this.props.menus.map(menu => {
                    const style = {
                        left: menu.position.x,
                        top: menu.position.y
                    };

                    return (
                        <Container
                            key={menu.key}
                            ref={this.storeOuterNode}
                            onClick={this.onOuterClick}
                            onTransitionEnd={this.onTransitionEnd}
                            style={style}
                        >
                            <ContextMenu
                                key={menu.key}
                                onMenuClick={this.props.onMenuClick}
                                onSubmenuOpen={this.props.onSubmenuOpen}
                                items={menu.items}
                                theme={theme}
                                {...others}
                            />
                        </Container>
                    );
                })}
            </div>
        );
    }
}
