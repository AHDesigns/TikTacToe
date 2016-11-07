import 'babel-polyfill';
import {fork} from 'redux-saga/effects';
import login from './InputForm/sagas/PostSaga.js';

export default function * rootSaga() {
  yield[
    fork(login)
  ];
}
