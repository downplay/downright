import React, { Component } from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import ContextMenu from "./ContextMenu";
import OuterContainer from "./OuterContainer";

import styles from "./styles/menu.css";

class ContextMenuProvider extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node]).isRequired,
    }

    static childContextTypes = {
        contextMenuContext: React.PropTypes.shape({
            addMenuItems: React.PropTypes.func,
            closeMenu: React.PropTypes.func,
        }),
    }

    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
            menu: [],
            menuPosition: null,
        };
    }

    getChildContext() {
        return {
            // TODO: Horrible pyramid approaching, refactor this
            contextMenuContext: {
                addMenuItems: (rawItems) => {
                    const items = this.normalizeMenuItems(rawItems);
                    // Items further down the DOM tree get inserted in front
                    this.setState({
                        menu: (this.state.menu.length) ? [...this.state.menu, { type: "separator" }, ...items] : items,
                    });
                },
                closeMenu: this.closeMenu,
            },
        };
    }

    componentDidMount() {
        // Capture the event at the highest level to initialise the array
        this.nearestNode.addEventListener("contextmenu", this.onContextMenuCapture, true);
        // Catch the event again on the way back up once the context is populated
        this.nearestNode.addEventListener("contextmenu", this.onContextMenu);
    }

    componentWillUnmount() {
        if (this.nearestNode) {
            this.nearestNode.removeEventListener("contextmenu", this.onContextMenu);
            this.nearestNode.removeEventListener("contextmenu", this.onContextMenuCapture, true);
        }
    }

    onContextMenuCapture = () => {
        // Clear the menu before the 'capture' phase - it will get filled up when the event travels
        // down and then back up the DOM tree.
        this.setState({
            menu: [],
        });
    }

    onContextMenu = (event) => {
        // The menu should have already been built up via the context handler while the event was
        // bubbling up. If the menu was empty then it's possible the user right-clicked on something
        // that wasn't context menu connected, therefore we need to close the menu.
        if (this.state.menu.length === 0) {
            this.closeMenu();
        } else {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                menuIsOpen: true,
                menuPosition: { x: event.clientX, y: event.clientY },
            });
        }
    }

    normalizeMenuItems(rawItems) {
        return rawItems.map((item) => {
            if (typeof item === "string") {
                return { type: "label", content: item };
            } else if (item.constructor === Array) {
                if (item.length === 1) {
                    return { type: "label", content: item[0] };
                } else if (item.length === 2) {
                    if ((typeof item[1]) === "string") {
                        return { type: "link", content: item[0], to: item[1] };
                    } else if (typeof item[1] === "function") {
                        return { type: "button", content: item[0], onClick: item[1] };
                    } else if (item.constructor === Array) {
                        return { type: "submenu", content: item[0], menu: this.normalizeMenuItems(item[1]) };
                    }
                    invariant(false, `Second element of menu item array should be one of string, function, array; got: ${item[1]}`);
                } else {
                    invariant(false, `Menu item array can have 1 or 2 elements, this one had ${item.length}`);
                }
            }
            // TODO: Should be a plain object, need to validate it
            return item;
        });
    }

    closeMenu = () => {
        // An ordinary click that wasn't on our menu or a right-click should just close the menu
        if (this.state.menuIsOpen) {
            this.setState({
                menuIsOpen: false,
                menu: [],
                menuPosition: null,
            });
        }
    }

    renderMenu() {
        return (
            <OuterContainer position={this.state.menuPosition}>
                <ContextMenu
                    onMenuClick={this.closeMenu}
                    menu={this.state.menu}
                />
            </OuterContainer>
        );
    }

    render() {
        return (
            <div
                className={styles.layer}
                ref={(ref) => { this.nearestNode = ref; }}
            >
                {this.props.children}
                {this.state.menuIsOpen ? this.renderMenu() : null}
            </div>
        );
    }

}

export default ContextMenuProvider;
