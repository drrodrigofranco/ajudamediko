import React from 'react';
import * as Icons from 'lucide-react';
import { curatedNews, CuratedNewsItem } from '../curatedNewsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

interface NewsDetailPageProps {
  newsId: string;
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

// Uma unica imagem ilustrativa (foto + legenda com credito, quando a licenca exige).
const NewsImage: React.FC<{ image: NonNullable<CuratedNewsItem['images']>[number] }> = ({ image }) => (
  <figure className="mb-8">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto rounded-3xl border border-gray-100 shadow-sm"
      loading="lazy"
    />
    {image.credit && (
      <figcaption className="text-[10px] text-gray-400 mt-2 text-center">
        Imagem:{' '}
        {image.creditUrl ? (
          <a href={image.creditUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">
            {image.credit}
          </a>
        ) : image.credit}
      </figcaption>
    )}
  </figure>
);

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ newsId, navigateTo }) => {
  const news = curatedNews.find(n => n.id === newsId);
  const paragraphs = news ? news.summary.split('\n\n') : [];
  const heroImages = news?.images?.filter(img => img.afterParagraph === undefined) ?? [];
  const inlineImages = new Map((news?.images ?? []).filter(img => img.afterParagraph !== undefined).map(img => [img.afterParagraph!, img]));

  useSEO({
    title: news
      ? `${news.title} | Clínica Franco`
      : 'Matéria não encontrada | Clínica Franco',
    description: news
      ? paragraphs[0].slice(0, 160)
      : 'Matéria não encontrada. Veja outras notícias e artigos de saúde da Clínica Franco.',
    path: `/blog/${newsId}`,
    image: news?.images?.[0] ? `https://ajudamediko.com.br${news.images[0].src}` : undefined,
  });

  useJsonLd('news-jsonld', news ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: news.title,
    author: {
      '@type': 'Person',
      name: 'Dr. Rodrigo Franco',
      identifier: 'CRM-MS 10087',
    },
    datePublished: news.publishedOn,
    publisher: {
      '@type': 'MedicalClinic',
      name: 'Clínica Franco',
    },
    url: `https://ajudamediko.com.br/blog/${newsId}`,
    ...(news.images?.[0] ? { image: `https://ajudamediko.com.br${news.images[0].src}` } : {}),
  } : null);

  useJsonLd('news-breadcrumb-jsonld', news ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Blog de Saúde', item: 'https://ajudamediko.com.br/blog' },
      { '@type': 'ListItem', position: 3, name: news.title, item: `https://ajudamediko.com.br/blog/${newsId}` },
    ],
  } : null);

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold text-[#0e4843] mb-4">Matéria não encontrada</h2>
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

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Li+uma+mat%C3%A9ria+no+site+e+gostaria+de+agendar+uma+consulta.";

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
            {news.title}
          </h1>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <Icons.BookOpen className="w-4 h-4 text-teal-300" />
            {news.sourceName}
          </div>
          <p className="text-teal-50/50 text-[11px] mt-4">
            Publicado em {new Date(news.publishedOn + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Corpo da materia */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        {heroImages.map((image, i) => <NewsImage key={i} image={image} />)}

        <article className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-5">
          {paragraphs.map((paragraph, i) => (
            <React.Fragment key={i}>
              {news.sectionHeadings?.[i] && (
                <h2 className="text-lg font-serif font-bold text-[#0e4843] pt-1">
                  {news.sectionHeadings[i]}
                </h2>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">
                {paragraph}
              </p>
              {inlineImages.has(i) && <NewsImage image={inlineImages.get(i)!} />}
            </React.Fragment>
          ))}
        </article>

        {/* Curadoria e revisao medica */}
        <div className="mt-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <img
            src="/images/dr-rodrigo-franco-byline.jpg"
            alt="Dr. Rodrigo Franco"
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            width={56}
            height={56}
            loading="lazy"
          />
          <div>
            <h2 className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-0.5">Curadoria e revisão médica</h2>
            <p className="text-sm font-bold text-[#0e4843]">Dr. Rodrigo Franco · CRM-MS 10087</p>
          </div>
        </div>

        <a
          href={news.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14b8a6] hover:text-[#0d9488] transition-colors mt-8"
        >
          Ler a matéria completa em {news.sourceName}
          <Icons.ExternalLink className="w-3.5 h-3.5" />
        </a>

        {news.references && news.references.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Referências Bibliográficas</h2>
            <ol className="space-y-2">
              {news.references.map((ref, i) => (
                <li key={i} className="text-xs text-gray-500 leading-relaxed">
                  {i + 1}.{' '}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0d9488] hover:text-[#14b8a6] underline underline-offset-2"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ol>
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

export default NewsDetailPage;
