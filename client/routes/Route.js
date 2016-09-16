import React from 'react';
import { Route, Redirect } from 'react-router';

import HelloQuery from './HelloQuery';
import AppContainer from '../components/App/AppContainer';

export default (
  <Route path='/' component={AppContainer} queries={HelloQuery}>
    <Redirect from='*' to='/' />
  </Route>
);
