import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import InputForm from '../../modules/InputForm/InputForm.react.js';
// import { initialiseEmptyInputs } from '../../modules/InputForm/actions.js'

const formInputs = [
  {
    name: 'Username',
    type: 'text',
    placeholder: 'username or email ',
    required: true
  },
  {
    name: 'Password',
    type: 'password',
    placeholder: 'password',
    required: true
  }
]

class Login extends Component {
  componentWillMount(){
    // this.props.initialiseEmptyInputs(formInputs);
  }

  render() {
    return (
      <div className="Login">
        I am login!
        <Link to="/">home</Link>
        {/* <InputForm formInputFieldsArray={formInputs} /> */}
      </div>
    );
  }
}

// const mapDispatchToProps = ({
//   initialiseEmptyInputs
// })

export default connect(null, null)(Login);
