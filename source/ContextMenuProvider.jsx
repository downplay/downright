import React, { Component } from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import ContextMenu from "./container/ContextMenu";
import OuterContainer from "./display/OuterContainer";

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
                    this.buildMenu = this.buildMenu.length ? [...this.buildMenu, { type: "separator" }, ...items] : items;
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
        this.buildMenu = [];
    }

    onContextMenu = (event) => {
        // The menu should have already been built up via the context handler while the event was
        // bubbling up. If the menu was empty then it's possible the user right-clicked on something
        // that wasn't context menu connected, therefore we need to close the menu.
        event.preventDefault();
        event.stopPropagation();
        if (this.buildMenu.length === 0) {
            this.closeMenu();
        } else {
            this.setState({
                menu: this.buildMenu,
                menuIsOpen: true,
                menuPosition: { x: event.clientX, y: event.clientY },
            });
        }
    }

    onLayerClick = () => {
        // A click reaching the layer means it was outside the menu,
        // so close it
        this.closeMenu();
    }

    onOuterClick = (event) => {
        // Stop the event propagating - then it won't close the menu
        event.stopPropagation();
        // Also don't try to open another context menu at <all></all>
        if (event.button === 2) {
            event.preventDefault();
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
            <OuterContainer
                position={this.state.menuPosition}
                onClick={this.onOuterClick}
                onContextMenu={this.onOuterClick}
            >
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
                onClick={this.onLayerClick}
            >
                {this.props.children}
                {this.state.menuIsOpen ? this.renderMenu() : null}
            </div>
        );
    }

}

export default ContextMenuProvider;
