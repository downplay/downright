import React from "react";

// eslint-disable-next-line react/prop-types
export default ({ children, onClick, ...others }) => (
    <nav {...others}>
        {this.props.children}
    </nav>
);
