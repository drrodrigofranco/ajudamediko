import React from 'react';
import * as Icons from 'lucide-react';
import { doctorsData } from '../doctorsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

interface PericiaMedicaPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const PericiaMedicaPage: React.FC<PericiaMedicaPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Perícia Médica em Nova Andradina - MS | Clínica Franco',
    description: 'Perícia médica judicial e trabalhista em Nova Andradina - MS, com o Dr. Rodrigo Franco: laudos técnicos imparciais para advogados, empresas e ações judiciais.',
    path: '/pericia-medica',
  });

  useJsonLd('pericia-medica-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Perícia Médica em Nova Andradina - MS',
    publisher: {
      '@type': 'MedicalClinic',
      name: 'Clínica Franco',
    },
    url: 'https://ajudamediko.com.br/pericia-medica',
  });

  useJsonLd('pericia-medica-breadcrumb-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Perícia Médica', item: 'https://ajudamediko.com.br/pericia-medica' },
    ],
  });

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+per%C3%ADcia+m%C3%A9dica.";

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
            <a href="/equipe" onClick={(e) => navigateTo('/equipe', e)} className="hover:text-[#14b8a6] transition-colors">EQUIPE</a>
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
            href="/"
            onClick={(e) => navigateTo('/', e)}
            className="inline-flex items-center text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 hover:text-teal-400 transition-colors"
          >
            <Icons.ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a Home
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Perícia Médica em Nova Andradina - MS
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Laudos técnicos imparciais e fundamentados, com ética e atualização científica, para advogados, empresas e ações judiciais.
          </p>
        </div>
      </section>

      {/* Corpo */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        <article className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-10">
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
              <Icons.Scale className="text-[#14b8a6] w-5 h-5" />
              O que é a perícia médica e quando ela é necessária
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A perícia médica é uma avaliação técnica realizada por um médico para esclarecer, com base em exame clínico e análise documental, questões de saúde relevantes para um processo judicial, trabalhista ou previdenciário. Ela é solicitada sempre que a Justiça, uma empresa ou uma das partes de um processo precisa de um parecer médico imparcial sobre uma condição de saúde, uma incapacidade, um nexo causal entre trabalho e doença, ou a extensão de um dano.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
              <Icons.Users className="text-[#14b8a6] w-5 h-5" />
              Quem pode solicitar
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A perícia médica pode ser solicitada por advogados (em ações judiciais cíveis, trabalhistas ou previdenciárias), por empresas e seguradoras (para avaliação de sinistros, afastamentos ou concessão de benefícios) e pelo próprio periciado, quando indicado pelo juízo ou pela parte interessada.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
              <Icons.ClipboardList className="text-[#14b8a6] w-5 h-5" />
              Como funciona o processo na Clínica Franco
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              O atendimento começa com o agendamento e o envio prévio da documentação relevante ao processo (quesitos, laudos anteriores, exames complementares). No dia marcado, é realizado o exame clínico e a análise técnica dos documentos apresentados. Com base nisso, é elaborado um laudo pericial detalhado, respondendo aos quesitos formulados com objetividade e fundamentação científica.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
              <Icons.BadgeCheck className="text-[#14b8a6] w-5 h-5" />
              Responsável técnico
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              As perícias médicas da Clínica Franco são realizadas pelo Dr. Rodrigo Franco (CRM-MS 10087), com atuação em ultrassonografia diagnóstica, clínica geral e perícias médicas judiciais em Nova Andradina - MS.
            </p>
            <a
              href="/medico/rodrigo-franco"
              onClick={(e) => navigateTo('/medico/rodrigo-franco', e)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14b8a6] hover:text-[#0d9488] transition-colors"
            >
              Ver perfil completo do Dr. Rodrigo Franco
              <Icons.ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        <div className="mt-10 bg-[#0e4843] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
          <div className="bg-[#14b8a6] p-4 rounded-2xl text-white flex-shrink-0">
            <Icons.MessageSquare className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg">Precisa solicitar uma perícia médica?</h4>
            <p className="text-xs text-teal-50/70 mt-1">Fale pelo WhatsApp para agendar e enviar a documentação do processo.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-all whitespace-nowrap"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e4843] text-white pt-16 pb-12 border-t border-teal-500/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-left mb-12">
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Clínica Franco</h3>
            <p className="text-teal-50/70 text-xs leading-relaxed max-w-xs mb-4">
              Rua Melvin Jones, 1243<br />Nova Andradina - MS
            </p>
            <a href="https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors">
              Ver no Google Maps
              <Icons.ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Nossa Equipe</h3>
            <ul className="space-y-3.5 text-xs text-teal-50/70">
              {doctorsData.map(d => (
                <li key={d.id}>
                  <a href={`/medico/${d.id}`} onClick={(e) => navigateTo(`/medico/${d.id}`, e)} className="hover:text-[#14b8a6] transition-colors">{d.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Canais de Contato</h3>
            <p className="text-[#14b8a6] font-extrabold text-lg mb-2">
              <a href="https://wa.me/5567998446674" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                +55 67 99844-6674
              </a>
            </p>
            <p className="text-teal-50/50 text-[10px] leading-relaxed">
              Atendimento de Segunda a Sábado, 06:00 às 22:00
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-teal-500/10 pt-8 text-center text-[10px] text-teal-50/40">
          <p>&copy; {new Date().getFullYear()} Clínica Franco. Todos os direitos reservados. Responsável Técnico: Dr. Rodrigo Duarte Franco.</p>
        </div>
      </footer>
    </div>
  );
};

export default PericiaMedicaPage;
