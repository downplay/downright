export default props => {
    const {
        renderClassNames,
        enableTransitions,
        onMenuClick,
        onSubmenuOpen,
        item,
        theme,
        menu,
        content,
        type,
        depth,
        ...others
    } = props;
    return {
        ...others
    };
};
