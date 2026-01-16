'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getChatbotResponse } from '@/utils/api';

export default function Chatbot({ currentTopic }) {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm here to help you understand this topic. Ask me anything! 🤖" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await getChatbotResponse(input, currentTopic);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Sorry, I'm having trouble right now. Try again!" 
      }]);
    }
    setLoading(false);
  };

  return (
    
      AI Helper 🤖
      
      
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            
          
        ))}
        {loading && (
          
            
              Thinking...
            
          
        )}
      

      
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask a question..."
          className="flex-1 border-2 border-indigo-300 rounded-lg px-4 py-2"
        />
        
          Send
        
      
    
  );
}