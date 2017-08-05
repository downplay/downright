import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) => (
    <li className={styles.item} {...others}>
        {children}
    </li>
);
