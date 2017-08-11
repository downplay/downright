import PropTypes from "prop-types";

export default PropTypes.shape({
    elements: PropTypes.objectOf(PropTypes.element),
    classNames: PropTypes.objectOf(PropTypes.string),
    styles: PropTypes.objectOf(PropTypes.object)
});
