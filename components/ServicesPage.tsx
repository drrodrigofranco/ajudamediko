import React from 'react';
import * as Icons from 'lucide-react';
import { ultrasoundExams } from '../ultrasoundExamsData';
import { doctorsData } from '../doctorsData';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

interface ServicesPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

interface ConsultationService {
  title: string;
  icon: keyof typeof Icons;
  description: string;
  links?: { label: string; href: string }[];
}

// Mesmo conteudo dos cards de "Consultas e Atendimentos" ja usados na home
// (components/Services.tsx) + Pediatria, que ainda nao estava la. Mantido
// aqui em vez de um data file separado porque o conteudo ja era hardcoded
// em Services.tsx (nao e dado dinamico como doctorsData/ultrasoundExamsData);
// se um novo tipo de consulta for adicionado, atualizar os dois lugares.
const consultationServices: ConsultationService[] = [
  {
    title: 'Consulta Médica (Clínica Geral)',
    icon: 'Stethoscope',
    description: 'Com vasta experiência como médico da família, oferecemos um cuidado integral e humanizado. A consulta serve para o diagnóstico de doenças, acompanhamento de condições crônicas e, principalmente, para a prevenção, garantindo saúde em todas as fases da vida.',
  },
  {
    title: 'Saúde do Idoso',
    icon: 'HeartPulse',
    description: 'Foco na saúde e bem-estar da terceira idade. Nosso atendimento em saúde do idoso visa a manutenção da autonomia, prevenção de quedas, manejo de polifarmácia e o cuidado dedicado a condições típicas do envelhecimento, sempre com foco na qualidade de vida.',
  },
  {
    title: 'Saúde Neurológica',
    icon: 'Brain',
    description: 'Atendimento em clínica geral e avaliação neurológica para queixas como cefaleia, tontura, alterações de memória e distúrbios do sono. Condução cuidadosa da história clínica, com acompanhamento contínuo em Nova Andradina e região.',
  },
  {
    title: 'Pediatria',
    icon: 'Baby',
    description: 'Atendimento médico de recém-nascidos, lactentes, crianças e adolescentes, com pós-graduação em Pediatria Clínica: puericultura, acompanhamento do crescimento e desenvolvimento, vacinação e avaliação das principais condições da infância.',
    links: [{ label: 'Conhecer o Dr. Tiago', href: '/medico/tiago-wizenfad' }],
  },
  {
    title: 'Ecocardiograma Fetal',
    icon: 'Baby',
    description: 'Exame detalhado do coração do bebê ainda no útero. Fundamental para detectar precocemente cardiopatias congênitas e planejar o melhor acompanhamento. A detecção precoce pode salvar vidas e preparar a equipe médica para o nascimento.',
    links: [{ label: 'Ver Guia e Preparação', href: '/exame/ecofetal' }],
  },
  {
    title: 'Perícia Médica',
    icon: 'FileText',
    description: 'Perícia Médica para fins judiciais e trabalhistas, com ética e atualização científica. Assistência técnica qualificada para advogados e empresas que buscam laudos imparciais e fundamentados.',
  },
  {
    title: 'Holter, MAPA, Espirometria e ECG',
    icon: 'Activity',
    description: 'Realização de exames cardiorrespiratórios avançados: Holter 24h, MAPA 24h, Espirometria e Eletrocardiograma (ECG). Oferecemos monitoramento completo, equipamentos calibrados e manuais de preparação detalhados para máxima segurança do seu diagnóstico.',
    links: [
      { label: 'Holter, MAPA e Espirometria', href: '/exames-cardiorespiratorios' },
      { label: 'Ver Eletrocardiograma (ECG)', href: '/exame/eletrocardiograma' },
    ],
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Nossos Serviços | Clínica Franco - Nova Andradina - MS',
    description: 'Serviços da Clínica Franco em Nova Andradina - MS: consultas médicas, saúde do idoso, pediatria, perícia médica e catálogo completo de exames de ultrassom.',
    path: '/servicos',
  });

  useJsonLd('services-breadcrumb-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajudamediko.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Nossos Serviços', item: 'https://ajudamediko.com.br/servicos' },
    ],
  });

  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Vim+da+p%C3%A1gina+de+servi%C3%A7os+e+gostaria+de+agendar.";

  const goToExam = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(`/exame/${id}`, e);
  };

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
            Nossos Serviços
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Consultas médicas e o catálogo completo de exames de ultrassom da Clínica Franco em Nova Andradina - MS.
          </p>
        </div>
      </section>

      {/* Consultas e Atendimentos */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Consultas e Atendimentos</h2>
          <div className="h-1 w-16 bg-[#14b8a6] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {consultationServices.map((service) => {
            const ServiceIcon = Icons[service.icon] as Icons.LucideIcon;
            return (
              <div key={service.title} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-xl transition-all group">
                <div className="bg-[#f0fdfa] p-5 rounded-2xl mb-8 group-hover:bg-[#14b8a6] group-hover:text-white transition-all duration-300">
                  <ServiceIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0e4843] mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                {service.links && service.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {service.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); navigateTo(link.href, e); }}
                        className="flex items-center text-white bg-[#0f766e] text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-[#0d9488] transition-all"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Catalogo de Exames */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Catálogo de Exames de Ultrassom</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Lista completa de exames de ultrassonografia realizados na Clínica Franco. Clique em qualquer exame para ver o guia completo de preparação.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ultrasoundExams.map((exam) => (
            <a
              key={exam.id}
              href={`/exame/${exam.id}`}
              onClick={(e) => goToExam(exam.id, e)}
              className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-50 shadow-sm flex flex-col items-center text-center hover:border-[#14b8a6]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-[#14b8a6] mb-4 group-hover:scale-110 transition-transform"><exam.Icon size={28} /></div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{exam.name}</h3>
              <p className="text-[10px] text-gray-500 font-medium mb-3">{exam.desc}</p>
              <span className="text-[9px] font-bold text-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Saiba Mais</span>
            </a>
          ))}
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

export default ServicesPage;
