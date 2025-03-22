import { useState, useEffect, useRef, useCallback, memo } from "react";
import styles from "./ChatModal.module.css";
import { User } from "../../types/user";
import { socketService } from "../../services/socket.service";
import { ChatMessage } from "../../components/Chat/types";
import { getProfilePictureUrl } from "../../utils/imageUtils";

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

export const ChatModal = memo(
  ({ token, currentUser, selectedUser, onClose }: ChatModalProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const [connectionStatus, setConnectionStatus] = useState<
      "connecting" | "connected" | "disconnected"
    >("connecting");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const socketRef = useRef(socketService.socket);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const [error, setError] = useState<string | null>(null);

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
    const handleTypingEvent = useCallback(
      (userId: string) => {
        if (selectedUser && userId === selectedUser._id) {
          setIsTyping(true);
          // Clear typing indicator after 3 seconds
          setTimeout(() => setIsTyping(false), 3000);
        }
      },
      [selectedUser]
    );

    // Handle online users updates
    const handleOnlineUsers = useCallback(
      (users: User[]) => {
        const filteredUsers = users.filter(
          (user) => user._id !== currentUser._id
        );
        setOnlineUsers(filteredUsers);
      },
      [currentUser._id]
    );

    // Handle receiving messages
    const handleReceiveMessage = useCallback(
      (chatMessage: ChatMessage) => {
        // Only add message if it's part of the current conversation
        if (
          selectedUser &&
          ((chatMessage.senderId === currentUser._id &&
            chatMessage.recipientId === selectedUser._id) ||
            (chatMessage.senderId === selectedUser._id &&
              chatMessage.recipientId === currentUser._id))
        ) {
          const message: Message = {
            _id: chatMessage._id || "",
            sender: chatMessage.senderId,
            receiver: chatMessage.recipientId,
            content: chatMessage.content,
            timestamp: new Date(chatMessage.timestamp),
          };

          setMessages((prev) => {
            // Find any matching messages (either by ID or content)
            const existingMessageIndex = prev.findIndex((m) => {
              // If the incoming message has an ID and it matches an existing message
              if (message._id && m._id === message._id) {
                return true;
              }

              // If the incoming message matches a temporary message
              if (m._id.startsWith("temp-")) {
                const timeDiff = Math.abs(
                  new Date(m.timestamp).getTime() -
                    new Date(message.timestamp).getTime()
                );
                return (
                  m.content === message.content &&
                  m.sender === message.sender &&
                  timeDiff < 1000
                );
              }

              return false;
            });

            // If we found a matching message
            if (existingMessageIndex !== -1) {
              // If the existing message is temporary and the new one has an ID, replace it
              if (
                prev[existingMessageIndex]._id.startsWith("temp-") &&
                message._id
              ) {
              
                const newMessages = [...prev];
                newMessages[existingMessageIndex] = message;
                return newMessages;
              }

              return prev;
            }

            return [...prev, message];
          });
        } else {
         
        }
      },
      [currentUser._id, selectedUser]
    );

    // Handle chat history
    const handleChatHistory = useCallback(
      (history: ChatMessage[]) => {
        if (!selectedUser) {
          console.warn("[ChatModal] No selected user, skipping chat history");
          return;
        }

        const formattedHistory = history
          .map((msg) => {
            const isRelevant =
              (msg.senderId === currentUser._id &&
                msg.recipientId === selectedUser._id) ||
              (msg.senderId === selectedUser._id &&
                msg.recipientId === currentUser._id);

            if (isRelevant) {
              return {
                _id: msg._id || "",
                sender: msg.senderId,
                receiver: msg.recipientId,
                content: msg.content,
                timestamp: new Date(msg.timestamp),
              };
            }
            return null;
          })
          .filter((msg) => msg !== null) as Message[];
        setMessages(formattedHistory);
      },
      [selectedUser, currentUser._id]
    );

    // Socket connection effect
    useEffect(() => {
      if (!token) {
        console.error('No token available for socket connection');
        return;
      }

      // Clean token if it has Bearer prefix
      const cleanToken = token.replace('Bearer ', '');
      
      // Initialize socket connection
      try {
        socketService.connect(cleanToken);
        const socket = socketService.socket;

        if (!socket) {
          setError('Failed to establish chat connection');
          return;
        }

        socket.on('connect', () => {
          setConnectionStatus('connected');
          setError(null);
        });

        socket.on('disconnect', () => {
          setConnectionStatus('disconnected');
          setError('Chat connection lost. Reconnecting...');
        });

        socket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          setError('Failed to connect to chat server');
        });

        // Set up event handlers
        const unsubscribeMessage =
          socketService.onMessage(handleReceiveMessage);
        const unsubscribeTyping = socketService.onTyping(handleTypingEvent);
        const unsubscribeOnlineUsers =
          socketService.onOnlineUsers(handleOnlineUsers);
        const unsubscribeChatHistory =
          socketService.onChatHistory(handleChatHistory);

        // Request initial chat history
        if (socket.connected && selectedUser) {
          socket.emit("getChatHistory", {
            userId: currentUser._id,
            partnerId: selectedUser._id,
          });
        }

        // Clean up on unmount
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('connect_error');
          socketService.disconnect();
          unsubscribeMessage();
          unsubscribeTyping();
          unsubscribeOnlineUsers();
          unsubscribeChatHistory();
        };
      } catch (error) {
        console.error('Socket initialization error:', error);
        setError('Failed to initialize chat connection');
      }
    }, [
      token,
      selectedUser,
      currentUser._id,
      handleReceiveMessage,
      handleTyping,
      handleOnlineUsers,
      handleChatHistory,
    ]);

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

      // Optimistically add message to state with a temporary ID
      const localMessage: Message = {
        _id: `temp-${now.getTime()}`,
        sender: currentUser._id || "",
        receiver: selectedUser._id || "",
        content: newMessage,
        timestamp: now,
      };

      setMessages((prev) => [...prev, localMessage]);
      setNewMessage("");
    }, [newMessage, selectedUser, currentUser._id]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
        handleTyping();
      },
      [handleTyping]
    );



    if (error) {
      return <div className={styles.error}>{error}</div>;
    }

    return (
      <div className={styles.chatModal}>
        <div className={styles.header}>
          <div className={styles.selectedUserInfo}>
            <img
              src={getProfilePictureUrl(selectedUser?.profilePicture)}
              alt={selectedUser?.fullName || selectedUser?.email}
              className={styles.userAvatar}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/40x40";
              }}
            />
            <div className={styles.userDetails}>
              <h2>{selectedUser?.fullName || selectedUser?.email}</h2>
              <span className={styles.userEmail}>{selectedUser?.email}</span>
              <span className={styles.onlineStatus}>
                {onlineUsers.some((u) => u._id === selectedUser?._id)
                  ? "מחובר"
                  : "לא מחובר"}
              </span>
            </div>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        {connectionStatus === "disconnected" && (
          <div className={styles.connectionError}>
            מתנתק מהשרת... מנסה להתחבר מחדש
          </div>
        )}

        <div className={styles.messageList}>
          {messages.map((message, index) => (
            <div
              key={message._id || index}
              className={`${styles.message} ${
                message.sender === currentUser._id
                  ? styles.sent
                  : styles.received
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
  }
);

ChatModal.displayName = "ChatModal";
