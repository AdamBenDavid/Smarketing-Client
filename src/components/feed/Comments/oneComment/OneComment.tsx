import React from "react";
import { CommentType } from "../../types";
import "./OneComment.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../../../../context/AuthContext";
import { deleteComment } from "../../api.ts";
import {API_BASE_URL} from '../../../../services/api.ts';

interface OneCommentProps {
  comment: CommentType;
  onDeleteSuccess: (id: string) => void;
}

const OneComment: React.FC<OneCommentProps> = ({
  comment,
  onDeleteSuccess,
}) => {
  const { user } = useAuth();

  const onDelete = async () => {
    try {
      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No authentication token found");
        return;
      }

      const success = await deleteComment(comment._id);
      if (success) {
        console.log("one comment deleted successfully");
        onDeleteSuccess(comment._id);
      }
    } catch (error) {
      console.error("Error deleting comment");
    }
  };

  const getProfilePictureUrl = (profilePicture: string | undefined) => {
    if (!profilePicture)
      return API_BASE_URL+"/images/default-profile.png";
    if (profilePicture.startsWith("http")) return profilePicture;
    return `${API_BASE_URL}/${profilePicture}`;
  };

  const canDelete = user?._id === comment.userId;

  return (
    <div className="comment-container">
      <div className="one-comment">
        <img
          src={getProfilePictureUrl(comment.profilePicture)}
          alt="User"
          className="comment-avatar"
          crossOrigin="anonymous"
          onError={(e) => {
            console.log("Needs to be default profil pic");
            e.currentTarget.src =
              API_BASE_URL+"/images/default-profile.png";
          }}
        />
        <div className="comment-content">
          <strong className="comment-username">{comment.fullName}</strong>
          <span className="comment-text">{comment.commentData}</span>
        </div>
      </div>

      {canDelete && (
        <IconButton onClick={onDelete} className="delete-icon">
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
};

export default OneComment;
