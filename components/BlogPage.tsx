import React from 'react';
import * as Icons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';
import { curatedNews } from '../curatedNewsData';

interface BlogPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Blog de Saúde | Clínica Franco - Nova Andradina - MS',
    description: 'Resumos curados de notícias e materiais de saúde de fontes confiáveis (Fiocruz, Ministério da Saúde, OMS e veículos científicos), selecionados pela Clínica Franco em Nova Andradina - MS.',
    path: '/blog',
  });

  useJsonLd('blog-breadcrumb-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Blog de Saúde', item: 'https://ajudamediko.com.br/blog' },
    ],
  });

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Vim+do+blog+de+sa%C3%BAde+e+gostaria+de+agendar+uma+consulta.";

  const sortedNews = [...curatedNews].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));

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
            <a href="/#servicos" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SERVIÇOS</a>
            <a href="/#curriculo" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SOBRE NÓS</a>
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
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <a
            href="/"
            onClick={(e) => navigateTo('/', e)}
            className="inline-flex items-center text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 hover:text-teal-400 transition-colors"
          >
            <Icons.ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Blog de Saúde
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Resumos curados de notícias e materiais de fontes confiáveis de saúde — Fiocruz, Ministério da Saúde, OMS e veículos científicos — atualizados periodicamente pela equipe da Clínica Franco.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <Icons.BookOpen className="w-4 h-4 text-teal-300" />
            Curadoria de Saúde
          </div>
        </div>
      </section>

      {/* Lista de noticias */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        {sortedNews.length === 0 ? (
          <p className="text-center text-gray-500">Nenhuma matéria publicada ainda. Volte em breve.</p>
        ) : (
          <div className="space-y-6">
            {sortedNews.map((news) => (
              <article key={news.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <Icons.Calendar className="w-3.5 h-3.5" />
                  <time dateTime={news.publishedOn}>
                    {new Date(news.publishedOn + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </time>
                  <span>·</span>
                  <span className="font-semibold text-[#14b8a6]">{news.sourceName}</span>
                </div>
                <h2 className="text-xl font-serif font-bold text-[#0e4843] mb-3">{news.title}</h2>
                <div className="text-gray-600 text-sm leading-relaxed mb-4 space-y-3">
                  {news.summary.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14b8a6] hover:text-[#0d9488] transition-colors"
                >
                  Ler a matéria completa em {news.sourceName}
                  <Icons.ExternalLink className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
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

export default BlogPage;
