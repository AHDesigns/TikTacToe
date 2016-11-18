import React from 'react';
import { IndexRoute, Route } from 'react-router';

import NavBar from './modules/NavBar/NavBar.react.js'
import Login from './pages/Login/Login.react.js';
import Greeting from './pages/Login/Greeting.react.js';
import NoPage from './pages/Login/NotFound.react.js';

const Common = (props) => (
    <NavBar>{props.children}</NavBar>
);

export default (
    <Route path="/" component={Common}>
        <IndexRoute component={NoPage}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NoPage}/>
    </Route>
);
