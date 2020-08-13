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
				<Menu.Item key="home">
					<Link href="/">
						<a>SKKU BIRD</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="profile">
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="finder">
					<StyledSearch
						placeholder="찾기.."
						value={value}
						onSearch={e => setValue(e)}
						enterButton
					/>
				</Menu.Item>
			</Menu>
		</nav>
	);
};

export default Navbar;
