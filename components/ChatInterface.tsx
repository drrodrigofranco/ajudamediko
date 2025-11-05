import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGroundedResponse } from '../services/geminiService';
import Message from './Message';
import { Send, LoaderCircle, Sparkles, BookOpenCheck } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Bem-vindo(a), Doutor(a). Como posso ajudá-lo(a) hoje? Por favor, faça qualquer pergunta clínica.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUserPrompt, setLastUserPrompt] = useState('');
  const [showFollowUpOptions, setShowFollowUpOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input.trim() };
    setLastUserPrompt(userMessage.text);
    setShowFollowUpOptions(false);

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const modelResponse = await getGroundedResponse(userMessage.text);
      setMessages((prev) => [...prev, modelResponse]);
      setShowFollowUpOptions(true);
    } catch (error) {
      console.error(error);
      setShowFollowUpOptions(false);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Desculpe, encontrei um erro. Por favor, tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  const handleFollowUpSearch = (database: 'pubmed' | 'lilacs' | 'bireme') => {
    const query = encodeURIComponent(lastUserPrompt);
    let url = '';
    switch (database) {
      case 'pubmed':
        url = `https://pubmed.ncbi.nlm.nih.gov/?term=${query}`;
        break;
      case 'lilacs':
      case 'bireme':
        // BIREME's VHL portal is the best search interface for both
        url = `https://pesquisa.bvsalud.org/portal/?q=${query}`;
        break;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && <Message message={{role: 'model', text: ''}} isLoading={true} />}
        <div ref={messagesEndRef} />
      </div>
      
      {showFollowUpOptions && (
        <div className="p-4 bg-white border-t border-gray-200 text-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center justify-center">
                <BookOpenCheck size={18} className="mr-2 text-blue-600"/>
                Deseja aprofundar a pesquisa?
            </h3>
            <div className="flex justify-center flex-wrap gap-2">
                <button onClick={() => handleFollowUpSearch('pubmed')} className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-transparent rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Pesquisar no PubMed
                </button>
                <button onClick={() => handleFollowUpSearch('lilacs')} className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-100 border border-transparent rounded-full hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                    Pesquisar no LILACS
                </button>
                <button onClick={() => handleFollowUpSearch('bireme')} className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 border border-transparent rounded-full hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                    Pesquisar no BIREME
                </button>
            </div>
        </div>
      )}

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                setShowFollowUpOptions(false);
            }}
            onKeyPress={handleKeyPress}
            placeholder="ex: 'Quais são as diretrizes mais recentes para o tratamento de diabetes tipo 2?'"
            className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            {isLoading ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
            <Sparkles className="inline-block w-3 h-3 mr-1 text-blue-500" />
            O AJUDAMEDIKO pode produzir informações imprecisas. Sempre verifique informações críticas.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;