import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUserDetails } from '../../modules/userDetails/reducer.js';
import { changeName } from '../../modules/userDetails/actions.js'

const Login = ({name, changeName}) => (
  <div className="Login">
    I am the index, go to the page
    <Link to="/login">login Page</Link>
    <div onClick={() => changeName()}>{name}</div>
  </div>
);

const mapStateToProps = (state) => ({
  name: getUserDetails(state)
});
const mapDispatchToProps = ({
  changeName
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
