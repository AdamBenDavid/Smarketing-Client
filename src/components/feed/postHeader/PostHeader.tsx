import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import "./PostHeader.css";

const PostHeader: React.FC<{
  senderId?: string;
}> = ({ senderId }) => {
  const { user: loggedInUser } = useAuth();

  const [senderUser, setSenderUser] = useState<{
    fullName?: string;
    profilePicture?: string;
  } | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${senderId}`)
      .then((res) => res.json())
      .then((data) => setSenderUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  });

  const displayUser =
    senderUser && senderUser.profilePicture
      ? senderUser
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
        crossOrigin="anonymous"
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
