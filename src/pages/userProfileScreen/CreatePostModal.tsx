import { useEffect, useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useAuth } from "../../context/AuthContext";
import {
  sendImageToGemini,
  cancelGeminiRequest,
} from "../../services/gemini_service";
import { IconButton } from "@mui/material";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  fetchUserPosts: () => void;
}

export const CreatePostModal = ({
  isOpen,
  onClose,
  fetchUserPosts,
}: CreatePostModalProps) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); //gemini

  const { user, accessToken } = useAuth();

  const aiGenerateText = async () => {
    console.log("aiGenerateText");
    try {
      if (imagePreview) {
        setLoading(true);
        const response = await sendImageToGemini(imagePreview);
        console.log(response);

        if (response && isOpen) {
          setPostContent(response);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("שגיאה בשליחת התמונה:", error);
    }
  };

  const handleClose = () => {
    console.log("handle close");
    cancelGeminiRequest();
    setPostContent("");
    setSelectedImage(null);
    setImagePreview(null);
    setLoading(false);
    onClose(); // סגור את המודל
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Image change event:", e.target.files);

    if (imagePreview != null) {
      cancelGeminiRequest();
      setPostContent("");
      setSelectedImage(null);
      setImagePreview(null);
      setLoading(false);
    }

    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!postContent.trim()) return;
    if (!accessToken) {
      console.error("No access token available");
      return;
    }

    try {
      const newPost = await createPost(postContent, selectedImage || undefined);
      fetchUserPosts();
      setPostContent("");
      setSelectedImage(null);
      setImagePreview(null);
      onClose();
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const createPost = async (postData: string, image?: File) => {
    try {
      const formData = new FormData();
      formData.append("postData", postData);

      if (user?._id) {
        formData.append("senderId", user._id);
      } else {
        throw new Error("User ID is missing");
      }

      if (image) {
        formData.append("image", image);
      }

      console.log("add post formData: ", formData);

      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        <h2>יצירת פוסט חדש</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="על מה תרצה לשתף?"
            className={styles.contentInput}
          />

          <div className={styles.imageUpload}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="imageInput"
              className={styles.fileInput}
            />
            <IconButton className={styles.uploadButton}>
              <label htmlFor="imageInput" className={styles.uploadButton}>
                {imagePreview ? "שנה תמונה" : "הוסף תמונה"}
              </label>
            </IconButton>

            {imagePreview && (
              <IconButton
                className={styles.uploadButton}
                loading={loading}
                onClick={aiGenerateText}
                disabled={!!postContent.trim() || loading}
              >
                {/* buttonText */}
                <label className={styles.buttonText}>
                  {loading ? "" : "✨ יצירת טקסט מבוססת AI ✨"}
                </label>
              </IconButton>
            )}
          </div>

          {imagePreview && (
            <div className={styles.imagePreview}>
              <img src={imagePreview} alt="Preview" />
            </div>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!postContent.trim()}
          >
            פרסם
          </button>
        </form>
      </div>
    </div>
  );
};
