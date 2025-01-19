import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './UserProfile.module.css';
import { Post, postsService } from '../../services/posts.service';
import { CreatePostModal } from './CreatePostModal';

interface User {
  _id: string;
  email: string;
  role: string;
  expertise: string[];
  profilePicture?: string;
  fullName: string;
}

export const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API calls
    const mockUser = {
      _id: '1',
      email: 'marketer@example.com',
      fullName: 'ישראל ישראלי',
      role: 'מנהל שיווק דיגיטלי',
      expertise: ['קמפיינים דיגיטליים', 'SEO', 'תוכן שיווקי', 'מדיה חברתית'],
      profilePicture: 'https://placehold.co/150x150'
    };
    setUser(mockUser);

    // Fetch real posts from the backend
    const fetchPosts = async () => {
      try {
        const userPosts = await postsService.getPostsBySenderId(mockUser._id);
        setPosts(userPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (postData: string, image?: File) => {
    if (!user) return;
    
    try {
      const newPost = await postsService.createPost(postData, user._id);
      setPosts([newPost, ...posts]);
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Failed to create post');
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
          <h2>{user.fullName}</h2>
          <p className={styles.role}>{user.role}</p>
          <div className={styles.expertise}>
            {user.expertise.map((exp, index) => (
              <span key={index} className={styles.expertiseTag}>
                {exp}
              </span>
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.chatButton}>
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
        <h2>הפוסטים שלי</h2>
        
        {loading && <div>טוען פוסטים...</div>}
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <div key={post._id} className={styles.postCard}>
              <div className={styles.postContent}>
                <p>{post.postData}</p>
                <span className={styles.postDate}>
                  {new Date(post.createdAt || '').toLocaleDateString('he-IL')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}; 