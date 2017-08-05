import React from "react";

// eslint-disable-next-line react/prop-types
export default ({ children, onClick, ...others }) => (
    <nav {...others}>
        {children}
    </nav>
);
