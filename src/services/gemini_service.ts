import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

let abortController: AbortController | null = null;

export const sendImageToGemini = async (
  Image: string
): Promise<string | null> => {
  console.log("gemini service");

  // ביטול בקשה קודמת אם יש
  if (abortController) {
    abortController.abort();
  }

  // יצירת בקר חדש
  abortController = new AbortController();
  const { signal } = abortController;

  try {
    //console.log("length: " + (Image.length * 0.75) / 1024 + "KB");
    const response = await api.post(
      "/gemini",
      { base64Image: Image },
      { signal }
    );

    console.log("response.data.response: " + response.data.response);
    return response.data.response;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("הבקשה ל-Gemini בוטלה:", error.message);
    } else {
      console.error("שגיאה בשליחת התמונה ל-Gemini:", error);
    }
    return null;
  }
};

// פונקציה לביטול הבקשה
export const cancelGeminiRequest = () => {
  if (abortController) {
    abortController.abort();
    console.log("🔴 הבקשה ל-Gemini בוטלה בהצלחה!");
    abortController = null;
  }
};
