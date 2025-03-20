import axios from "axios";

const API_BASE_URL = import.meta.env.BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

let abortController: AbortController | null = null;

export const sendImageToGemini = async (
  Image: string
): Promise<string | null> => {
  if (abortController) {
    abortController.abort();
  }

  abortController = new AbortController();
  const { signal } = abortController;

  try {
    const response = await api.post(
      "/gemini",
      { base64Image: Image },
      { signal }
    );

    console.log("response.data.response: " + response.data.response);
    return response.data.response;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("הבקשה ל-Gemini לא בוטלה");
    } else {
      console.error("שגיאה בשליחת התמונה ל-Gemini:", error);
    }
    return null;
  }
};

export const cancelGeminiRequest = () => {
  if (abortController) {
    abortController.abort();
    console.log("🔴 הבקשה ל-Gemini בוטלה בהצלחה!");
    abortController = null;
  }
};
