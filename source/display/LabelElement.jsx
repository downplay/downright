import React from "react";

export default ({ children, ...others }) =>
    <div {...others}>
        {children}
    </div>;
