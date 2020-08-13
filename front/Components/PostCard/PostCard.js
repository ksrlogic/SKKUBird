import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Popover, Avatar, List, Comment } from "antd";
import {
	RetweetOutlined, HeartOutlined, MessageOutlined,
   EllipsisOutlined, HeartTwoTone } from "@ant-design/icons"; // prettier-ignore
import { useSelector, useDispatch } from "react-redux";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { removePostAction } from "../../reducers/post";

const PostCard = ({ post }) => {
	const id = useSelector(state => state.user.me?.id);
	const { removePostLoading } = useSelector(state => state.post);
	const [liked, setLiked] = useState(false);
	const [CommentFormOpened, setCommendFormOpened] = useState(false);
	const dispatch = useDispatch();

	const onToggleLike = useCallback(() => {
		setLiked(prev => !prev);
	}, []);

	const onToggleComment = useCallback(() => {
		setCommendFormOpened(prev => !prev);
	}, []);

	const onRemovePost = useCallback(() => {
		dispatch(removePostAction(post.id));
	}, []);

	return (
		<div>
			<Card
				className="icons_wrapper"
				cover={post.Images[0] && <PostImages images={post.Images} />}
				actions={[
					<>
						<RetweetOutlined key="retweet" />
						{liked ? (
							<HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onToggleLike} />
						) : (
							<HeartOutlined key="heart" onClick={onToggleLike} />
						)}
						<MessageOutlined key="comment" onClick={onToggleComment} />
						<Popover
							key="more"
							content={
								<Button.Group>
									{id && post.User.id === id ? (
										<>
											<Button>수정</Button>
											<Button type="danger" loading={removePostLoading} onClick={onRemovePost}>
												삭제
											</Button>
										</>
									) : (
										<Button>신고</Button>
									)}
								</Button.Group>
							}
						>
							<EllipsisOutlined />
						</Popover>
					</>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={<PostCardContent postData={post.content} />}
				/>
			</Card>
			{CommentFormOpened && (
				<div>
					<CommentForm post={post} />
					<List
						header={`${post.Comments.length}개의 댓글`}
						itemLayout="horizontal"
						dataSource={post.Comments}
						renderItem={item => (
							<li>
								<Comment
									author={item.User.nickname}
									avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
									content={item.content}
								/>
							</li>
						)}
					/>
				</div>
			)}
		</div>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default PostCard;
