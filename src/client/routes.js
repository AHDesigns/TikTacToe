import React from 'react';
import { IndexRoute, Route } from 'react-router';

import NavBar from './modules/NavBar/NavBar.react.js'
import Board from './pages/Board/Board.react.js';
import NoPage from './pages/Login/NotFound.react.js';

const Common = (props) => (
    <NavBar>{props.children}</NavBar>
);

const landingPage = Board;

export default (
    <Route path="/" component={Common}>
        <IndexRoute component={landingPage}/>
        {/* <Route path="/login" component={Login}/> */}
        <Route path="*" component={NoPage}/>
    </Route>
);
