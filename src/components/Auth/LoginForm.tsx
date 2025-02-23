import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

// Mock users for testing
const MOCK_USERS = {
  'user1@test.com': {
    _id: 'user1',
    email: 'user1@test.com',
    fullName: 'משתמש ראשון',
    password: '123456',
    profilePicture: 'https://placehold.co/100'
  },
  'user2@test.com': {
    _id: 'user2',
    email: 'user2@test.com',
    fullName: 'משתמש שני',
    password: '123456',
    profilePicture: 'https://placehold.co/100'
  }
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    const user = MOCK_USERS[email];
    if (user && password === user.password) {
      // Store user info in localStorage
      localStorage.setItem('userId', user._id);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userFullName', user.fullName);
      localStorage.setItem('userProfilePicture', user.profilePicture);
      localStorage.setItem('token', 'mock-token-' + user._id); // Mock token

      setError('');
      navigate('/dashboard');
    } else {
      setError('שם משתמש או סיסמה שגויים');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>התחברות</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="email">אימייל</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="הכנס אימייל"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">סיסמה</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="הכנס סיסמה"
            required
          />
        </div>

        <button type="submit" className={styles.loginButton}>
          התחבר
        </button>

        <div className={styles.testCredentials}>
          <p>משתמשי בדיקה:</p>
          <p>user1@test.com / 123456</p>
          <p>user2@test.com / 123456</p>
        </div>
      </form>
    </div>
  );
}; 