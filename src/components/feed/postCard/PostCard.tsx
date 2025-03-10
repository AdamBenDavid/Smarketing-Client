import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import { useAuth } from "../../../context/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import ImageModal from "./ImageModal";
import "./PostCard.css";

const PostCard: React.FC<{
  post: Post;
  onDelete: (postId: string) => void;
}> = ({ post, onDelete }) => {
  const { user, accessToken } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const correctedImage = post.image ? post.image.replace("//", "/") : null;

  const handleDelete = async () => {
    if (!accessToken) return;

    try {
      const response = await fetch(`http://localhost:3000/posts/${post._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        onDelete(post._id);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="post-card">
      <div className="post-actions edit-delete-actions">
        <button className="edit-btn">
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <PostHeader user={post.user} />

      <div className="image-container" onClick={() => setIsModalOpen(true)}>
        <PostImage image={correctedImage} />
      </div>

      <p className="post-description">
        {post.postData || "No description available."}
      </p>
      <PostActions postId={post._id} commentCount={1} />

      {isModalOpen && (
        <ImageModal
          imageUrl={correctedImage || ""}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PostCard;
