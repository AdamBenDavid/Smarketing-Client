export interface User {
  id: string;
  name: string;
  profilePicture: string;
}

export interface CommentType {
  id: string;
  text: string;
  user: User;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  comments: CommentType[];
}
