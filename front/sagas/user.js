import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
import {
	LOG_IN_SUCCESS,
	LOG_IN_FAILURE,
	LOG_OUT_SUCCESS,
	LOG_OUT_FAILURE,
	LOG_IN_REQUEST,
	LOG_OUT_REQUEST,
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from "../actions";

function loginAPI(data) {
	return axios.post("/user/login", data);
}

// function logoutAPI() {
//   return axios.post("/api/logout");
// }

function signupAPI(data) {
	return axios.post("/user/signup", data);
}

function* login(action) {
	try {
		const result = yield call(loginAPI, action.data); // 그냥 인자로 넘기면 알아서 들어감. 더받고싶으면 더 넣으면 댐
		yield delay(1000);
		yield put({
			type: LOG_IN_SUCCESS,
			data: {}, //	result.data 고정
		});
	} catch (err) {
		yield put({
			type: LOG_IN_FAILURE,
			error: err.response.data, //	err.response.data 고정
		});
	}
}

function* logout() {
	try {
		// const result = yield call(logoutAPI);
		yield delay(1000);
		yield put({
			type: LOG_OUT_SUCCESS,
			//   data: result.data, //result.data 고정
		});
	} catch (err) {
		yield put({
			type: LOG_OUT_FAILURE,
			error: err.response.data, //  err.response.data 고정
		});
	}
}
function* signup(action) {
	try {
		const result = yield call(signupAPI, action.data);
		yield put({
			type: SIGN_UP_SUCCESS,
			//   data: result.data,
		});
	} catch (err) {
		yield put({
			type: SIGN_UP_FAILURE,
			error: err.response.data,
		});
	}
}

function* watchLogin() {
	yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
	yield takeLatest(LOG_OUT_REQUEST, logout);
}
function* watchSignup() {
	yield takeLatest(SIGN_UP_REQUEST, signup);
}
export default function* userSaga() {
	yield all([
		fork(watchLogin), //  call
		fork(watchLogout),
		fork(watchSignup),
	]);
}
