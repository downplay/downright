import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Index from './Index';
import Simple from './Simple';

export default () => (

  <AppContainer>
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/simple" component={Simple} />
        </Switch>
      </HashRouter>
    </div>
  </AppContainer>

);