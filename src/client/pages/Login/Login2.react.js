import React, {Component} from 'react';
import { Link } from 'react-router';

class Login extends Component {
  componentWillMount(){
    // this.props.initialiseEmptyInputs(formInputs);
  }

  render() {
    return (
      <div className="Login">
        I am login!
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Login;
