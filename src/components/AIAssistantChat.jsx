import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

export default function AIAssistantChat({ activePhaseContext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Namaste! I am Desh Seva, your guide to the Indian Democratic Process. Ask me anything about the elections!'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Mock AI Response based on persona and context
    setTimeout(() => {
      let response = '';
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes('rights') || lowercaseInput.includes('vote')) {
         response = 'Every eligible citizen has the right to vote. Remember to check your name in the electoral roll. Use Form 6 for Registration or Form 8 for Corrections. Always remember: Free and Fair elections are the bedrock of our democracy!';
      } else if (lowercaseInput.includes('mcc') || lowercaseInput.includes('code of conduct')) {
         response = 'Ah, the Model Code of Conduct! Think of it as a referee\'s rulebook. It ensures a level playing field, preventing the ruling party from using government machinery for campaigning.';
      } else if (activePhaseContext) {
         response = `Since you are currently exploring Phase ${activePhaseContext.id}: "${activePhaseContext.phase}", did you know that this step is crucial for maintaining transparency? Is there something specific about ${activePhaseContext.title} you'd like to understand?`;
      } else {
         response = 'That is an excellent question about our democratic process! The Election Commission of India works tirelessly to ensure every phase runs smoothly. What else would you like to know?';
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all z-40 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] glass z-50 flex flex-col animate-fade-in shadow-2xl">
          {/* Header */}
          <div className="p-4 border-b border-[var(--glass-border)] flex justify-between items-center bg-gradient-to-r from-[rgba(249,115,22,0.2)] to-[rgba(16,185,129,0.2)] rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot size={24} className="text-[var(--primary)]" />
              <div>
                <h3 className="font-bold text-sm">Desh Seva</h3>
                <p className="text-[10px] text-[var(--text-muted)]">AI Election Expert</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[var(--text-muted)] hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[var(--accent)] text-white rounded-tr-none' 
                    : 'bg-[var(--bg-dark)] border border-[var(--glass-border)] text-[var(--text-main)] rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[var(--glass-border)]">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the election..." 
                className="w-full bg-[var(--bg-dark)] border border-[var(--glass-border)] rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-[var(--primary)] text-white"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-[var(--primary)] hover:bg-[rgba(249,115,22,0.1)] transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
