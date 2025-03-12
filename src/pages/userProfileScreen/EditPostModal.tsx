import { useEffect, useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useAuth } from "../../context/AuthContext";
import { IconButton } from "@mui/material";
import { Post } from "../../components/feed";

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
    post.image ? `http://localhost:3000/${post.image}` : null
  );
  const [previousImageFile, setPreviousImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const { user, accessToken } = useAuth();

  const closeEditModal = () => {
    console.log("edit post close");
    setPostContent(post.postData);
    setSelectedImage(null); //change
    setImagePreview(post.image ? `http://localhost:3000/${post.image}` : null);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Image change event:", e.target.files);

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

    console.log("postContent: ", postContent);

    if (!postContent.trim()) return;
    if (!accessToken) {
      console.error("No access token available");
      return;
    }

    //didnt change image- null
    //delete image/ no image- UNDEFINED

    try {
      // אם לא נבחרה תמונה חדשה – נשלח את התמונה הקיימת
      const imageToSend = selectedImage !== null ? selectedImage : post.image;
      console.log("image to send", post.image);
      console.log("image to send", imageToSend);
      console.log("image to send", imageToSend);

      const updatedPost = await updatePost(post._id, postContent, imageToSend);

      if (updatedPost) {
        console.log("Post updated successfully:", updatedPost);
        setPostContent(updatedPost.postData);

        setImagePreview(
          updatedPost.image
            ? `http://localhost:3000/${updatedPost.image}`
            : null
        );

        //update post also
        post.postData = updatedPost.postData;
        post.image = updatedPost.image;

        setSelectedImage(null); //change to only null
        fetchUserPosts();
        onClose();
      }
    } catch (error) {
      console.error("Error updating post:", error);
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

      for (const [key, value] of formData.entries()) {
        console.log(`📦 FormData - ${key}:`, value);
      }
      console.log("form data", formData);

      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
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
      console.log("✅client Updated post:", data);
      return data;
    } catch (error) {
      console.error("Error updating post:", error);
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
    // <div className={styles.modalOverlay}>
    //   <div className={styles.modal}>
    //     <button className={styles.closeButton} onClick={closeEditModal}>
    //       ×
    //     </button>
    //     <h2>יצירת פוסט חדש</h2>
    //     <form onSubmit={handleSubmit}>
    //       <textarea
    //         value={postContent}
    //         onChange={(e) => setPostContent(e.target.value)}
    //         placeholder="על מה תרצה לשתף?"
    //         className={styles.contentInput}
    //       />

    //       <div className={styles.imageUpload}>
    //         <input
    //           type="file"
    //           accept="image/*"
    //           onChange={handleImageChange}
    //           id="imageInput"
    //           className={styles.fileInput}
    //         />
    //         <IconButton className={styles.uploadButton}>
    //           <label htmlFor="imageInput" className={styles.uploadButton}>
    //             {imagePreview ? "שנה תמונה" : "הוסף תמונה"}
    //           </label>
    //         </IconButton>

    //       </div>

    //       {imagePreview && (
    //         <div className={styles.imagePreview}>
    //           <img src={imagePreview} alt="Preview" />
    //         </div>
    //       )}

    //       <button
    //         type="submit"
    //         className={styles.submitButton}
    //         disabled={!postContent.trim()}
    //       >
    //         פרסם
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};
