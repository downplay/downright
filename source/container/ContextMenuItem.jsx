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
        onMenuClick: PropTypes.func.isRequired,
        menu: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        theme: themeShape.isRequired,
        onSubmenuOpen: PropTypes.func.isRequired,
        selected: PropTypes.bool
    };

    static defaultProps = {
        type: "label",
        content: null,
        onClick: null,
        menu: [],
        selected: false
    };

    static defaultElements = {
        label: LabelElement,
        separator: SeparatorElement,
        link: LinkElement,
        button: ButtonElement,
        submenu: SubmenuElement
    };

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
        // TODO: Use a short delay before opening/closing on hover
        // this.setSubmenuVisible(true);
    };

    onSubmenuMouseLeave = () => {
        // this.setSubmenuVisible(false);
    };

    onSubmenuClick = event => {
        this.props.onSubmenuOpen(event, this.props.item);
    };

    onButtonClick = event => {
        // For links there is no button handler (although consumers
        // can still provide one, e.g. to preventDefault or whatever)
        if (this.props.onClick) {
            // Execute the click handler
            this.props.onClick(event, this.props.item);
        }
        // Triggers provider to close the menu
        this.props.onMenuClick(event);
    };

    renderInnerElement() {
        const {
            type,
            content,
            onClick,
            onMenuClick,
            onSubmenuOpen,
            menu,
            item,
            className,
            theme,
            ...rest
        } = this.props;

        const others = sanitizeProps(rest);
        if (!this.Element) {
            this.Element = themed(
                ContextMenuItem.defaultElements[type] || LabelElement,
                theme,
                ["element", type],
                {
                    selected: "selected"
                }
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
            <Item {...others}>
                {this.renderInnerElement()}
            </Item>
        );
    }
}

export default ContextMenuItem;
