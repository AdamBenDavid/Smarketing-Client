import axios from "axios";
import { User } from "../../types/user";
import { CredentialResponse } from "@react-oauth/google";
import { AuthResponse } from "../../types/user";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/register", { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "Failed to register";
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "Failed to login";
  }
};

export const googleSignin = async (
  credentialResponse: CredentialResponse
): Promise<AuthResponse> => {
  console.log("googleSignin...");

  try {
    const response = await api.post<AuthResponse>(
      "/auth/google",
      credentialResponse
    );
    console.log("googleSignin response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("googleSignin error:", error);
    throw error;
  }
};
export default api;
