import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import "../styles.css";
import Head from "next/head";

import wrapper from "../store/configureStore";

const SkkuBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>SKKUBIRD</title>
      </Head>
      <Component />
    </>
  );
};

SkkuBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(SkkuBird);
