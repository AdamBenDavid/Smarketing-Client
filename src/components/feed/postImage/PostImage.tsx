import React, { useState } from "react";
import "./PostImage.css";

const PostImage: React.FC<{ image?: string | null }> = ({ image }) => {
  const [error, setError] = useState(false);

  const noUploadPlaceholder =
    "https://placehold.co/600x400?text=No+Image+Uploaded";

  const notFoundPlaceholder =
    "https://placehold.co/600x400?text=Image+Not+Found";

  console.log("🟢 PostImage received image:", image);

  const correctedImage =
    !image || image === "null"
      ? noUploadPlaceholder
      : image.startsWith("http")
        ? image
        : `http://localhost:3000/uploads/post_images/${image}`;

  return (
    <img
      src={error ? notFoundPlaceholder : correctedImage}
      alt="Post"
      className="post-image"
      onError={() => {
        console.error("❌ Image failed to load:", correctedImage);
        setError(true);
      }}
    />
  );
};

export default PostImage;
