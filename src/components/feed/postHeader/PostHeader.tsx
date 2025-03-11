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

  const fixImagePath = (imagePath: string | undefined) => {
    if (!imagePath) return "/default-profile.png";
    return imagePath.startsWith("http")
      ? imagePath
      : `http://localhost:3000/${imagePath}`;
  };

  useEffect(() => {
    console.log("🔄 Fetching user:", senderId);

    if (!senderId) return;
    fetch(`http://localhost:3000/users/${senderId}`)
      .then((res) => res.json())
      .then((data) => setSenderUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [senderId]);

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
        src={fixImagePath(displayUser.profilePicture)}
        alt="Profile"
        className="profile-picture"
        crossOrigin="anonymous"
        onLoad={() =>
          console.log(
            "✅ Image loaded successfully:",
            displayUser.profilePicture
          )
        }
        onError={(e) => {
          console.error(
            "❌ Failed to load image :",
            displayUser.profilePicture
          );
          console.log(e);
          e.currentTarget.src = "/default-profile.png";
        }}
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
