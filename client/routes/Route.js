import React from 'react';
import { Route, Redirect } from 'react-router';

import ViewerQuery from './ViewerQuery';
import AppContainer from '../components/App/AppContainer';

export default (
  <Route path='/' component={AppContainer} queries={ViewerQuery}>
    <Redirect from='*' to='/' />
  </Route>
);
