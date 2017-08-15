import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import MenuWrapper from "../display/MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

import themeShape from "../tool/themeShape";

class ContextMenu extends Component {
    static propTypes = {
        // TODO: Use shapes for propTypess (also on parent components)
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        theme: themeShape.isRequired,
        depth: PropTypes.number
    };

    static defaultProps = {
        depth: 0
    };

    state = {
        entered: this.props.enableTransitions,
        exiting: false
    };

    componentDidMount() {
        if (this.props.enableTransitions) {
            setImmediate(() => {
                this.setState({
                    entered: !this.state.entered
                });
            });
        }
    }

    render() {
        const { items, onMenuClick, theme, className, ...others } = this.props;
        const { entered, exiting } = this.state;

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
                        onSubmenuOpen={this.props.onSubmenuOpen}
                        {...others}
                        {...menuItem}
                    />
                )}
            </Menu>
        );
    }
}

export default ContextMenu;
