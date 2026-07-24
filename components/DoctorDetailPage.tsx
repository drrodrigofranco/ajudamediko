import React from 'react';
import * as Icons from 'lucide-react';
import { doctorsData } from '../doctorsData';
import { useSEO } from '../hooks/useSEO';

interface DoctorDetailPageProps {
  doctorId: string;
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const ICONS = {
  HeartPulse: Icons.HeartPulse,
  Stethoscope: Icons.Stethoscope,
  Brain: Icons.Brain,
};

const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({ doctorId, navigateTo }) => {
  const doctor = doctorsData.find(d => d.id === doctorId);

  useSEO({
    title: doctor
      ? `${doctor.name} (${doctor.crm}) em Nova Andradina - MS | Clínica Franco + Associados`
      : 'Médico não encontrado | Clínica Franco + Associados',
    description: doctor
      ? `${doctor.shortBio}`.slice(0, 160)
      : 'Médico não encontrado. Conheça toda a equipe da Clínica Franco + Associados em Nova Andradina - MS.',
    path: `/medico/${doctorId}`,
  });

  React.useEffect(() => {
    if (!doctor) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'doctor-jsonld';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: doctor.name,
      identifier: doctor.crm,
      image: `https://ajudamediko.com.br${doctor.photo}`,
      url: `https://ajudamediko.com.br/medico/${doctor.id}`,
      medicalSpecialty: doctor.specialtyLabel,
      worksFor: { '@id': 'https://ajudamediko.com.br/#medicalbusiness' },
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [doctor]);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold text-[#0e4843] mb-4">Médico não encontrado</h2>
        <a
          href="/"
          onClick={(e) => navigateTo('/', e)}
          className="text-[#14b8a6] hover:underline font-bold"
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
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" onClick={(e) => navigateTo('/', e)} className="flex items-center gap-2 group">
            <span className="bg-[#0e4843] text-white p-2 rounded-xl text-xs font-black tracking-wider transition-all group-hover:bg-[#14b8a6]">US</span>
            <span className="font-serif font-bold text-xl text-[#0e4843] tracking-tight">Clínica Franco <span className="text-[#14b8a6]">+</span> Associados</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#0e4843]/80">
            <a href="/" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">HOME</a>
            <a href="/#curriculo" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">EQUIPE</a>
            <a href="/#servicos" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SERVIÇOS</a>
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
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 mx-auto mb-8">
            <img src={doctor.photo} alt={`${doctor.name} - ${doctor.specialtyLabel} - ${doctor.crm}`} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
            {doctor.name}
          </h1>
          <p className="text-lg text-teal-50/80 mb-6 leading-relaxed max-w-2xl mx-auto">
            {doctor.shortBio}
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full inline-block animate-pulse"></span>
            {doctor.crm} — Nova Andradina - MS
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-2/3 space-y-12">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                  <Icons.Info className="text-[#14b8a6] w-5 h-5" />
                  Sobre o Médico
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{doctor.longBio}</p>
              </div>

              <hr className="border-gray-100" />

              <div className="space-y-6">
                <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                  <Icons.GraduationCap className="text-[#14b8a6] w-5 h-5" />
                  Formação Acadêmica
                </h3>
                <div className="border-l-2 border-[#ccfbf1] ml-2 pl-8 space-y-6">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-[#14b8a6] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-gray-900 text-base">{edu.title}</h4>
                      {edu.year && <span className="text-[#14b8a6] font-bold text-xs block mt-1">{edu.year}</span>}
                      {edu.institution && <p className="text-gray-500 text-sm mt-1">{edu.institution}</p>}
                      {edu.description && <p className="text-gray-500 text-sm mt-1 leading-relaxed">{edu.description}</p>}
                    </div>
                  ))}
                </div>
                {doctor.lattesUrl && (
                  <a href={doctor.lattesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#14b8a6] hover:underline text-sm font-bold">
                    Acesse o currículo Lattes completo
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <hr className="border-gray-100" />

              <div className="space-y-6">
                <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                  <Icons.Briefcase className="text-[#14b8a6] w-5 h-5" />
                  Trajetória Profissional
                </h3>
                {doctor.experience.map((group, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-gray-900 text-sm mb-4">{group.label}</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-8">
            <div className="bg-[#0e4843] text-white p-8 rounded-3xl shadow-lg border border-teal-500/10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-2xl text-[#14b8a6]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-teal-300 font-bold">Especialidade</h4>
                    <p className="font-bold text-sm">{doctor.specialtyLabel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-2xl text-[#14b8a6]">
                    <Icons.BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-teal-300 font-bold">Registro</h4>
                    <p className="font-bold text-sm">{doctor.crm}</p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white py-4 rounded-2xl font-bold shadow-md hover:-translate-y-0.5 transition-all text-sm"
                >
                  <Icons.MessageSquare className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-[#0e4843] mb-6 flex items-center gap-2">
                <Icons.Target className="text-[#14b8a6] w-5 h-5" />
                Foco de Atendimento
              </h3>
              <ul className="space-y-4">
                {doctor.focusAreas.map((area, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 leading-relaxed">
                    <Icons.Check className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-[#0e4843] mb-4">Conheça a Equipe</h3>
              <div className="space-y-2 text-xs text-[#14b8a6] font-bold">
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
      <footer className="bg-[#0e4843] text-white pt-16 pb-12 border-t border-teal-500/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-left mb-12">
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Clínica Franco <span className="text-[#14b8a6]">+</span> Associados</h3>
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
          <p>&copy; 2026 Clínica Franco + Associados. Todos os direitos reservados. Responsável Técnico: Dr. Rodrigo Duarte Franco.</p>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDetailPage;
