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
        parent,
        ...others
    } = props;
    return {
        ...others
    };
};
