import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { loginRequestAction } from "../reducers/user";
import useInput from "../Hooks/useInput";

const StyledButton = styled.div`
	margin-top: 10px;
`;
const StyledForm = styled(Form)`
	padding: 10px;
`;
const LoginForm = () => {
	const dispatch = useDispatch();
	const [email, onChangeEmail] = useInput();
	const [password, onChangePWD] = useInput();
	const { loginLoading } = useSelector(state => state.user);

	const onSubmitForm = useCallback(() => {
		dispatch(loginRequestAction({ email, password }));
	}, [email, password]);

	return (
		<StyledForm onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user_id">아이디</label>
				<br />
				<Input name="user_id" type="email" value={email} onChange={onChangeEmail} required />
			</div>
			<div>
				<label htmlFor="user_password">패스워드</label>
				<br />
				<Input
					name="user_password"
					type="password"
					value={password}
					onChange={onChangePWD}
					required
				/>
			</div>
			<StyledButton>
				<Button type="primary" htmlType="submit" loading={loginLoading}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</StyledButton>
		</StyledForm>
	);
};

export default LoginForm;
