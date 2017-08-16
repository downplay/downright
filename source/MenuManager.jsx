import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import MenuContainer from "./container/MenuContainer";
import ContextMenu from "./container/ContextMenu";

// The Manager sits in the DOM layer where we want to render
// menus, and manages their rendering and positioning
export default class MenuManager extends Component {
    static propTypes = {
        enableTransitions: PropTypes.bool
        // TODO: Some handlers like onMenuOpen/Close
    };

    static defaultProps = {
        enableTransitions: true
    };

    static contextTypes = {
        menuManagerContext: React.PropTypes.shape({
            registerManager: React.PropTypes.func
        })
    };

    state = {
        menus: [],
        menuIndex: 0
    };

    componentDidMount() {
        this.context.menuManagerContext.registerManager(this);
        // TODO: Try to get React's onContextMenu event working - would remove
        // a lot of boilerplate
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.theme !== this.props.theme) {
            this.Container = null;
        }
    }

    componentWillUpdate() {
        this.componentWillUnmount();
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    componentWillUnmount() {
        if (this.nearestOuterNode) {
            this.nearestOuterNode.removeEventListener(
                "contextmenu",
                this.onOuterContextMenu
            );
            this.nearestOuterNode = null;
        }
    }

    onTransitionEnd = key => {
        // TODO: Check if it's actually the transition we were looking for
        // Could be any old random transition (e.g. item hovers).
        // TODO: Also push entering/exiting and transition handling down to MenuContainer
        const menu = this.state.menus.find(m => m.key === key);
        if (menu && menu.exiting) {
            this.removeMenu(key);
        }
    };

    onMenuClick = key => {
        this.closeMenu(key, true);
    };

    // Don't let menus close automatically from clicks on items, only when
    // we tell them to
    onOuterClick = event => event.stopPropagation();

    onOuterContextMenu = event => {
        // Catches right clicks originating inside the menu itself. The contextmenu event
        // seems to get double-triggered, and we don't want to close it from right-clicking
        // on it again.
        event.stopPropagation();
        // Also still don't try to open default context menu
        event.preventDefault();
    };

    // TODO: Not very happy how this handler has to be hoisted all the way
    // up from the item. Might be better to use context to facilitate this.
    onSubmenuOpen = (event, menuItem, menu) => {
        // Close any other submenus with the same parent
        this.state.menus.forEach(m => {
            if (m.parent === menu) {
                this.closeMenu(m.key);
            }
        });
        // Position relative to event source
        const bounds = event.target.getBoundingClientRect();
        const position = {
            x: bounds.right,
            y: bounds.top
        };
        const newMenu = {
            key: `${menu.key}_${menuItem.key}`,
            items: this.buildMenuItems(menuItem.menu),
            parent: menu,
            position
        };
        this.openMenu(newMenu);
    };

    openMenu(menu) {
        // TODO: Immutable state changes here get a bit messy, could clean this up a bit
        const newMenu = {
            ...menu,
            key: menu.key || `root${this.state.menuIndex}`,
            entered: this.props.enableTransitions,
            exiting: false
        };
        this.setState(
            {
                menus: [...this.state.menus, newMenu],
                menuIndex: this.state.menuIndex + 1
            },
            () => {
                setImmediate(() => {
                    let updateMenu = newMenu;
                    // Now menu is rendered maybe reposition it

                    // Begin enter transition
                    if (this.props.enableTransitions) {
                        updateMenu = { ...newMenu, entered: false };
                    }
                    if (updateMenu !== newMenu) {
                        this.setState({
                            menus: [
                                ...this.state.menus.filter(
                                    m => m.key !== newMenu.key
                                ),
                                updateMenu
                            ]
                        });
                    }
                });
            }
        );
    }

    closeMenus() {
        this.state.menus.forEach(m => this.closeMenu(m.key));
    }

    closeMenu(key, closeParent = false) {
        const menu = this.state.menus.find(m => m.key === key);
        if (!menu) {
            return;
        }
        if (closeParent && menu.parent) {
            this.closeMenu(menu.parent.key, true);
        }
        if (this.props.enableTransitions) {
            this.setState(
                {
                    menus: this.state.menus.map(
                        m => (m.key === key ? { ...m, exiting: true } : m)
                    )
                },
                () => {
                    // Arbitrary timeout to clean up if there wasn't a transition
                    // There isn't actually a TransitionStart event in React. However DOM should
                    // have transitionrun and transitionstart, so could actually listen for those
                    // and kill the menu much quicker if there isn't a transition starting.
                    // TODO: Should allow for
                    setTimeout(() => {
                        this.removeMenu(key);
                    }, 500);
                }
            );
        } else {
            this.removeMenu(key);
        }
    }

    removeMenu(key) {
        this.setState({
            menus: this.state.menus.filter(m => m.key !== key)
        });
    }

    buildMenuItems(menu) {
        const items =
            !(menu.constructor === Array) && typeof menu === "function"
                ? menu()
                : menu;
        return this.context.menuManagerContext.normalizeMenuItems(items);
    }

    storeOuterRef = ref => {
        this.outerNode = ref;
    };

    render() {
        const { children, theme, ...others } = this.props;
        return (
            <div ref={this.storeOuterRef} onClick={this.onOuterClick}>
                {Object.values(this.state.menus).map(menu => {
                    const { key, ...menuOthers } = menu;
                    // TODO: Binding the functions in here is bad and will cause re-renders.
                    // As is creating the style object above. Need to handle all these things better.
                    // Maybe just store on menu object.
                    return (
                        <MenuContainer
                            key={key}
                            onTransitionEnd={() => this.onTransitionEnd(key)}
                            position={menu.position}
                            theme={theme}
                        >
                            <ContextMenu
                                onMenuClick={() => this.onMenuClick(key)}
                                onSubmenuOpen={(event, menuItem) => {
                                    this.onSubmenuOpen(event, menuItem, menu);
                                }}
                                theme={theme}
                                {...others}
                                {...menuOthers}
                            />
                        </MenuContainer>
                    );
                })}
            </div>
        );
    }
}
