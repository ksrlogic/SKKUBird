import React, { useCallback } from "react";
import Form from "antd/lib/form/Form";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import useInput from "../Hooks/useInput";
import { Input, Button } from "antd";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput(" ");
  const onSubmitComment = useCallback(() => {
    console.log(post.id + commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Input.TextArea
        value={commentText}
        onChange={onChangeCommentText}
        rows={4}
      />
      <Button type="primary" htmlType="submit">
        삐약
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CommentForm;
