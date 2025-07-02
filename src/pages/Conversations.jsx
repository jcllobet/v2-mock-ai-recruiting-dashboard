import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Send, Search, MessageSquare } from 'lucide-react';
import api, { createMockWebSocket } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';

function Conversations() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);
  const wsRef = useRef(null);
  const toast = useToast();

  const { data: conversations = [], isLoading } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => api.get('/api/conversations'),
  });

  const filteredConversations = conversations.filter(conv =>
    conv.candidate_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.position_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (selectedConversation) {
      // Initialize mock messages
      setMessages([
        {
          id: '1',
          content: 'Hi! I saw your job posting for ' + selectedConversation.position_name,
          sender: 'candidate',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '2',
          content: 'Hello! Thanks for your interest. I\'d love to tell you more about the role.',
          sender: 'agent',
          timestamp: new Date(Date.now() - 3000000).toISOString(),
        },
        {
          id: '3',
          content: selectedConversation.last_message,
          sender: 'candidate',
          timestamp: selectedConversation.last_message_time,
        },
      ]);

      // Set up WebSocket simulation
      const ws = createMockWebSocket(selectedConversation.uuid);
      wsRef.current = ws;
      
      const cleanup = ws.simulateMessage((event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'message') {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            content: data.content,
            sender: data.sender,
            timestamp: data.timestamp,
          }]);
          
          // Update unread count
          selectedConversation.unread_count = 0;
        }
      });

      return () => {
        cleanup();
        ws.close();
      };
    }
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedConversation) return;

    const newMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'agent',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    
    // Send via WebSocket
    if (wsRef.current) {
      wsRef.current.send(JSON.stringify(newMessage));
    }
    
    toast.success('Message sent');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 3600000) { // Less than 1 hour
      return `${Math.floor(diff / 60000)}m ago`;
    } else if (diff < 86400000) { // Less than 1 day
      return `${Math.floor(diff / 3600000)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading conversations..." />;
  }

  return (
    <div className="conversations-container">
      {/* Conversations List */}
      <div className="conversations-list">
        <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
          <div className="navbar-search" style={{ margin: 0 }}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.uuid}
            className={`conversation-item ${
              selectedConversation?.uuid === conversation.uuid ? 'active' : ''
            } ${conversation.unread_count > 0 ? 'unread' : ''}`}
            onClick={() => setSelectedConversation(conversation)}
          >
            <div>
              <h4>{conversation.candidate_name}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                {conversation.position_name}
              </p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {conversation.last_message}
              </p>
            </div>
            {conversation.unread_count > 0 && (
              <span className="badge">{conversation.unread_count}</span>
            )}
            <div style={{ 
              position: 'absolute', 
              top: '0.5rem', 
              right: '1rem',
              fontSize: '0.75rem',
              color: 'var(--secondary-color)'
            }}>
              {formatTime(conversation.last_message_time)}
            </div>
          </div>
        ))}
      </div>

      {/* Conversation Viewer */}
      {selectedConversation ? (
        <div className="conversation-viewer">
          <div style={{ 
            padding: '1rem', 
            borderBottom: '1px solid #eee',
            background: 'white'
          }}>
            <h3>{selectedConversation.candidate_name}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
              {selectedConversation.position_name}
            </p>
          </div>

          <div className="conversation-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'agent' ? 'outgoing' : ''}`}
              >
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="conversation-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="button" onClick={handleSendMessage}>
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-state" style={{ flex: 1 }}>
          <MessageSquare size={64} />
          <h3>Select a conversation</h3>
          <p>Choose a conversation from the list to start messaging</p>
        </div>
      )}
    </div>
  );
}

export default Conversations;