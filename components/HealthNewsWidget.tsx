
import React, { useState, useEffect } from 'react';
import { getHealthNews } from '../services/geminiService';
import { HealthNews } from '../types';
import { LoaderCircle, AlertTriangle, ExternalLink, Activity, ChevronRight, FileText } from 'lucide-react';

const HealthNewsWidget: React.FC = () => {
    const [newsList, setNewsList] = useState<HealthNews[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const newsData = await getHealthNews();
                setNewsList(newsData);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError("Ocorreu um erro desconhecido ao buscar as notícias.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100">
            <div className="bg-teal-800 p-6 text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-semibold">Atualizações em Medicina Fetal</h3>
                    <p className="text-teal-100 text-sm mt-1">Curadoria de Notícias e Artigos</p>
                </div>
                <Activity className="text-teal-300" size={28} />
            </div>
            
            <div className="p-0">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-500 space-y-3">
                        <LoaderCircle className="animate-spin text-teal-600" size={32} />
                        <span>Atualizando feed de notícias...</span>
                    </div>
                ) : error ? (
                    <div className="p-6">
                         <div className="flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-lg">
                            <AlertTriangle size={24} />
                            <span>{error}</span>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {newsList.map((news, index) => (
                            <div key={index} className="p-6 hover:bg-teal-50 transition-colors duration-200 group">
                                <div className="flex items-start gap-4">
                                    <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 items-center justify-center text-teal-600 mt-1">
                                        <FileText size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">
                                            {news.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            {news.summary}
                                        </p>
                                        <a 
                                            href={news.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
                                        >
                                            Ler fonte completa
                                            <ChevronRight size={16} className="ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {newsList.length > 0 && (
                 <div className="bg-gray-50 p-4 text-center border-t border-gray-100 text-xs text-gray-400">
                    Fontes obtidas via busca de referências públicas
                </div>
            )}
        </div>
    );
};

export default HealthNewsWidget;