import React, { Component } from "react";
import { themed } from "downstyle";

import ContextMenu from "./container/ContextMenu";
import ContainerElement from "./display/ContainerElement";

// The Manager sits in the DOM layer where we want to render
// menus, and manages their rendering and positioning
export default class MenuManager extends Component {

    storeOuterNode = ref => {
        this.outerNode = ref;
    };

    render() {
        const {
            gatherMenus,
            reverseOrder,
            menuSeparator,
            children,
            theme,
            menus,
            ...others
        } = this.props;

        if (!this.Container) {
            this.Container = themed(
                ContainerElement,
                theme,
                "container"
            );
        }
        const Container = this.Container;

        return (
            <div>
                {this.state.menus.map(menu => {
                    const style = {
                        left: this.menu.position.x,
                        top: this.menu.position.y
                    };

                    return (
                        <Container
                            ref={this.storeOuterNode}
                            onClick={this.onOuterClick}
                            onTransitionEnd={this.onTransitionEnd}
                            style={style}
                        >
                            <ContextMenu
                                key={menu.key}
                                onMenuClick={this.closeMenu}
                                onSubmenuOpen={this.onSubmenuOpen}
                                menu={menu}
                                entered={this.state.entered}
                                exiting={this.state.exiting}
                                theme={theme}
                                {...others}
                            />
                        </Container>
                    )
                })}
            </div>
        )
    }
};
