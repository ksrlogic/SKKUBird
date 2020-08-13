import React, { useCallback, useRef, useEffect } from "react";
import Form from "antd/lib/form/Form";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addPostAction } from "../reducers/post";
import useInput from "../Hooks/useInput";

const PostForm = () => {
	const dispatch = useDispatch();
	const { imagePaths, addPostDone } = useSelector(state => state.post);
	const [text, onChangeText, setText] = useInput("");

	useEffect(() => {
		if (addPostDone) {
			setText("");
		}
	}, [addPostDone]);

	const onsubmit = useCallback(() => {
		dispatch(addPostAction(text));
	}, [text]);
	const imageInput = useRef();
	const onClickImageUpload = useCallback(() => {
		imageInput.current.click();
	}, [imageInput.current]);

	return (
		<Form style={{ marginTop: "10px 0 20px" }} encType="multipart/form-data" onFinish={onsubmit}>
			<Input.TextArea
				value={text}
				onChange={onChangeText}
				maxLength={140}
				placeholder="어떤 신기한 일이 있었나요?"
			/>
			<div>
				<input type="file" multiple hidden ref={imageInput} />
				<Button onClick={onClickImageUpload}>이미지 업로드</Button>
				<Button type="primary" style={{ float: "right" }} htmlType="submit">
					짹짹
				</Button>
			</div>
			<div>
				{imagePaths.map(y => (
					<div key={y} style={{ display: "flex", justifyContent: "center" }}>
						<img src={y} style={{ width: `200px` }} alt={y} />
						<div>
							<Button>제거</Button>
						</div>
					</div>
				))}
			</div>
		</Form>
	);
};

export default PostForm;
