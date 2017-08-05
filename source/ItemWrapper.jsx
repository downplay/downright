import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) => (
    <li style={styles.item} {...others}>
        {this.props.children}
    </li>
);
