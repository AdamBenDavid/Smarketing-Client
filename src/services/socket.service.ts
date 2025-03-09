import { io, Socket } from 'socket.io-client';
import { ChatMessage } from '../components/Chat/types';
import { User } from '../types/user';

class SocketService {
  private _socket: Socket | null = null;
  private messageHandlers: ((message: ChatMessage) => void)[] = [];
  private typingHandlers: ((userId: string) => void)[] = [];
  private readHandlers: ((userId: string) => void)[] = [];
  private onlineUsersHandlers: ((users: User[]) => void)[] = [];
  private chatHistoryHandlers: ((messages: ChatMessage[]) => void)[] = [];
  private connectionAttempts: number = 0;
  private maxRetries: number = 3;
  private retryDelay: number = 2000;

  get socket(): Socket | null {
    return this._socket;
  }

  connect(token: string): void {
    if (this._socket?.connected) {
      return; // Already connected
    }

    if (this._socket) {
      this._socket.disconnect();
    }

    this._socket = io('http://localhost:3000', {
      auth: { token },
      transports: ['websocket', 'polling'],
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 10000
    });

    this.setupEventListeners();
    this.handleReconnection(token);
  }

  private handleReconnection(token: string): void {
    if (!this._socket) return;

    this._socket.on('connect_error', (error) => {
      console.error('[SocketService] Connection error:', error.message);
      
      if (this.connectionAttempts < this.maxRetries) {
        this.connectionAttempts++;
        console.log(`[SocketService] Retrying connection (${this.connectionAttempts}/${this.maxRetries})...`);
        
        setTimeout(() => {
          if (!this._socket?.connected) {
            this.connect(token);
          }
        }, this.retryDelay);
      } else {
        console.error('[SocketService] Max reconnection attempts reached');
      }
    });

    this._socket.on('connect', () => {
      console.log('[SocketService] Successfully connected');
      this.connectionAttempts = 0; // Reset attempts on successful connection
      this._socket?.emit('getOnlineUsers');
    });

    this._socket.on('disconnect', (reason) => {
      console.log('[SocketService] Disconnected:', reason);
      if (reason === 'io server disconnect') {
        // Server initiated disconnect, try to reconnect
        setTimeout(() => this.connect(token), this.retryDelay);
      }
    });
  }

  private setupEventListeners() {
    if (!this._socket) {
      console.error('[SocketService] No socket instance available for event setup');
      return;
    }

    this._socket.on('onlineUsers', (users: User[]) => {
        this.onlineUsersHandlers.forEach(handler => {
        handler(users);
      });
    });

    this._socket.on('new_message', (data: { message: ChatMessage, sender: string }) => {
      this.messageHandlers.forEach(handler => handler(data.message));
    });

    this._socket.on('message_sent', (message: ChatMessage) => {
      this.messageHandlers.forEach(handler => handler(message));
    });

    this._socket.on('chat_history', (messages: ChatMessage[]) => {
        this.chatHistoryHandlers.forEach(handler => {
        handler(messages);
      });
    });

    this._socket.on('user_typing', (data: { userId: string }) => {
      this.typingHandlers.forEach(handler => handler(data.userId));
    });

    this._socket.on('messages_read', (data: { by: string }) => {
      this.readHandlers.forEach(handler => handler(data.by));
    });
  }

  sendMessage(recipientId: string, content: string) {
    if (!this._socket?.connected) {
      console.error('Socket not connected');
      return;
    }

    this._socket.emit('private_message', { recipientId, content });
  }

  sendTyping(recipientId: string) {
    if (!this._socket?.connected) return;
    this._socket.emit('typing', { recipientId });
  }

  markAsRead(senderId: string) {
    if (!this._socket?.connected) return;
    this._socket.emit('mark_read', { senderId });
  }

  onMessage(handler: (message: ChatMessage) => void) {
    this.messageHandlers.push(handler);
    return () => {
      this.messageHandlers = this.messageHandlers.filter(h => h !== handler);
    };
  }

  onTyping(handler: (userId: string) => void) {
    this.typingHandlers.push(handler);
    return () => {
      this.typingHandlers = this.typingHandlers.filter(h => h !== handler);
    };
  }

  onMessagesRead(handler: (userId: string) => void) {
    this.readHandlers.push(handler);
    return () => {
      this.readHandlers = this.readHandlers.filter(h => h !== handler);
    };
  }

  onOnlineUsers(handler: (users: User[]) => void) {
    this.onlineUsersHandlers.push(handler);
    return () => {
      this.onlineUsersHandlers = this.onlineUsersHandlers.filter(h => h !== handler);
    };
  }

  onChatHistory(handler: (messages: ChatMessage[]) => void) {
    this.chatHistoryHandlers.push(handler);
    return () => {
      this.chatHistoryHandlers = this.chatHistoryHandlers.filter(h => h !== handler);
    };
  }

  disconnect(): void {
    if (this._socket) {
      this._socket.disconnect();
      this._socket = null;
    }
  }
}

export const socketService = new SocketService(); 