import {takeLatest} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';

import {getSomething} from '../../../api/api.js';

export function * fetchApps(action) {
  try {
    const data = yield call(getSomething, action.id);
    yield put({type: 'SELECT_ENV_SUCCESS', apps: data});
  } catch (error) {
    yield put({type: 'SELECT_ENV_FAILURE', message: error.message});
  }
}

export default function * rootSaga() {
  yield fork(takeLatest, 'SELECT_ENV', fetchApps);
}
