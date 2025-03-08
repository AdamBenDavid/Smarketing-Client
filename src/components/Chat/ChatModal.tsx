import { useState, useEffect, useRef, useCallback, memo } from "react";
import styles from "./ChatModal.module.css";
import { User } from "../../types/user";
import { socketService } from "../../services/socket.service";
import { ChatMessage } from "../../components/Chat/types";

interface ChatModalProps {
  token: string;
  currentUser: User;
  onClose: () => void;
}

interface Message {
  _id: string;
  sender: string;
  receiver: string;
  content: string;
  timestamp: Date;
}

export const ChatModal = memo(({ token, currentUser, onClose }: ChatModalProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef(socketService.socket);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Handle typing events
  const handleTypingEvent = useCallback((userId: string) => {
    if (selectedUser && userId === selectedUser._id) {
      setIsTyping(true);
      // Clear typing indicator after 3 seconds
      setTimeout(() => setIsTyping(false), 3000);
    }
  }, [selectedUser]);

  // Handle online users updates
  const handleOnlineUsers = useCallback((users: User[]) => {
    const filteredUsers = users.filter(user => user._id !== currentUser._id);
    setOnlineUsers(filteredUsers);
  }, [currentUser._id]);

  // Handle receiving messages
  const handleReceiveMessage = useCallback((chatMessage: ChatMessage) => {
    const message: Message = {
      _id: chatMessage._id || '',
      sender: chatMessage.senderId,
      receiver: chatMessage.recipientId,
      content: chatMessage.content,
      timestamp: new Date(chatMessage.timestamp)
    };

    // Only add message if it's part of the current conversation
    if (selectedUser && (
      (message.sender === currentUser._id && message.receiver === selectedUser._id) ||
      (message.sender === selectedUser._id && message.receiver === currentUser._id)
    )) {
      setMessages(prev => [...prev, message]);
    }
  }, [currentUser._id, selectedUser]);

  // Handle chat history
  const handleChatHistory = useCallback((history: ChatMessage[]) => {
    if (!selectedUser) return;
    
    const formattedHistory = history.map(msg => ({
      _id: msg._id || '',
      sender: msg.senderId,
      receiver: msg.recipientId,
      content: msg.content,
      timestamp: new Date(msg.timestamp)
    }));

    setMessages(formattedHistory);
  }, [selectedUser]);

  // Socket connection effect
  useEffect(() => {
    // Initialize socket connection only if not already connected
    if (!socketRef.current?.connected) {
      socketService.connect(token);
      socketRef.current = socketService.socket;
    }

    // Set up event handlers
    const unsubscribeMessage = socketService.onMessage(handleReceiveMessage);
    const unsubscribeTyping = socketService.onTyping(handleTypingEvent);
    const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);
    const unsubscribeChatHistory = socketService.onChatHistory(handleChatHistory);

    // Request online users list
    socketRef.current?.emit("getOnlineUsers");

    return () => {
      unsubscribeMessage();
      unsubscribeTyping();
      unsubscribeOnlineUsers();
      unsubscribeChatHistory();
      // Only disconnect if component is unmounting
      if (socketRef.current?.connected) {
        socketService.disconnect();
      }
    };
  }, [token, handleTypingEvent, handleOnlineUsers, handleReceiveMessage, handleChatHistory]);

  // Scroll effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = useCallback(() => {
    if (!newMessage.trim() || !selectedUser) return;

    const message = {
      senderId: currentUser._id,
      recipientId: selectedUser._id,
      content: newMessage,
      timestamp: new Date(),
    };

    socketRef.current?.emit("private_message", message);
    setNewMessage("");
  }, [newMessage, selectedUser, currentUser._id]);

  const handleTyping = useCallback(() => {
    if (!selectedUser) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    socketRef.current?.emit("typing", {
      userId: currentUser._id,
      receiverId: selectedUser._id,
    });

    typingTimeoutRef.current = setTimeout(() => {
      socketRef.current?.emit("stopTyping", {
        userId: currentUser._id,
        receiverId: selectedUser._id,
      });
    }, 3000);
  }, [selectedUser, currentUser._id]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    handleTyping();
  }, [handleTyping]);

  const handleUserSelect = useCallback((user: User) => {
    setSelectedUser(user);
    setMessages([]); // Clear previous messages
    // Load chat history when selecting a user
    socketRef.current?.emit("getChatHistory", {
      userId: currentUser._id,
      partnerId: user._id,
    });
  }, [currentUser._id]);

  return (
    <div className={styles.chatModal}>
      <div className={styles.header}>
        <h2>{selectedUser ? selectedUser.fullName : 'צ\'אט'}</h2>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
      </div>

      {!selectedUser ? (
        <div className={styles.userList}>
          {onlineUsers.map((user) => (
            <div
              key={user._id}
              className={styles.userItem}
              onClick={() => handleUserSelect(user)}
            >
              <img
                src={user.profilePicture || "https://placehold.co/50x50"}
                alt={user.fullName}
                className={styles.userAvatar}
              />
              <div className={styles.userInfo}>
                <h3>{user.fullName || user.email}</h3>
                <span className={styles.userEmail}>{user.email}</span>
                <span className={styles.onlineStatus}>
                  מחובר
                </span>
              </div>
            </div>
          ))}
          {onlineUsers.length === 0 && (
            <div className={styles.noUsers}>
              אין משתמשים מחוברים כרגע
            </div>
          )}
        </div>
      ) : (
        <>
          <div className={styles.messageList}>
            {messages.map((message, index) => (
              <div
                key={message._id || index}
                className={`${styles.message} ${
                  message.sender === currentUser._id ? styles.sent : styles.received
                }`}
              >
                <p>{message.content}</p>
                <span className={styles.timestamp}>
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className={styles.typingIndicator}>
                {selectedUser.fullName} מקליד...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              placeholder="הקלד הודעה..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>שלח</button>
          </div>
        </>
      )}
    </div>
  );
});

ChatModal.displayName = 'ChatModal';