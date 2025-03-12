import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styles from "./UserProfile.module.css";
import "./AccountSettings.css"; // ✅ Corrected import
import { ChatModal } from "../../components/Chat/ChatModal";
// import { ChatUser } from "../../components/Chat/ChatList";
import { EditProfileModal } from "./EditProfileModal";
import { usersService } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
//import { usertype } from "../../types/user";

export const AccountSettings = () => {
  const { user, setUser, accessToken } = useAuth();
  const [isChatOpen, setIsChatOpen] = useState(false);
  // const [selectedChatUser, setSelectedChatUser] = useState<ChatUser | null>(
  //   null
  // );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("User state in AccountSettings:", user);
  console.log("User profilePicture:", user?.profilePicture);
  console.log("User fullName:", user?.fullName);

  const handleEditProfile = async (fullName: string, image?: File) => {
    if (!user) return;
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      if (image) {
        formData.append("profilePicture", image);
      }

      const updatedUser = await usersService.updateProfile(
        user,
        formData,
        accessToken
      );

      console.log("Updated user from API:", updatedUser);

      // Ensure profilePicture and fullName are being set
      setUser({
        ...user,
        fullName: updatedUser.fullName || user.fullName,
        profilePicture: updatedUser.profilePicture || user.profilePicture,
      });
      console.log("Updated user from API:", updatedUser);
      setIsEditModalOpen(false);
      setError(null);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile");
    }
  };

  if (!user) {
    return <Typography>טוען...</Typography>;
  }

  return (
    <>
      <div className="profileContainer">
        <div className="userInfo">
          <img
            src={user.profilePicture || "/default-profile.png"}
            alt="Profile"
            className="profilePicture"
            crossOrigin="anonymous"
          />

          <div className="userDetails">
            <div className="nameSection">
              <h2>{user.fullName}</h2>
              <button
                className="editButton"
                onClick={() => setIsEditModalOpen(true)}
              >
                ערוך פרופיל
              </button>
            </div>
          </div>
        </div>

        {/* <ChatModal
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
        /> */}

        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditProfile}
          currentName={user.fullName}
        />
      </div>
    </>
  );
};
