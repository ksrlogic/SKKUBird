import React from 'react';
import PropTypes from 'prop-types'
import "antd/dist/antd.css";
import "../styles.css"
const SkkuBird = ({Component}) => {
    return (
        <>
            <Component />
        </>
    );
};

SkkuBird.propTypes ={
    Component: PropTypes.elementType.isRequired
}

export default SkkuBird;