// import 'babel-polyfill';
import {fork} from 'redux-saga/effects';
import configGet from './userDetails/sagas/GetSaga.js';

export default function * rootSaga() {
  yield[
    fork(configGet)
  ];
}
