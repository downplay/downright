import React, { Component } from "react";

import SubmenuElement from "../display/SubmenuElement";
import SubmenuContainer from "../display/SubmenuContainer";
import ContextMenu from "./ContextMenu";

import sanitizeProps from "../tool/sanitizeProps";

class ContextSubmenu extends Component {
    // eslint-disable-next-line class-methods-use-this
    getContainerPosition() {
        return { x: 0, y: 0 };
    }

    render() {
        const { menu, onMenuClick, visible, children, ...others } = this.props;
        const sanitized = sanitizeProps(others, "submenu");
        const sanitizedContainer = sanitizeProps(others, "container");
        return (
            <SubmenuElement {...sanitized}>
                {children}
                {visible
                    ? <SubmenuContainer
                          {...sanitizedContainer}
                          position={this.getContainerPosition()}
                      >
                          <ContextMenu
                              menu={menu}
                              onMenuClick={onMenuClick}
                              {...others}
                          />
                      </SubmenuContainer>
                    : null}
            </SubmenuElement>
        );
    }
}

export default ContextSubmenu;
