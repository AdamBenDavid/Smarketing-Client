export const API_URL = "http://localhost:3000"; // Update to match backend

// Fetch all comments for a post
export const fetchComments = async (postId: string) => {
  try {
    const response = await fetch(`${API_URL}/comments?postId=${postId}`);
    if (!response.ok) throw new Error("Failed to fetch comments");
    return await response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export const addComment = async (
  postId: string,
  userId: string,
  commentData: string
) => {
  try {
    const requestBody = { userId, commentData, postId };

    console.log("📡 Sending request to /comments:", requestBody);

    const response = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(" API Error Response:", errorResponse);
      throw new Error("Failed to add comment");
    }

    return await response.json();
  } catch (error) {
    console.error(" Error adding comment:", error);
    return null;
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Failed to delete comment");

    return true; // ✅ Success
  } catch (error) {
    console.error("❌ Error deleting comment:", error);
    return false; // ❌ Failure
  }
};
