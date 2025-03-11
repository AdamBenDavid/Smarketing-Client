import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ChatList.module.css";
import { User } from "../../types/user";
import { socketService } from "../../services/socket.service";

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
    console.log('[ChatList] Received online users:', users);
    console.log('[ChatList] Current user:', currentUser);
    
    const filteredUsers = users.filter(user => user._id !== currentUser._id);
    console.log('[ChatList] Filtered online users:', filteredUsers);
    
    setOnlineUsers(filteredUsers);
  }, [currentUser._id]);

  // Request online users
  const requestOnlineUsers = useCallback(() => {
    console.log('[ChatList] Requesting online users');
    socketRef.current?.emit("getOnlineUsers");
  }, []);

  // Socket connection effect
  useEffect(() => {
    console.log('[ChatList] Setting up socket connection');
    if (!token) {
      console.log('[ChatList] No token available');
      setConnectionStatus('disconnected');
      return;
    }

    try {
      // Clean token before connecting
      const cleanToken = token.replace('Bearer ', '');
      console.log('[ChatList] Attempting to connect socket');
      socketService.connect(cleanToken);
      socketRef.current = socketService.socket;
      console.log('[ChatList] Socket reference:', socketRef.current ? 'Created' : 'Failed');

      // If socket is already connected, update status and request users
      if (socketRef.current?.connected) {
        console.log('[ChatList] Socket already connected, updating status');
        setConnectionStatus('connected');
        requestOnlineUsers();
      }

      // Set up connection status listeners
      socketRef.current?.on('connect', () => {
        console.log('[ChatList] Socket connected successfully');
        setConnectionStatus('connected');
        requestOnlineUsers();
      });

      socketRef.current?.on('disconnect', (reason) => {
        console.log('[ChatList] Socket disconnected:', reason);
        setConnectionStatus('disconnected');
      });

      socketRef.current?.on('connect_error', (error) => {
        console.log('[ChatList] Socket connection error:', error);
        setConnectionStatus('disconnected');
      });

      // Debug socket state
      if (socketRef.current) {
        console.log('[ChatList] Initial socket state:', {
          connected: socketRef.current.connected,
          disconnected: socketRef.current.disconnected,
          id: socketRef.current.id
        });
      }

      // Set up event handlers
      const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);

      // Debug event registration
      console.log('[ChatList] Event handlers set up');

      // Set up periodic online users refresh
      const refreshInterval = setInterval(() => {
        if (socketRef.current?.connected) {
          requestOnlineUsers();
        }
      }, 30000); // Refresh every 30 seconds

      return () => {
        console.log('[ChatList] Cleaning up socket listeners');
        unsubscribeOnlineUsers();
        socketRef.current?.off('connect');
        socketRef.current?.off('disconnect');
        socketRef.current?.off('connect_error');
        clearInterval(refreshInterval);
      };
    } catch (error) {
      console.error('[ChatList] Error setting up socket connection:', error);
      setConnectionStatus('disconnected');
    }
  }, [token, currentUser._id, handleOnlineUsers, requestOnlineUsers]);

  // Debug renders
  useEffect(() => {
    console.log('[ChatList] Component state:', {
      connectionStatus,
      onlineUsersCount: onlineUsers.length,
      socketConnected: socketRef.current?.connected
    });
  }, [connectionStatus, onlineUsers]);

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
              console.log('[ChatList] User selected:', user);
              onSelectUser(user);
            }}
          >
            <img
              src={user.profilePicture || "https://placehold.co/50x50"}
              alt={user.fullName}
              className={styles.userAvatar}
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
