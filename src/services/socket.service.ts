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

  get socket(): Socket | null {
    return this._socket;
  }

  connect(token: string): void {
    console.log('[SocketService] Attempting to connect with token:', token);
    if (this._socket) {
      console.log('[SocketService] Existing socket found, disconnecting...');
      this._socket.disconnect();
    }

    this._socket = io('http://localhost:3000', {
      auth: { token },
      transports: ['websocket', 'polling'],
      withCredentials: true
    });

    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (!this._socket) {
      console.error('[SocketService] No socket instance available for event setup');
      return;
    }

    this._socket.on('connect', () => {
      console.log('[SocketService] Connected to socket server');
      console.log('[SocketService] Requesting online users list...');
      this._socket?.emit('getOnlineUsers');
    });

    this._socket.on('connect_error', (error) => {
      console.error('[SocketService] Socket connection error:', error);
    });

    this._socket.on('onlineUsers', (users: User[]) => {
      console.log('[SocketService] Received online users:', users);
      console.log('[SocketService] Number of handlers:', this.onlineUsersHandlers.length);
      this.onlineUsersHandlers.forEach(handler => {
        console.log('[SocketService] Calling handler with users');
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
      console.log('[SocketService] Received chat history:', messages.length, 'messages');
      console.log('[SocketService] Number of chat history handlers:', this.chatHistoryHandlers.length);
      this.chatHistoryHandlers.forEach(handler => {
        console.log('[SocketService] Calling chat history handler');
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
    console.log('[SocketService] Adding online users handler');
    this.onlineUsersHandlers.push(handler);
    return () => {
      console.log('[SocketService] Removing online users handler');
      this.onlineUsersHandlers = this.onlineUsersHandlers.filter(h => h !== handler);
    };
  }

  onChatHistory(handler: (messages: ChatMessage[]) => void) {
    console.log('[SocketService] Adding chat history handler');
    this.chatHistoryHandlers.push(handler);
    return () => {
      console.log('[SocketService] Removing chat history handler');
      this.chatHistoryHandlers = this.chatHistoryHandlers.filter(h => h !== handler);
    };
  }

  disconnect(): void {
    if (this._socket) {
      console.log('[SocketService] Disconnecting socket');
      this._socket.disconnect();
      this._socket = null;
    }
  }
}

export const socketService = new SocketService(); 