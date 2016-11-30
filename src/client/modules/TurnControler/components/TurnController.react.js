import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayerNoughtsTurn } from '../reducer.js';
import { getTileState } from '../../Tile/reducer.js';
import { restartGame } from '../../Tile/actions.js';

const winnerCheck = (tileState) => {
  const positions = tileState;
  let winner = 0;
  for ( let x = 1; x <3; x++){
    if     (positions[0] && positions[1] && positions[2] == x) winner = x;
    else if(positions[0] && positions[3] && positions[6] == x) winner = x;
    else if(positions[0] && positions[5] && positions[8] == x) winner = x;
    else if(positions[3] && positions[4] && positions[5] == x) winner = x;
    else if(positions[6] && positions[7] && positions[8] == x) winner = x;
    else if(positions[1] && positions[4] && positions[7] == x) winner = x;
    else if(positions[2] && positions[5] && positions[8] == x) winner = x;
    else if(positions[2] && positions[4] && positions[6] == x) winner = x;
  }

  switch (winner){
    case 0:
      return "";
    case 1:
      return "noughts wins";
    case 2:
      return "crosses win";
    default:
      return "";
  }
}

const TurnController = ({playerNoughtsTurn, restartGame, tileState}) => {
  const turnSelectorClass = (playerNoughtsTurn) ? 'c-player-noughts' : 'c-player-crosses';
  const tileClass = `c-player ${turnSelectorClass}`;

  const winnMessage = winnerCheck(tileState)

  return(
      <div className={tileClass} onClick={() => { restartGame(); console.log('hi there');}}>{winnMessage}Restart</div>
  );
}

const mapStateToProps = (state) => ({
  playerNoughtsTurn: getPlayerNoughtsTurn(state),
  tileState: getTileState(state)
})

const mapDispatchToProps = ({
  restartGame
})

export default connect(mapStateToProps, mapDispatchToProps)(TurnController);
