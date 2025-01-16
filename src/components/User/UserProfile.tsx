import { useEffect, useState } from 'react';
import { Box, Typography, Card } from '@mui/material';
import styles from './UserProfile.module.css'

interface Post {
  _id: string;
  postData: string;
  imageUrl?: string;
  createdAt: string;
}

interface User {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  expertise: string[];
  profilePicture?: string;
}

export const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

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

    const mockPosts = [
      {
        _id: '1',
        postData: 'השקנו היום קמפיין חדש ברשתות החברתיות! התוצאות הראשוניות מדהימות.',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date().toISOString()
      },
      {
        _id: '2',
        postData: 'סדנת SEO מעולה היום - למדנו טכניקות חדשות לקידום אתרים!',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        _id: '3',
        postData: 'איך לבנות אסטרטגיית תוכן שעובדת? הטיפים המובילים שלי מהשנה האחרונה.',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date(Date.now() - 172800000).toISOString()
      },
      {
        _id: '4',
        postData: 'מגמות השיווק החמות ביותר ל-2024 - מה אתם חושבים?',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date(Date.now() - 259200000).toISOString()
      },
      {
        _id: '5',
        postData: 'הצלחה מטורפת בקמפיין האחרון - ROI של 300%!',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date(Date.now() - 345600000).toISOString()
      },
      {
        _id: '6',
        postData: 'איך לבנות מותג חזק בעידן הדיגיטלי? שתפו את הדעות שלכם!',
        imageUrl: 'https://placehold.co/300x200',
        createdAt: new Date(Date.now() - 432000000).toISOString()
      }
    ];
    setPosts(mockPosts);
  }, []);

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
          <button className={styles.chatButton}>
            התחל צ'אט
          </button>
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
                  {new Date(post.createdAt).toLocaleDateString('he-IL')}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}; 