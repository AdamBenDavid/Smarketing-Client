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
    console.log('------------------------');
    console.log('[ChatModal] Received new message:', chatMessage);
    
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
      
      console.log('[ChatModal] Adding new message to state:', message);
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
      console.log('[ChatModal] Message not for current conversation, skipping');
      console.log('Current user:', currentUser._id);
      console.log('Selected user:', selectedUser?._id);
      console.log('Message sender:', chatMessage.senderId);
      console.log('Message recipient:', chatMessage.recipientId);
    }
    console.log('------------------------');
  }, [currentUser._id, selectedUser]);

  // Handle chat history
  const handleChatHistory = useCallback((history: ChatMessage[]) => {
    console.log('------------------------');
    console.log('[ChatModal] handleChatHistory START');
    console.log('[ChatModal] Current user:', currentUser._id);
    console.log('[ChatModal] Selected user:', selectedUser?._id);
    console.log('[ChatModal] Raw history length:', history.length);
    console.log('[ChatModal] First raw message:', history[0]);
    
    if (!selectedUser) {
      console.warn('[ChatModal] No selected user, skipping chat history');
      return;
    }
    
    console.log('[ChatModal] Processing chat history between:', {
      currentUser: currentUser._id,
      selectedUser: selectedUser._id
    });

    const formattedHistory = history.map(msg => {
      const isRelevant = (
        (msg.senderId === currentUser._id && msg.recipientId === selectedUser._id) ||
        (msg.senderId === selectedUser._id && msg.recipientId === currentUser._id)
      );

      console.log('[ChatModal] Message check:', {
        messageId: msg._id,
        sender: msg.senderId,
        recipient: msg.recipientId,
        isRelevant,
        content: msg.content.substring(0, 20) // Show first 20 chars
      });
      
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

    console.log('[ChatModal] Filtered history length:', formattedHistory.length);
    console.log('[ChatModal] First 3 formatted messages:', formattedHistory.slice(0, 3));
    console.log('[ChatModal] Setting messages state');
    setMessages(formattedHistory);
    console.log('[ChatModal] handleChatHistory END');
    console.log('------------------------');
  }, [selectedUser, currentUser._id]);

  // Socket connection effect
  useEffect(() => {
    console.log('------------------------');
    console.log('[ChatModal] Socket setup START');
    console.log('[ChatModal] Current socket state:', {
      exists: !!socketRef.current,
      connected: socketRef.current?.connected
    });
    
    const setupSocket = () => {
      if (!socketRef.current?.connected) {
        console.log('[ChatModal] Connecting new socket with token');
        socketService.connect(token);
        socketRef.current = socketService.socket;
        console.log('[ChatModal] New socket connected:', socketRef.current?.connected);
      }

      // Set up event handlers
      console.log('[ChatModal] Setting up event handlers');
      const unsubscribeMessage = socketService.onMessage(handleReceiveMessage);
      const unsubscribeTyping = socketService.onTyping(handleTypingEvent);
      const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);
      const unsubscribeChatHistory = socketService.onChatHistory(handleChatHistory);

      // Handle socket connect event
      socketRef.current?.on('connect', () => {
        console.log('[ChatModal] Socket connected event');
        socketRef.current?.emit("getOnlineUsers");
        
        // Re-request chat history if we have a selected user
        if (selectedUser) {
          console.log('[ChatModal] Re-requesting chat history after reconnect for user:', selectedUser._id);
          socketRef.current?.emit("getChatHistory", {
            userId: currentUser._id,
            partnerId: selectedUser._id,
          });
        }
      });

      return () => {
        console.log('[ChatModal] Cleanup event handlers');
        unsubscribeMessage();
        unsubscribeTyping();
        unsubscribeOnlineUsers();
        unsubscribeChatHistory();
        socketRef.current?.off('connect');
      };
    };

    const cleanup = setupSocket();
    console.log('[ChatModal] Socket setup END');
    console.log('------------------------');

    return () => {
      cleanup();
      // Only disconnect if component is unmounting completely
      if (socketRef.current?.connected && !document.querySelector('.chatModal')) {
        console.log('[ChatModal] Disconnecting socket - component fully unmounting');
        socketService.disconnect();
      } else {
        console.log('[ChatModal] Keeping socket connection alive');
      }
    };
  }, [token, handleTypingEvent, handleOnlineUsers, handleReceiveMessage, handleChatHistory, selectedUser, currentUser._id]);

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

    console.log('[ChatModal] Sending message:', message);
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
    console.log('------------------------');
    console.log('[ChatModal] User selection START');
    console.log('[ChatModal] Selecting user:', {
      id: user._id,
      name: user.fullName,
      email: user.email
    });
    
    setSelectedUser(user);
    console.log('[ChatModal] Clearing previous messages');
    setMessages([]);

    const requestChatHistory = () => {
      if (socketRef.current?.connected) {
        console.log('[ChatModal] Requesting chat history:', {
          currentUser: currentUser._id,
          partnerId: user._id
        });
        socketRef.current.emit("getChatHistory", {
          userId: currentUser._id,
          partnerId: user._id,
        });
      } else {
        console.log('[ChatModal] Socket not connected, retrying in 500ms');
        setTimeout(requestChatHistory, 500);
      }
    };

    // Wait a short moment for the socket to be ready
    setTimeout(requestChatHistory, 100);
    
    console.log('[ChatModal] User selection END');
    console.log('------------------------');
  }, [currentUser._id]);

  // Debug messages state changes
  useEffect(() => {
    console.log('------------------------');
    console.log('[ChatModal] Messages state changed');
    console.log('[ChatModal] Messages count:', messages.length);
    console.log('[ChatModal] First 3 messages:', messages.slice(0, 3));
    console.log('------------------------');
  }, [messages]);

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