import React from 'react';
import * as Icons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface ExamsComparisonPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const ExamsComparisonPage: React.FC<ExamsComparisonPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Entenda a Diferença entre Exames de Imagem | Clínica Franco + Associados - Nova Andradina - MS',
    description: 'Ultrassom, Raio-X, Tomografia e Ressonância: descubra como cada exame funciona e quando é indicado. Clínica Franco + Associados atende Nova Andradina e região: Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).',
    path: '/entenda-exames',
  });
  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Gostaria+de+tirar+d%C3%BAvidas+sobre+exames+de+ultrassom+pelo+site.";

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
            <a href="/#servicos" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SERVIÇOS</a>
            <a href="/#curriculo" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SOBRE NÓS</a>
            <a href="/#faq" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">DÚVIDAS</a>
          </nav>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-all"
          >
            CONSULTAR EQUIPE
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Entenda a Diferença entre Exames de Imagem
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Ultrassom, Raio-X, Tomografia Computadorizada e Ressonância Magnética. Descubra como cada tecnologia funciona e quando cada uma é indicada.
          </p>
          <p className="text-xs text-teal-200/50 mb-8 max-w-xl mx-auto">
            Atendimento em Nova Andradina - MS, recebendo também pacientes de Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <Icons.HelpCircle className="w-4 h-4 text-teal-300" />
            Guia Educativo ao Paciente
          </div>
        </div>
      </section>

      {/* Explicando o Ultrassom */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#0e4843]">O que é a Ultrassonografia (Ultrassom)?</h2>
            <div className="h-1 w-12 bg-[#14b8a6] rounded-full"></div>
            <p className="text-gray-600 text-sm leading-relaxed">
              O ultrassom é um método de diagnóstico por imagem totalmente seguro, baseado no princípio físico do eco (ondas sonoras de alta frequência). O transdutor emite ondas mecânicas inaudíveis que ricocheteiam nas estruturas internas do corpo e retornam como eco, sendo decodificados em tempo real na tela do médico.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Diferente do Raio-X e da Tomografia, **o ultrassom não utiliza radiação ionizante**. Por isso, é o exame padrão de escolha para monitorar gestações e realizar avaliações repetidas sem qualquer risco biológico.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-xl text-[#14b8a6] mr-4 flex-shrink-0">
                  <Icons.Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e4843]">Segurança Absoluta</h4>
                  <p className="text-xs text-gray-500 mt-1">Livre de radiação ionizante, ideal para gestantes, crianças e exames repetitivos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-xl text-[#14b8a6] mr-4 flex-shrink-0">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e4843]">Avaliação Dinâmica</h4>
                  <p className="text-xs text-gray-500 mt-1">Permite examinar movimentos articulares e fluxos de sangue em tempo real (Doppler colorido).</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-500/10 mt-6 text-left">
              <h4 className="font-bold text-sm text-[#0e4843] flex items-center gap-2">
                <Icons.BookOpen className="w-4 h-4 text-[#14b8a6]" />
                Estudo Científico da AMB
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                A Associação Médica Brasileira (AMB) publicou diretrizes completas sobre a importância e protocolos do ultrassom no primeiro trimestre da gravidez.
              </p>
              <a 
                href="/diretriz-primeiro-trimestre" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/diretriz-primeiro-trimestre', e);
                }}
                className="inline-flex items-center text-xs font-bold text-[#14b8a6] hover:text-[#0d9488] mt-3 gap-1 transition-colors"
              >
                Ler Resumo da Diretriz
                <Icons.ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute inset-0 bg-[#0e4843] rounded-3xl transform rotate-3 scale-95 opacity-10"></div>
            <img src="https://picsum.photos/seed/ultrasoundexplain/600/400" alt="Explicando o Ultrassom" className="relative z-10 w-full h-auto object-cover rounded-3xl border border-gray-100 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Detalhamento das outras Tecnologias */}
      <section className="py-20 bg-teal-50/20 border-y border-teal-500/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#0e4843]">Como funcionam os outros exames de imagem?</h2>
            <div className="h-1 w-16 bg-[#14b8a6] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Raio-X */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6">
                  <Icons.Bone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0e4843] mb-4">Radiografia (Raio-X)</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Usa radiação ionizante em baixa dosagem para atravessar o corpo humano. As estruturas densas (como os ossos) bloqueiam os raios e aparecem em branco em uma chapa bidimensional (2D).
                </p>
                <p className="text-xs font-bold text-[#0e4843] mb-4 uppercase tracking-widest text-[#14b8a6]">Indicado para:</p>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Fraturas ósseas</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Raio-X de tórax (pulmões)</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Emergências iniciais</li>
                </ul>
              </div>
            </div>

            {/* Tomografia */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6">
                  <Icons.ScanFace className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0e4843] mb-4">Tomografia (TC)</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  É uma evolução computadorizada e tridimensional do Raio-X. O aparelho gira ao redor do paciente emitindo raios, capturando fatias transversais de altíssima definição das estruturas internas.
                </p>
                <p className="text-xs font-bold text-[#0e4843] mb-4 uppercase tracking-widest text-[#14b8a6]">Indicado para:</p>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Órgãos internos complexos</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Pesquisa de tumores</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> AVCs e traumas graves</li>
                </ul>
              </div>
            </div>

            {/* Ressonância */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6">
                  <Icons.Magnet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0e4843] mb-4">Ressonância (RM)</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Não usa radiação. Funciona por meio de um campo magnético potente e ondas de radiofrequência que estimulam a resposta de átomos de hidrogênio nos tecidos corporais, gerando imagens tridimensionais riquíssimas.
                </p>
                <p className="text-xs font-bold text-[#0e4843] mb-4 uppercase tracking-widest text-[#14b8a6]">Indicado para:</p>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Cérebro e medula espinhal</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Tendões, ligamentos e meniscos</li>
                  <li className="flex items-center"><Icons.Check className="w-3.5 h-3.5 mr-2 text-[#14b8a6]" /> Tecidos de alta profundidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#0e4843]">Tabela Comparativa Rápida</h2>
          <div className="h-1 w-16 bg-[#14b8a6] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-4">Compare as principais características e requisitos de cada tipo de exame.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0e4843] text-white">
                <th className="p-6 font-semibold text-sm">Característica</th>
                <th className="p-6 font-semibold text-sm">Ultrassom</th>
                <th className="p-6 font-semibold text-sm">Radiografia (Raio-X)</th>
                <th className="p-6 font-semibold text-sm">Tomografia (TC)</th>
                <th className="p-6 font-semibold text-sm">Ressonância (RM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-600">
              <tr>
                <td className="p-6 font-bold text-[#0e4843] bg-gray-50/50">Radiação Ionizante</td>
                <td className="p-6 text-emerald-600 font-bold flex items-center gap-1.5"><Icons.ShieldCheck className="w-4 h-4" /> Não</td>
                <td className="p-6 text-rose-500 font-medium">Sim</td>
                <td className="p-6 text-rose-500 font-medium">Sim (Moderada/Alta)</td>
                <td className="p-6 text-emerald-600 font-bold flex items-center gap-1.5"><Icons.ShieldCheck className="w-4 h-4" /> Não</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-[#0e4843] bg-gray-50/50">Princípio Físico</td>
                <td className="p-6">Ondas sonoras (ecos)</td>
                <td className="p-6">Raios-X (2D)</td>
                <td className="p-6">Raios-X giratórios (3D)</td>
                <td className="p-6">Magnetismo e Rádio</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-[#0e4843] bg-gray-50/50">Duração Média</td>
                <td className="p-6">15 a 45 minutos</td>
                <td className="p-6">5 a 10 minutos</td>
                <td className="p-6">5 a 15 minutos</td>
                <td className="p-6">25 a 60 minutos</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-[#0e4843] bg-gray-50/50">Principais Focos</td>
                <td className="p-6">Tecidos moles, gravidez, fluxos, músculos</td>
                <td className="p-6">Ossos, tórax, ar nos pulmões</td>
                <td className="p-6">Órgãos abdominais, tórax, crânio, emergências</td>
                <td className="p-6">Cérebro, articulações complexas, coluna</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-[#0e4843] bg-gray-50/50">Preparação Comum</td>
                <td className="p-6">Jejum ou bexiga cheia (variável)</td>
                <td className="p-6">Nenhuma</td>
                <td className="p-6">Jejum (se houver contraste)</td>
                <td className="p-6">Jejum e remoção de metais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dúvidas Frequentes */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-[#0e4843] mb-4">Dúvidas Frequentes</h2>
        <div className="h-1 w-12 bg-[#14b8a6] mx-auto mb-12 rounded-full"></div>
        
        <div className="space-y-4">
          <details className="group bg-white rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#14b8a6]/20 transition-all">
            <summary className="flex justify-between items-center text-sm font-bold text-[#0e4843]">
              <span>Qual é o exame de imagem mais seguro e inofensivo?</span>
              <span className="transition group-open:rotate-180 text-[#14b8a6]">
                <Icons.ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              O ultrassom é considerado o exame mais inofensivo por usar apenas ondas sonoras (ecos mecânicos), não interferindo em nível molecular nos tecidos. A ressonância magnética também é extremamente segura por não usar radiação, mas exige cuidados estritos com metais (como marcapassos e pinos metálicos) devido ao campo magnético intenso.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#14b8a6]/20 transition-all">
            <summary className="flex justify-between items-center text-sm font-bold text-[#0e4843]">
              <span>Gestantes podem fazer raio-X ou tomografia?</span>
              <span className="transition group-open:rotate-180 text-[#14b8a6]">
                <Icons.ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Em regra geral, exames que utilizam radiação ionizante (como Raio-X e tomografia) devem ser evitados na gravidez, especialmente no abdome/pelve, pois a radiação pode prejudicar o desenvolvimento celular do feto. Em caso de extrema necessidade médica, o exame é realizado utilizando proteções abdominais especiais de chumbo.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#14b8a6]/20 transition-all">
            <summary className="flex justify-between items-center text-sm font-bold text-[#0e4843]">
              <span>Por que meu médico pediu tomografia se eu já tinha feito ultrassom?</span>
              <span className="transition group-open:rotate-180 text-[#14b8a6]">
                <Icons.ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              O ultrassom é excelente para avaliações iniciais e superficiais, mas ondas sonoras têm dificuldade para atravessar ossos e excesso de gases no intestino. O médico solicita a tomografia ou a ressonância para obter imagens tridimensionais profundas com alta clareza de fatias milimétricas dos órgãos que não puderam ser totalmente investigados no ultrassom.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e4843] text-white pt-16 pb-12 border-t border-teal-500/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-left mb-12">
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Clínica Franco <span className="text-[#14b8a6]">+</span> Associados</h3>
            <p className="text-teal-50/70 text-xs leading-relaxed max-w-xs mb-4">
              Rua Melvin Jones, 1243 (Antigo Hospital Santa Helena, Sala 3)<br />Nova Andradina - MS
              <br /><br />Atendemos também pacientes de Batayporã, Ivinhema, Anaurilândia, Angélica, Deodápolis e Rosana (SP).
            </p>
            <a href="https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors">
              Ver no Google Maps
              <Icons.ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Principais Exames</h3>
            <ul className="space-y-3.5 text-xs text-teal-50/70">
              <li><a href="/exame/obstetrico_doppler" onClick={(e) => navigateTo('/exame/obstetrico_doppler', e)} className="hover:text-[#14b8a6] transition-colors">Obstétrico com Doppler</a></li>
              <li><a href="/exame/ecofetal" onClick={(e) => navigateTo('/exame/ecofetal', e)} className="hover:text-[#14b8a6] transition-colors">Ecocardiograma Fetal</a></li>
              <li><a href="/exame/morfologico1" onClick={(e) => navigateTo('/exame/morfologico1', e)} className="hover:text-[#14b8a6] transition-colors">Morfológico de 1º Trimestre</a></li>
              <li><a href="/exame/morfologico2" onClick={(e) => navigateTo('/exame/morfologico2', e)} className="hover:text-[#14b8a6] transition-colors">Morfológico de 2º Trimestre</a></li>
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

export default ExamsComparisonPage;
