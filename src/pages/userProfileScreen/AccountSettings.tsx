import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import "./AccountSettings.css"; // ✅ Corrected import
import { EditProfileModal } from "./EditProfileModal";
import { usersService } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export const AccountSettings = () => {
  const { user, setUser } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEditProfile = async (fullName: string, image?: File) => {
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

      setUser({
        ...user,
        fullName: updatedUser.fullName || user.fullName,
        profilePicture: updatedUser.profilePicture || user.profilePicture,
      });
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
    <div className="profileContainer">
      {" "}
      {/* ✅ Fixed className usage */}
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
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditProfile}
        currentName={user.fullName}
      />
    </div>
  );
};
