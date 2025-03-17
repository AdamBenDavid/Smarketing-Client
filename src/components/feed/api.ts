export const API_URL = "http://localhost:3000";

export const fetchComments = async (postId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/comments?postId=${postId}`
    );
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
    console.error("❌ Error adding comment:", error);
    return null;
  }
};

export const deleteComment = async (commentId: string) => {
  console.log("api delete comment", commentId);
  try {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to delete comment");

    return true;
  } catch (error) {
    console.error("❌ Error deleting comment:", error);
    return false;
  }
};
