import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styles from "./UserProfile.module.css";
import { ChatModal } from "../../components/Chat/ChatModal";
import { ChatUser } from "../../components/Chat/ChatList";
import { EditProfileModal } from "./EditProfileModal";
import { usersService } from "../../services/api";
import { useAuth } from "../../context/AuthContext"; // ✅ Use AuthContext to manage user state
import { toast } from "react-toastify";

interface User {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  expertise: string[];
  profilePicture?: string;
}

export const AccountSettings = () => {
  const { user, setUser } = useAuth(); // ✅ Get user from context
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChatUser, setSelectedChatUser] = useState<ChatUser | null>(
    null
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch user details from backend on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await usersService.getUserProfile();
        setUser(fetchedUser);
      } catch (err) {
        console.error("❌ Error fetching user:", err);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [user, setUser]);

  // ✅ Handle profile updates
  const handleEditProfile = async (
    fullName: string,
    image?: File
  ): Promise<void> => {
    if (!user) return;

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      if (image) {
        formData.append("profilePicture", image);
      }

      const updatedUser = await usersService.updateProfile(
        user._id || "",
        formData
      );
      setUser(updatedUser.user); // ✅ Update user state in context
      setIsEditModalOpen(false);
      toast.success("פרופיל עודכן בהצלחה!");
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      toast.error("שגיאה בעדכון הפרופיל");
    }
  };

  if (loading) {
    return <Typography>טוען...</Typography>;
  }

  if (!user) {
    return <Typography color="error">שגיאה בטעינת הנתונים</Typography>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img
          src={
            user.profilePicture
              ? `http://localhost:3000/${user.profilePicture}`
              : "https://placehold.co/150x150"
          }
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

      {/* ✅ Chat Modal */}
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
        currentUserId={user._id || ""}
        currentUserName={user.fullName}
      />

      {/* ✅ Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditProfile} // ✅ Now correctly typed
        currentName={user.fullName}
      />
    </div>
  );
};
