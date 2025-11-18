import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGroundedResponse } from '../services/geminiService';
import Message from './Message';
import { Send, LoaderCircle, Sparkles, BookOpenCheck } from 'lucide-react';

const ExamplePrompts: React.FC<{ onPromptClick: (prompt: string) => void }> = ({ onPromptClick }) => {
    const prompts = [
        "Diretrizes para tratamento de diabetes tipo 2",
        "Diagnóstico diferencial para dor torácica",
        "Manejo de crise hipertensiva",
    ];
    return (
        <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-700">Como posso ajudar?</h2>
            <p className="text-sm text-gray-500 mt-1 mb-4">Comece com uma pergunta ou tente um dos exemplos abaixo.</p>
            <div className="flex flex-wrap justify-center gap-2">
                {prompts.map((prompt, index) => (
                    <button
                        key={index}
                        onClick={() => onPromptClick(prompt)}
                        className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </div>
    );
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUserPrompt, setLastUserPrompt] = useState('');
  const [showFollowUpOptions, setShowFollowUpOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (prompt?: string) => {
    const currentInput = (prompt || input).trim();
    if (currentInput === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: currentInput };
    setLastUserPrompt(userMessage.text);
    setShowFollowUpOptions(false);

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const modelResponse = await getGroundedResponse(userMessage.text);
      setMessages((prev) => [...prev, modelResponse]);
      if (modelResponse.text && !modelResponse.text.toLowerCase().includes('erro')) {
        setShowFollowUpOptions(true);
      }
    } catch (error) {
      console.error(error);
      setShowFollowUpOptions(false);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Desculpe, encontrei um erro inesperado. Por favor, tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
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
        url = `https://pesquisa.bvsalud.org/portal/?q=${query}`;
        break;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {messages.length === 0 && <ExamplePrompts onPromptClick={(prompt) => handleSend(prompt)} />}
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && <Message message={{role: 'model', text: ''}} isLoading={true} />}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
        {showFollowUpOptions && (
          <div className="pb-4 mb-4 border-b border-gray-200 text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center justify-center">
                  <BookOpenCheck size={16} className="mr-2 text-blue-600"/>
                  Deseja aprofundar a pesquisa?
              </h3>
              <div className="flex justify-center flex-wrap gap-2">
                  <button onClick={() => handleFollowUpSearch('pubmed')} className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                      PubMed
                  </button>
                  <button onClick={() => handleFollowUpSearch('lilacs')} className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-full hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                      LILACS
                  </button>
                  <button onClick={() => handleFollowUpSearch('bireme')} className="px-4 py-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                      BIREME
                  </button>
              </div>
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                if (showFollowUpOptions) setShowFollowUpOptions(false);
            }}
            onKeyPress={handleKeyPress}
            placeholder={"Pergunte ao AJUDAMEDIKO..."}
            className="w-full pl-4 pr-12 py-3 bg-gray-100 text-gray-800 border-gray-200 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow placeholder-gray-500 disabled:opacity-50"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Enviar mensagem"
          >
            {isLoading ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </div>
        
        <p className="text-xs text-center text-gray-500 mt-3 px-2">
            <Sparkles className="inline-block w-3 h-3 mr-1 text-blue-500" />
            O AJUDAMEDIKO pode produzir informações imprecisas. Sempre verifique informações críticas.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;