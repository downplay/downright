import React, { Component } from "react";

import SubmenuElement from "./SubmenuElement";
import OuterContainer from "./OuterContainer";
import ContextMenu from "./ContextMenu";

class ContextSubmenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submenuVisible: false,
        };
    }

    render() {
        const { menu, onMenuClick, ...others } = this.props;
        return (
            <SubmenuElement {...others}>
                {this.props.content}
                {this.state.submenuVisible ? (
                    <OuterContainer position={this.props.position}>
                        <ContextMenu menu={menu} onMenuClick={onMenuClick} />
                    </OuterContainer>
                ) : null}
            </SubmenuElement>
        );
    }

}

export default ContextSubmenu;
