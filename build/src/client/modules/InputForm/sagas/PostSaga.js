import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import { postSomething } from '../../../api/api.js';
import * as actions from '../constants';

export function* addEnv(action) {
  console.log('i was called',action.inputFields);
  try {
    console.log('i was called',action.inputFields);
    const data = yield call(postSomething, action.inputFields);
    yield put({ type: 'ADD_ENV_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'ENV_FAILURE', message: error.message });
  }
}
//
// export function* addApp(action) {
//     try {
//         const data = yield call(postApp, action.data);
//         yield put({ type: 'ADD_APP_SUCCESS', data });
//     } catch (error) {
//         yield put({ type: 'APP_FAILURE', message: error.message });
//     }
// }
//
// export function* addPath(action) {
//     try {
//         const data = yield call(postPath, action.data);
//         yield put({ type: 'ADD_PATH_SUCCESS', data });
//     } catch (error) {
//         yield put({ type: 'PATH_FAILURE', message: error.message });
//     }
// }

export default function* rootSaga() {
  yield fork(takeLatest, actions.SUBMIT_LOGIN_DETIALS, postSomething);
}
