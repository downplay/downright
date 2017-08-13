import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import MenuWrapper from "../display/MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

import themeShape from "../tool/themeShape";

class ContextMenu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.object).isRequired,
        onMenuClick: PropTypes.func.isRequired,
        theme: themeShape.isRequired
    };

    render() {
        const {
            menu,
            onMenuClick,
            entered,
            exiting,
            theme,
            className,
            ...others
        } = this.props;

        if (!this.Menu) {
            this.Menu = themed(MenuWrapper, theme, "menu", {
                entered: "entered",
                exiting: "exiting"
            });
        }
        const Menu = this.Menu;

        return (
            <Menu className={className} entered={entered} exiting={exiting}>
                {this.props.menu.map((menuItem, index) =>
                    // TODO: Not really anything better to use for a key,
                    // but could allow key as an optional prop, not a lot of
                    // point in this case though....
                    <ContextMenuItem
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onMenuClick={onMenuClick}
                        item={menuItem}
                        theme={theme}
                        className={className}
                        {...others}
                        {...menuItem}
                    />
                )}
            </Menu>
        );
    }
}

export default ContextMenu;
