import React, { Component } from "react";

import SubmenuElement from "../display/SubmenuElement";
import SubmenuContainer from "../display/SubmenuContainer";
import ContextMenu from "./ContextMenu";

import sanitizeProps from "../tool/sanitizeProps";
import themeHelper from "../tool/themeHelper";

class ContextSubmenu extends Component {
    // TODO: Proptypes, themeshape
    render() {
        const {
            menu,
            onMenuClick,
            visible,
            children,
            theme,
            ...others
        } = this.props;
        const sanitized = sanitizeProps(others);
        const Submenu = themeHelper(SubmenuElement, theme, "submenu");
        const Container = themeHelper(SubmenuContainer, theme, "container");
        const style = { top: 0, left: 0 };
        return (
            <Submenu {...sanitized}>
                {children}
                {visible
                    ? <Container {...sanitized} style={style}>
                          <ContextMenu
                              menu={menu}
                              onMenuClick={onMenuClick}
                              {...others}
                          />
                      </Container>
                    : null}
            </Submenu>
        );
    }
}

export default ContextSubmenu;
