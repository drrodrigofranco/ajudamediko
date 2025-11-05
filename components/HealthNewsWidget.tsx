import React, { useState, useEffect } from 'react';
import { getHealthNews } from '../services/geminiService';
import { HealthNews } from '../types';
import { Newspaper, LoaderCircle, AlertTriangle, ExternalLink } from 'lucide-react';

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
                if (newsData) {
                    setNews(newsData);
                } else {
                    setError("Não foi possível carregar a notícia.");
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError("Ocorreu um erro ao buscar a notícia.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <LoaderCircle className="animate-spin" size={18} />
                    <span>Carregando notícia...</span>
                </div>
            );
        }

        if (error || !news) {
            return (
                <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <AlertTriangle size={18} />
                    <span>{error || "Notícia indisponível."}</span>
                </div>
            );
        }

        return (
            <div>
                <h3 className="font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{news.summary}</p>
                <a 
                    href={news.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-blue-600 hover:underline font-medium flex items-center"
                >
                    Ler artigo completo
                    <ExternalLink size={14} className="ml-1" />
                </a>
            </div>
        );
    };

    return (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3 text-gray-800 mb-3">
                <Newspaper size={24} />
                <h2 className="text-lg font-semibold">Notícia em Destaque</h2>
            </div>
            {renderContent()}
        </div>
    );
};

export default HealthNewsWidget;