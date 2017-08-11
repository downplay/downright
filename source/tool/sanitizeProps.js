export default (props, elementName) => {
    const { renderClassNames, enableTransitions, ...others } = props;
    return {
        ...others,
        className: renderClassNames ?
            `${props.className || ""} ${styles[elementName]}` : ""
    };
};