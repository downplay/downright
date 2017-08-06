import React from "react";

export default ({ children, ...others }) =>
    <h2 {...others}>{children}</h2>;
