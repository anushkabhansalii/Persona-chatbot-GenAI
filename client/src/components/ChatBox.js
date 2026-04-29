import React from 'react';
import MessageBubble from './MessageBubble';

function ChatBox({ messages, isLoading, chatEndRef }) {
  return (
    <div className="chat-box">
      {messages.length === 0 && (
        <div style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
          Start the conversation below!
        </div>
      )}
      
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} role={msg.role} content={msg.content} />
      ))}
      
      {isLoading && (
        <div className="typing-indicator">
          AI is typing...
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
}

export default ChatBox;
