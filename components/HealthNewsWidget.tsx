import React, { useState, useEffect } from 'react';
import { getHealthNews } from '../services/geminiService';
import { HealthNews } from '../types';
import { Newspaper, LoaderCircle, AlertTriangle, ExternalLink, Activity } from 'lucide-react';

const HealthNewsWidget: React.FC = () => {
    const [news, setNews] = useState<HealthNews | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const newsData = await getHealthNews();
                setNews(newsData);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError("Ocorreu um erro desconhecido ao buscar a notícia.");
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
                    <p className="text-teal-100 text-sm mt-1">Curadoria por Inteligência Artificial</p>
                </div>
                <Activity className="text-teal-300" size={32} />
            </div>
            
            <div className="p-8">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500 space-y-3">
                        <LoaderCircle className="animate-spin text-teal-600" size={32} />
                        <span>Buscando as últimas novidades científicas...</span>
                    </div>
                ) : error ? (
                    <div className="flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertTriangle size={24} />
                        <span>{error}</span>
                    </div>
                ) : news ? (
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                            Destaque
                        </span>
                        <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                            {news.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {news.summary}
                        </p>
                        <div className="pt-4">
                            <a 
                                href={news.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Ler Artigo Completo
                                <ExternalLink size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default HealthNewsWidget;