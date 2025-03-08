import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styles from "./UserProfile.module.css";
import { ChatModal } from "../../components/Chat/ChatModal";
import { EditProfileModal } from "./EditProfileModal";
import { usersService } from '../../services/users.service';
import { useAuth } from '../../context/AuthContext';
import { User } from "../../types/user";

export const AccountSettings = () => {
  const { user: currentUser, token } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      setUser({
        _id: currentUser._id,
        email: currentUser.email,
        fullName: currentUser.fullName,
        role: currentUser.role || "משתמש",
        expertise: currentUser.expertise || [],
        profilePicture: currentUser.profilePicture || "https://placehold.co/150x150",
      });
    }
  }, [currentUser]);

  const handleEditProfile = async (fullName: string, image?: File) => {
    if (!user || !token) return;
    
    try {
      const updatedUser = await usersService.updateProfile(user._id, {
        fullName,
        profilePicture: image
      });
      
      setUser(prevUser => ({
        ...prevUser!,
        ...updatedUser
      }));
      setIsEditModalOpen(false);
      setError(null);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!user || !currentUser || !token) {
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
            {user.expertise?.map((exp, index) => (
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
          </div>
        </div>
      </div>

      {isChatOpen && (
        <ChatModal
          token={token}
          currentUser={currentUser}
          onClose={() => setIsChatOpen(false)}
        />
      )}

      <EditProfileModal
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditProfile}
        currentName={user.fullName}
      />
    </div>
  );
}; 