import React, { useState, useRef, useEffect } from 'react';
import ChatBox from '../components/ChatBox';
import SuggestionChips from '../components/SuggestionChips';

const API_URL = 'https://persona-chatbot-genai-8p1y.onrender.com/chat';

const personaNames = {
  anshuman: "Anshuman Singh",
  abhimanyu: "Abhimanyu Saxena",
  kshitij: "Kshitij Mishra"
};

const personaSuggestions = {
  anshuman: ["How do I get better at system design?", "Should I learn Python or Java for backend development?", "I'm struggling to learn dynamic programming. What should I do?"],
  abhimanyu: ["How much time should I spend on LeetCode before applying to jobs?", "I have an idea for an app. Should I learn React Native or Flutter?", "I am failing technical interviews at the system design round."],
  kshitij: ["For finding duplicates in an array, I can just use two nested loops and check every pair, right?", "How do I reverse a linked list? I was thinking of putting all the values in an array...", "I'm getting a Time Limit Exceeded (TLE) on my Fibonacci code."]
};

function ChatPage({ persona, onSwitchPersona }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const historyToKeep = newMessages.slice(-10);
      const historyForApi = historyToKeep.slice(0, -1);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          persona: persona,
          history: historyForApi
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', content: `Error: ${data.error}` }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "Failed to connect to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Chatting with {personaNames[persona]}</h2>
        <button className="switch-btn" onClick={onSwitchPersona}>Switch Persona</button>
      </div>
      
      <ChatBox messages={messages} isLoading={isLoading} chatEndRef={chatEndRef} />
      
      <div className="input-area">
        {messages.length === 0 && (
          <SuggestionChips 
            suggestions={personaSuggestions[persona]} 
            onSelect={sendMessage} 
          />
        )}
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
