import React from "react";
import styles from "../styles/menu.css";

export default ({ children, ...others }) => (
    <ul className={styles.menu} role="menu" {...others}>
        {children}
    </ul>
);
