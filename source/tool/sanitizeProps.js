// TODO: This is clearly a bad way to handle this, think of a better solution
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
        onClick,
        index,
        ...others
    } = props;
    return {
        ...others
    };
};
