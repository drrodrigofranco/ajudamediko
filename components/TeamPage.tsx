import React from 'react';
import * as Icons from 'lucide-react';
import { doctorsData } from '../doctorsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

interface TeamPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const BADGE_ICONS = {
  HeartPulse: Icons.HeartPulse,
  Stethoscope: Icons.Stethoscope,
  Brain: Icons.Brain,
  Baby: Icons.Baby,
};

const TeamPage: React.FC<TeamPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Nossa Equipe Médica | Clínica Franco - Nova Andradina - MS',
    description: 'Conheça a equipe médica da Clínica Franco em Nova Andradina - MS: ultrassonografia, perícias médicas, saúde do idoso, avaliação neurológica e pediatria.',
    path: '/equipe',
  });

  useJsonLd('team-breadcrumb-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Nossa Equipe', item: 'https://ajudamediko.com.br/equipe' },
    ],
  });

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Vim+da+p%C3%A1gina+da+equipe+e+gostaria+de+agendar+uma+consulta.";

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
            Nossa Equipe
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Conheça os profissionais da Clínica Franco em Nova Andradina - MS, dedicados a um cuidado humanizado e preciso para toda a família.
          </p>
        </div>
      </section>

      {/* Grid de profissionais */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        <div className="grid sm:grid-cols-2 gap-8">
          {doctorsData.map((doctor) => {
            const BadgeIcon = BADGE_ICONS[doctor.iconName];
            return (
              <article key={doctor.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src={doctor.photo}
                      alt={`${doctor.name} - ${doctor.specialtyLabel} - ${doctor.crm}`}
                      className={`w-full h-full object-cover ${doctor.photoObjectPosition === 'top' ? 'object-top' : ''}`}
                      referrerPolicy="no-referrer"
                      width={doctor.photoWidth}
                      height={doctor.photoHeight}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#14b8a6] text-white p-2.5 rounded-xl shadow-lg">
                    <BadgeIcon size={20} />
                  </div>
                </div>
                <h2 className="text-xl font-serif font-bold text-[#0e4843] mb-1">{doctor.name}</h2>
                <p className="text-[#0f766e] font-bold uppercase tracking-widest text-xs mb-1">{doctor.crm}</p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-4">{doctor.specialtyLabel}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {doctor.shortBio}
                </p>
                <a
                  href={`/medico/${doctor.id}`}
                  onClick={(e) => navigateTo(`/medico/${doctor.id}`, e)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14b8a6] hover:text-[#0d9488] transition-colors mt-auto"
                >
                  Ver perfil completo
                  <Icons.ChevronRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
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

export default TeamPage;
