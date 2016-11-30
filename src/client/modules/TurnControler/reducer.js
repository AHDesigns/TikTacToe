import * as constants from './constants';

const initialState = true;

const playerNoughtsTurn = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_TURN:
      return !state;
    default:
      return state;
  }
};

export const getPlayerNoughtsTurn = (state) => state.playerNoughtsTurn;
export default playerNoughtsTurn;
