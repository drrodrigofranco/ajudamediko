import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import AdPlaceholder from './components/AdPlaceholder';
import Footer from './components/Footer';
import HealthNewsWidget from './components/HealthNewsWidget';
import AdBlockerDetector from './components/AdBlockerDetector';
import { BrainCircuit, BotMessageSquare, Star, AlertTriangle } from 'lucide-react';

const ApiKeyError: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-red-50 text-red-900">
    <div className="text-center p-8 max-w-lg mx-auto bg-white border-2 border-red-200 rounded-lg shadow-lg">
      <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
      <h1 className="mt-4 text-2xl font-bold">Erro de Configuração</h1>
      <p className="mt-2">A chave da API do Google não foi encontrada.</p>
      <div className="mt-6 text-left bg-red-50 p-4 rounded-md border border-red-200">
        <p className="font-semibold">Ação necessária:</p>
        <ol className="list-decimal list-inside mt-2 text-sm space-y-2">
            <li>Acesse as configurações do seu projeto na Vercel.</li>
            <li>Vá para <strong>"Environment Variables"</strong>.</li>
            <li>Certifique-se de que a variável de ambiente tenha o nome exato <code className="bg-red-200 px-1 py-0.5 rounded">VITE_API_KEY</code>.</li>
            <li>Faça o "Redeploy" do seu projeto para que a alteração tenha efeito.</li>
        </ol>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  // A Vite expõe variáveis de ambiente no objeto import.meta.env
  // Fix for: Property 'env' does not exist on type 'ImportMeta'.
  const apiKey = (import.meta as any).env.VITE_API_KEY;

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

  // Se a chave não estiver presente, exibe a tela de erro em vez da aplicação.
  if (!apiKey) {
    return <ApiKeyError />;
  }

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