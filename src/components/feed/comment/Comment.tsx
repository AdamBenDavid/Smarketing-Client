import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Comment.css"; // Add styles here

interface CommentDrawerProps {
  open: boolean;
  onClose: () => void;
  comments: { user: string; text: string }[];
}

const CommentDrawer: React.FC<CommentDrawerProps> = ({
  open,
  onClose,
  comments,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="comment-drawer">
        <div className="drawer-header">
          <Typography variant="h6">תגובות</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="comment-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
              </div>
            ))
          ) : (
            <Typography variant="body2" className="no-comments">
              אין תגובות עדיין
            </Typography>
          )}
        </div>
      </Box>
    </Drawer>
  );
};

export default CommentDrawer;
