// components/comment/OneComment.tsx
import React from "react";
import { CommentType } from "../types";
import "./OneComment.css";

const OneComment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <div className="one-comment">
<<<<<<< HEAD
=======
      {/* User Profile Picture */}
      <img
        src={comment.user.profilePicture}
        alt="User"
        className="comment-avatar"
      />

      {/* Comment Content */}
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
      <div className="comment-content">
        <strong className="comment-username">{comment.user.fullName}</strong>
        <span className="comment-text">{comment.text}</span>
      </div>
<<<<<<< HEAD
      <img
        src={"http://localhost:3000/images/default-profile.png"}
        alt="User"
        className="comment-avatar"
      />
=======
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
    </div>
  );
};

export default OneComment;
