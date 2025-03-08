import { User } from "./user";

export interface CommentType {
  id: string;
  text: string;
  user: User;
}

export interface Post {
  _id: string; // ✅ Matches MongoDB `_id` field
  senderId: User; // ✅ Fetches `fullName` & `profilePicture` from `senderId`
  postData: string;
  image?: string; // ✅ Image might be null
  comments: CommentType[];
}
