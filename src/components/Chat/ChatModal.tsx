import { useState, useEffect, useRef, useCallback, memo } from "react";
import styles from "./ChatModal.module.css";
import { User } from "../../types/user";
import { socketService } from "../../services/socket.service";
import { ChatMessage } from "../../components/Chat/types";

interface ChatModalProps {
  token: string;
  currentUser: User;
  selectedUser?: User;
  onClose: () => void;
}

interface Message {
  _id: string;
  sender: string;
  receiver: string;
  content: string;
  timestamp: Date;
}

export const ChatModal = memo(({ token, currentUser, selectedUser, onClose }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef(socketService.socket);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Handle typing
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
    console.log('[ChatModal] Received message:', chatMessage);
    console.log('[ChatModal] Current user:', currentUser._id);
    console.log('[ChatModal] Selected user:', selectedUser?._id);
    
    // Only add message if it's part of the current conversation
    if (selectedUser && (
      (chatMessage.senderId === currentUser._id && chatMessage.recipientId === selectedUser._id) ||
      (chatMessage.senderId === selectedUser._id && chatMessage.recipientId === currentUser._id)
    )) {
      console.log('[ChatModal] Message is relevant to current conversation');
      const message: Message = {
        _id: chatMessage._id || '',
        sender: chatMessage.senderId,
        receiver: chatMessage.recipientId,
        content: chatMessage.content,
        timestamp: new Date(chatMessage.timestamp)
      };
      
      setMessages(prev => {
        // Find any matching messages (either by ID or content)
        const existingMessageIndex = prev.findIndex(m => {
          // If the incoming message has an ID and it matches an existing message
          if (message._id && m._id === message._id) {
            return true;
          }
          
          // If the incoming message matches a temporary message
          if (m._id.startsWith('temp-')) {
            const timeDiff = Math.abs(new Date(m.timestamp).getTime() - new Date(message.timestamp).getTime());
            return m.content === message.content && 
                   m.sender === message.sender && 
                   timeDiff < 1000;
          }
          
          return false;
        });

        // If we found a matching message
        if (existingMessageIndex !== -1) {
          // If the existing message is temporary and the new one has an ID, replace it
          if (prev[existingMessageIndex]._id.startsWith('temp-') && message._id) {
            console.log('[ChatModal] Replacing temporary message with confirmed message');
            const newMessages = [...prev];
            newMessages[existingMessageIndex] = message;
            return newMessages;
          }
          
          console.log('[ChatModal] Message already exists, skipping');
          return prev;
        }

        console.log('[ChatModal] Adding new message to conversation');
        return [...prev, message];
      });
    } else {
      console.log('[ChatModal] Message not relevant to current conversation');
    }
  }, [currentUser._id, selectedUser]);

  // Handle chat history
  const handleChatHistory = useCallback((history: ChatMessage[]) => {
    console.log('[ChatModal] Received chat history:', history);
    
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

    console.log('[ChatModal] Formatted history:', formattedHistory);
    setMessages(formattedHistory);
  }, [selectedUser, currentUser._id]);

  // Socket connection effect
  useEffect(() => {
    console.log('[ChatModal] Setting up socket connection');
    if (!token || !selectedUser) {
      setConnectionStatus('disconnected');
      return;
    }

    try {
      // Remove Bearer prefix if it exists
      const cleanToken = token.replace('Bearer ', '');
      socketService.connect(cleanToken);
      socketRef.current = socketService.socket;

      // Set up connection status listeners
      socketRef.current?.on('connect', () => {
        console.log('[ChatModal] Socket connected');
        setConnectionStatus('connected');
        
        // Request chat history if we have a selected user
        if (selectedUser) {
          console.log('[ChatModal] Requesting chat history for:', selectedUser._id);
          socketRef.current?.emit("getChatHistory", {
            userId: currentUser._id,
            partnerId: selectedUser._id,
          });
        }
      });

      socketRef.current?.on('disconnect', () => {
        console.log('[ChatModal] Socket disconnected');
        setConnectionStatus('disconnected');
      });

      socketRef.current?.on('connect_error', (error) => {
        console.log('[ChatModal] Socket connection error:', error);
        setConnectionStatus('disconnected');
      });

      // Set up event handlers
      const unsubscribeMessage = socketService.onMessage(handleReceiveMessage);
      const unsubscribeTyping = socketService.onTyping(handleTypingEvent);
      const unsubscribeOnlineUsers = socketService.onOnlineUsers(handleOnlineUsers);
      const unsubscribeChatHistory = socketService.onChatHistory(handleChatHistory);

      // Request initial chat history
      if (socketRef.current?.connected && selectedUser) {
        console.log('[ChatModal] Requesting initial chat history');
        socketRef.current.emit("getChatHistory", {
          userId: currentUser._id,
          partnerId: selectedUser._id,
        });
      }

      return () => {
        console.log('[ChatModal] Cleaning up socket listeners');
        unsubscribeMessage();
        unsubscribeTyping();
        unsubscribeOnlineUsers();
        unsubscribeChatHistory();
        socketRef.current?.off('connect');
        socketRef.current?.off('disconnect');
        socketRef.current?.off('connect_error');
      };
    } catch (error) {
      console.error('[ChatModal] Error setting up socket connection:', error);
      setConnectionStatus('disconnected');
    }
  }, [token, selectedUser, currentUser._id, handleReceiveMessage, handleTyping, handleOnlineUsers, handleChatHistory]);

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
    
    // Optimistically add message to state with a temporary ID
    const localMessage: Message = {
      _id: `temp-${now.getTime()}`,
      sender: currentUser._id,
      receiver: selectedUser._id,
      content: newMessage,
      timestamp: now
    };
    
    setMessages(prev => [...prev, localMessage]);
    setNewMessage("");
  }, [newMessage, selectedUser, currentUser._id]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    handleTyping();
  }, [handleTyping]);

  return (
    <div className={styles.chatModal}>
      <div className={styles.header}>
        <div className={styles.selectedUserInfo}>
          <img
            src={selectedUser?.profilePicture || "https://placehold.co/40x40"}
            alt={selectedUser?.email}
            className={styles.userAvatar}
          />
          <div className={styles.userDetails}>
            <h2>{selectedUser?.email}</h2>
            <span className={styles.onlineStatus}>
              {onlineUsers.some(u => u._id === selectedUser?._id) ? 'מחובר' : 'לא מחובר'}
            </span>
          </div>
        </div>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
      </div>

      {connectionStatus === 'disconnected' && (
        <div className={styles.connectionError}>
          מתנתק מהשרת... מנסה להתחבר מחדש
        </div>
      )}

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
            {selectedUser?.fullName} מקליד...
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
    </div>
  );
});

ChatModal.displayName = 'ChatModal';