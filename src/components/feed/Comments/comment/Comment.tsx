import React, { useEffect, useState } from "react";
import { CommentType } from "../../types";
import "./Comment.css";

const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  const [user, setUser] = useState<{
    fullName?: string;
    profilePicture?: string;
  } | null>(null);

  // Function to handle profile picture URL logic
  const getProfilePictureUrl = (profilePicture: string | undefined) => {
    if (!profilePicture)
      return "http://localhost:3000/images/default-profile.png";
    if (profilePicture.startsWith("http")) return profilePicture;
    return `http://localhost:3000/${profilePicture}`;
  };

  // Fetch user details based on userId
  useEffect(() => {
    if (!comment.userId) return;

    console.log(`Fetching user details for userId: ${comment.userId}`);

    fetch(`http://localhost:3000/users/${comment.userId}`)
      .then((res) => {
        console.log(`Response status: ${res.status}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched user data:", data);
        setUser(data);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [comment.userId]);

  if (!user) return null; // Don't render until user data is loaded

  return (
    <div className="comment">
      <img
        src={getProfilePictureUrl(user.profilePicture)}
        alt="User"
        className="comment-avatar"
        crossOrigin="anonymous"
        onError={(e) => {
          e.currentTarget.src = "/default-profile.png";
        }}
      />
      <div className="comment-content">
        <strong>{user.fullName}</strong> <p>{comment.commentData}</p>
      </div>
    </div>
  );
};

export default Comment;
