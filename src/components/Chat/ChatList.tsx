import { useState } from "react";
import styles from "./ChatList.module.css";
import { User } from "../../types/user";

interface ChatListProps {
  onSelectUser: (user: User) => void;
  currentUserId: string;
}

export const ChatList = ({ onSelectUser, currentUserId }: ChatListProps) => {
  // Mock data for available users
  const mockUsers: User[] = [
    {
      _id: "user1",
      email: "ron@example.com",
      fullName: "רון לוי",
      profilePicture: "https://placehold.co/50x50",
      role: "מנהל קמפיינים",
      expertise: ["קמפיינים", "פרסום"],
      lastSeen: new Date(),
      online: true
    },
    {
      _id: "user2",
      email: "michal@example.com",
      fullName: "מיכל כהן",
      profilePicture: "https://placehold.co/50x50",
      role: "יועצת שיווק דיגיטלי",
      expertise: ["שיווק דיגיטלי"],
      lastSeen: new Date(),
      online: true
    },
    {
      _id: "user3",
      email: "avi@example.com",
      fullName: "אבי ישראלי",
      profilePicture: "https://placehold.co/50x50",
      role: "מומחה SEO",
      expertise: ["SEO"],
      lastSeen: new Date(),
      online: false
    },
  ];

  return (
    <div className={styles.chatList}>
      <div className={styles.header}>
        <h2>צ'אטים</h2>
      </div>
      <div className={styles.userList}>
        {mockUsers.map((user) => (
          <div
            key={user._id}
            className={styles.userItem}
            onClick={() => onSelectUser(user)}
          >
            <img
              src={user.profilePicture}
              alt={user.fullName}
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <h3>{user.fullName}</h3>
              <span className={styles.userRole}>{user.role}</span>
              <p className={styles.lastMessage}>
                <span className={styles.onlineStatus}>
                  {user.online ? "מחובר" : "לא מחובר"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
