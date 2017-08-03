import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContextMenu from './ContextMenu';

class ContextMenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submenuVisible: false
        };
    }

    static propTypes = {
        type: PropTypes.oneOf([undefined, 'header', 'button', 'separator', 'submenu']),
        caption: PropTypes.node,
        tooltip: PropTypes.string,
        onClick: PropTypes.func,
        onCloseMenu: PropTypes.func,
        className: PropTypes.string,
        menu: PropTypes.array,
        to: PropTypes.string,
        submenuStyle: PropTypes.object
    }

    onSubmenuMouseEnter = () => {
        this.setState({
            submenuVisible: true
        });
    }

    onSubmenuMouseLeave = () => {
        this.setState({
            submenuVisible: false
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
            case 'header':
                return <header>{this.props.caption}</header>;
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
                        <span>{this.props.caption}</span>
                        { this.state.submenuVisible ? (
                            <ContextMenu style={submenuStyle}>
                                {this.props.menu.map((menuItem, index)=>(
                                    <ContextMenuItem key={index} {...menuItem} onCloseMenu={this.props.onCloseMenu} />
                                ))}
                            </ContextMenu>
                        ) : null}
                    </div>
                );
            case 'button':
            default:
                return <button onClick={this.onButtonClick}>{this.props.caption}</button>;
        }
    }

    render() {
        return (
            <div title={this.props.tooltip} style={{cursor: 'pointer'}}>
                {this.innerElement()}
            </div>
        );
    }

}

export default ContextMenuItem;