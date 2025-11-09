import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import HealthNewsWidget from './components/HealthNewsWidget';
import AdPlaceholder from './components/AdPlaceholder';
import Footer from './components/Footer';
import AdBlockerDetector from './components/AdBlockerDetector';
import { AlertTriangle } from 'lucide-react';

// FIX: This file was empty. Create the main App component to structure the application layout.
const App: React.FC = () => {
    const [adBlockerDetected, setAdBlockerDetected] = useState(false);
    const [isApiKeyMissing, setIsApiKeyMissing] = useState(false);

    useEffect(() => {
        // Check for missing API Key
        if (!process.env.API_KEY) {
            setIsApiKeyMissing(true);
        }

        // A simple ad blocker detection check.
        // It creates a "bait" element with a class name often targeted by ad blockers.
        const adBait = document.createElement('div');
        adBait.innerHTML = '&nbsp;';
        adBait.className = 'adsbox'; // A common class name for ad containers
        Object.assign(adBait.style, {
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            width: '1px',
            height: '1px',
        });
        document.body.appendChild(adBait);
        
        // We check its offsetHeight after a short delay. Ad blockers often set it to 0.
        const timer = setTimeout(() => {
            if (adBait.offsetHeight === 0) {
                setAdBlockerDetected(true);
            }
            document.body.removeChild(adBait);
        }, 300);

        return () => {
            clearTimeout(timer);
            if (document.body.contains(adBait)) {
                document.body.removeChild(adBait);
            }
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
            {isApiKeyMissing && (
                <div className="bg-red-100 border-b border-red-300 text-red-800 p-3">
                    <div className="max-w-screen-2xl mx-auto flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <p className="text-sm font-medium">
                            <strong>Configuração Necessária:</strong> A chave de API do Gemini não foi encontrada. Por favor, configure a variável de ambiente <code>API_KEY</code> nas configurações do seu projeto. Se estiver implantando em uma plataforma como a Vercel, a variável de ambiente precisa ser exposta ao seu aplicativo.
                        </p>
                    </div>
                </div>
            )}
            <AdBlockerDetector detected={adBlockerDetected} />
            <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
                <div className="max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg className="h-10 w-10 text-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M3 21h18" />
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                                <line x1="10" y1="9" x2="14" y2="9" />
                                <line x1="12" y1="7" x2="12" y2="11" />
                            </svg>
                            <div className="ml-3">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    AJUDAMEDIKO
                                </h1>
                                <p className="text-sm text-gray-500">Seu assistente de IA para informações clínicas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow w-full max-w-screen-2xl mx-auto p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    {/* Left Sidebar for Ads */}
                    <aside className="hidden lg:block lg:col-span-2 space-y-6">
                        <AdPlaceholder width="w-full" height="h-[600px]" text="Anúncio (160x600)" label="Publicidade"/>
                    </aside>

                    {/* Main Chat Column */}
                    <div className="lg:col-span-8 h-[calc(100vh-230px)]">
                       <ChatInterface isApiKeyMissing={isApiKeyMissing} />
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-2 space-y-6">
                        <HealthNewsWidget isApiKeyMissing={isApiKeyMissing} />
                        <AdPlaceholder width="w-full" height="h-64" text="Anúncio (Retângulo)" label="Publicidade"/>
                        <AdPlaceholder width="w-full" height="h-64" text="Anúncio (Retângulo)" label="Publicidade"/>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;