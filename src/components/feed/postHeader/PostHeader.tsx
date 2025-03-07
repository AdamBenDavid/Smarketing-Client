import React from "react";
import { useAuth } from "../../../context/AuthContext";
import "./PostHeader.css";

const PostHeader: React.FC<{
  user?: { fullName?: string; profilePicture?: string };
}> = ({ user }) => {
  const { user: loggedInUser } = useAuth();

  // ✅ Ensure user is always defined
  const displayUser = user ||
    loggedInUser || {
      fullName: "משתמש אנונימי",
      profilePicture: "https://placehold.co/150x150",
    };

  return (
    <div className="post-header">
      <img
        src={displayUser.profilePicture || "https://placehold.co/150x150"}
        alt="Profile"
        className="profile-picture"
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
