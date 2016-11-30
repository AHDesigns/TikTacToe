import React, { Component } from 'react';

import Tile from '../../modules/Tile/components/Tile.react.js';
import TurnControler from '../../modules/TurnControler/components/TurnController.react.js';

const Board = () => {
  let numbOfTiles = [];
  for(let x = 0; x < 9; x++) numbOfTiles.push(x);

  const tiles = numbOfTiles.map((i) => (
      <Tile key={i} tileId={i}/>
  ));

  return(
      <div>
          <div className="c-board">{tiles}</div>
          <TurnControler />
      </div>
  );
}

export default Board;
