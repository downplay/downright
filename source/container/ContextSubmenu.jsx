import React, { Component } from "react";

import SubmenuElement from "../display/SubmenuElement";
import SubmenuContainer from "../display/SubmenuContainer";
import ContextMenu from "./ContextMenu";

class ContextSubmenu extends Component {

    // eslint-disable-next-line class-methods-use-this
    getContainerPosition() {
        return { x: 0, y: 0 };
    }

    render() {
        const { menu, onMenuClick, visible, children, ...others } = this.props;
        return (
            <SubmenuElement {...others}>
                {children}
                {visible ? (
                    <SubmenuContainer position={this.getContainerPosition()}>
                        <ContextMenu menu={menu} onMenuClick={onMenuClick} />
                    </SubmenuContainer>
                ) : null}
            </SubmenuElement>
        );
    }

}

export default ContextSubmenu;
