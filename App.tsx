import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import AdPlaceholder from './components/AdPlaceholder';
import Footer from './components/Footer';
import HealthNewsWidget from './components/HealthNewsWidget';
import AdBlockerDetector from './components/AdBlockerDetector';
import { BrainCircuit, BotMessageSquare, Star } from 'lucide-react';

const App: React.FC = () => {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  useEffect(() => {
    // Ad blocker detection logic
    const baitElement = document.createElement('div');
    baitElement.innerHTML = '&nbsp;';
    baitElement.className = 'ad-banner adsbox';
    baitElement.style.position = 'absolute';
    baitElement.style.left = '-9999px';
    baitElement.style.top = '-9999px';
    document.body.appendChild(baitElement);

    const checkAdBlocker = () => {
      if (baitElement.offsetHeight === 0) {
        setAdBlockerDetected(true);
      }
      document.body.removeChild(baitElement);
    };
    
    // Check after a short delay to give ad blockers time to act
    const timer = setTimeout(checkAdBlocker, 150);

    return () => clearTimeout(timer);
  }, []);


  const handleBookmark = () => {
    alert('Pressione Ctrl+D (ou Cmd+D em um Mac) para adicionar esta página aos seus favoritos.');
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 text-gray-800">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <BrainCircuit size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">AJUDAMEDIKO</h1>
          <button
            onClick={handleBookmark}
            title="Adicionar aos Favoritos"
            aria-label="Adicionar aos Favoritos"
            className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Star size={20} />
          </button>
        </div>
        <div className="hidden md:block">
          <AdPlaceholder label="Publicidade" width="w-72" height="h-12" text="Anúncio Superior (728x90)" />
        </div>
      </header>
      
      <AdBlockerDetector detected={adBlockerDetected} />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <main className="flex-1 flex flex-col p-2 sm:p-4 lg:p-6 overflow-y-auto">
          <ChatInterface />
        </main>
        
        <aside className="w-full md:w-64 lg:w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto order-first md:order-last">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3 text-blue-800">
                    <BotMessageSquare size={24}/>
                    <h2 className="text-lg font-semibold">Sobre o AJUDAMEDIKO</h2>
                </div>
                <p className="mt-2 text-sm text-blue-700">
                    Esta é uma ferramenta de IA projetada para auxiliar profissionais médicos, fornecendo respostas rápidas e baseadas em evidências. Todas as respostas são baseadas em literatura científica do Google Search para garantir precisão e confiabilidade.
                </p>
            </div>
            <HealthNewsWidget />
            <AdPlaceholder label="Publicidade" width="w-full" height="h-64" text="Anúncio Aranha-Céu (300x600)" />
            <AdPlaceholder label="Publicidade" width="w-full" height="h-32" text="Anúncio Retângulo Médio (300x250)" />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default App;