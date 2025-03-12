import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import { useAuth } from "../../../context/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./PostCard.css";
import ImageModal from "./ImageModal";
import { EditPostModal } from "../../../pages/userProfileScreen/EditPostModal";

const PostCard: React.FC<{
  post: Post;
  onDelete: (postId: string) => void;
}> = ({ post, onDelete }) => {
  const [comments, setComments] = useState(post.comments ?? []);
  const { user, accessToken } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); //edit post

  // Fix incorrect image URL format:
  const correctedImage = post.image ? post.image.replace("//", "/") : null;
  console.log("currectedimage", correctedImage);

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

  // check if the current user is the post sender
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

  const fetchUserPosts = async () => {
    if (!user?._id) return;

    try {
      const response = await fetch(
        `http://localhost:3000/posts/user/${user._id}`
      );
      if (!response.ok) throw new Error("Failed to fetch posts");
      const userPosts = await response.json();
      setLocalPosts(userPosts);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  return (
    <>
      <div className="post-card">
        {checkUser() && (
          <div className="post-actions edit-delete-actions">
            <button
              className="edit-btn"
              onClick={() => setIsEditModalOpen(true)}
            >
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        )}

        <PostHeader senderId={post.senderId} />
        <div className="image-container" onClick={() => setIsModalOpen(true)}>
          <PostImage image={correctedImage} />
        </div>
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

      {/* edit post */}
      <EditPostModal
        post={post}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        fetchUserPosts={fetchUserPosts}
      />

      {isModalOpen && (
        <ImageModal
          imageUrl={correctedImage || ""}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PostCard;
