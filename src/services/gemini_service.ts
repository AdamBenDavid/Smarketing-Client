import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

export const sendImageToGemini = async (
  Image: string
): Promise<string | null> => {
  console.log("gemini service");
  try {
    console.log("length:" + (Image.length * 0.75) / 1024 + "KB");

    const response = await api.post("/gemini", { base64Image: Image });

    console.log("response.data.response: " + response.data.response);
    return response.data.response;
  } catch (error) {
    console.log("getGeminiImageDescription catch");
    console.error("שגיאה בשליחת התמונה ל-Gemini:", error);
    return null;
  }
};
