import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import MenuWrapper from "../display/MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

import themeShape from "../tool/themeShape";

class ContextMenu extends Component {
    static propTypes = {
        // TODO: Use shapes for propTypes (also on parent components)
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        theme: themeShape.isRequired,
        depth: PropTypes.number,
        entered: PropTypes.bool,
        exiting: PropTypes.bool,
        onMenuClick: PropTypes.func.isRequired,
        onSubmenuOpen: PropTypes.func.isRequired
    };

    static defaultProps = {
        depth: 0,
        entered: false,
        exiting: false
    };

    render() {
        const {
            items,
            onMenuClick,
            theme,
            className,
            entered,
            exiting,
            onSubmenuOpen,
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
                {this.props.items.map((menuItem, index) =>
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
                        onSubmenuOpen={event => onSubmenuOpen(event, menuItem)}
                        {...others}
                        {...menuItem}
                    />
                )}
            </Menu>
        );
    }
}

export default ContextMenu;
