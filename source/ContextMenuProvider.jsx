import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import invariant from "invariant";
import { themed } from "downstyle";

import MenuManager from "./MenuManager";

import MenuLayer from "./display/MenuLayer";

import themeShape from "./tool/themeShape";

import defaultTheme from "./themes/default";

class ContextMenuProvider extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node]).isRequired,
        theme: themeShape,
        gatherMenus: PropTypes.bool,
        reverseOrder: PropTypes.bool,
        menuSeparator: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array,
            PropTypes.object
        ]),
        enableTransitions: PropTypes.bool,
        alwaysPreventNativeContextMenu: PropTypes.bool,
        submenuHoverDelay: PropTypes.number
    };

    static defaultProps = {
        theme: defaultTheme,
        gatherMenus: true,
        reverseOrder: false,
        menuSeparator: "-",
        enableTransitions: true,
        alwaysPreventNativeContextMenu: false,
        submenuHoverDelay: 500
    };

    static childContextTypes = {
        contextMenuContext: React.PropTypes.shape({
            addMenuItems: React.PropTypes.func,
            closeMenu: React.PropTypes.func
        }),
        menuManagerContext: React.PropTypes.shape({
            registerManager: React.PropTypes.func,
            unregisterManager: React.PropTypes.func,
            normalizeMenuItems: React.PropTypes.func
        })
    };

    getChildContext() {
        return {
            contextMenuContext: {
                addMenuItems: this.addMenuItems,
                closeMenu: this.closeMenu,
                shouldGather: this.shouldGather,
                stopGathering: this.stopGathering,
                reverseOrder: this.reverseOrder
            },
            menuManagerContext: {
                registerManager: this.registerManager,
                unregisterManager: this.unregisterManager,
                normalizeMenuItems: this.normalizeMenuItems
            }
        };
    }

    componentDidMount() {
        // Capture the event at the highest level to initialise the array
        this.nearestNode = ReactDOM.findDOMNode(this);
        invariant(
            this.nearestNode,
            `No DOM node found. ContextMenuProvider must contain a component that renders a DOM node. If you are using a theme, check the template override for "layer".`
        );
        // Listen for both capture event and normal event. We reset the menu on capture,
        // and allow it to be built as the event bubbles back up the tree to us
        this.nearestNode.addEventListener(
            "contextmenu",
            this.onContextMenuCapture,
            true
        );
        this.nearestNode.addEventListener("contextmenu", this.onContextMenu);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.theme !== this.props.theme) {
            this.Layer = null;
        }
    }

    componentWillUpdate() {
        this.componentWillUnmount();
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    componentWillUnmount() {
        if (this.nearestNode) {
            this.nearestNode.removeEventListener(
                "contextmenu",
                this.onContextMenu
            );
            this.nearestNode.removeEventListener(
                "contextmenu",
                this.onContextMenuCapture,
                true
            );
        }
    }

    onContextMenuCapture = () => {
        // Clear the menu before the 'capture' phase - it will get filled up when the event travels
        // down and then back up the DOM tree.
        this.buildMenu = [];
        this.buildMenuOptions = {
            gatherMenus: this.props.gatherMenus,
            reverseOrder: this.props.reverseOrder,
            menuSeparator: this.props.menuSeparator
        };
    };

    onContextMenu = event => {
        // The menu should have already been built up via the context handler while the event was
        // bubbling up
        // TODO: Allow promises, for consistency with submenu API?
        if (
            this.buildMenu.length > 0 ||
            this.props.alwaysPreventNativeContextMenu
        ) {
            event.preventDefault();
            event.stopPropagation();
        }
        // Only show menu if we received items to display
        if (this.buildMenu.length === 0) {
            return;
        }
        const position = {
            x: event.pageX - window.scrollX,
            y: event.pageY - window.scrollY
        };
        // TODO: Actually maybe the key SHOULD be assigned from here,
        // e.g. context_0 etc., then other code can open their own menus and provide
        // unique keys themselves; e.g. a site menu closing and immediately opening
        // should be able to cancel the transition rather than open a whole new menu.
        const newMenu = {
            position,
            items: this.buildMenu
        };
        invariant(
            this.menuManager,
            "No menu manager found, unable to open context menu"
        );
        this.menuManager.closeMenus();
        this.menuManager.openMenu(newMenu);
    };

    onLayerClick = () => {
        // A click reaching the layer means it was outside any menu,
        // so close them all
        if (this.menuManager) {
            this.menuManager.closeMenus();
        }
    };

    // Context API methods
    // TODO: This is a bit complicated, need to simplify
    addMenuItems = rawItems => {
        const items = this.normalizeMenuItems(rawItems);
        // Items further down the DOM tree get inserted in front
        this.buildMenu = this.buildMenu.length
            ? this.concatenateMenus(this.buildMenu, items)
            : items;
    };
    shouldGather = () => this.buildMenuOptions.gatherMenus;
    stopGathering = () => {
        this.buildMenuOptions.gatherMenus = false;
    };
    reverseOrder = value => {
        this.buildMenuOptions.reverseOrder = value;
    };
    registerManager = manager => {
        this.menuManager = manager;
    };
    unregisterManager = manager => {
        if (this.menuManager === manager) {
            this.menuManager = null;
        }
    };
    // End Context API methods

    concatenateMenus(one, two) {
        const [left, right] = this.buildMenuOptions.reverseOrder
            ? [two, one]
            : [one, two];
        return this.buildMenuOptions.menuSeparator
            ? [...left, this.makeSeparator(), ...right]
            : [...left, ...right];
    }

    makeSeparator() {
        return this.expandItemShorthand(this.buildMenuOptions.menuSeparator);
    }

    expandItemShorthand(item) {
        // TODO: Horrible pyramid here, refactor this
        if (typeof item === "string" || React.isValidElement(item)) {
            if (item === "-") {
                return { type: "separator" };
            }
            return { type: "label", content: item };
        }
        if (item.constructor === Array) {
            if (item.length === 1) {
                return { type: "label", content: item[0] };
            }
            if (item.length === 2) {
                if (typeof item[1] === "string") {
                    return { type: "link", content: item[0], to: item[1] };
                }
                if (typeof item[1] === "function") {
                    return {
                        type: "button",
                        content: item[0],
                        onClick: item[1]
                    };
                }
                if (item[1] && item[1].constructor === Array) {
                    return {
                        type: "submenu",
                        content: item[0],
                        menu: this.normalizeMenuItems(item[1])
                    };
                }
                invariant(
                    false,
                    `Second element of menu item array should be one of string, function, array; got: ${item[1]}`
                );
            } else {
                invariant(
                    false,
                    `Menu item array can have 1 or 2 elements, this one had ${item.length}`
                );
            }
        }
        // TODO: Should be a plain object, need to validate it
        return item;
    }

    normalizeMenuItems = rawItems =>
        rawItems.map(item => ({
            ...this.expandItemShorthand(item)
        }));

    render() {
        const {
            gatherMenus,
            reverseOrder,
            menuSeparator,
            alwaysPreventNativeContextMenu,
            ...others
        } = this.props;

        if (!this.Layer) {
            this.Layer = themed(MenuLayer, this.props.theme, "layer");
        }
        const Layer = this.Layer;
        return (
            <Layer onClick={this.onLayerClick}>
                {this.props.children}
                <MenuManager {...others} />
            </Layer>
        );
    }
}

export default ContextMenuProvider;
