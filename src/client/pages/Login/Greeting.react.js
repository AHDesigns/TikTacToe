import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUserDetails } from '../../modules/userDetails/reducer.js';
import { changeName } from '../../modules/userDetails/actions.js';

const Login = ({name, changeName}) => (
  <div className="Login">
      <div className="loader">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
      </div>
      <div className="primaryHeading"><h2>Page Coming Soon...</h2></div>
  </div>
);

const mapStateToProps = (state) => ({
  name: getUserDetails(state)
})
const mapDispatchToProps = ({
  changeName
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
