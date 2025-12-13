import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGroundedResponse } from '../services/geminiService';
import Message from './Message';
import { Send, LoaderCircle, Sparkles, BookOpenCheck, Stethoscope } from 'lucide-react';

const ExamplePrompts: React.FC<{ onPromptClick: (prompt: string) => void }> = ({ onPromptClick }) => {
    const prompts = [
        "Diretrizes para manejo de nódulo tireoidiano TI-RADS 4",
        "Protocolo de rastreamento para pré-eclâmpsia",
        "Critérios diagnósticos para Síndrome dos Ovários Policísticos (Rotterdam)",
        "Interpretação de Dopplervelocimetria em artéria uterina"
    ];
    return (
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
                <Stethoscope className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-700">Assistente Clínico Inteligente</h2>
            <p className="text-sm text-gray-500 mt-1 mb-6 max-w-md mx-auto">
                Ferramenta de suporte à decisão clínica baseada em evidências. Selecione um tema abaixo ou digite sua dúvida.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {prompts.map((prompt, index) => (
                    <button
                        key={index}
                        onClick={() => onPromptClick(prompt)}
                        className="px-4 py-2 text-sm font-medium bg-gray-50 text-teal-700 border border-teal-100 rounded-full hover:bg-teal-50 hover:border-teal-300 hover:shadow-sm transition-all"
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
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
      {/* Header do Chat */}
      <div className="bg-teal-900 text-white p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-300" />
            <div>
                <h3 className="font-bold text-sm md:text-base">AJUDAMEDIKO</h3>
                <p className="text-xs text-teal-300">IA Generativa para Suporte Médico</p>
            </div>
          </div>
          <div className="text-xs bg-teal-800 px-2 py-1 rounded border border-teal-700">
              BETA
          </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
        {messages.length === 0 && <ExamplePrompts onPromptClick={(prompt) => handleSend(prompt)} />}
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && <Message message={{role: 'model', text: ''}} isLoading={true} />}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        {showFollowUpOptions && (
          <div className="pb-4 mb-4 border-b border-gray-100 text-center animate-fade-in">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-center">
                  <BookOpenCheck size={14} className="mr-2 text-teal-600"/>
                  Fontes Externas
              </h3>
              <div className="flex justify-center flex-wrap gap-2">
                  <button onClick={() => handleFollowUpSearch('pubmed')} className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                      PubMed
                  </button>
                  <button onClick={() => handleFollowUpSearch('lilacs')} className="px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors">
                      LILACS
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
            placeholder={"Descreva o caso clínico ou faça uma pergunta..."}
            className="w-full pl-5 pr-14 py-4 bg-gray-50 text-gray-800 border-gray-200 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all placeholder-gray-400 disabled:opacity-50 text-sm shadow-inner"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 shadow-md"
            aria-label="Enviar mensagem"
          >
            {isLoading ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </div>
        
        <p className="text-[10px] text-center text-gray-400 mt-3 px-2 leading-tight">
            <span className="font-bold text-red-400">Aviso Legal:</span> O AJUDAMEDIKO é uma ferramenta de suporte e pode cometer erros. As informações não substituem o julgamento clínico profissional.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;