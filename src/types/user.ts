export interface User {
  _id: string;
  email: string;
  fullName: string;
  role?: string;
  expertise?: string[];
  profilePicture?: string;
  online?: boolean;
  lastSeen?: Date;
}
