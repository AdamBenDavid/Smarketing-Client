import React from "react";
import "./PostImage.css";

const PostImage: React.FC<{ image: string }> = ({ image }) => {
  const imageUrl = image.startsWith("http")
    ? image
    : `http://localhost:3000${image}`;

  return <img src={imageUrl} alt="Post" className="post-image" />;
};

export default PostImage;
