import React from "react";
import styles from "./styles/menu.css";

export default ({ children, position, ...others }) => {
    const style = {
        left: "100%",
        marginTop: "-1.5rem",
    };

    return (
        <nav className={styles.container} style={style} {...others}>
            {children}
        </nav>
    );
};
