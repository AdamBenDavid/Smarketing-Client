import React from "react";
import { useAuth } from "../../../context/AuthContext";
import "./PostHeader.css";

const PostHeader: React.FC<{
  user?: { fullName?: string; profilePicture?: string };
}> = ({ user }) => {
  const { user: loggedInUser } = useAuth();

  const displayUser =
    user && user.profilePicture
      ? user
      : loggedInUser && loggedInUser.profilePicture
        ? loggedInUser
        : {
            fullName: "משתמש אנונימי",
            profilePicture: "/default-profile.png",
          };

  return (
    <div className="post-header">
      <img
        src={displayUser.profilePicture}
        alt="Profile"
        className="profile-picture"
        crossOrigin="anonymous" // ✅ Helps with CORS issues
        onError={(e) => {
          console.error("❌ Failed to load image:", displayUser.profilePicture);
          e.currentTarget.src = "/default-profile.png";
        }}
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
