import { useEffect, useState } from "react";
import "./MyPosts.css"; // ✅ Correct import
import { CreatePostModal } from "./CreatePostModal";
import Feed from "../feedPage/components/Feed";
import { Post } from "../../types/post";
import { useAuth } from "../../context/AuthContext";

export const MyPosts = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchUserPosts();
  }, [user?._id]);

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
    <div className="profileContainer">
      {" "}
      <div className="postsSection">
        {" "}
        <div className="sectionHeader">
          {" "}
          <h3>הפוסטים שלי</h3>
          <button
            className="createPostButton"
            onClick={() => setIsCreateModalOpen(true)}
          >
            צור פוסט
          </button>
        </div>
        <div className="feed">
          {" "}
          <Feed posts={localPosts} />
        </div>
      </div>
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        fetchUserPosts={fetchUserPosts}
      />
    </div>
  );
};
