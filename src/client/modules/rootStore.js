import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import userDetails from './userDetails/reducer.js';

// import saga from './rootSaga.js';

const logger = createLogger({ collapsed: true });

// const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  userDetails
});

const store = createStore(reducers, applyMiddleware( logger));

// sagaMiddleware.run(saga);

export default store;
