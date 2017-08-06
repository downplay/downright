import React, { Component } from "react";
import PropTypes from "prop-types";

import ContextSubmenu from "./ContextSubmenu";
import ButtonElement from "./ButtonElement";
import LabelElement from "./LabelElement";
import LinkElement from "./LinkElement";
import SeparatorElement from "./SeparatorElement";
import ItemWrapper from "./ItemWrapper";

import styles from "./styles/menu.css";

const emptySubmenu = [];

class ContextMenuItem extends Component {

    static propTypes = {
        type: PropTypes.oneOf(["label", "button", "link", "separator", "submenu"]),
        content: PropTypes.node,
        onClick: PropTypes.func,
        onMenuClick: PropTypes.func,
        menu: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    }

    static defaultProps = {
        type: "label",
        content: null,
        onClick: null,
        onMenuClick: null,
        menu: [],
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            submenuVisible: false,
        };
    }

    // TODO: On receive props / will receive props, verify correct action is there e.g. handler/to

    onSubmenuMouseEnter = () => {
        this.setSubmenuVisible(true);
    }

    onSubmenuMouseLeave = () => {
        this.setSubmenuVisible(false);
    }

    onButtonClick = (event) => {
        // For links there is no button handler (although consumers
        // can still provide one, e.g. to preventDefault or whatever)
        if (this.props.onClick) {
            // Execute the click handler
            this.props.onClick(event, this.props.item);
        }
        // Trigger provider to close the menu
        this.props.onMenuClick(event);
    }

    onSubmenuClick = () => {
        this.setState({
            selected: true,
        });
    }

    setSubmenuVisible = (visible) => {
        let menu = this.props.menu;
        if (visible && !(this.props.menu.constructor === Array) && (typeof this.props.menu === "function")) {
            menu = this.props.menu();
        }
        // TODO: The submenu state is potentially stale. (Also true with static menus.) Actually
        // need to listen for props changes and retrigger a menu build.
        this.setState({
            submenu: visible ? menu : emptySubmenu,
            submenuVisible: visible,
        });
    }

    renderInnerElement() {
        const { type, content, onClick, onMenuClick, menu, item, className,
            ...others } = this.props;
        others.className = `${styles[this.props.type] || ""}  ${this.state.selected && styles.selected} ${this.props.className}`;
        switch (this.props.type) {
        case "label":
            return <LabelElement {...others}>{content}</LabelElement>;
        case "separator":
            return <SeparatorElement {...others} />;
        case "submenu":
            // A bit of a special case
            return (
                <ContextSubmenu
                    menu={this.state.submenu}
                    onClick={this.onSubmenuClick}
                    onMenuClick={onMenuClick}
                    onMouseEnter={this.onSubmenuMouseEnter}
                    onMouseLeave={this.onSubmenuMouseLeave}
                    visible={this.state.submenuVisible || this.state.selected}
                    {...others}
                >
                    {content}
                </ContextSubmenu>
            );
        case "link":
            return (
                <LinkElement {...others} onClick={this.onButtonClick}>
                    {this.props.content}
                </LinkElement>);
        case "button":
        default:
            return (
                <ButtonElement {...others} onClick={this.onButtonClick}>
                    {content}
                </ButtonElement>
            );
        }
    }

    render() {
        // .item .thing .custom
        const className = `${styles.item} ${styles[this.props.type]} ${this.state.selected && styles.selected} ${this.props.className}`;
        return (
            <ItemWrapper className={className}>
                {this.renderInnerElement()}
            </ItemWrapper>
        );
    }

}

export default ContextMenuItem;
