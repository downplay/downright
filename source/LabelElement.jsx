import React from "react";
import styles from "./styles/menu.css";

export default ({ children, ...others }) => <h2 style={styles.label} {...others}>{children}</h2>;
