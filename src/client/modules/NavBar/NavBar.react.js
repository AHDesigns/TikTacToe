import React, {Component} from 'react';
import { Link } from 'react-router'

const NavBar = ({children}) => (
  <div>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/">Tribes</Link>
      <Link to="/wpefok">404</Link>
    </div>
    {children}
  </div>
);

export default NavBar;
