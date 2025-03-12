import axios from "axios";
import { User } from "../types/user";
import { CredentialResponse } from "@react-oauth/google";
import { AuthResponse } from "../types/user";
import { useAuth } from "../context/AuthContext";

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

    console.log("loginUser response:", response.data);

    const { accessToken, refreshToken, _id, fullName, profilePicture } =
      response.data;

    if (!accessToken) {
      throw new Error("Access token missing from login response");
    }

    const profilePicUrl = profilePicture
      ? profilePicture.startsWith("http")
        ? profilePicture
        : `http://localhost:3000/uploads/profile_pictures/${profilePicture}`
      : "https://placehold.co/150x150";

    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userId", _id);
    localStorage.setItem("userFullName", fullName);
    localStorage.setItem("profilePicture", profilePicUrl);

    return {
      _id,
      fullName,
      profilePicture: profilePicUrl,
      accessToken,
    };
  } catch (error: any) {
    console.log("loginUser error:", error);
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

export const updateProfile = async (
  userId: string,
  formData: FormData,
  accessToken: string | null
) => {
  try {
    console.log("user:", userId);
    console.log("access token:", accessToken);

    const response = await api.put(`/users/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || "Failed to update profile";
  }
};

export const usersService = {
  getUserProfile: async () => {
    try {
      const response = await api.get("/auth/me");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch user profile";
    }
  },

  //continue- access token
  updateProfile: async (
    updateUser: User,
    formData: FormData,
    accessToken: string | null
  ) => {
    try {
      const response = await api.put(`/users/${updateUser._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to update profile";
    }
  },
};

export default api;
