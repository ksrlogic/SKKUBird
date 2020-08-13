import React from "react";
import { useSelector } from "react-redux";

import AppLayout from "../Components/AppLayout";

import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard/PostCard";

const Home = () => {
	const { me } = useSelector(state => state.user);
	const { mainPosts } = useSelector(state => state.post);
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
