import React from "react";

// eslint-disable-next-line react/prop-types
export default ({ children, ...others }) =>
    <button {...others}>
        {children}
    </button>;
