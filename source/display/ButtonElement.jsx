import React from "react";

export default ({ children, ...others }) =>
    <button {...others}>
        {children}
    </button>;
