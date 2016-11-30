import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTileState } from '../reducer.js'
import { getPlayerNoughtsTurn } from '../../TurnControler/reducer.js';

import {
  clickTile as clickTileAction,
  initialiseTile as initialiseTileAction
} from '../actions.js';

import { changeTurn } from '../../TurnControler/actions.js';

class Tile extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.initialiseTile()
  }

  handleClick(){
    if(!this.props.tileState[this.props.tileId]) {
      this.props.clickTile(this.props.tileId, this.props.playerNoughtsTurn);
      this.props.changeTurn();
    }
  }

  render() {

    let tileClass;
    switch (this.props.tileState[this.props.tileId]){
      case 0:
        tileClass = 'c-tile c-tile-notClicked';
        break;
      case 1:
        tileClass = 'c-tile c-tile-clicked c-tile-nought';
        break;
      case 2:
        tileClass = 'c-tile c-tile-clicked c-tile-cross';
        break;
      default:
        tileClass = 'c-tile c-tile-notClicked';
    }

    return(
        <div className={tileClass} onClick={() => this.handleClick()}></div>
    );
  }
}

const mapStateToProps = (state) => ({
  tileState: getTileState(state),
  playerNoughtsTurn: getPlayerNoughtsTurn(state)
})

const mapDispatchToProps = ({
  clickTile: clickTileAction,
  initialiseTile: initialiseTileAction,
  changeTurn
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
