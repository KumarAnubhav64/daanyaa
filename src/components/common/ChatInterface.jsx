import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function ChatInterface({
  className = "",
  title = "Try Our AI Chat",
  placeholder = "Ask me anything about our platform...",
  isDemo = true
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hello! I'm your AI assistant. I can help you learn about our platform features, pricing, or answer any questions you have. What would you like to know?",
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Demo responses for different types of questions
  const getDemoResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
      return "Our pricing starts at $29/month for the Starter plan, which includes AI Chat Integration, Basic Analytics, and up to 10K monthly queries. The Professional plan at $99/month adds AI Search & Audio, Advanced Analytics, and up to 100K queries. For enterprise needs, we offer custom solutions. Would you like to see a detailed comparison?";
    }

    if (message.includes('feature') || message.includes('what') || message.includes('capability')) {
      return "Our platform offers 5 core AI capabilities: AI Chat for customer engagement, AI Search for semantic content discovery, AI Audio for text-to-speech conversion, AI Monetization for revenue optimization, and Agent Access Layer (MCP) for future-proofing your content. Which feature interests you most?";
    }

    if (message.includes('how') || message.includes('work') || message.includes('integrate')) {
      return "Integration is simple! Our platform connects to your existing CMS through secure, read-only APIs. Setup typically takes under 30 minutes, and you can activate features individually from our unified dashboard. We provide step-by-step guidance and dedicated support throughout the process.";
    }

    if (message.includes('demo') || message.includes('trial') || message.includes('test')) {
      return "Absolutely! We offer a free demo where you can see our AI features in action with your content. You can also start a 14-day free trial of our Professional plan. Would you like me to schedule a personalized demo for you?";
    }

    if (message.includes('support') || message.includes('help')) {
      return "We provide 24/7 support for all our customers. Starter plan includes email support, Professional plan gets priority support, and Enterprise customers have dedicated account managers. Our average response time is under 2 hours, and we offer live chat, email, and phone support.";
    }

    // Default response
    return "That's a great question! Our AI platform is designed to help publishers like you increase engagement and revenue through intelligent automation. I can tell you more about our specific features, pricing, integration process, or anything else you'd like to know. What interests you most?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: inputValue,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: isDemo ? getDemoResponse(inputValue) : "I'm a demo AI assistant. In the full version, I'd provide real-time responses based on your content and platform data.",
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What features do you offer?",
    "How much does it cost?",
    "How does integration work?",
    "Can I get a demo?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
      {/* Chat Header */}
      <div className="bg-[#6B4F4E] text-white p-6">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-white/80 text-sm">Powered by AI • Trained on publisher content</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-gray-50 border-b">
        <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="text-xs bg-white border border-gray-300 text-[#6B4F4E] px-3 py-1 rounded-full hover:bg-[#6B4F4E] hover:text-white transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className={`p-2 rounded-full ${
              message.type === 'user'
                ? 'bg-[#6B4F4E] text-white'
                : 'bg-gray-100 text-[#6B4F4E]'
            }`}>
              {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-xs lg:max-w-md ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}>
              <div className={`p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-[#6B4F4E] text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm leading-relaxed">{message.message}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 text-[#6B4F4E] p-2 rounded-full">
              <Bot size={16} />
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full p-3 pr-12 border border-gray-300 rounded-full resize-none focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent"
              rows="1"
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-[#6B4F4E] text-white p-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          AI responses are simulated for demo purposes
        </p>
      </div>
    </div>
  );
}
