import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

import AppLayout from "../Components/AppLayout";
import NicknameEditForm from "../Components/NicknameEditForm";
import FollowList from "../Components/FollowList";

const Profile = () => {
	const { me } = useSelector(state => state.user);
	useEffect(() => {
		if (!(me && me.id)) {
			Router.push("/");
		}
	}, [me]);

	if (!me) {
		return null;
	}
	return (
		<>
			<Head>
				<title>내 프로필 | SkkuBird</title>
			</Head>
			<AppLayout>
				<NicknameEditForm />
				<FollowList header="팔로잉" data={me.Followings} />
				<FollowList header="팔로워" data={me.Followers} />
			</AppLayout>
		</>
	);
};

export default Profile;
