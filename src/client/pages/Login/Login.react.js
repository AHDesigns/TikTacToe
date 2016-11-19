import React, {Component} from 'react';
import { connect } from 'react-redux';

import InputForm from '../../modules/InputForm/InputForm.react.js';
import { initialiseEmptyInputs } from '../../modules/InputForm/actions.js'

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
  constructor(props) {
    super(props);
    this.state = {
      displayState: "",
      displayStateLoading: "noDisplay"
    }

    this.handleImageLoad = this.handleImageLoad.bind(this);
  }
  componentWillMount(){
    this.props.initialiseEmptyInputs(formInputs);
  }

  handleImageLoad(){
    console.log("loaded");
    this.setState({
      displayState: "noDisplay",
      displayStateLoading: ""
    })
  }

  render() {
    return (
        <div>
            <InputForm formInputFieldsArray={formInputs} />
        </div>
    );
  }
}

const mapDispatchToProps = ({
  initialiseEmptyInputs
})


export default connect(null, mapDispatchToProps)(Login);
