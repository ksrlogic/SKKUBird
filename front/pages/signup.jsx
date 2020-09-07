import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import Router from "next/router";

import AppLayout from "../Components/AppLayout";
import useInput from "../Hooks/useInput";

import { SIGN_UP_REQUEST } from "../actions";

const ErrorMessage = styled.div`
	color: red;
`;
const StyledButton = styled(Button)`
	margin-top: 10px;
`;

const Signup = () => {
	const [email, onChangeEmail] = useInput("");
	const [password, onChangePassword] = useInput("");
	const [nickname, onChangeNickname] = useInput("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);

	const dispatch = useDispatch();

	const { signUpLoading, signUpDone, signUpError } = useSelector(state => state.user);
	useEffect(() => {
		if (signUpDone) {
			Router.push("/");
			dispatch({
				type: "SIGN_UP_RESET",
			});
		}
	}, [signUpDone]);
	useEffect(() => {
		if (signUpError) {
			alert(signUpError);
			dispatch({
				type: "SIGN_UP_RESET",
			});
		}
	}, [signUpError]);

	const onChangePasswordCheck = useCallback(
		e => {
			setPasswordCheck(e.target.value);
			setPasswordError(e.target.value !== password);
		},
		[password],
	);

	const [term, setTerm] = useState("");

	const onChangeTerm = useCallback(e => {
		setTerm(e.target.checked);
		setTermError(false);
	}, []);

	const onsubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordCheck(true);
		}
		if (!term) {
			return setTermError(true);
		}
		dispatch({
			type: SIGN_UP_REQUEST,
			data: { email, password, nickname },
		});
	}, [email, password, passwordCheck, term]);

	return (
		<>
			<AppLayout>
				<Head>
					<title>회원가입 | SkkuBird</title>
				</Head>
				<Form onFinish={onsubmit}>
					<div>
						<label htmlFor="user-email">아이디</label>
						<br />
						<Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
					</div>
					<div>
						<label htmlFor="user-nick">닉네임</label>
						<br />
						<Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
					</div>
					<div>
						<label htmlFor="user-password">비밀번호</label>
						<br />
						<Input
							name="user-password"
							type="password"
							value={password}
							required
							onChange={onChangePassword}
						/>
					</div>
					<div>
						<label htmlFor="user-password-check">비밀번호 확인</label>
						<br />
						<Input
							name="user-password-check"
							type="password"
							value={passwordCheck}
							required
							onChange={onChangePasswordCheck}
						/>
						{passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
					</div>
					<div>
						<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
							나는 성균관대 학생입니다.
						</Checkbox>
						{termError && <ErrorMessage> 약관에 동의하셔야 합니다.</ErrorMessage>}
					</div>

					<StyledButton loading={signUpLoading} type="primary" htmlType="submit">
						가입하기
					</StyledButton>
				</Form>
			</AppLayout>
		</>
	);
};

export default Signup;
