import { useEffect, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import styles from "./UserProfile.module.css";
import { CreatePostModal } from "./CreatePostModal";
import { ChatModal } from "../../components/Chat/ChatModal";
import { ChatUser } from "../../components/Chat/ChatList";
import { Post, postsService } from "../../services/posts.service";
import { EditProfileModal } from "./EditProfileModal";
import { usersService } from '../../services/users.service';

interface User {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  expertise: string[];
  profilePicture?: string;
}

export const UserProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChatUser, setSelectedChatUser] = useState<ChatUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const currentUser = {
    _id: "current123",
    fullName: "דן כהן",
  };

  useEffect(() => {
    // TODO: Replace with actual user API call when ready
    const mockUser = {
      _id: currentUser._id,
      email: "marketer@example.com",
      fullName: currentUser.fullName,
      role: "מנהל שיווק דיגיטלי",
      expertise: ["קמפיינים דיגיטליים", "SEO", "תוכן שיווקי", "מדיה חברתית"],
      profilePicture: "https://placehold.co/150x150",
    };
    setUser(mockUser);

    // Fetch real posts from the backend
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const userPosts = await postsService.getPostsBySenderId(mockUser._id);
        console.log("userPosts", userPosts);
        console.log("mockUser", mockUser._id);
        setPosts(userPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentUser._id]);

  const handleCreatePost = async (postData: string, image?: File) => {
    if (!user) return;
    
    try {
      // Create the post
      const newPost = await postsService.createPost(postData, user._id);
      console.log('Created post:', newPost);
      
      // Update local state with the new post
      setPosts(prevPosts => [newPost, ...prevPosts]);
      
      // Close the modal
      setIsCreateModalOpen(false);
      
      // Optional: Show success message
      setError(null);
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Failed to create post');
    }
  };

  const handleEditProfile = async (fullName: string, image?: File) => {
    if (!user) return;
    
    try {
      const updatedUser = await usersService.updateProfile(user._id, {
        fullName,
        profilePicture: image
      });
      
      setUser(updatedUser);
      setIsEditModalOpen(false);
      setError(null);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
    }
  };

  if (!user) {
    return <Typography>טוען...</Typography>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img
          src={user.profilePicture}
          alt="Profile"
          className={styles.profilePicture}
        />
        <div className={styles.userDetails}>
          <div className={styles.nameSection}>
            <h2>{user.fullName}</h2>
            <button 
              className={styles.editButton}
              onClick={() => setIsEditModalOpen(true)}
            >
              ערוך פרופיל
            </button>
          </div>
          <p className={styles.role}>{user.role}</p>
          <div className={styles.expertise}>
            {user.expertise.map((exp, index) => (
              <span key={index} className={styles.expertiseTag}>
                {exp}
              </span>
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={styles.chatButton}
              onClick={() => setIsChatOpen(true)}
            >
              התחל צ'אט
            </button>
            <button
              className={styles.createPostButton}
              onClick={() => setIsCreateModalOpen(true)}
            >
              צור פוסט
            </button>
          </div>
        </div>
      </div>

      <div className={styles.postsSection}>
        <h3>הפוסטים שלי</h3>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <Card key={post._id} className={styles.postCard}>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className={styles.postImage}
                />
              )}
              <div className={styles.postContent}>
                <p>{post.postData}</p>
                <span className={styles.postDate}>
                  {new Date(post.createdAt).toLocaleDateString("he-IL")}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePost}
      />

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => {
          setIsChatOpen(false);
          setSelectedChatUser(null);
        }}
        showUserList={!selectedChatUser}
        onSelectUser={(user) => setSelectedChatUser(user)}
        recipientId={selectedChatUser?._id || ""}
        recipientName={selectedChatUser?.fullName || ""}
        currentUserId={currentUser._id}
        currentUserName={currentUser.fullName}
      />

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditProfile}
        currentName={user.fullName}
      />
    </div>
  );
};
