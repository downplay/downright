import React from "react";
import styles from "../styles/menu.css";

export default ({ children, position, ...others }) => {
    const style = {
        left: position.x,
        top: position.y
    };

    return (
        <nav className={styles.container} style={style} {...others}>
            {children}
        </nav>
    );
};
