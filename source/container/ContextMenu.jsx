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
        items: PropTypes.arrayOf(PropTypes.object),
        theme: themeShape.isRequired,
        depth: PropTypes.number,
        onMenuClick: PropTypes.func.isRequired,
        onSubmenuOpen: PropTypes.func.isRequired,
        onHasDimensions: PropTypes.func.isRequired,
        enableTransitions: PropTypes.bool.isRequired,
        exiting: PropTypes.bool
    };

    static defaultProps = {
        depth: 0,
        items: null,
        exiting: false
    };

    state = {
        selectedIndex: null,
        submenuIndex: 0,
        entered: this.props.enableTransitions
    };

    componentDidMount() {
        if (this.state.entered) {
            setImmediate(() => {
                this.setState({ entered: false });
            });
        }
        this.hasDimensions();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.theme !== nextProps.theme) {
            this.Menu = null;
        }
    }

    componentDidUpdate() {
        this.hasDimensions();
    }

    onSubmenuOpen = (event, menuItem, index) => {
        this.props.onSubmenuOpen(
            event,
            menuItem,
            this.state.submenuIndex,
            this.props.menu
        );
        this.setState(prevState => ({
            selectedIndex: index,
            submenuIndex: prevState.submenuIndex + 1
        }));
    };

    hasDimensions() {
        if (this.props.items) {
            this.props.onHasDimensions({ target: this }, this.props.menu);
        }
    }

    render() {
        const {
            items,
            onMenuClick,
            theme,
            className,
            onSubmenuOpen,
            onHasDimensions,
            menu,
            exiting,
            enableTransitions,
            ...others
        } = this.props;

        const { entered } = this.state;

        if (!this.Menu) {
            this.Menu = themed(MenuWrapper, theme, "menu", {
                entered: "entered",
                exiting: "exiting"
            });
        }

        const Menu = this.Menu;

        // Render the menu only once items have been loaded
        // TODO: Might be nice to display a spinner while loading
        return (
            this.props.items &&
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
                        index={index}
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
