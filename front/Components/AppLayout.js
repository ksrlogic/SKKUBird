import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "antd";

import { useSelector } from "react-redux";

import LoginForm from "../Components/LoginForm";
import UserProfile from "../Components/UserProfile";
import Navbar from "../Components/Navbar";

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col className="ksr_profile" xs={24} md={6}>
          <a
            href="http://www.ksrlogic.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={"/profile.PNG"} alt="KSR_Profile" />
          </a>
          <span>Made by KSR</span>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
