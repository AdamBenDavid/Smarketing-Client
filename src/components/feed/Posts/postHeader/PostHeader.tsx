import React, { useEffect, useState } from "react";
import "./PostHeader.css";

const PostHeader: React.FC<{
  senderId?: string;
}> = ({ senderId }) => {
  const [senderUser, setSenderUser] = useState<{
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
    if (!senderId) return;

    fetch(`http://localhost:3000/users/${senderId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setSenderUser(data))
      .catch((err) => console.error("Error fetching user"));
  }, [senderId]);
  const displayUser = senderUser;

  if (!displayUser) {
    return null;
  }
  return (
    <div className="post-header">
      <img
        src={getProfilePictureUrl(displayUser.profilePicture)}
        alt="Profile"
        className="profile-picture"
        crossOrigin="anonymous"
        onError={(e) => {
          console.log("needs to be default profile pic");
          e.currentTarget.src =
            "http://localhost:3000/images/default-profile.png";
        }}
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
