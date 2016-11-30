import * as constants from './constants';

const initialState = [];

const tileState = (state = initialState, action) => {
  switch (action.type) {
    case constants.INITIALISE_TILE:
      return [
        ...state,
        0
      ];
    case constants.CLICK_TILE:
      const noughtOrCross = (action.playerNoughtsTurn) ? 1 : 2;
      return [
        ...state.slice(0, action.id),
        noughtOrCross,
        ...state.slice(action.id + 1)
      ];
    case constants.RESTART_GAME:
      return state.map(i => 0);
    default:
      return state;
  }
};

export const getTileState = (state) => state.tileState;
export default tileState;
