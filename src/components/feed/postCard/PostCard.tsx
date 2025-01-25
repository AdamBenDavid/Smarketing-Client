import React from "react";
import { Post } from "../types";
import PostHeader from "../postHeader/PostHeader";
import PostImage from "../postImage/PostImage";
import PostActions from "../postActions/PostActions";
import CommentSection from "../commentSection/CommentSection";
import "./PostCard.css";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post-card">
      <PostHeader user={post.user} />
      <PostImage image={post.image} />
      <PostActions postId={post.id} />
      <CommentSection comments={post.comments} postId={post.id} />
    </div>
  );
};

export default PostCard;
