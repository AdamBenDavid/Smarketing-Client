import { useEffect, useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useAuth } from "../../context/AuthContext";
import { IconButton } from "@mui/material";
import { Post } from "../../components/feed";
import {API_BASE_URL} from '../../services/api';

interface EditPostModalProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
  fetchUserPosts: () => void;
}

export const EditPostModal = ({
  post,
  isOpen,
  onClose,
  fetchUserPosts,
}: EditPostModalProps) => {
  const [postContent, setPostContent] = useState(post.postData);
  const [selectedImage, setSelectedImage] = useState<File | null>(null); //put here file
  const [imagePreview, setImagePreview] = useState<string | null>(
    post.image ? `${API_BASE_URL}/${post.image}` : null
  );

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const { user, accessToken } = useAuth();

  const closeEditModal = () => {
    console.log("edit post close");
    setPostContent(post.postData);
    setSelectedImage(null); //change
    setImagePreview(post.image ? `${API_BASE_URL}/${post.image}` : null);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imagePreview != null) {
      setSelectedImage(null);
      setImagePreview(null);
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
      return;
    }

    //didnt change image- null
    //delete image or no image- UNDEFINED

    try {
      const imageToSend = selectedImage !== null ? selectedImage : post.image;
      console.log("image to send", post.image);
      console.log("image to send", imageToSend);

      const updatedPost = await updatePost(post._id, postContent, imageToSend);

      if (updatedPost) {
        console.log("Post updated successfully");
        setPostContent(updatedPost.postData);

        setImagePreview(
          updatedPost.image
            ? `${API_BASE_URL}/${updatedPost.image}`
            : null
        );

        post.postData = updatedPost.postData;
        post.image = updatedPost.image;

        setSelectedImage(null);
        fetchUserPosts();
        onClose();
      }
    } catch (error) {
      console.error("Error updating post");
    }
  };

  const updatePost = async (
    postId: string,
    postData: string,
    image?: File | string
  ) => {
    try {
      const formData = new FormData();
      formData.append("postData", postData);

      if (!user?._id) {
        throw new Error("User ID is missing");
      }

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      const data = await response.json();
      console.log("client Updated post");
      return data;
    } catch (error) {
      console.error("Error updating post");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeEditModal}>
          ×
        </button>
        <h2>עריכת פוסט</h2>
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
