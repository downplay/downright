
import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) =>
    <button style={styles.button} {...others}>{children}</button>;
