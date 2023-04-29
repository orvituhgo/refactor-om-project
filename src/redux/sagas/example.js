import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { loginSuccess, loginRequest, loginFailure } from '../slices/login/login-slice';

export const requisicao = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

// worker saga - it can be another function name
function* workerSaga() {
  try {
    yield call(requisicao);
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailure(err.toString()));
  }
}
// watcher saga
export default all([
  takeLatest(loginRequest, workerSaga),
]);
