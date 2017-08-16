import PropTypes from "prop-types";

export default PropTypes.shape({
    elements: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    ),
    classNames: PropTypes.objectOf(PropTypes.string),
    styles: PropTypes.objectOf(PropTypes.object)
});
