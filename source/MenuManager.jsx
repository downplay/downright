import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import invariant from "invariant";

import MenuContainer from "./container/MenuContainer";
import ContextMenu from "./container/ContextMenu";

export const menuManagerContextShape = PropTypes.shape({
    registerManager: PropTypes.func,
    unregisterManager: PropTypes.func,
    normalizeMenuItems: PropTypes.func
});

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
        menuManagerContext: menuManagerContextShape
    };

    state = {
        menus: [],
        menuIndex: 0
    };

    componentDidMount() {
        this.context.menuManagerContext.registerManager(this);
        this.attachEventListener();
    }

    componentWillUpdate() {
        this.detachEventListener();
    }

    componentDidUpdate() {
        this.attachEventListener();
    }

    componentWillUnmount() {
        this.detachEventListener();
        this.context.menuManagerContext.unregisterManager(this);
        // Close all menus - should prevent any setState() occurring on
        // an unmounted component
        this.closeMenus();
    }

    onTransitionEnd = key => {
        // TODO: More thorough check if it's actually the transition we were looking for?
        // Could be any old random transition (e.g. item hovers) but this doesn't matter too
        // much at the time of exiting anyway.
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
    // up from the item and with all this cruft. Might be better to use context to facilitate this.
    onSubmenuOpen = async (event, menuItem, submenuIndex, menu) => {
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

        // Open the menu straight away with no items
        const newMenuKey = `${menu.key}_sub${submenuIndex}`;
        const newMenu = {
            key: newMenuKey,
            items: null,
            parent: menu,
            position,
            width: 0,
            height: 0
        };
        this.openMenu(newMenu);

        // Wait for the items to build
        const items = await this.buildMenuItems(menuItem.menu);
        this.updateMenu(newMenuKey, m => ({ ...m, items }));
    };

    handleHasDimensions = (event, menu) => {
        const node = ReactDOM.findDOMNode(event.target);
        invariant(node, "No DOM node found in ContextMenu!");
        const dims = node.getBoundingClientRect();
        if (menu.width !== dims.width || menu.height !== dims.height) {
            this.updateMenu(menu.key, m => ({
                ...m,
                width: dims.width,
                height: dims.height
            }));
        }
    };

    openMenu(menu) {
        const newMenu = {
            ...menu,
            key: menu.key || `root${this.state.menuIndex}`
        };
        this.setState(prevState => ({
            menus: [...prevState.menus, newMenu],
            menuIndex: prevState.menuIndex + 1
        }));
    }

    findMenu(key) {
        return this.state.menus.find(m => m.key === key);
    }

    updateMenu(key, updater, callback) {
        // If a menu no longer exists or is exiting then either another menu has
        // been opened or we have unmounted; either way don't need to set the state
        const newMenu = this.findMenu(key);
        if (!newMenu || newMenu.exiting) {
            return;
        }
        this.setState(
            prevState => ({
                menus: prevState.menus.map(
                    m => (m.key === key ? updater(m) : m)
                )
            }),
            callback
        );
    }

    closeMenus() {
        this.state.menus.forEach(m => this.closeMenu(m.key));
    }

    closeMenu(key, closeParent = false) {
        const menu = this.findMenu(key);
        if (!menu) {
            return;
        }
        if (closeParent && menu.parent) {
            this.closeMenu(menu.parent.key, true);
        }
        if (this.props.enableTransitions) {
            this.updateMenu(
                key,
                m => ({ ...m, exiting: true }),
                () => {
                    // Arbitrary timeout to clean up if there wasn't a transition
                    // There isn't actually a TransitionStart event in React. TODO: However DOM should
                    // have transitionrun and transitionstart, so could actually listen for those
                    // and kill the menu much quicker if there isn't a transition starting.
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
        if (!this.findMenu(key)) {
            return;
        }
        this.setState(prevState => ({
            menus: prevState.menus.filter(m => m.key !== key)
        }));
    }

    async buildMenuItems(menu) {
        const items =
            !(menu.constructor === Array) && typeof menu === "function"
                ? await menu()
                : menu;
        // TODO: Maybe normalizeMenuItems should be static, we only need the menuSeparator
        // config prop
        return this.context.menuManagerContext.normalizeMenuItems(items);
    }

    attachEventListener() {
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

    detachEventListener() {
        if (this.nearestOuterNode) {
            this.nearestOuterNode.removeEventListener(
                "contextmenu",
                this.onOuterContextMenu
            );
            this.nearestOuterNode = null;
        }
    }

    storeOuterRef = ref => {
        this.outerNode = ref;
    };

    render() {
        const { children, theme, ...others } = this.props;
        return (
            <div ref={this.storeOuterRef} onClick={this.onOuterClick}>
                {Object.values(this.state.menus).map(menu => {
                    const {
                        key,
                        exiting,
                        position,
                        width,
                        height,
                        ...menuOthers
                    } = menu;
                    // TODO: Binding the functions in here is bad and will cause re-renders.
                    // As is creating the style object above. Need to handle all these things better.
                    // Maybe just store on menu object.
                    return (
                        <MenuContainer
                            key={key}
                            onTransitionEnd={() => this.onTransitionEnd(key)}
                            position={position}
                            width={width}
                            height={height}
                            theme={theme}
                        >
                            <ContextMenu
                                onMenuClick={() => this.onMenuClick(key)}
                                onSubmenuOpen={this.onSubmenuOpen}
                                onHasDimensions={this.handleHasDimensions}
                                menu={menu}
                                theme={theme}
                                exiting={exiting}
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
