import shortid from "shortid";
import { produce } from "immer";
import faker from "faker";

import {
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
	ADD_POST_FAILURE,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	ADD_COMMENT_FAILURE,
	REMOVE_POST_REQUEST,
	REMOVE_POST_SUCCESS,
	REMOVE_POST_FAILURE,
} from "../actions";

export const initialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: "비내리는~",
			},
			content: "첫 번째 게시글 #해시태그 ###익스프레스",
			Images: [
				{
					src: "/profile.PNG",
				},
				{
					src: "https://picsum.photos/seed/picsum/200/300",
				},
				{
					src: "https://picsum.photos/seed/picsum/200/300",
				},
			],
			Comments: [
				{
					id: shortid.generate(),
					User: {
						nickname: "nero",
					},
					content: "우와 !!",
				},
				{
					id: shortid.generate(),
					User: {
						nickname: "hero",
					},
					content: "멋지다!",
				},
			],
		},
	],
	imagePaths: [],
	addPostLoading: false, // ADD POST
	addPostDone: false,
	addPostError: null,
	addCommentLoading: false, // ADD COMMENT
	addCommentDone: false,
	addCommentError: null,
	removePostLoading: false, // Remove POST
	removePostDone: false,
	removePostError: null,
};

const dummyPost = data => ({
	id: data.id,
	content: data.content,
	User: {
		id: 1,
		nickname: "KSR",
	},
	Images: [],
	Comments: [],
});

const dummyComment = data => ({
	id: shortid.generate(),
	content: data,
	User: {
		id: 1,
		nickname: "제로초",
	},
});

initialState.mainPosts = initialState.mainPosts.concat(
	Array(20)
		.fill()
		.map(() => ({
			id: shortid.generate(),
			User: {
				id: shortid.generate(),
				nickname: faker.name.findName(),
			},
			content: faker.lorem.paragraph(),
			Images: [
				{
					src: faker.image.imageUrl(),
				},
			],
			Comments: [
				{
					id: shortid.generate(),
					User: {
						nickname: faker.name.findName(),
					},
					content: faker.lorem.sentence(),
				},
			],
		})),
);

export const addPostAction = data => {
	return {
		type: ADD_POST_REQUEST,
		data,
	};
};

export const removePostAction = data => {
	return {
		type: REMOVE_POST_REQUEST,
		data,
	};
};

export const addCommentAction = () => {
	return {
		type: ADD_COMMENT_REQUEST,
	};
};

const reducer = (state = initialState, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case ADD_POST_REQUEST:
				draft.addPostLoading = true;
				draft.addPostDone = false;
				draft.addPostError = null;
				break;
			case ADD_POST_SUCCESS:
				draft.mainPosts.unshift(dummyPost(action.data));
				draft.addPostDone = true;
				draft.addPostLoading = false;
				break;
			case ADD_POST_FAILURE:
				draft.addPostDone = false;
				draft.addPostLoading = false;
				draft.addPostError = action.error;
				break;
			case ADD_COMMENT_REQUEST:
				draft.addCommentLoading = true;
				break;
			case ADD_COMMENT_SUCCESS: {
				const post = draft.mainPosts.find(v => v.id === action.data.postId);
				post.Comments.unshift(dummyComment(action.data.content));
				draft.addCommentLoading = false;
				draft.addCommentDone = true;
				break;
			}
			case ADD_COMMENT_FAILURE:
				draft.addCommentLoading = false;
				draft.addPostError = action.error;
				break;
			case REMOVE_POST_REQUEST:
				draft.removePostLoading = true;
				break;
			case REMOVE_POST_SUCCESS:
				draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
				draft.removePostLoading = false;
				draft.removePostDone = true;
				break;
			case REMOVE_POST_FAILURE:
				draft.removePostLoading = false;
				draft.removePostError = action.error;
				break;
			default:
				break;
		}
	});
};

export default reducer;
