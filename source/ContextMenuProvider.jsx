import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import ContextMenu from './ContextMenu';
import ContextMenuItem from './ContextMenuItem';

class ContextMenuProvider extends Component {
  static childContextTypes = {
    contextMenuContext: React.PropTypes.shape({
      addMenuItems: React.PropTypes.func,
      closeMenu: React.PropTypes.func,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      menu: [],
      menuPosition: null,
    };
  }

  getChildContext() {
    return {
      contextMenuContext: {
        addMenuItems: (items) => {
          // Items further down the DOM tree get inserted in front
          this.setState({
            menu: (this.state.menu.length) ? [...this.state.menu, { type: 'separator' }, ...items] : items,
          });
        },
        closeMenu: this.closeMenu,
      },
    };
  }


  componentDidMount() {
    this.nearestNode = ReactDOM.findDOMNode(this.innerNode);
    invariant(this.nearestNode, 'Could not find a DOM node to attach ContextMenuProvider to');
    // Capture the event at the highest level to initialise the array
    this.nearestNode.addEventListener('contextmenu', this.onContextMenuCapture, true);
    // Catch the event again on the way back up once the context is populated
    this.nearestNode.addEventListener('contextmenu', this.onContextMenu);
  }

  componentWillUnmount() {
    this.nearestNode.removeEventListener('contextmenu', this.onContextMenu);
    this.nearestNode.removeEventListener('contextmenu', this.onContextMenuCapture, true);
  }

  onContextMenuCapture = () => {
    // Clear the menu before the 'capture' phase - it will get filled up when the event travels
    // down and then back up the DOM tree.
    this.setState({
      menu: [],
    });
  }

  onContextMenu = (event) => {
    // The menu should have already been built up via the context handler while the event was
    // bubbling up. If the menu was empty then it's possible the user right-clicked on something
    // that wasn't context menu connected, therefore we need to close the menu.
    if (this.state.menu.length === 0) {
      this.closeMenu();
    } else {
      event.preventDefault();
      event.stopPropagation();
      this.setState({
        menuIsOpen: true,
        menuPosition: { x: event.clientX, y: event.clientY },
      });
    }
  }

  onMenuClick = (event) => {
    // Prevent clicks from the menu propagating up to the onClick handler, so they don't
    // automatically trigger the menu closing
    event.stopPropagation();
  }

  onClick = () => {
    // An ordinary click that wasn't on our menu or a right-click should just close the menu
    if (this.state.menuIsOpen) {
      this.closeMenu();
    }
  }

  closeMenu = () => {
    this.setState({
      menuIsOpen: false,
      menu: [],
      menuPosition: null,
    });
  }

  renderMenu() {
    const menuStyle = {
      position: 'absolute',
      left: `${this.state.menuPosition.x}px`,
      top: `${this.state.menuPosition.y}px`,
      background: '#ddd',
    };
    return (
      <ContextMenu style={menuStyle} onClick={this.onMenuClick}>
        {this.state.menu.map((menuItem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContextMenuItem key={index} {...menuItem} submenuStyle={menuStyle} onCloseMenu={this.closeMenu} />
        ))}
      </ContextMenu>
    );
  }

  render() {
    return (
      <div ref="innerNode" onClick={this.onClick}>
        {this.props.children}
        {this.state.menuIsOpen ? this.renderMenu() : null}
      </div>
    );
  }
}

export default ContextMenuProvider;
