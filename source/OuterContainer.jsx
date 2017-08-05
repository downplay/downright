import React from "react";
import styles from "./styles/menu.css";

export default ({ children, position, ...others }) => {
    const style = {
        ...styles.container,
        left: `${this.state.menuPosition.x}px`,
        top: `${this.state.menuPosition.y}px`,
    };

    return (
        <nav style={style} {...others}>
            {children}
        </nav>
    );
};
