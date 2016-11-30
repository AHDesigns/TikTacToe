import * as constants from './constants';

export const clickTile = (id, playerNoughtsTurn) => ({
  type: constants.CLICK_TILE,
  playerNoughtsTurn,
  id
});

export const initialiseTile = () => ({
  type: constants.INITIALISE_TILE
})

export const restartGame = () => ({
  type: constants.RESTART_GAME
})
