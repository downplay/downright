import React, { Component } from 'react';
import { ContextMenuProvider } from 'downright';
import FullWidthFullHeight from './layout/FullWidthFullHeight';
import SimpleMenuComponent from './components/SimpleMenuComponent';

export default class Simple extends Component {
  render = () => (
    <ContextMenuProvider>
      <FullWidthFullHeight>
        <SimpleMenuComponent />
      </FullWidthFullHeight>
    </ContextMenuProvider>
  )
}
