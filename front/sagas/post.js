import { all, fork, put, takeLatest, delay } from "redux-saga/effects";
import shortid from "shortid";

import {
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
	ADD_POST_TO_ME,
	REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
	REMOVE_POST_OF_ME,
} from "../actions"; // prettier-ignore

// function addPostAPI() {
//   return axios.post("/api/post");
// }

// function removePostAPI() {
//   return axios.post("/api/post");
// }

function* addComment({ data }) {
	try {
		// const result = yield call(addPostAPI);
		yield delay(1000);
		yield put({
			type: ADD_COMMENT_SUCCESS,
			data, //	result.data 고정
		});
	} catch (err) {
		yield put({
			type: ADD_COMMENT_FAILURE,
			data: err.response.data, //	err.response.data 고정
		});
	}
}
function* addPost({ data }) {
	try {
		// const result = yield call(addPostAPI);
		yield delay(1000);
		const id = shortid.generate();
		yield put({
			type: ADD_POST_SUCCESS,
			data: {
				id,
				content: data,
			}, //	result.data 고정
		});
		yield put({
			type: ADD_POST_TO_ME,
			data: id,
		});
	} catch (err) {
		yield put({
			type: ADD_POST_FAILURE,
			data: err.response.data, //	err.response.data 고정
		});
	}
}

function* removePost({ data }) {
	try {
		// const result = yield call(removePostAPI);
		yield delay(1000);
		yield put({
			type: REMOVE_POST_SUCCESS,
			data, //	result.data 고정
		});
		yield put({
			type: REMOVE_POST_OF_ME,
			data,
		});
	} catch (err) {
		yield put({
			type: REMOVE_POST_FAILURE,
			data: err.response.data, //	err.response.data 고정
		});
	}
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
	yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchCommentPost() {
	yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
export default function* postSaga() {
	yield all([fork(watchAddPost), fork(watchCommentPost), fork(watchRemovePost)]);
}
