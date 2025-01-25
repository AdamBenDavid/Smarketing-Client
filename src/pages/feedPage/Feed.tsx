import React from "react";
import { Post } from "../../components/feed/types";
import PostCard from "../../components/feed/postCard/PostCard";

const FeedPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedPage;
