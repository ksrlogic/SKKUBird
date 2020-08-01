import React from 'react';
import PropTypes from 'prop-types'
import "antd/dist/antd.css";
import "../styles.css"
import Head from "next/head"
const SkkuBird = ({Component}) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>SkkuBird</title>
        </Head>
            <Component />
        </>
    );
};

SkkuBird.propTypes ={
    Component: PropTypes.elementType.isRequired
}

export default SkkuBird;