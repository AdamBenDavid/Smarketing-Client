// components/comment/Comment.tsx
import React from "react";
import { CommentType } from "../types";
import "./Comment.css";

const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="comment">
      <img
        src={comment.user.profilePicture}
        alt="User"
        className="comment-avatar"
      />
      <div className="comment-content">
        <strong>{comment.user.fullName}</strong>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
