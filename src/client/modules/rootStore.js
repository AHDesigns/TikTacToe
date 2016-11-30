import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import tileState from './Tile//reducer.js';
import playerNoughtsTurn from './TurnControler/reducer.js';

import saga from './rootSaga.js';

const logger = createLogger({ collapsed: true });

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  tileState,
  playerNoughtsTurn
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(saga);

export default store;
