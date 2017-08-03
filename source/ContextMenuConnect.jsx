import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';
import PropTypes from 'prop-types';

function makeComponentWrapper(buildMenu) {
  return WrappedComponent => (
    class ContextMenuConnect extends Component {
      static contextTypes = {
        contextMenuContext: PropTypes.shape({
          addMenuItems: PropTypes.func,
        }),
      }

      appendContextMenu() {
        const localItems = buildMenu(this.props);
        const context = this.context.contextMenuContext;
        context.addMenuItems(localItems);
      }

      componentDidMount() {
        this.nearestNode = ReactDOM.findDOMNode(this.innerNode);
        invariant(this.nearestNode, 'Could not find a DOM node to attach contextMenu to');
        this.nearestNode.addEventListener('contextmenu', this.onContextMenu);
      }

      onContextMenu = () => {
        // Default will be prevented by the ContextMenuProvider, after the event bubbles.
        // Other nodes have the opportunity to capture. All we need to do here is build the menu.
        this.appendContextMenu();
      }

      componentWillUnmount() {
        this.nearestNode.removeEventListener('contextmenu', this.onContextMenu);
      }

      render() {
        return (
          <WrappedComponent
            ref={(el) => { this.innerNode = el; }}
            {...this.props}
            {...this.state}
          />
        );
      }
    }
  );
}

export default makeComponentWrapper;
