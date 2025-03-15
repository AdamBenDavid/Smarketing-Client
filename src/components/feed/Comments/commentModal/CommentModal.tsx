import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { CommentType } from "../../types";
import "./CommentModal.css";
import OneComment from "../oneComment/OneComment";
import PostImage from "../../Posts/postImage/PostImage";
import { fetchComments, addComment } from "../../api";
import { useAuth } from "../../../../context/AuthContext";

const CommentModal: React.FC<{
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  postId: string;
  onNewComment: () => void;
  onDeleteComment: () => void;
}> = ({ open, onClose, imageUrl, postId, onNewComment, onDeleteComment }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (open) {
      fetchComments(postId).then(setComments);
    }
  }, [open, postId]);

  const handleAddComment = async () => {
    console.log("User ID from Context:", user?._id);

    if (!user?._id) {
      console.error("No user ID found! Ensure authentication works.");
      return;
    }

    setLoading(true);

    const createdComment = await addComment(postId, user._id, newComment);

    if (createdComment) {
      console.log("Comment added successfully!", createdComment);

      setComments((prevComments) => [createdComment, ...prevComments]);

      setNewComment("");
      onNewComment();
    }

    setLoading(false);
  };

  const onDelete = (id: string) => {
    console.log("Comment deleted successfully", id);

    setComments((prevComments) =>
      prevComments.filter((comment) => comment._id !== id)
    );
    onDeleteComment();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="comment-modal">
      <Box className="modal-box">
        <div className="modal-content">
          <div className="comments-container">
            <h3 className="comment-header">תגובות</h3>

            <div className="comment-list">
              {comments.length === 0 ? (
                <p className="no-comments-text">אין תגובות עדיין...</p>
              ) : (
                comments.map((comment) => (
                  <OneComment
                    key={comment._id}
                    comment={comment}
                    onDeleteSuccess={onDelete}
                  />
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
