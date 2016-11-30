import * as constants from './constants';

export const dataInput = (formInputField, formInputData) => ({
  type: constants.CHANGE_INPUT,
  formInputField,
  formInputData
});

export const clearInputs = () => ({
  type: constants.CLEAR_INPUTS
});

export const initialiseEmptyInputs = (inputFields) => ({
  type: constants.INITIALISE_EMPTY_INPUTS,
  inputFields
});

export const initialisePopulatedInputs = (inputFields) => ({
  type: constants.INITIALISE_POPULATED_INPUTS,
  inputFields
});

export const submitLogin = (inputFields) => ({
  type: constants.SUBMIT_LOGIN_DETIALS,
  inputFields
});
