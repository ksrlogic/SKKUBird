import React from "react";
import PropTypes from "prop-types";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";

import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

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

export default wrapper.withRedux(withReduxSaga(SkkuBird));
