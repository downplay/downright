import React from "react";

export default (element, theme, names) => {
    const blockNames = typeof names === "string" ? [names] : names;

    // Swap out the element - only last matching provided counts
    // TODO: Would be slightly more performant to reduce the array in reverse
    const Element = theme.elements
        ? blockNames.reduce((el, name) => theme.elements[name] || el, element)
        : element;

    // Combine class names
    const baseClassName = (theme.classNames
        ? blockNames.map(name => theme.classNames[name] || name)
        : blockNames).join(" ");

    // Merge all styles into one
    const style = theme.styles
        ? blockNames.reduce(
              (blockStyle, name) => ({
                  ...blockStyle,
                  ...theme.styles[name]
              }),
              {}
          )
        : {};

    // The new component will merge any additional className or style provided for us
    return ({ children, ...others }) =>
        <Element
            {...others}
            className={`${baseClassName} ${others.className}`}
            style={{ ...style, ...others.style }}
        >
            {children}
        </Element>;
};
