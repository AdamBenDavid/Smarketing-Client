import { useState } from "react";
import styles from "./CreatePostModal.module.css";
import { create } from "@mui/material/styles/createTransitions";
import { useAuth } from "../../context/AuthContext";
import { User } from "../../types/user";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: string, image?: File, userName?: string) => void;
}

export const CreatePostModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { user } = useAuth();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    if (!postContent.trim()) return; // Prevent empty posts

    try {
      await createPost(postContent, selectedImage || undefined); // Pass parameters
      setPostContent(""); // Clear the input
      setSelectedImage(null);
      setImagePreview(null);
      onClose(); // Close modal after successful submission
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const createPost = async (postData: string, image?: File) => {
    try {
      const formData = new FormData();
      formData.append("postData", postData);

      if (user?._id) {
        formData.append("senderId", user._id); // Dynamically append user ID
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
      console.log("Post created successfully:", data);
      return data;
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
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
            <label htmlFor="imageInput" className={styles.uploadButton}>
              {imagePreview ? "שנה תמונה" : "הוסף תמונה"}
            </label>
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
