import React, { useState } from "react";
import { Menu, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
const StyledSearch = styled(Input.Search)`
  vertical-align: middle;
`;

const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <nav>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>SKKU BIRD</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <StyledSearch
            placeholder=""
            value={value}
            onSearch={(value) => setValue(value)}
            enterButton
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navbar;
