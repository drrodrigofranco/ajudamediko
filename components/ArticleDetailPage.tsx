import React from 'react';
import * as Icons from 'lucide-react';
import { articlesData } from '../articlesData';
import { examsData } from '../examsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

interface ArticleDetailPageProps {
  articleId: string;
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleId, navigateTo }) => {
  const article = articlesData.find(a => a.id === articleId);
  const relatedExam = article?.relatedExamId ? examsData.find(e => e.id === article.relatedExamId) : undefined;

  useSEO({
    title: article
      ? `${article.title} | Clínica Franco`
      : 'Artigo não encontrado | Clínica Franco',
    description: article
      ? `${article.body[0]}`.slice(0, 160)
      : 'Artigo não encontrado. Veja outros artigos e notícias de saúde da Clínica Franco.',
    path: `/blog/${articleId}`,
  });

  useJsonLd('article-jsonld', article ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    author: {
      '@type': 'Person',
      name: article.authorName,
      identifier: article.authorCrm,
    },
    datePublished: article.publishedOn,
    publisher: {
      '@type': 'MedicalClinic',
      name: 'Clínica Franco',
    },
    url: `https://ajudamediko.com.br/blog/${articleId}`,
  } : null);

  useJsonLd('article-breadcrumb-jsonld', article ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Blog de Saúde', item: 'https://ajudamediko.com.br/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://ajudamediko.com.br/blog/${articleId}` },
    ],
  } : null);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold text-[#0e4843] mb-4">Artigo não encontrado</h2>
        <a
          href="/blog"
          onClick={(e) => navigateTo('/blog', e)}
          className="text-[#14b8a6] hover:underline font-bold"
        >
          Voltar para o Blog
        </a>
      </div>
    );
  }

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Li+um+artigo+no+site+e+gostaria+de+agendar+uma+consulta.";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Header Nav */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" onClick={(e) => navigateTo('/', e)} className="flex items-center gap-2 group">
            <span className="bg-[#0e4843] text-white p-2 rounded-xl text-xs font-black tracking-wider transition-all group-hover:bg-[#14b8a6]">US</span>
            <span className="font-serif font-bold text-xl text-[#0e4843] tracking-tight">Clínica Franco</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#0e4843]/80">
            <a href="/" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">HOME</a>
            <a href="/blog" onClick={(e) => navigateTo('/blog', e)} className="hover:text-[#14b8a6] transition-colors">BLOG</a>
            <a href="/servicos" onClick={(e) => navigateTo('/servicos', e)} className="hover:text-[#14b8a6] transition-colors">SERVIÇOS</a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-all"
          >
            AGENDAR AGORA
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0e4843] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <a
            href="/blog"
            onClick={(e) => navigateTo('/blog', e)}
            className="inline-flex items-center text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 hover:text-teal-400 transition-colors"
          >
            <Icons.ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </a>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <Icons.Stethoscope className="w-4 h-4 text-teal-300" />
            {article.authorName} · {article.authorCrm}
          </div>
          <p className="text-teal-50/50 text-[11px] mt-4">
            Publicado em {new Date(article.publishedOn + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Corpo do artigo */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        <article className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-5">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        <p className="text-xs text-gray-400 italic mt-6 leading-relaxed">
          {article.disclaimer}
        </p>

        {relatedExam && (
          <div className="mt-10 bg-[#0e4843] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
            <div className="bg-[#14b8a6] p-4 rounded-2xl text-white flex-shrink-0">
              <Icons.Stethoscope className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-serif font-bold text-lg">Exame relacionado: {relatedExam.name}</h4>
              <p className="text-xs text-teal-50/70 mt-1">{relatedExam.shortDesc}</p>
            </div>
            <a
              href={`/exame/${relatedExam.id}`}
              onClick={(e) => navigateTo(`/exame/${relatedExam.id}`, e)}
              className="flex-shrink-0 bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-all whitespace-nowrap"
            >
              Ver detalhes do exame
            </a>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#0e4843] text-white pt-16 pb-12 border-t border-teal-500/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-teal-500/10 pt-8 text-center text-[10px] text-teal-50/40">
          <p>&copy; {new Date().getFullYear()} Clínica Franco. Todos os direitos reservados. Este conteúdo é educativo e não substitui consulta médica.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetailPage;
