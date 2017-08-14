import React, { Component } from "react";
import PropTypes from "prop-types";
import { themed } from "downstyle";

import ButtonElement from "../display/ButtonElement";
import LabelElement from "../display/LabelElement";
import LinkElement from "../display/LinkElement";
import SeparatorElement from "../display/SeparatorElement";
import SubmenuElement from "../display/SubmenuElement";
import ItemWrapper from "../display/ItemWrapper";

import sanitizeProps from "../tool/sanitizeProps";
import themeShape from "../tool/themeShape";

const emptySubmenu = [];

class ContextMenuItem extends Component {
    static propTypes = {
        type: PropTypes.oneOf([
            "label",
            "button",
            "link",
            "separator",
            "submenu"
        ]),
        content: PropTypes.node,
        onClick: PropTypes.func,
        onMenuClick: PropTypes.func,
        menu: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        theme: themeShape.isRequired,
        onSubMenuOpen: PropTypes.func
    };

    static defaultProps = {
        type: "label",
        content: null,
        onClick: null,
        onMenuClick: null,
        onSubMenuOpen: null,
        menu: []
    };

    static defaultElements = {
        label: LabelElement,
        separator: SeparatorElement,
        link: LinkElement,
        button: ButtonElement,
        submenu: SubmenuElement
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            submenuVisible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        // TODO: Verify correct action is there e.g. handler/to, generally validate item
        if (
            nextProps.theme !== this.props.theme ||
            nextProps.type !== this.props.type
        ) {
            this.Item = null;
            this.Element = null;
        }
    }

    onSubmenuMouseEnter = () => {
        this.setSubmenuVisible(true);
    };

    onSubmenuMouseLeave = () => {
        this.setSubmenuVisible(false);
    };

    onButtonClick = event => {
        // For links there is no button handler (although consumers
        // can still provide one, e.g. to preventDefault or whatever)
        if (this.props.onClick) {
            // Execute the click handler
            this.props.onClick(event, this.props.item);
        }
        // Trigger provider to close the menu
        this.props.onMenuClick(event);
    };

    onSubmenuClick = () => {
        this.setState({
            selected: true
        });
        this.props.onSubmenuOpen();
    };

    setSubmenuVisible = visible => {
        let menu = this.props.menu;
        if (
            visible &&
            !(this.props.menu.constructor === Array) &&
            typeof this.props.menu === "function"
        ) {
            menu = this.props.menu();
        }
        // TODO: The submenu state is potentially stale. (Also true with static menus.) Actually
        // need to listen for props changes and retrigger a menu build.
        this.setState({
            submenu: visible ? menu : emptySubmenu,
            submenuVisible: visible
        });
    };

    renderInnerElement() {
        const {
            type,
            content,
            onClick,
            onMenuClick,
            menu,
            item,
            className,
            theme,
            ...rest
        } = this.props;

        const others = sanitizeProps(rest);
        const names = ["element", type];
        if (this.state.selected) {
            names.push("selected");
        }

        if (!this.Element) {
            this.Element = themed(
                ContextMenuItem.defaultElements[type] || LabelElement,
                theme,
                names
            );
        }
        const Element = this.Element;

        switch (this.props.type) {
            case "label":
                return (
                    <Element {...others}>
                        {content}
                    </Element>
                );
            case "separator":
                return <Element {...others} />;
            case "submenu":
                return (
                    <Element
                        {...others}
                        onClick={this.onSubmenuClick}
                        onMouseEnter={this.onSubmenuMouseEnter}
                        onMouseLeave={this.onSubmenuMouseLeave}
                    >
                        {content}
                    </Element>
                );
            /*
                return (
                    <ContextSubmenu
                        menu={this.state.submenu}
                        onClick={this.onSubmenuClick}
                        onMenuClick={onMenuClick}
                        onMouseEnter={this.onSubmenuMouseEnter}
                        onMouseLeave={this.onSubmenuMouseLeave}
                        theme={theme}
                        visible={
                            this.state.submenuVisible || this.state.selected
                        }
                        {...rest}
                    >
                        {content}
                    </ContextSubmenu>
                    */
            case "link":
            case "button":
            default:
                return (
                    <Element {...others} onClick={this.onButtonClick}>
                        {content}
                    </Element>
                );
        }
    }

    render() {
        if (!this.Item) {
            const names = ["item", this.props.type];
            this.Item = themed(ItemWrapper, this.props.theme, names, {
                selected: "selected"
            });
        }
        const Item = this.Item;
        const others = sanitizeProps(this.props);
        return (
            <Item {...others} selected={this.state.selected}>
                {this.renderInnerElement()}
            </Item>
        );
    }
}

export default ContextMenuItem;
