import React, { Component } from "react";

import MenuWrapper from "./MenuWrapper";
import ContextMenuItem from "./ContextMenuItem";

class ContextMenu extends Component {

    render() {
        const { menu, ...others } = this.props;
        return (
            <MenuWrapper {...others}>
                {this.props.menu.map((menuItem, index) => (
                    // TODO: Not really anything better to use for a key,
                    // but could allow key as an optional prop, not a lot of
                    // point in this case though....
                    // eslint-disable-next-line react/no-array-index-key
                    <ContextMenuItem key={index} {...menuItem} />
                ))}
            </MenuWrapper>
        );
    }

}

export default ContextMenu;
