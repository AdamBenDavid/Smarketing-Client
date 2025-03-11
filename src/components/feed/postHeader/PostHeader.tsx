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

  const getProfilePictureUrl = (profilePicture: string | undefined) => {
    if (!profilePicture) return "/default-profile.png";
    if (profilePicture.startsWith("http")) return profilePicture;
    return `http://localhost:3000/${profilePicture}`;
  };

  useEffect(() => {
    if (!senderId) return;

    fetch(`http://localhost:3000/auth/user/${senderId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
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
        src={getProfilePictureUrl(displayUser.profilePicture)}
        alt="Profile"
        className="profile-picture"
        crossOrigin="anonymous"
        onError={(e) => {
          e.currentTarget.src = "/default-profile.png";
        }}
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
