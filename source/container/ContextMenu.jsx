import React, { Component } from "react";
import PropTypes from "prop-types";

import MenuWrapper from "../display/MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

import sanitizeProps from "../tool/sanitizeProps";

class ContextMenu extends Component {

    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.object).isRequired,
        onMenuClick: PropTypes.func.isRequired,
    }

    render() {
        const { menu, onMenuClick, ...others } = this.props;
        const sanitized = sanitizeProps(others, "menu");
        return (
            <MenuWrapper {...sanitized}>
                {this.props.menu.map((menuItem, index) => (
                    // TODO: Not really anything better to use for a key,
                    // but could allow key as an optional prop, not a lot of
                    // point in this case though....
                    <ContextMenuItem
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onMenuClick={onMenuClick}
                        item={menuItem}
                        {...others}
                        {...menuItem}
                    />
                ))}
            </MenuWrapper>
        );
    }

}

export default ContextMenu;
