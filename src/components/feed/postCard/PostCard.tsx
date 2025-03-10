import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import { useAuth } from "../../../context/AuthContext";
import "./PostCard.css";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [comments, setComments] = useState(post.comments ?? []);
  const { user } = useAuth();

  //console.log("🟢 PostCard post.image:", post.image);

  // ✅ Fix incorrect image URL format
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

  return (
    <div className="post-card">
      <PostHeader user={post.user} />
      <PostImage image={correctedImage} />
      <p className="post-description">
        {post.postData || "No description available."}
      </p>

      <PostActions postId={post.id} commentCount={comments.length || 0} />

      <CommentSection
        comments={comments}
        postId={post.id}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default PostCard;
