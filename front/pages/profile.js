import React from "react";
import Head from "next/head";

import AppLayout from "../Components/AppLayout";
import NicknameEditForm from "../Components/NicknameEditForm";
import FollowList from "../Components/FollowList";
const Profile = () => {
  const followingList = [
    { nickname: "KSR" },
    { nickname: "PPAP" },
    { nickname: "SSD" },
  ];
  const followerList = [
    { nickname: "KSR" },
    { nickname: "PPAP" },
    { nickname: "SSD" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | SkkuBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
