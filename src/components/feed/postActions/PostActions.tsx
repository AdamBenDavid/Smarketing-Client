import React from "react";
import "./PostActions.css";

const PostActions: React.FC<{ postId: string }> = ({ postId }) => {
  const handleLike = () => {
    // Logic for liking the post
  };

  const handleShare = () => {
    // Logic for sharing the post
  };

  return (
    <div className="post-actions">
      <button onClick={handleLike}>Like</button>
      <button>Comment</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default PostActions;
