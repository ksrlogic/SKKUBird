import React, { useCallback, useState, useRef } from "react";
import Form from "antd/lib/form/Form";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addPostAction } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const onsubmit = useCallback(() => {
    dispatch(addPostAction());
    setText("");
  }, []);
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <Form
      style={{ marginTop: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onsubmit}
    >
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
        {imagePaths.map((y) => (
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
