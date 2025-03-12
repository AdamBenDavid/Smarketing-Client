// components/comment/OneComment.tsx
import React from "react";
import { CommentType } from "../types";
import "./OneComment.css";

const OneComment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="one-comment">
      <div className="comment-content">
        <strong className="comment-username">{comment.user.fullName}</strong>
        <span className="comment-text">{comment.text}</span>
      </div>
      <img
        src={"http://localhost:3000/images/default-profile.png"}
        alt="User"
        className="comment-avatar"
      />
    </div>
  );
};

export default OneComment;
