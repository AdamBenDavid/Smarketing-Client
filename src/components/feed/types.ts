import { User } from "../../types/user";
export interface CommentType {
  id: string;
  text: string;
  user: User;
}

export interface Post {
  _id: string;
  senderId: string;
  postData: string;
  comments: CommentType[];
  image?: string;
  likes?: User[];
}
