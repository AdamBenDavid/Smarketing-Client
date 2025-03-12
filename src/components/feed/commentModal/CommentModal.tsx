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

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="comment-modal">
      <Box className="modal-box">
        <div className="modal-content">
          <div className="comments-container">
            <h3 className="comment-header">Comments</h3>
            <div className="comment-list">
              {comments.length === 0 ? (
                <p className="no-comments-text">No comments yet</p>
              ) : (
                comments.map((comment) => (
                  <OneComment key={comment.id} comment={comment} />
                ))
              )}
            </div>

            <div className="comment-input-container">
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
            </div>
          </div>

          <div className="image-container">
            <PostImage image={imageUrl} />
          </div>
        </div>

        <Button variant="contained" className="close-button" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;
