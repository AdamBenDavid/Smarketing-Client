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

<<<<<<< HEAD
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

=======
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="comment-modal">
      <Box className="modal-box">
        <div className="modal-content">
          <div className="comments-container">
<<<<<<< HEAD
            <h3 className="comment-header">תגובות</h3>

            <div className="comment-list">
              {mockComments.length === 0 ? (
                <p className="no-comments-text">אין תגובות עדיין...</p>
              ) : (
                mockComments.map((comment) => (
=======
            <h3 className="comment-header">Comments</h3>
            <div className="comment-list">
              {comments.length === 0 ? (
                <p className="no-comments-text">No comments yet</p>
              ) : (
                comments.map((comment) => (
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
                  <OneComment key={comment.id} comment={comment} />
                ))
              )}
            </div>

            <div className="comment-input-container">
<<<<<<< HEAD
              <Button variant="contained" className="post-button">
                פרסם
              </Button>
              <TextField
                id="standard-basic"
                label="הוספת תגובה"
                variant="outlined"
                fullWidth
              />
=======
              <TextField
                className="comment-input"
                variant="outlined"
                placeholder="Write a comment..."
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button variant="contained" className="post-button">
                Post
              </Button>
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
            </div>
          </div>

          <div className="image-container">
            <PostImage image={imageUrl} />
          </div>
        </div>

        <Button variant="contained" className="close-button" onClick={onClose}>
<<<<<<< HEAD
          סגור
=======
          Close
>>>>>>> 2e483bf4d1933bad0a2ff6847ef88cbff09e1cc1
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;
