// components/comment/OneComment.tsx
import React from "react";
import { CommentType } from "../types";
import "./OneComment.css";

const OneComment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="one-comment">
      {/* User Profile Picture */}
      <img
        src={comment.user.profilePicture}
        alt="User"
        className="comment-avatar"
      />

      {/* Comment Content */}
      <div className="comment-content">
        <strong className="comment-username">{comment.user.fullName}</strong>
        <span className="comment-text">{comment.text}</span>
      </div>
    </div>
  );
};

export default OneComment;
