import React from "react";
import styles from "./styles/menu.css";

export default ({ children, position, ...others }) => {
    const style = {
        ...styles.container,
        left: `${position.x}px`,
        top: `${position.y}px`,
    };

    return (
        <nav style={style} {...others}>
            {children}
        </nav>
    );
};
