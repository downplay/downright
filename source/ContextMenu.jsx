import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object, // eslint-ignore-line react/forbid-prop-types
    children: PropTypes.arrayOf(PropTypes.node),
  }

  static defaultProps = {
    onClick: () => {},
    style: {},
    children: null,
  }

  render() {
    return (
      <div style={this.props.style} role="menu" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default ContextMenu;
