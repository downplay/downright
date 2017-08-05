import React from "react";
import styles from "./styles/menu.css";

export default ({ children, position, ...others }) => {
    const style = {
        left: `${position.x}px`,
        top: `${position.y}px`,
    };

    return (
        <nav className={styles.container} style={style} {...others}>
            {children}
        </nav>
    );
};
