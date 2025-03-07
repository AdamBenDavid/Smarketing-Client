import { User } from "../../types/user";
export interface CommentType {
  id: string;
  text: string;
  user: User;
}

export interface Post {
  id: string;
  user: User;
  postData: string;
  image: string;
  comments: CommentType[];
}
