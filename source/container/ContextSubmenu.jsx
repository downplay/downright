import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import SubmenuElement from "../display/SubmenuElement";
import ContainerElement from "../display/ContainerElement";
import ContextMenu from "./ContextMenu";

import sanitizeProps from "../tool/sanitizeProps";
import themeShape from "../tool/themeShape";

// TODO: This is far too similar to ContextMenu; we don't need both

class ContextSubmenu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.object).isRequired,
        onMenuClick: PropTypes.func.isRequired,
        theme: themeShape.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.theme !== this.props.theme) {
            this.Submenu = null;
            this.Container = null;
        }
    }

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
        if (!this.Submenu) {
            this.Submenu = themed(SubmenuElement, theme, "submenu");
            this.Container = themed(ContainerElement, theme, "container");
        }
        const { Submenu, Container } = this;
        const style = { top: 0, left: 0 };
        return (
            <Submenu {...sanitized}>
                {children}
                {visible
                    ? <Container {...sanitized} style={style}>
                          <ContextMenu
                              menu={menu}
                              onMenuClick={onMenuClick}
                              theme={theme}
                              {...others}
                          />
                      </Container>
                    : null}
            </Submenu>
        );
    }
}

export default ContextSubmenu;
