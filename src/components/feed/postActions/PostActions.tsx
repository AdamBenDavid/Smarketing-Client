import React, { useState, useEffect } from "react";
import "./PostActions.css";

const PostActions: React.FC<{
  postId: string;
  commentCount: number;
  userId?: string;
}> = ({ postId, commentCount, userId }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes.length);
        setLiked(data.likes.includes(userId));
      })
      .catch((error) => console.error("Error fetching post likes:", error));
  }, [postId, userId]);

  const handleLike = async () => {
    const res = await fetch(
      `http://localhost:3000/posts/${liked ? "unlike" : "like"}/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId, postId }),
      }
    );

    if (res.ok) {
      setLiked(!liked);
      setLikes((prev) => (liked ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="post-actions">
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        {liked ? "❤️" : "🤍"} {likes}
      </button>
      <button>💬 {commentCount}</button>
    </div>
  );
};

export default PostActions;
