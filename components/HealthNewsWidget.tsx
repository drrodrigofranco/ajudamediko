import React, { useState } from 'react';
import { HealthNews } from '../types';
import { Activity, ChevronRight, FileText, Stethoscope } from 'lucide-react';
import { articlesData } from '../articlesData';

const HealthNewsWidget: React.FC = () => {
    // Lista estática de notícias para não depender da IA
    const fixedNews: HealthNews[] = [
        {
          title: "Por que contratar um Perito Médico?",
          summary: "Descubra o papel fundamental do assistente técnico em processos judiciais e como a expertise médica contribui para decisões assertivas e justas.",
          url: "https://www.jpaservicosmedicos.com.br/porque-contratar-um-perito"
        },
        {
          title: "Tudo sobre o Ultrassom de Abdome Total",
          summary: "Saiba como é feito e para que serve o ultrassom de abdome total, um dos exames mais solicitados para avaliação de órgãos internos.",
          url: "https://nav.dasa.com.br/blog/ultrassom-de-abdome-total"
        },
        {
          title: "O Ultrassom Abdominal pode salvar vidas",
          summary: "A prevenção é o melhor remédio. Descubra como a ultrassonografia abdominal auxilia no diagnóstico precoce de diversas condições.",
          url: "https://clinicalucidioportella.com.br/voce-sabia-que-o-ultrassom-abdominal-pode-salvar-vidas/"
        }
    ];

    const [newsList] = useState<HealthNews[]>(fixedNews);

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100">
            <div className="bg-teal-800 p-6 text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-semibold">Artigos da Clínica Franco</h3>
                    <p className="text-teal-100 text-sm mt-1">Escritos e assinados pelos nossos médicos</p>
                </div>
                <Stethoscope className="text-teal-300" size={28} />
            </div>

            <div className="divide-y divide-gray-100">
                {articlesData.map((article) => (
                    <article key={article.id} className="p-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{article.title}</h4>
                        <p className="text-xs font-semibold text-teal-700 mb-4">
                            {article.authorName} · {article.authorCrm}
                        </p>
                        <div className="space-y-3">
                            {article.body.map((paragraph, i) => (
                                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 italic mt-4 leading-relaxed">
                            {article.disclaimer}
                        </p>
                    </article>
                ))}
            </div>

            <div className="bg-teal-800/90 p-6 text-white flex items-center justify-between border-t border-teal-900/20">
                <div>
                    <h3 className="text-lg font-serif font-semibold">Outras Referências</h3>
                    <p className="text-teal-100 text-xs mt-1">Notícias e artigos de terceiros sobre os temas dos nossos exames</p>
                </div>
                <Activity className="text-teal-300" size={24} />
            </div>

            <div className="p-0">
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
                                        className="inline-flex items-center text-sm font-semibold text-[#0f766e] hover:text-teal-800 transition-colors"
                                    >
                                        Ler fonte completa
                                        <ChevronRight size={16} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="bg-gray-50 p-4 text-center border-t border-gray-100 text-xs text-gray-500">
                Fontes obtidas via busca de referências públicas
            </div>
        </div>
    );
};

export default HealthNewsWidget;