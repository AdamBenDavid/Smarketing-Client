import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ChatList.module.css";
import { User } from "../../types/user";
import { socketService } from "../../services/socket.service";
import { getProfilePictureUrl } from '../../utils/imageUtils';

interface ChatListProps {
  onSelectUser: (user: User) => void;
  currentUser: User;
  token: string;
}

export const ChatList = ({ onSelectUser, currentUser, token }: ChatListProps) => {
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');
  const socketRef = useRef(socketService.socket);

  // Handle online users updates
  const handleOnlineUsers = useCallback((users: User[]) => {
    const filteredUsers = users.filter(user => user._id !== currentUser._id);
    setOnlineUsers(filteredUsers);
  }, [currentUser._id]);

  // Request online users
  const requestOnlineUsers = useCallback(() => {
    socketRef.current?.emit("getOnlineUsers");
  }, []);

  // Socket connection effect
  useEffect(() => {
    if (!token) {
      setConnectionStatus('disconnected');
      return;
    }

    try {
      // Clean token before connecting
      const cleanToken = token.replace('Bearer ', '');
      socketService.connect(cleanToken);
      socketRef.current = socketService.socket;

      // If socket is already connected, update status and request users
      if (socketRef.current?.connected) {
        setConnectionStatus('connected');
        requestOnlineUsers();
      }

      // Set up connection status listeners
      socketRef.current?.on('connect', () => {
        setConnectionStatus('connected');
        requestOnlineUsers();
      });

      socketRef.current?.on('disconnect', (reason) => {
        setConnectionStatus('disconnected');
      });

      socketRef.current?.on('connect_error', (error) => {
        setConnectionStatus('disconnected');
      });

      // Set up event handlers
      const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);

      // Set up periodic online users refresh
      const refreshInterval = setInterval(() => {
        if (socketRef.current?.connected) {
          requestOnlineUsers();
        }
      }, 30000); // Refresh every 30 seconds

      return () => {
        unsubscribeOnlineUsers();
        socketRef.current?.off('connect');
        socketRef.current?.off('disconnect');
        socketRef.current?.off('connect_error');
        clearInterval(refreshInterval);
      };
    } catch (error) {
      setConnectionStatus('disconnected');
    }
  }, [token, currentUser._id, handleOnlineUsers, requestOnlineUsers]);

  return (
    <div className={styles.chatList}>
      <div className={styles.header}>
        <h2>צ'אטים</h2>
        <span className={styles.connectionStatus}>
          {connectionStatus === 'connected' ? 'מחובר' : 'מתחבר...'}
        </span>
      </div>

      {connectionStatus === 'disconnected' && (
        <div className={styles.connectionError}>
          מתנתק מהשרת... מנסה להתחבר מחדש
        </div>
      )}

      <div className={styles.userList}>
        {onlineUsers.map((user) => (
          <div
            key={user._id}
            className={styles.userItem}
            onClick={() => {
              console.log('[ChatList] Selected user data:', {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                profilePicture: user.profilePicture,
                resolvedPicture: getProfilePictureUrl(user.profilePicture)
              });
              onSelectUser(user);
            }}
          >
            <img
              src={getProfilePictureUrl(user.profilePicture)}
              alt={user.fullName || user.email}
              className={styles.userAvatar}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/50x50";
              }}
            />
            <div className={styles.userInfo}>
              <h3>{user.fullName || user.email}</h3>
              <p className={styles.lastMessage}>
                <span className={styles.onlineStatus}>
                  מחובר
                </span>
              </p>
            </div>
          </div>
        ))}
        {onlineUsers.length === 0 && (
          <div className={styles.noUsers}>
            אין משתמשים מחוברים כרגע
          </div>
        )}
      </div>
    </div>
  );
};
