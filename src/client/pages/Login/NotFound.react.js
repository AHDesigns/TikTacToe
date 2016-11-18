import React, {Component} from 'react';
import { Link } from 'react-router';

class Login extends Component {
  componentWillMount(){
    // this.props.initialiseEmptyInputs(formInputs);
  }

  render() {
    return (
        <div className="primaryHeading heightfix">
            <h2>
                Oh Dear! <br />This page doesn't exist<br />
                <div className="c-btn c-btn--inverse"><Link to="/">Return Home</Link></div>
            </h2>
        </div>
    );
  }
}

export default Login;
