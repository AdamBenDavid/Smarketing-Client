import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { User } from "../types/user";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for saved token and user data in localStorage
    const savedToken = localStorage.getItem("token");
    const savedUserData = localStorage.getItem("user");
    
    if (savedToken) {
      setToken(savedToken);
      
      // Only try to parse user data if it exists and isn't "undefined"
      if (savedUserData && savedUserData !== "undefined") {
        try {
          const parsedUser = JSON.parse(savedUserData);
          setUser(parsedUser);
        } catch (error) {
          console.error("Error parsing saved user:", error);
          // Clear invalid data
          localStorage.removeItem("user");
        }
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      const { accessToken, _id } = response.data;
      
      // Create user object from response
      const userData = {
        _id,
        email,
        fullName: email // Using email as fullName temporarily since backend doesn't return it
      };
      
      // Save to state
      setToken(accessToken);
      setUser(userData);
      
      // Save to localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(userData));
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data || "Login failed");
      }
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
