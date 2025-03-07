import React, { useState } from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import { useAuth } from "../../../context/AuthContext"; // Get logged-in user
import "./PostCard.css";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []); // ✅ Default to empty array
  const { user } = useAuth(); // Get logged-in user

  const handleAddComment = (text: string) => {
    if (!text.trim() || !user) return; // Ensure user is logged in before adding a comment

    const newComment = {
      id: Date.now().toString(),
      text,
      user: {
        id: user._id,
        name: user.fullName || "משתמש אנונימי",
        profilePicture: user.profilePicture || "https://placehold.co/150x150",
      },
    };

    // setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="post-card">
      <PostHeader user={post.user} />
      {post.image && <PostImage image={post.image} />}
      <PostActions postId={post.id} commentCount={comments.length} />{" "}
      {/* ✅ No more undefined error */}
      <CommentSection
        comments={comments}
        postId={post.id}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default PostCard;
