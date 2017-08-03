import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    children: PropTypes.arrayOf(PropTypes.node),
  }

  static defaultProps = {
    onClick: () => {},
    style: {},
    children: null,
  }

  render() {
    return (
      <ul style={this.props.style} role="menu" onClick={this.props.onClick}>
        {this.props.children}
      </ul>
    );
  }
}

export default ContextMenu;
