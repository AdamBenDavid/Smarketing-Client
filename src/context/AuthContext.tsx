import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types/user";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  loading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setUser({
        _id: userId,
        email: localStorage.getItem("userEmail") || "",
        fullName: localStorage.getItem("userFullName") || "",
        role: "user",
        expertise: [],
        profilePicture:
          localStorage.getItem("profilePicture") ||
          "https://placehold.co/150x150",
      });
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const login = (userData: User, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userData._id || "");
    localStorage.setItem("userEmail", userData.email || "");
    localStorage.setItem("userFullName", userData.fullName);
    localStorage.setItem("profilePicture", userData.profilePicture || "");

    setAccessToken(token);
    setUser(userData);
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      try {
        await fetch("http://localhost:3000/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        });
      } catch (error) {
        console.error("Logout request failed", error);
      }
    }

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("profilePicture");

    setAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);

    window.location.href = "/forms";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        loading,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
