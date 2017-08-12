import React from "react";

export default ({ children, ...others }) =>
    <ul role="menu" {...others}>
        {children}
    </ul>;
