import React from "react";
import Comment from "../comment/Comment";
import AddComment from "../addComment/AddComment";
import { CommentType } from "../../feed/types";
import "./CommentSection.css";

const CommentSection: React.FC<{ comments: CommentType[]; postId: string }> = ({
  comments,
  postId,
}) => {
  const handleAddComment = (comment: string) => {
    // Logic to add a new comment
  };

  return (
    <div className="comment-section">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <AddComment onAddComment={handleAddComment} />
    </div>
  );
};

export default CommentSection;
