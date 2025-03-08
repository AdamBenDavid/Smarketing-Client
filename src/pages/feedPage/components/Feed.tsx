import React from "react";
import { Post } from "../../../types/post";
import PostCard from "../../../components/feed/postCard/PostCard";
import "./Feed.css";

const Feed: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
