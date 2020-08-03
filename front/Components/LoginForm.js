import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { loginAction } from "../reducers/user";

const StyledButton = styled.div`
  margin-top: 10px;
`;
const StyledForm = styled(Form)`
  padding: 10px;
`;
const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePWD = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  return (
    <StyledForm onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user_id">아이디</label>
        <br />
        <Input name="user_id" value={id} onChange={onChangeId} required></Input>
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
        ></Input>
      </div>
      <StyledButton>
        <Button type="primary" htmlType="submit" loading={false}>
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
