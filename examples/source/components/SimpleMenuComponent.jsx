import React, { Component } from 'react';
import { contextMenu } from 'downright';

@contextMenu((props, state, menuContext) => (
  [
    ['Item1', () => alert('clicked item 1')], // eslint-disable-line no-alert
    ['X', () => menuContext.closeMenu()],
  ]
))
export default class SimpleMenuComponent extends Component {
  render = () => (
    <div style={{ background: '#f00', width: '200px', height: '200px' }}>
      Right-click anywhere here for a menu!
    </div>
  )
}
