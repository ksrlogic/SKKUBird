import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AppLayout from "../Components/AppLayout";

import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard/PostCard";
import { LOAD_POSTS_REQUEST } from "../actions";

const Home = () => {
	const dispatch = useDispatch();
	const { me } = useSelector(state => state.user);
	const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(state => state.post);

	useEffect(() => {
		dispatch({
			type: LOAD_POSTS_REQUEST,
		});
	}, []);

	useEffect(() => {
		function onScroll() {
			if (
				window.scrollY + document.documentElement.clientHeight
				=== document.documentElement.scrollHeight - 500 && hasMorePosts && !loadPostsLoading
			) {
				dispatch({
					type: LOAD_POSTS_REQUEST,
				});
			}
		}
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [hasMorePosts, loadPostsLoading]); // prettier-ignore

	return (
		<AppLayout>
			{me && <PostForm />}
			{mainPosts.map(post => (
				<PostCard key={post.id} post={post} />
			))}
		</AppLayout>
	);
};

export default Home;
