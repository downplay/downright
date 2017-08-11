import React from "react";
import styles from "../styles/menu.css";

// TODO: This is almost identical to OuterContainer, they
// can be combined and plug the position in from outside
export default ({ children, position, ...others }) => {
    const style = {
        left: "100%",
        marginTop: "-1.5rem"
    };

    return (
        <nav className={styles.container} style={style} {...others}>
            {children}
        </nav>
    );
};
