import { useEffect, useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useAuth } from "../../context/AuthContext";
import { sendImageToGemini } from "../../services/gemini_service";
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
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const aiGenerateText = async () => {
    console.log("second section on click");
    try {
      if (imagePreview) {
        const response = await sendImageToGemini(imagePreview);
        if (response) {
          setLoading(false);
          setPostContent(response);
        }
      }
    } catch (error) {
      console.error("שגיאה בשליחת התמונה:", error);
    }
  };

  const handleClose = () => {
    setPostContent("");
    setSelectedImage(null);
    setImagePreview(null);
    setLoading(false);
    onClose(); // סגור את המודל
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Image change event:", e.target.files);
    //console.log(imagePreview);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        //console.log("Image preview:", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!postContent.trim()) return;

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

      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: formData,
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
                onClick={() => setLoading(true)}
                loading={loading}
              >
                <button
                  className={styles.uploadButton}
                  onClick={aiGenerateText}
                >
                  {loading ? "" : "יצירת טקסט מבוססת AI"}
                </button>
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
