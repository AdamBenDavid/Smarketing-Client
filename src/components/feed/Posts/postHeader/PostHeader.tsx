import React, { useEffect, useState } from "react";
import "./PostHeader.css";
import {API_BASE_URL} from '../../../../services/api';

const PostHeader: React.FC<{
  senderId?: string;
}> = ({ senderId }) => {
  const [senderUser, setSenderUser] = useState<{
    fullName?: string;
    profilePicture?: string;
  } | null>(null);

  const getProfilePictureUrl = (profilePicture: string | undefined) => {
    if (!profilePicture)
      return API_BASE_URL+"/images/default-profile.png";
    if (profilePicture.startsWith("http")) return profilePicture;
    return `${API_BASE_URL}http://localhost:3000/${profilePicture}`;
  };

  useEffect(() => {
    if (!senderId) return;

    fetch(`${API_BASE_URL}/users/${senderId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setSenderUser(data))
      .catch(() => console.error("Error fetching user"));
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
            API_BASE_URL+"/images/default-profile.png";
        }}
      />
      <span className="username">{displayUser.fullName}</span>
    </div>
  );
};

export default PostHeader;
