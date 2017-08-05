
import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) =>
    <button className={styles.button} {...others}>{children}</button>;
