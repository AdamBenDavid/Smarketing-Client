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
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');
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

    
    // Only add message if it's part of the current conversation
    if (selectedUser && (
      (chatMessage.senderId === currentUser._id && chatMessage.recipientId === selectedUser._id) ||
      (chatMessage.senderId === selectedUser._id && chatMessage.recipientId === currentUser._id)
    )) {
      const message: Message = {
        _id: chatMessage._id || '',
        sender: chatMessage.senderId,
        receiver: chatMessage.recipientId,
        content: chatMessage.content,
        timestamp: new Date(chatMessage.timestamp)
      };
      
      setMessages(prev => {
        // Check if message already exists by comparing content and timestamps
        const messageExists = prev.some(m => {
          // If we have an exact ID match
          if (m._id === message._id) return true;
          
          // If we have a matching content and timestamp within 1 second (for optimistic updates)
          const timeDiff = Math.abs(new Date(m.timestamp).getTime() - new Date(message.timestamp).getTime());
          return m.content === message.content && 
                 m.sender === message.sender && 
                 timeDiff < 1000;
        });

        if (messageExists) {
          console.log('[ChatModal] Message already exists (either by ID or content+time), skipping');
          return prev;
        }

        console.log('[ChatModal] Adding new message');
        return [...prev, message];
      });
    } else {

    }
  }, [currentUser._id, selectedUser]);

  // Handle chat history
  const handleChatHistory = useCallback((history: ChatMessage[]) => {
 
    
    if (!selectedUser) {
      console.warn('[ChatModal] No selected user, skipping chat history');
      return;
    }
    
  
    const formattedHistory = history.map(msg => {
      const isRelevant = (
        (msg.senderId === currentUser._id && msg.recipientId === selectedUser._id) ||
        (msg.senderId === selectedUser._id && msg.recipientId === currentUser._id)
      );

      
      
      if (isRelevant) {
        return {
          _id: msg._id || '',
          sender: msg.senderId,
          receiver: msg.recipientId,
          content: msg.content,
          timestamp: new Date(msg.timestamp)
        };
      }
      return null;
    }).filter(msg => msg !== null) as Message[];


    setMessages(formattedHistory);

  }, [selectedUser, currentUser._id]);

  // Socket connection effect
  useEffect(() => {
    if (!token) {
      setConnectionStatus('disconnected');
      return;
    }

    try {
      socketService.connect(token);
      socketRef.current = socketService.socket;

      // Set up connection status listeners
      socketRef.current?.on('connect', () => {
        setConnectionStatus('connected');
        socketRef.current?.emit("getOnlineUsers");
        
        // Re-request chat history if we have a selected user
        if (selectedUser) {
          socketRef.current?.emit("getChatHistory", {
            userId: currentUser._id,
            partnerId: selectedUser._id,
          });
        }
      });

      socketRef.current?.on('disconnect', () => {
        setConnectionStatus('disconnected');
      });

      socketRef.current?.on('connect_error', () => {
        setConnectionStatus('disconnected');
      });

      // Set up event handlers
      const unsubscribeMessage = socketService.onMessage(handleReceiveMessage);
      const unsubscribeTyping = socketService.onTyping(handleTypingEvent);
      const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);
      const unsubscribeChatHistory = socketService.onChatHistory(handleChatHistory);

      return () => {
        unsubscribeMessage();
        unsubscribeTyping();
        unsubscribeOnlineUsers();
        unsubscribeChatHistory();
        socketRef.current?.off('connect');
        socketRef.current?.off('disconnect');
        socketRef.current?.off('connect_error');
      };
    } catch (error) {
      console.error('Error setting up socket connection:', error);
      setConnectionStatus('disconnected');
    }
  }, [token, selectedUser, currentUser._id]);

  // Scroll effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = useCallback(() => {
    if (!newMessage.trim() || !selectedUser) return;

    const now = new Date();
    const message = {
      senderId: currentUser._id,
      recipientId: selectedUser._id,
      content: newMessage,
      timestamp: now,
    };

    socketRef.current?.emit("private_message", message);
    
    // Optimistically add message to state
    const localMessage: Message = {
      _id: `temp-${now.getTime()}`, // Temporary ID that won't conflict with MongoDB IDs
      sender: currentUser._id,
      receiver: selectedUser._id,
      content: newMessage,
      timestamp: now
    };
    
    setMessages(prev => [...prev, localMessage]);
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
    setMessages([]);

    const requestChatHistory = () => {
      if (socketRef.current?.connected) {
     
        socketRef.current.emit("getChatHistory", {
          userId: currentUser._id,
          partnerId: user._id,
        });
      } else {
        setTimeout(requestChatHistory, 500);
      }
    };

    // Wait a short moment for the socket to be ready
    setTimeout(requestChatHistory, 100);
    
  }, [currentUser._id]);


  return (
    <div className={styles.chatModal}>
      <div className={styles.header}>
        {selectedUser ? (
          <div className={styles.selectedUserInfo}>
            <img
              src={selectedUser.profilePicture || "https://placehold.co/40x40"}
              alt={selectedUser.email}
              className={styles.userAvatar}
            />
            <div className={styles.userDetails}>
              <h2>{selectedUser.email}</h2>
              <span className={styles.onlineStatus}>
                {onlineUsers.some(u => u._id === selectedUser._id) ? 'מחובר' : 'לא מחובר'}
              </span>
            </div>
          </div>
        ) : (
          <h2>צ'אט</h2>
        )}
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
      </div>

      {connectionStatus === 'disconnected' && (
        <div className={styles.connectionError}>
          מתנתק מהשרת... מנסה להתחבר מחדש
        </div>
      )}

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