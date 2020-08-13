import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

const HashDivide = data => {
	const splited = data.split(/(#[^\s#]+)/g);
	const result = splited.map((data, index) => {
		if (data[0] === "#") {
			return (
				<Link key={index} href={`/hashtag/${data.slice(1)}`}>
					<a>{data}</a>
				</Link>
			);
		}
		return data;
	});
	return result;
};

const PostCardContent = ({ postData }) => {
	return <>{HashDivide(postData)}</>;
};

PostCardContent.propTypes = {
	postData: PropTypes.string.isRequired,
};

export default PostCardContent;
