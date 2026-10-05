import React from 'react';
import LogoMark from './LogoMark';
import * as Icons from 'lucide-react';
import { doctorsData } from '../doctorsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';
import { truncateAtWord } from '../textUtils';

interface DoctorDetailPageProps {
  doctorId: string;
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const ICONS = {
  HeartPulse: Icons.HeartPulse,
  Stethoscope: Icons.Stethoscope,
  Brain: Icons.Brain,
  Baby: Icons.Baby,
  Sparkles: Icons.Sparkles,
};

const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({ doctorId, navigateTo }) => {
  const doctor = doctorsData.find(d => d.id === doctorId);

  useSEO({
    title: doctor
      ? doctor.seoTitle || `${doctor.name} (${doctor.crm}) em Nova Andradina - MS | Clínica Franco`
      : 'Médico não encontrado | Clínica Franco',
    description: doctor
      ? truncateAtWord(doctor.seoDescription || doctor.shortBio)
      : 'Médico não encontrado. Conheça toda a equipe da Clínica Franco em Nova Andradina - MS.',
    path: `/medico/${doctorId}`,
  });

  useJsonLd('doctor-jsonld', doctor ? {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `https://ajudamediko.com.br/medico/${doctor.id}#physician`,
    name: doctor.name,
    identifier: doctor.crm,
    image: `https://ajudamediko.com.br${doctor.photo}`,
    url: `https://ajudamediko.com.br/medico/${doctor.id}`,
    description: doctor.jsonLdDescription || doctor.specialtyLabel,
    worksFor: { '@id': 'https://ajudamediko.com.br/#medicalbusiness' },
    ...(doctor.medicalSpecialty ? { medicalSpecialty: doctor.medicalSpecialty } : {}),
  } : null);

  useJsonLd('doctor-breadcrumb-jsonld', doctor ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Equipe', item: 'https://ajudamediko.com.br/equipe' },
      { '@type': 'ListItem', position: 3, name: doctor.name, item: `https://ajudamediko.com.br/medico/${doctor.id}` },
    ],
  } : null);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Médico não encontrado</h2>
        <a
          href="/"
          onClick={(e) => navigateTo('/', e)}
          className="text-brand hover:underline font-bold"
        >
          Voltar para a página inicial
        </a>
      </div>
    );
  }

  const IconComponent = ICONS[doctor.iconName];
  const whatsappUrl = `https://wa.me/5567998446674?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com o(a) ${doctor.name} pelo site.`)}`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Header Nav */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" onClick={(e) => navigateTo('/', e)} className="flex items-center gap-2 group">
            <LogoMark className="h-9 w-auto text-ink transition-colors group-hover:text-brand" />
            <span className="font-serif font-semibold text-xl text-ink tracking-tight">Clínica Franco</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-ink/80">
            <a href="/" onClick={(e) => navigateTo('/', e)} className="hover:text-brand transition-colors">HOME</a>
            <a href="/equipe" onClick={(e) => navigateTo('/equipe', e)} className="hover:text-brand transition-colors">EQUIPE</a>
            <a href="/servicos" onClick={(e) => navigateTo('/servicos', e)} className="hover:text-brand transition-colors">SERVIÇOS</a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-hover text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
          >
            AGENDAR AGORA
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-ink text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <a
            href="/"
            onClick={(e) => navigateTo('/', e)}
            className="inline-flex items-center text-teal-300 text-xs font-bold tracking-wide mb-6 hover:text-teal-400 transition-colors"
          >
            <Icons.ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a Home
          </a>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden mx-auto mb-8">
            <img
              src={doctor.photo}
              alt={`${doctor.name} - ${doctor.specialtyLabel} - ${doctor.crm}`}
              className={`w-full h-full object-cover ${doctor.photoObjectPosition === 'top' ? 'object-top' : ''}`}
              width={doctor.photoWidth}
              height={doctor.photoHeight}
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-4">
            {doctor.name}
          </h1>
          <p className="text-lg text-teal-50/80 leading-relaxed max-w-2xl mx-auto">
            {doctor.shortBio}
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-2/3 space-y-12">
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-lg font-serif font-semibold text-ink flex items-center gap-2">
                  <Icons.Info className="text-brand w-5 h-5" />
                  Quem é {doctor.name}?
                </h2>
                {doctor.longBio.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-6">
                <h2 className="text-lg font-serif font-semibold text-ink flex items-center gap-2">
                  <Icons.GraduationCap className="text-brand w-5 h-5" />
                  Formação Acadêmica
                </h2>
                <div className="border-l-2 border-brand-soft ml-2 pl-8 space-y-6">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-brand rounded-full border-4 border-white"></div>
                      <h4 className="font-bold text-gray-900 text-base">{edu.title}</h4>
                      {edu.year && <span className="text-brand font-bold text-xs block mt-1">{edu.year}</span>}
                      {edu.institution && <p className="text-gray-500 text-sm mt-1">{edu.institution}</p>}
                      {edu.description && <p className="text-gray-500 text-sm mt-1 leading-relaxed">{edu.description}</p>}
                    </div>
                  ))}
                </div>
                {doctor.lattesUrl && (
                  <a href={doctor.lattesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:underline text-sm font-bold">
                    Acesse o currículo Lattes completo
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-6">
                <h2 className="text-lg font-serif font-semibold text-ink flex items-center gap-2">
                  <Icons.Briefcase className="text-brand w-5 h-5" />
                  Trajetória Profissional
                </h2>
                {doctor.experience.map((group, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-gray-900 text-sm mb-4">{group.label}</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {doctor.procedures && doctor.procedures.length > 0 && (
                <>
                  <hr className="border-gray-200" />
                  <div className="space-y-4">
                    <h2 className="text-lg font-serif font-semibold text-ink flex items-center gap-2">
                      <Icons.Stethoscope className="text-brand w-5 h-5" />
                      Pequenos Procedimentos Ambulatoriais
                    </h2>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {doctor.procedures.map((proc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-8">
            <div className="bg-ink text-white p-8 rounded-lg border border-teal-500/10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-lg text-brand-light">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-wide text-teal-300 font-bold">Especialidade</h4>
                    <p className="font-bold text-sm">{doctor.specialtyLabel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-lg text-brand-light">
                    <Icons.BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-wide text-teal-300 font-bold">Registro</h4>
                    <p className="font-bold text-sm">{doctor.crm}</p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-hover text-white py-4 rounded-lg font-bold hover:-translate-y-0.5 transition-all text-sm"
                >
                  <Icons.MessageSquare className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-base font-bold text-ink mb-6 flex items-center gap-2">
                <Icons.Target className="text-brand w-5 h-5" />
                Foco de Atendimento
              </h2>
              <ul className="space-y-4">
                {doctor.focusAreas.map((area, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 leading-relaxed">
                    <Icons.Check className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-base font-bold text-ink mb-4">Conheça a Equipe</h2>
              <div className="space-y-2 text-xs text-brand font-bold">
                {doctorsData.filter(d => d.id !== doctor.id).map((d, i) => (
                  <a
                    key={d.id}
                    href={`/medico/${d.id}`}
                    onClick={(e) => navigateTo(`/medico/${d.id}`, e)}
                    className={`block py-2 hover:underline flex justify-between items-center ${i > 0 ? 'border-t border-gray-50' : ''}`}
                  >
                    <span>{d.name}</span>
                    <Icons.ChevronRight className="w-4 h-4 text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white pt-16 pb-12 border-t border-teal-500/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-left mb-12">
          <div>
            <h3 className="font-serif font-semibold text-xl mb-6">Clínica Franco</h3>
            <p className="text-teal-50/70 text-xs leading-relaxed max-w-xs mb-4">
              Rua Melvin Jones, 1243<br />Nova Andradina - MS
            </p>
            <a href="https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors">
              Ver no Google Maps
              <Icons.ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-wide mb-6">Nossa Equipe</h3>
            <ul className="space-y-3.5 text-xs text-teal-50/70">
              {doctorsData.map(d => (
                <li key={d.id}>
                  <a href={`/medico/${d.id}`} onClick={(e) => navigateTo(`/medico/${d.id}`, e)} className="hover:text-brand transition-colors">{d.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-wide mb-6">Canais de Contato</h3>
            <p className="text-brand-light font-extrabold text-lg mb-2">
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
          <p>&copy; 2026 Clínica Franco. Todos os direitos reservados. Responsável Técnico: Dr. Rodrigo Duarte Franco.</p>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDetailPage;
