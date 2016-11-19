import React, {Component} from 'react';
import { Link } from 'react-router';

const Login = () => (
    <div className="c-heroTitle c-heroTitle--100">
        <h3 className="primaryHeading">
            Oh Dear! <br />This page doesn't exist<br />
            <div className="c-btn c-btn-large c-btn--inverse"><Link to="/">Return Home</Link></div>
        </h3>
    </div>
);
export default Login;
