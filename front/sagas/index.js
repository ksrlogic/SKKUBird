import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function addPostAPI() {
  return axios.post("/api/post");
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data); // 그냥 인자로 넘기면 알아서 들어감. 더받고싶으면 더 넣으면 댐
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data, //result.data 고정
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data, //err.response.data 고정
    });
  }
}

function* logout() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data, //result.data 고정
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data, //err.response.data 고정
    });
  }
}

function* addPost() {
  try {
    const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data, //result.data 고정
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data, //err.response.data 고정
    });
  }
}

function* watchLogin() {
  yield takeEvery("LOG_IN_REQUEST", login);
}

function* watchLogout() {
  yield takeEvery("LOG_OUT_REQUEST", logout);
}

function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin), //call
    fork(watchLogout),
    fork(watchAddPost),
  ]);
}
