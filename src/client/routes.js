import React from 'react';
import { IndexRoute, Route } from 'react-router';

import TopBar from './pages/Login/TopBar.react.js';
import Login from './pages/Login/Login.react.js';
import Login2 from './pages/Login/Login2.react.js';
import NoPage from './pages/Login/NotFound.react.js';

const Common = (props) => (
  <TopBar>{props.children}</TopBar>
);

export default (
  <Route path="/" component={Common}>
    <IndexRoute component={Login}/>
    <Route path="*" component={NoPage}/>
  </Route>
);
