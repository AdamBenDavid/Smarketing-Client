import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { CommentType } from "../types";
import "./CommentModal.css";
import OneComment from "../oneComment/OneComment";
import PostImage from "../postImage/PostImage";

const CommentModal: React.FC<{
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  comments: CommentType[];
}> = ({ open, onClose, imageUrl, comments }) => {
  const [newComment, setNewComment] = useState("");

  const mockComments: CommentType[] = Array.from({ length: 10 }, (_, i) => ({
    id: `mock${i}`,
    text: `בדיקה  ${i + 1} `,
    user: {
      email: "",
      _id: `user${i}`,
      fullName: `User_${i + 1}`,
      profilePicture: `https://i.pravatar.cc/50?img=${i + 1}`,
    },
  }));

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="comment-modal">
      <Box className="modal-box">
        <div className="modal-content">
          <div className="comments-container">
            <h3 className="comment-header">תגובות</h3>

            <div className="comment-list">
              {mockComments.length === 0 ? (
                <p className="no-comments-text">אין תגובות עדיין...</p>
              ) : (
                mockComments.map((comment) => (
                  <OneComment key={comment.id} comment={comment} />
                ))
              )}
            </div>

            <div className="comment-input-container">
              <Button variant="contained" className="post-button">
                פרסם
              </Button>
              <TextField
                id="standard-basic"
                label="הוספת תגובה"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>

          <div className="image-container">
            <PostImage image={imageUrl} />
          </div>
        </div>

        <Button variant="contained" className="close-button" onClick={onClose}>
          סגור
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;
