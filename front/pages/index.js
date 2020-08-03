import React from "react";
import AppLayout from "../Components/AppLayout";
import { useSelector } from "react-redux";

import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
