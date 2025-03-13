import React from "react";
import { CommentType } from "../../types";
import "./OneComment.css";

const OneComment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="one-comment">
      {/* User Profile Picture Placeholder */}
      <img
        src={`https://i.pravatar.cc/50?u=${comment.userId}`}
        alt="User"
        className="comment-avatar"
      />

      {/* Comment Content */}
      <div className="comment-content">
        <strong className="comment-username">{comment.userId}</strong>
        <span className="comment-text">{comment.commentData}</span>
      </div>
    </div>
  );
};

export default OneComment;
