import * as constants from './constants';

const initialState = {}

const formData = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case constants.INITIALISE_EMPTY_INPUTS:
      for (let x = 0; x < action.inputFields.length; x++ ) {
        newState = {...newState, [action.inputFields[x].name]: ''}
      }
      return newState;
    case constants.INITIALISE_POPULATED_INPUTS:
      for (let x = 0; x < action.inputFields.length; x++ ) {
        newState = {...newState, [action.inputFields[x].name]: action.inputFields[x].initialText}
      }
      return newState;
    case constants.CHANGE_INPUT:
      return { ...state, [action.formInputField]: action.formInputData};
    case constants.CLEAR_INPUTS:
      newState = state;
      for (let item in newState) {
        newState = {...newState, [item]: ''}
      }
      return { ...newState };
    default:
      return state;
  }
};

export const getFormData = (state) => state.InputForm;
export default formData;
