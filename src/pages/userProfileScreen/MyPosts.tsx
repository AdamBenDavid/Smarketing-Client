import { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { CreatePostModal } from "./CreatePostModal";
import FeedPage from "../feedPage/Feed";
import { Post } from "../../components/feed/types";
import { useAuth } from "../../context/AuthContext";
import { User } from "../../types/user";

export const MyPosts = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  const currentUser: User = {
    email: user?.email || "אימייל לא ידוע",
    fullName: user?.fullName || "משתמש אנונימי",
    profilePicture: "https://placehold.co/150x150",
  };

  useEffect(() => {
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
        console.error(" Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, [user?._id]);

  const handleCreatePost = async (postData: string, image?: File) => {
    try {
      const formData = new FormData();
      formData.append("postData", postData);
      formData.append("senderId", user?._id || "");
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to create post");

      const newPost = await response.json();

      const postToAdd: Post = {
        id: newPost._id,
        postData: newPost.postData,
        user: {
          _id: user?._id || "unknown-user",
          fullName: user?.fullName || "משתמש אנונימי",
          profilePicture:
            user?.profilePicture || "https://placehold.co/150x150",
        },
        image: newPost.image ? `http://localhost:3000${newPost.image}` : "",
        comments: newPost.comments || [],
      };

      setLocalPosts((prevPosts) => [postToAdd, ...prevPosts]);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error("Error creating post:", error);
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
        onSubmit={handleCreatePost}
      />
    </div>
  );
};
