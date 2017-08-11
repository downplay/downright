import React from 'react';

export default (element, theme, blockNames) => {
    const names = typeof blockNames === "string" ? [blockNames] : blockNames;
    // Swap out the element
    const Element = theme.elements[names[names.length-1]] || element;
    // Combine class names
    const baseClassName = blockNames.map(name => theme.classNames[name] || name).join(" ");
    // Merge styles
    const style = blockNames.reduce({}, (name, blockStyle)=>({...blockStyle, ...theme.styles[name]}));
    // The new component will merge additional classNames and styles for us
    return ({ children, ...others }) => (
        <Element {...others} className={`${baseClassName} ${others.className}`} style={{...style, ...others.style}}>
            { children }
        </Element>
    );
}
