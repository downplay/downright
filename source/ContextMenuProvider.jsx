import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import invariant from "invariant";
import ContextMenu from "./container/ContextMenu";
import MenuLayer from "./display/MenuLayer";
import OuterContainer from "./display/OuterContainer";

import themeHelper from "./tool/themeHelper";
import themeShape from "./tool/themeShape";

import defaultTheme from "./themes/default";

class ContextMenuProvider extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node]).isRequired,
        theme: themeShape,
        gatherMenus: PropTypes.bool,
        reverseOrder: PropTypes.bool,
        menuSeparator: PropTypes.oneOfType(
            PropTypes.node,
            PropTypes.array,
            PropTypes.object
        ),
        renderClassNames: PropTypes.bool,
        enableTransitions: PropTypes.bool
    };

    static defaultProps = {
        theme: defaultTheme,
        gatherMenus: true,
        reverseOrder: false,
        menuSeparator: "-",
        renderClassNames: true,
        enableTransitions: true
    };

    static childContextTypes = {
        contextMenuContext: React.PropTypes.shape({
            addMenuItems: React.PropTypes.func,
            closeMenu: React.PropTypes.func
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
            menu: [],
            menuPosition: null,
            entered: false,
            exiting: false
        };
    }

    getChildContext() {
        return {
            contextMenuContext: {
                addMenuItems: rawItems => {
                    const items = this.normalizeMenuItems(rawItems);
                    // Items further down the DOM tree get inserted in front
                    this.buildMenu = this.buildMenu.length
                        ? this.concatenateMenus(this.buildMenu, items)
                        : items;
                },
                closeMenu: this.closeMenu,
                shouldGather: () => this.buildMenuOptions.gatherMenus,
                stopGathering: () => {
                    this.buildMenuOptions.gatherMenus = false;
                },
                reverseOrder: value => {
                    this.buildMenuOptions.reverseOrder = value;
                }
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
        if (this.outerNode) {
            this.nearestOuterNode = ReactDOM.findDOMNode(this.outerNode);
            if (this.nearestOuterNode) {
                this.nearestOuterNode.addEventListener(
                    "contextmenu",
                    this.onOuterContextMenu
                );
            }
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
        if (this.nearestOuterNode) {
            this.nearestOuterNode.removeEventListener(
                "contextmenu",
                this.onOuterContextMenu
            );
            this.nearestOuterNode = null;
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
        // bubbling up. If the menu was empty then it's possible the user right-clicked on something
        // that wasn't context menu connected, therefore we need to close the menu.
        // TODO: There is a bug where the contextmenu first again immediately after the window. It's
        // triggered from the menu itself, rather than a usual target. This was causing the menu
        // to immediately close itself. Was intermittent, and I don't seem to be able to get a ref
        // to the outer node early enough to block the event there. Probably can just debounce
        // the event but it'd be nice to solve this properly.
        event.preventDefault();
        event.stopPropagation();
        const position = { x: event.pageX, y: event.pageY };
        if (this.buildMenu.length > 0) {
            this.setState(
                {
                    menu: this.buildMenu,
                    menuIsOpen: true,
                    menuPosition: position,
                    entered: this.props.enableTransitions,
                    exiting: false
                },
                () => {
                    if (this.props.enableTransitions) {
                        setImmediate(() => {
                            this.setState({
                                entered: false
                            });
                        });
                    }
                }
            );
        }
    };

    onLayerClick = () => {
        // A click reaching the layer means it was outside the menu,
        // so close it
        this.closeMenu();
    };

    onOuterContextMenu = event => {
        // Stop the event propagating - then it won't close the menu
        event.stopPropagation();
        // Also don't try to open another context menu at all
        event.preventDefault();
    };

    onTransitionEnd = () => {
        // TODO: Check if it's actually the transition we were looking for
        // Could be any old random transition
        // Also split this transition management out into a component
        // since I need it for Submenu too
        if (this.state.exiting) {
            this.destroyMenu();
        }
    };

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
                if (item.constructor === Array) {
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

    normalizeMenuItems(rawItems) {
        const items = rawItems.map(item => this.expandItemShorthand(item));
        return items;
    }

    closeMenu = () => {
        // An ordinary click that wasn't on our menu or a right-click should just close the menu
        if (!this.state.menuIsOpen || this.state.exiting) return;
        if (this.props.enableTransitions) {
            this.setState(
                {
                    exiting: true
                },
                () => {
                    // Arbitrary timeout to clean up if there wasn't a transition
                    // There isn't actually a TransitionStart event in React. However DOM should
                    // have transitionrun and transitionstart, so could actually listen for those
                    // and kill the menu much quicker if there isn't a transition starting.
                    setTimeout(() => {
                        if (this.state.exiting && this.state.menuIsOpen) {
                            this.destroyMenu();
                        }
                    }, 500);
                }
            );
        } else {
            this.destroyMenu();
        }
    };

    destroyMenu = () => {
        if (this.state.menuIsOpen) {
            this.setState({
                menuIsOpen: false,
                menu: [],
                menuPosition: null,
                exiting: false
            });
        }
    };

    storeOuterNode = ref => {
        this.outerNode = ref;
    };

    renderMenu() {
        const {
            gatherMenus,
            reverseOrder,
            menuSeparator,
            children,
            theme,
            ...others
        } = this.props;

        const Outer = themeHelper(
            OuterContainer,
            this.props.theme,
            "container"
        );
        const style = {
            left: this.state.menuPosition.x,
            top: this.state.menuPosition.y
        };

        return (
            <Outer
                ref={this.storeOuterNode}
                onClick={this.onOuterClick}
                onTransitionEnd={this.onTransitionEnd}
                style={style}
            >
                <ContextMenu
                    onMenuClick={this.closeMenu}
                    menu={this.state.menu}
                    entered={this.state.entered}
                    exiting={this.state.exiting}
                    theme={theme}
                    {...others}
                />
            </Outer>
        );
    }

    render() {
        const Layer = themeHelper(MenuLayer, this.props.theme, "layer");
        return (
            <Layer onClick={this.onLayerClick}>
                {this.props.children}
                {this.state.menuIsOpen ? this.renderMenu() : null}
            </Layer>
        );
    }
}

export default ContextMenuProvider;
