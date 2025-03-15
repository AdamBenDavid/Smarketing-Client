//this is the comment component that is used to display the comments on the post page
import React, { useEffect, useState } from "react";
import { CommentType } from "../../types";
import "./Comment.css";

const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  const [user, setUser] = useState<{
    fullName?: string;
    profilePicture?: string;
  } | null>(null);

  const getProfilePictureUrl = (profilePicture: string | undefined) => {
    if (!profilePicture)
      return "http://localhost:3000/images/default-profile.png";
    if (profilePicture.startsWith("http")) return profilePicture;
    return `http://localhost:3000/${profilePicture}`;
  };

  useEffect(() => {
    if (!comment.userId) return;

    fetch(`http://localhost:3000/users/${comment.userId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [comment.userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="comment">
      <div className="comment-content">
        <strong>{user.fullName}</strong> <p>{comment.commentData}</p>
      </div>
      <img
        src={getProfilePictureUrl(user.profilePicture)}
        alt="User"
        className="comment-avatar"
        crossOrigin="anonymous"
        onError={(e) => {
          console.log("Needs to be default");
          e.currentTarget.src = "/default-profile.png";
        }}
      />
    </div>
  );
};

export default Comment;
