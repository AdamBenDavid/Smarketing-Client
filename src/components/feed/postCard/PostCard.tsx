import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import { useAuth } from "../../../context/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa"; // ✅ Import icons
import "./PostCard.css";

const PostCard: React.FC<{
  post: Post;
  onDelete: (postId: string) => void;
}> = ({ post, onDelete }) => {
  const [comments, setComments] = useState(post.comments ?? []);
  const { user, accessToken } = useAuth();

  //console.log("PostCard post.image:", post.image);

  // Fix incorrect image URL format
  const correctedImage = post.image ? post.image.replace("//", "/") : null;

  const handleAddComment = (text: string) => {
    if (!text.trim() || !user) return;

    const newComment = {
      id: Date.now().toString(),
      text,
      user: {
        id: user._id,
        name: user.fullName || "משתמש אנונימי",
        profilePicture: user.profilePicture || "https://placehold.co/150x150",
      },
    };
  };

  const handleDelete = async () => {
    try {
      console.log("postcard.tsx handleDelete post: ", post._id);

      if (!accessToken) {
        console.error("No access token available");
        return;
      }

      const response = await fetch(`http://localhost:3000/posts/${post._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        console.log("Post deleted successfully:", post._id);
        onDelete(post._id);
      } else {
        console.error("Failed to delete post");
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
      <PostImage image={correctedImage} />
      <p className="post-description">
        {post.postData || "No description available."}
      </p>

      <PostActions postId={post._id} commentCount={comments.length || 0} />

      <CommentSection
        comments={comments}
        postId={post._id}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default PostCard;
