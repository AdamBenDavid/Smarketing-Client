import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    fullName: string;
  };
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  async googleLogin(): Promise<{ authUrl: string }> {
    const response = await axios.get(`${API_URL}/auth/google`);
    return response.data;
  },

  async googleCallback(code: string): Promise<LoginResponse> {
    const response = await axios.post(`${API_URL}/auth/google/callback`, { code });
    return response.data;
  }
}; 