import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './modules/rootStore.js';

import Login from './pages/Login/Login.react.js';
import Login2 from './pages/Login/Login2.react.js';

import './styles/global.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Login}/>
      <Route path="login" component={Login2}/>
      <Route path="*" component={Login}/>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
);
