import { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { CreatePostModal } from "./CreatePostModal";
import FeedPage from "../feedPage/Feed";
import { Post } from "../../components/feed/types";
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
    <div className={styles.profileContainer}>
      <div className={styles.postsSection}>
        <div className={styles.sectionHeader}>
          <h3>הפוסטים שלי</h3>
          <button
            className={styles.createPostButton}
            onClick={() => setIsCreateModalOpen(true)}
          >
            צור פוסט
          </button>
        </div>
        <FeedPage posts={localPosts} className={styles.feed} />
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        fetchUserPosts={fetchUserPosts}
      />
    </div>
  );
};
