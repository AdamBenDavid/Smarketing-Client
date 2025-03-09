export interface User {
  email: string;
  fullName?: string; // Use fullName consistently instead of name

  _id?: string; // Consistent ID field
  password?: string;

  role?: string;
  expertise?: string[];
  profilePicture?: string;
  online?: boolean; // For chat functionality
  lastSeen?: Date; // For chat functionality
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}
