import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

function ContextMenuConnect(buildMenu) {
  return (WrappedComponent) => {

    return class ContextMenuConnect extends Component {

      static contextTypes = {
        contextMenuContext: React.PropTypes.object
      }

      appendContextMenu() {
        let localItems = buildMenu(this.props);
        // Set default type of item to 'button'
        localItems = localItems.map(item => (item.type ? item : {...item, type: 'button'}));
        const context = this.context.contextMenuContext;
        context.addMenuItems(localItems);
      }

      componentDidMount() {
        this.nearestNode = ReactDOM.findDOMNode(this.refs.innerNode);
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
        return <WrappedComponent ref="innerNode" {...this.props} {...this.state} />;
      }

    };
  };
}

export default ContextMenuConnect;
