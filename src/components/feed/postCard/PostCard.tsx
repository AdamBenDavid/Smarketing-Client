import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import { useAuth } from "../../../context/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./PostCard.css";
import styles from "./PostCard.module.css";
import { IconButton } from "@mui/material";
import { createPortal } from "react-dom";

const PostCard: React.FC<{
  post: Post;
  onDelete: (postId: string) => void;
}> = ({ post, onDelete }) => {
  const [comments, setComments] = useState(post.comments ?? []);
  const { user, accessToken } = useAuth();
  const [postContent, setPostContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  //console.log("PostCard post.image:", post.image);

  // Fix incorrect image URL format
  const correctedImage = post.image ? post.image.replace("//", "/") : null;

  //edit post
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedPostData, setUpdatedPostData] = useState(post.postData);
  const [updatedImage, setUpdatedImage] = useState<File | null>(null);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUpdatedImage(file);
    }
  };

  //add comment
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

  const checkUser = () => {
    const postUserId =
      typeof post.senderId === "object" ? post.senderId : post.senderId;

    console.log("🔹 user._id:", user?._id);
    console.log("🔹 postUserId:", postUserId);

    if (user?._id && postUserId) {
      const isEqual = user._id === postUserId;
      console.log("equal? ", isEqual);
      return isEqual;
    }
    return false;
  };

  return (
    <div className="post-card">
      {checkUser() && (
        <div className="post-actions edit-delete-actions">
          <button className="edit-btn" onClick={openEditModal}>
            <FaEdit />
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      )}

      <PostHeader senderId={post.senderId} />
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

      {/* to Fix edit modal  */}

      {isEditModalOpen &&
        createPortal(
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button className={styles.closeButton} onClick={closeEditModal}>
                ×
              </button>
              <h2>עריכת פוסט</h2>
              <form onSubmit={openEditModal}>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="על מה תרצה לשתף?"
                  className={styles.contentInput}
                />

                <div className={styles.imageUpload}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="imageInput"
                    className={styles.fileInput}
                  />
                  <IconButton className={styles.uploadButton}>
                    <label htmlFor="imageInput" className={styles.uploadButton}>
                      {imagePreview ? "שנה תמונה" : "הוסף תמונה"}
                    </label>
                  </IconButton>

                  {imagePreview && (
                    <IconButton
                      className={styles.uploadButton}
                      loading={loading}
                      // onClick={aiGenerateText}
                      disabled={!!postContent.trim() || loading}
                    >
                      {/* buttonText */}
                      <label className={styles.buttonText}>
                        {loading ? "" : "יצירת טקסט מבוססת AI"}
                      </label>
                    </IconButton>
                  )}
                </div>

                {imagePreview && (
                  <div className={styles.imagePreview}>
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={!postContent.trim()}
                >
                  פרסם
                </button>
              </form>
            </div>
          </div>,
          document.body // גורם ל-Modal להיות מחוץ לקומפוננטה ולכסות את כל המסך
        )}
    </div>
  );
};

export default PostCard;
