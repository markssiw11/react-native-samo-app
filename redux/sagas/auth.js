// auth saga
import * as types from '../../redux/actions/types';

import { takeLatest} from 'redux-saga/effects';

function* logout(params) {
  try {
    console.log('params======', params);
  } catch (error) {
    console.log('Error======', error);
  }
}

function* authSaga() {
  yield takeLatest(types.BLACKLIST_AUTH_HIDE, logout);
}
export default authSaga;
