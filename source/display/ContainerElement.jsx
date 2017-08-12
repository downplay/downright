import React from "react";

export default ({ children, ...others }) =>
    <nav {...others}>
        {children}
    </nav>;
