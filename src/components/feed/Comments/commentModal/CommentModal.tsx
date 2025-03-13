import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { CommentType } from "../../types";
import "./CommentModal.css";
import OneComment from "../oneComment/OneComment";
import PostImage from "../../Posts/postImage/PostImage";
import { fetchComments, addComment } from "../../api";

const CommentModal: React.FC<{
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  postId: string;
}> = ({ open, onClose, imageUrl, postId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch comments when the modal opens
  useEffect(() => {
    if (open) {
      fetchComments(postId).then(setComments);
    }
  }, [open, postId]);

  // Add a new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    console.log("📝 Attempting to add comment for postId:", postId);

    setLoading(true);
    const addedComment = await addComment(postId, "user123", newComment); // Replace "user123" with actual user ID
    if (addedComment) {
      setComments((prev) => [...prev, addedComment]); // Add comment to UI
      setNewComment(""); // Clear input
    }
    setLoading(false);
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="comment-modal">
      <Box className="modal-box">
        <div className="modal-content">
          <div className="comments-container">
            <h3 className="comment-header">תגובות</h3>

            <div className="comment-list">
              {comments.length === 0 ? (
                <p className="no-comments-text">אין תגובות עדיין...</p>
              ) : (
                comments.map((comment) => (
                  <OneComment key={comment._id} comment={comment} />
                ))
              )}
            </div>

            <div className="comment-input-container">
              <Button
                variant="contained"
                className="post-button"
                onClick={handleAddComment}
                disabled={loading}
              >
                {loading ? "מפרסם..." : "פרסם"}
              </Button>
              <TextField
                id="standard-basic"
                label="הוספת תגובה"
                variant="outlined"
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
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
