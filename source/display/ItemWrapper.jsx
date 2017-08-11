import React from "react";

export default ({ children, ...others }) =>
    <li {...others}>
        {children}
    </li>;
