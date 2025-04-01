// src/components/Chatbot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Define types for our messages and user data
type MessageType = 'user' | 'bot';

interface Message {
  id: string;
  content: string;
  type: MessageType;
}

interface UserData {
  interestedProduct: string | null;
  email: string | null;
  phoneNumber: string | null;
}

// Conversation stages to guide the bot's behavior
enum ConversationStage {
  GREETING = 'greeting',
  UNDERSTAND_INTEREST = 'understand_interest',
  PROVIDE_INFO = 'provide_info',
  GET_EMAIL = 'get_email',
  GET_PHONE = 'get_phone',
  CLOSING = 'closing',
}

// Product information - replace with your actual products
const productInfo = {
  basicPlan: {
    name: 'Basic Plan',
    description: 'Entry-level access to our platform with essential features.',
    price: '$9.99/month',
  },
  proPlan: {
    name: 'Pro Plan',
    description: 'Advanced features for professionals with priority support.',
    price: '$29.99/month',
  },
  enterprisePlan: {
    name: 'Enterprise Plan',
    description: 'Customized solution for large organizations with dedicated support.',
    price: 'Contact for custom pricing',
  },
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState<ConversationStage>(ConversationStage.GREETING);
  const [userData, setUserData] = useState<UserData>({
    interestedProduct: null,
    email: null,
    phoneNumber: null,
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Start conversation when component mounts
  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage = {
        id: Date.now().toString(),
        content: "Hi there! I'm your virtual assistant. How can I help you today? I'd be happy to tell you about our products and services.",
        type: 'bot',
      };
      setMessages([{
        id: Date.now().toString(),
        content: "Hi there! I'm your virtual assistant. How can I help you today? I'd be happy to tell you about our products and services.",
        type: 'bot' as MessageType
      }]);
    }
  }, []);
  
  // Function to send message to DeepSeek API
  const sendToDeepSeekAPI = async (userMessage: string, conversationHistory: Message[]) => {
    try {
      setIsLoading(true);
      
      // Format the conversation history for the API
      const formattedHistory = conversationHistory.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      
      // Add context based on current stage
      let systemPrompt = "You are a helpful assistant for a company. ";
      
      // Add stage-specific instructions to guide the model
      switch (stage) {
        case ConversationStage.GREETING:
          systemPrompt += "Try to understand what products or services the user is interested in. Ask about their needs without being pushy.";
          break;
        case ConversationStage.UNDERSTAND_INTEREST:
          systemPrompt += "Based on what the user says, identify which product they might be interested in. Once you understand their interest, provide relevant pricing information.";
          break;
        case ConversationStage.PROVIDE_INFO:
          systemPrompt += "You've provided product information. Now, politely ask for the user's email to send more details.";
          break;
        case ConversationStage.GET_EMAIL:
          systemPrompt += "You're collecting the user's email. Once you have a valid email, thank them and ask for their phone number for follow-up.";
          break;
        case ConversationStage.GET_PHONE:
          systemPrompt += "You're collecting the user's phone number. Once you have it, thank them and let them know someone will contact them soon.";
          break;
        case ConversationStage.CLOSING:
          systemPrompt += "Thank the user for their information and let them know a representative will be in touch soon.";
          break;
      }
      
      // Prepare the API request
      const response = await fetch('/api/chatnew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...formattedHistory,
          ],
          userData: userData,
          currentStage: stage
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }
      
      const data = await response.json();
      return data.message;
      
    } catch (error) {
      console.error('Error communicating with DeepSeek API:', error);
      return "I'm sorry, I'm having trouble connecting. Please try again in a moment.";
    } finally {
      setIsLoading(false);
    }
  };
  
  // Process responses and extract information
  const processResponseForUserData = (response: string) => {
    // Check for email in the response text
    if (stage === ConversationStage.GET_EMAIL || stage === ConversationStage.PROVIDE_INFO) {
      const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/g;
      const matches = response.match(emailRegex);
      
      if (matches && !userData.email) {
        setUserData(prev => ({ ...prev, email: matches[0] }));
        setStage(ConversationStage.GET_PHONE);
      }
    }
    
    // Check for phone number in the response text
    if (stage === ConversationStage.GET_PHONE) {
      const phoneRegex = /(\+\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
      const matches = response.match(phoneRegex);
      
      if (matches && !userData.phoneNumber) {
        setUserData(prev => ({ ...prev, phoneNumber: matches[0] }));
        setStage(ConversationStage.CLOSING);
      }
    }
    
    // Identify products of interest
    if (stage === ConversationStage.GREETING || stage === ConversationStage.UNDERSTAND_INTEREST) {
      for (const [key, product] of Object.entries(productInfo)) {
        if (response.toLowerCase().includes(product.name.toLowerCase())) {
          setUserData(prev => ({ ...prev, interestedProduct: key }));
          setStage(ConversationStage.PROVIDE_INFO);
          break;
        }
      }
      
      if (!userData.interestedProduct && stage === ConversationStage.GREETING) {
        setStage(ConversationStage.UNDERSTAND_INTEREST);
      }
    }
  };
  
  // Handle user message submission
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
    };
    
    // Add temporary loading message
    const loadingMessage: Message = {
      id: 'loading',
      content: "Please wait...",
      type: 'bot',
    };
    
    setMessages(prev => [...prev, userMessage, loadingMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Process user message content for information extraction
      processResponseForUserData(inputValue);
      
      // Get bot response
      const botResponse = await sendToDeepSeekAPI(inputValue, [...messages, userMessage]);
      
      // Remove loading message and add actual response
      setMessages(prev => {
        const withoutLoading = prev.filter(msg => msg.id !== 'loading');
        return [...withoutLoading, {
          id: Date.now().toString(),
          content: botResponse,
          type: 'bot' as MessageType
        }];
      });
      
      // Process bot response for information extraction
      processResponseForUserData(botResponse);
      
      // Advance the conversation stage if needed
      advanceConversation();
    } catch (error) {
      // Remove loading message and add error message
      setMessages(prev => {
        const withoutLoading = prev.filter(msg => msg.id !== 'loading');
        return [...withoutLoading, {
          id: Date.now().toString(),
          content: "I'm sorry, I encountered an error. Please try again.",
          type: 'bot' as MessageType
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Logic to progress the conversation
  const advanceConversation = () => {
    if (stage === ConversationStage.UNDERSTAND_INTEREST && userData.interestedProduct) {
      setStage(ConversationStage.PROVIDE_INFO);
    } else if (stage === ConversationStage.PROVIDE_INFO && userData.email) {
      setStage(ConversationStage.GET_PHONE);
    } else if (stage === ConversationStage.GET_PHONE && userData.phoneNumber) {
      setStage(ConversationStage.CLOSING);
      
      // If we have all user data, send it to your backend
      if (userData.email && userData.phoneNumber && userData.interestedProduct) {
        fetch('/api/save-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        }).catch(err => console.error('Error saving lead:', err));
      }
    }
  };
  
  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-96 border rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
        <h2 className="text-lg font-semibold">Chat with Us</h2>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`my-2 p-3 rounded-lg max-w-xs ${
              message.type === 'user' 
                ? 'ml-auto bg-blue-500 text-white' 
                : 'mr-auto bg-white border border-gray-200'
            }`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input form */}
      <form onSubmit={handleSendMessage} className="border-t p-2 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l"
          disabled={isLoading || stage === ConversationStage.CLOSING}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isLoading || !inputValue.trim() || stage === ConversationStage.CLOSING}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}