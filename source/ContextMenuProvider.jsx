import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import invariant from "invariant";
import ContextMenu from "./container/ContextMenu";
import OuterContainer from "./display/OuterContainer";

import styles from "./styles/menu.css";

import sanitizeProps from "./tool/sanitizeProps";

class ContextMenuProvider extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node]).isRequired,
        gatherMenus: PropTypes.bool,
        renderClassNames: PropTypes.bool,
        enableTransitions: PropTypes.bool
    };

    static defaultProps = {
        gatherMenus: true,
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
                        ? [...this.buildMenu, { type: "separator" }, ...items]
                        : items;
                },
                closeMenu: this.closeMenu,
                shouldGather: () => this.buildMenuGathering,
                stopGathering: () => {
                    this.buildMenuGathering = false;
                }
            }
        };
    }

    componentDidMount() {
        // Capture the event at the highest level to initialise the array
        this.nearestNode.addEventListener(
            "contextmenu",
            this.onContextMenuCapture,
            true
        );
        // Catch the event again on the way back up once the context is populated
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
        this.buildMenuGathering = this.props.gatherMenus;
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
        if (this.buildMenu.length > 0) {
            this.setState(
                {
                    menu: this.buildMenu,
                    menuIsOpen: true,
                    menuPosition: { x: event.clientX, y: event.clientY },
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

    normalizeMenuItems(rawItems) {
        // TODO: Horrible pyramid here, refactor this
        return rawItems.map(item => {
            if (typeof item === "string") {
                return { type: "label", content: item };
            } else if (item.constructor === Array) {
                if (item.length === 1) {
                    return { type: "label", content: item[0] };
                } else if (item.length === 2) {
                    if (typeof item[1] === "string") {
                        return { type: "link", content: item[0], to: item[1] };
                    } else if (typeof item[1] === "function") {
                        return {
                            type: "button",
                            content: item[0],
                            onClick: item[1]
                        };
                    } else if (item.constructor === Array) {
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
        });
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
        const { gatherMenus, children, ...others } = this.props;
        const sanitized = sanitizeProps(others, "container");

        return (
            <OuterContainer
                ref={this.storeOuterNode}
                position={this.state.menuPosition}
                onClick={this.onOuterClick}
                onTransitionEnd={this.onTransitionEnd}
                {...sanitized}
            >
                <ContextMenu
                    onMenuClick={this.closeMenu}
                    menu={this.state.menu}
                    entered={this.state.entered}
                    exiting={this.state.exiting}
                    {...others}
                />
            </OuterContainer>
        );
    }

    render() {
        return (
            <div
                className={styles.layer}
                ref={ref => {
                    this.nearestNode = ref;
                }}
                onClick={this.onLayerClick}
            >
                {this.props.children}
                {this.state.menuIsOpen ? this.renderMenu() : null}
            </div>
        );
    }
}

export default ContextMenuProvider;
