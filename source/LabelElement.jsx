import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) =>
    <h2 className={styles.label} {...others}>{children}</h2>;
