import React, { Component } from "react";

import SubmenuElement from "./SubmenuElement";
import OuterContainer from "./OuterContainer";
import ContextMenu from "./ContextMenu";

class ContextSubmenu extends Component {

    render() {
        const { menu, onClick } = this.props;
        return (
            <SubmenuElement>
                {this.props.content}
                {this.state.submenuVisible ? (
                    <OuterContainer position={this.props.position}>
                        <ContextMenu menu={menu} onClick={onClick} />
                    </OuterContainer>
                ) : null}
            </SubmenuElement>
        );
    }
    /*
        <div onMouseEnter={this.onSubmenuMouseEnter}
         onMouseLeave={this.onSubmenuMouseLeave} style={{ position: 'relative' }}>
        </div>
    */

}

export default ContextSubmenu;
