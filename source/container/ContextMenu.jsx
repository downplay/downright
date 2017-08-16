import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import MenuWrapper from "../display/MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

import themeShape from "../tool/themeShape";

class ContextMenu extends Component {
    static propTypes = {
        // TODO: Use shapes for propTypes (also on parent components)
        // Also remove the duplication of having menu and all its children separately
        menu: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.object),
            depth: PropTypes.number
        }).isRequired,
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

    state = {
        selectedIndex: null,
        submenuIndex: 0
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.theme !== nextProps.theme) {
            this.Menu = null;
        }
    }

    onSubmenuOpen = (event, menuItem) => {
        this.props.onSubmenuOpen(
            event,
            menuItem,
            this.state.submenuIndex,
            this.props.menu
        );
        this.setState(prevState => ({
            submenuIndex: prevState.submenuIndex + 1
        }));
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
            position,
            menu,
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
                        selected={this.state.selectedIndex === index}
                        onMenuClick={onMenuClick}
                        item={menuItem}
                        theme={theme}
                        className={className}
                        onSubmenuOpen={this.onSubmenuOpen}
                        {...others}
                        {...menuItem}
                    />
                )}
            </Menu>
        );
    }
}

export default ContextMenu;
