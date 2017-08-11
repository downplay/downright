import React, { Component } from "react";
import PropTypes from "prop-types";

import ContextSubmenu from "./ContextSubmenu";
import ButtonElement from "../display/ButtonElement";
import LabelElement from "../display/LabelElement";
import LinkElement from "../display/LinkElement";
import SeparatorElement from "../display/SeparatorElement";
import ItemWrapper from "../display/ItemWrapper";

import sanitizeProps from "../tool/sanitizeProps";
import themeHelper from "../tool/themeHelper";
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
        theme: themeShape.isRequired
    };

    static defaultProps = {
        type: "label",
        content: null,
        onClick: null,
        onMenuClick: null,
        menu: []
    };

    static defaultElements = {
        label: LabelElement,
        separator: SeparatorElement,
        link: LinkElement,
        button: ButtonElement
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            submenuVisible: false
        };
    }

    // TODO: On receive props / will receive props, verify correct action is there e.g. handler/to

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
        const names = [type];
        if (this.state.selected) {
            names.push("selected");
        }

        let Element;
        if (ContextMenuItem.defaultElements[type]) {
            Element = themeHelper(
                ContextMenuItem.defaultElements[type],
                theme,
                names
            );
        }

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
                // A bit of a special case
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
                );
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
        const others = sanitizeProps(this.props);
        const names = ["item", this.props.type];
        if (this.state.selected) {
            names.push("selected");
        }
        const Item = themeHelper(ItemWrapper, this.props.theme, names);
        return (
            <Item {...others}>
                {this.renderInnerElement()}
            </Item>
        );
    }
}

export default ContextMenuItem;
