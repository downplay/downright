export default props => {
    const {
        renderClassNames,
        enableTransitions,
        onMenuClick,
        item,
        theme,
        menu,
        content,
        type,
        ...others
    } = props;
    return {
        ...others
    };
};
