import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFormData } from './reducer.js'
import { dataInput, clearInputs, submitLogin } from './actions.js'

export class InputBox extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearValues = this.clearValues.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentWillMount(){
    // console.log(this.props.formData);
  }

  onChange(e) {
    this.props.dataInput(e.target.name, e.target.value.substr(0,20));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitLogin(this.props.formData);
    // this.setState({name: ''});
    // this.props.open('NONE_FORM');
  }

  clearValues() {
    this.props.clearInputs();
  }

  cancelForm() {
    //dispatch cancel action
  }

  render() {
    const inputs = this.props.formInputFieldsArray.map(formInputField => {
      return (
        <li key={formInputField.name} className="c-form-list__item">
          <label className="c-form-label" htmlFor={formInputField.name}>
            {formInputField.name}
          </label>
          <input
            name={formInputField.name}
            className="c-form-input"
            type={formInputField.type}
            value={this.props.formData[formInputField.name]}
            onChange={this.onChange}
            placeholder={formInputField.placeholder}
            required={formInputField.required}
          />
        </li>
      )
    });
    return (
      <form onSubmit={this.onSubmit}>
        {inputs}
        <button className="c-btn c-btn--primary c-btn--config" type="submit">
          Submit
        </button>
        <button
          className="c-btn c-btn--secondary c-btn--config"
          type="button"
          onClick={this.clearValues}
        >
          Clear Values
        </button>
      </form>
    )
  }
};

const formInputField = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired
})

InputBox.propTypes = ({
  formInputFieldsArray: React.PropTypes.arrayOf(formInputField),
  formData: PropTypes.object.isRequired
})

const mapStateToProps = (state) => ({
  formData: getFormData(state)
});

const mapDispatchToProps = ({
  dataInput,
  clearInputs,
  submitLogin
})

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
