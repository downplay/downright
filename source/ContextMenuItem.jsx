import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContextMenu from './ContextMenu';

class ContextMenuItem extends Component {

  static propTypes = {
    type: PropTypes.oneOf(['label', 'button', 'link', 'separator', 'submenu']),
    caption: PropTypes.node,
    tooltip: PropTypes.string,
    onClick: PropTypes.func,
    onCloseMenu: PropTypes.func,
    className: PropTypes.string,
    menu: PropTypes.array,
    to: PropTypes.string,
    submenuStyle: PropTypes.object,
  }

  static defaultProps = {
    type: 'label',
    caption: null,
    tooltip: null,
    onClick: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      submenuVisible: false,
    };
  }

  // On receive props / will receive props, verify correct action is there e.g. handler/to

  onSubmenuMouseEnter = () => {
    this.setState({
      submenuVisible: true,
    });
  }

  onSubmenuMouseLeave = () => {
    this.setState({
      submenuVisible: false,
    });
  }

  onButtonClick = (event) => {
    // Execute the click handler
    this.props.onClick(event);
    // Trigger provider to close the menu
    this.props.onCloseMenu();
  }

  innerElement() {
    switch (this.props.type) {
      case 'label':
        return <h2>{this.props.content}</h2>;
      case 'separator':
        return <hr/>;
      case 'submenu':
        const submenuStyle = {
          ...this.props.submenuStyle,
          left: '100%',
          top: 0
        };
        return (
          <div onMouseEnter={this.onSubmenuMouseEnter} onMouseLeave={this.onSubmenuMouseLeave} style={{position: 'relative' }}>
            <span>{this.props.content}</span>
            { this.state.submenuVisible ? (
              // TODO: Move into subcomponent
              <ContextMenu style={submenuStyle}>
                {this.props.menu.map((menuItem, index) => (
                  // TODO: Not really anything better to use for a key, but could allow key as an optional prop, not a lot of point in this case though....
                  // eslint-disable-next-line react/no-array-index-key
                  <ContextMenuItem key={index} {...menuItem} onCloseMenu={this.props.onCloseMenu} />
                ))}
              </ContextMenu>
            ) : null}
          </div>
        );
      case 'link':
        return <Link to={this.props.to}>{this.props.content}</Link>;
      case 'button':
      default:
        return <button onClick={this.onButtonClick}>{this.props.content}</button>;
    }
  }

  render() {
    return (
      <div title={this.props.tooltip}>
        {this.innerElement()}
      </div>
    );
  }

}

export default ContextMenuItem;
