import produce from "immer";

import {
	LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
	LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
	SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
	CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
	FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
	UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME,
} from "../actions"; // prettier-ignore

export const initialState = {
	loginLoading: false, // 로그인 로딩
	loginDone: false,
	loginError: null,
	logoutLoading: false, //  로그아웃 로딩
	logoutDone: false,
	logoutError: null,
	signUpLoading: false, //  회원가입 로딩
	signUpDone: false,
	signUpError: null,
	changeNicknameLoading: false, // 닉네임 변경 시도중
	changeNicknameDone: false,
	changeNicknameError: null,
	me: null,
	signUpData: {},
	loginData: {},
};

const dummyUser = data => {
	return {
		...data,
		nickname: "KSR",
		id: 1,
		Posts: [{ id: 1 }],
		Followings: [{ nickname: "둘리" }, { nickname: "둘리" }, { nickname: "둘리" }],
		Followers: [{ nickname: "둘리" }, { nickname: "둘리" }, { nickname: "둘리" }],
	};
};
//  LOGIN
export const loginRequestAction = data => {
	return {
		type: LOG_IN_REQUEST,
		data,
	};
};
export const loginFailureAction = data => {
	return {
		type: LOG_IN_FAILURE,
		data,
	};
};

export const loginSuccessAction = data => {
	return {
		type: LOG_IN_SUCCESS,
		data,
	};
};

//	LOGOUT
export const logoutRequestAction = () => {
	return {
		type: LOG_OUT_REQUEST,
	};
};
export const logoutFailureAction = () => {
	return {
		type: LOG_OUT_FAILURE,
	};
};
export const logoutSuccessAction = () => {
	return {
		type: LOG_OUT_SUCCESS,
	};
};
//
const reducer = (state = initialState, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOG_IN_REQUEST:
				draft.loginLoading = true;
				break;
			case LOG_IN_SUCCESS:
				draft.loginLoading = false;
				draft.loginDone = true;
				draft.me = dummyUser(action.data);
				break;
			case LOG_IN_FAILURE:
				draft.loginLoading = false;
				draft.loginError = true;
				break;
			case LOG_OUT_REQUEST:
				draft.loginLoading = true;
				draft.logoutError = null;
				break;
			case LOG_OUT_SUCCESS:
				draft.logoutLoading = false;
				draft.logoutDone = true;
				draft.me = null;
				break;
			case LOG_OUT_FAILURE:
				draft.logoutLoading = false;
				draft.logoutError = action.error;
				break;
			case SIGN_UP_REQUEST:
				draft.signUpLoading = true;
				draft.signUpDone = null;
				break;
			case SIGN_UP_SUCCESS:
				draft.signUpDone = true;
				draft.signUpLoading = false;
				draft.signUpError = null;
				break;
			case SIGN_UP_FAILURE:
				draft.signUpLoading = false;
				draft.signUpError = action.error;
				break;
			case CHANGE_NICKNAME_REQUEST:
				draft.changeNicknameLoading = true;
				draft.changeNicknameDone = null;
				break;
			case CHANGE_NICKNAME_SUCCESS:
				draft.changeNicknameLoading = false;
				draft.changeNicknameDone = true;
				break;
			case CHANGE_NICKNAME_FAILURE:
				draft.changeNicknameLoading = false;
				draft.changeNicknameError = action.error;
				break;
			case ADD_POST_TO_ME:
				draft.me.Posts.unshift({ id: action.data });
				break;
			case REMOVE_POST_OF_ME:
				draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
				break;
			case "SIGN_UP_RESET":
				draft.signUpDone = false;
				draft.signUpError = null;
				break;
			default:
				break;
		}
	});
};
export default reducer;
