import React, { useCallback, useEffect } from "react";
import Form from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import PropTypes from "prop-types";

import useInput from "../../Hooks/useInput";
import { ADD_COMMENT_REQUEST } from "../../actions";

const CommentForm = ({ post }) => {
	const dispatch = useDispatch();
	const id = useSelector(state => state.user.me?.id);
	const { addCommentDone } = useSelector(state => state.post);
	const [commentText, onChangeCommentText, setCommentText] = useInput(" ");

	useEffect(() => {
		if (addCommentDone) {
			setCommentText("");
		}
	}, [addCommentDone]);

	const onSubmitComment = useCallback(() => {
		console.log(post.id + commentText);
		dispatch({
			type: ADD_COMMENT_REQUEST,
			data: {
				content: commentText,
				postId: post.id,
				userId: id,
			},
		});
	}, [commentText, id]);

	return (
		<Form onFinish={onSubmitComment}>
			<Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
			<Button type="primary" htmlType="submit">
				삐약
			</Button>
		</Form>
	);
};

CommentForm.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default CommentForm;
