import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd';


const { Search } = Input;

// const StyledSearch = Search.

const AppLayout = ({children}) => {
    const [value , setValue] = useState()
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>스꾸버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Search placeholder="" value={value} onSearch={value => setValue(value)} enterButton style={{verticalAlign: "middle"}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item> 
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    왼쪽메뉴
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://www.ksrlogic.com" target="_blank" rel="noreferrer noopener">Made by KSR</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;