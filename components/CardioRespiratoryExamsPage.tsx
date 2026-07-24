import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface CardioRespiratoryExamsPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const CardioRespiratoryExamsPage: React.FC<CardioRespiratoryExamsPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Exames Cardiorrespiratórios: Holter, MAPA e Espirometria | Clínica Franco + Associados - Nova Andradina - MS',
    description: 'Avaliação da função pulmonar, pressão arterial de 24h e ritmo cardíaco. Holter, MAPA e Espirometria na Clínica Franco + Associados, atendendo Nova Andradina e região: Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).',
    path: '/exames-cardiorespiratorios',
  });
  const [activeTab, setActiveTab] = useState<'holter' | 'mapa' | 'espirometria'>('holter');
  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Gostaria+de+agendar+um+exame+cardiorrespirat%C3%B3rio+pelo+site.";

  const examsInfo = {
    holter: {
      title: "Holter 24h",
      subtitle: "Eletrocardiografia Contínua Dinâmica",
      desc: "O exame de Holter 24h grava a atividade elétrica do coração continuamente durante um dia inteiro de rotina do paciente. É o método padrão ouro para mapear arritmias cardíacas que não ocorrem durante uma consulta rápida de consultório.",
      purpose: "Detectar arritmias silenciosas, palpitações, tonturas inexplicáveis, episódios de pré-sincope (sensação de desmaio) e monitorar a eficácia de tratamentos com marca-passo ou medicamentos antiarrítmicos.",
      duration: "24 horas de monitoramento contínuo",
      preparations: [
        "Tomar banho imediatamente antes de comparecer à clínica para colocação (pois não será permitido molhar o equipamento nas 24h seguintes).",
        "Não utilizar cremes, óleos ou pomadas corporais na região do tórax (isso impede a aderência adequada dos eletrodos).",
        "Pacientes do sexo masculino podem necessitar de tricotomia (depilação de pelos) em pontos específicos do peito.",
        "Vestir cinto confortável ou calça com passador para fixar o gravador na cintura.",
        "Manter as atividades diárias normais, exceto atividades físicas intensas que provoquem suor excessivo."
      ],
      faqs: [
        {
          q: "Como durmo com o Holter?",
          a: "Recomenda-se dormir de barriga para cima ou de lado. Evite dormir de bruços para não puxar os cabos nem pressionar os eletrodos colados no peito."
        },
        {
          q: "Posso usar celular ou computador?",
          a: "Sim. O uso de eletrodomésticos, celulares, computadores e notebooks é totalmente livre e não interfere no funcionamento do aparelho."
        },
        {
          q: "O que é o Diário de Atividades?",
          a: "É uma folha onde você anotará o horário em que realizou esforços (como subir escadas), comeu, dormiu e se sentiu algum sintoma (palpitações ou tontura). O médico correlaciona o diário com o registro elétrico do coração."
        }
      ]
    },
    mapa: {
      title: "MAPA 24h",
      subtitle: "Monitorização Ambulatorial da Pressão Arterial",
      desc: "O MAPA monitora a pressão arterial de forma automatizada ao longo de 24 horas. Uma braçadeira de pressão infla a intervalos programados durante o dia e a noite para coletar dados reais sobre o comportamento da sua pressão fora do consultório médico.",
      purpose: "Investigar hipertensão arterial oculta, confirmar diagnóstico em casos suspeitos, avaliar picos de pressão durante o sono (descenso noturno) e certificar-se da dose e eficácia de medicações anti-hipertensivas.",
      duration: "24 horas de monitoramento",
      preparations: [
        "Tomar banho antes do exame (não será permitido retirar o manguito ou o compressor para banho durante as 24 horas de teste).",
        "Vestir blusa ou camisa folgada com mangas largas que facilitem a acomodação da braçadeira inflável.",
        "Trazer cinto resistente para acoplar o monitor digital na cintura.",
        "Sempre que o aparelho iniciar o enchimento (inflar), estenda o braço ao longo do corpo, mantenha-o imóvel e relaxe a musculatura até que o ar saia por completo."
      ],
      faqs: [
        {
          q: "Por que o MAPA é melhor que medir a pressão na farmácia?",
          a: "Uma única medição de pressão isolada sofre influência de fatores como estresse momentâneo (síndrome do jaleco branco). O MAPA avalia dezenas de medições nas atividades de rotina e durante o sono, dando um diagnóstico preciso."
        },
        {
          q: "O aparelho machuca?",
          a: "O manguito infla até detectar a pressão sistólica, gerando uma compressão firme temporária no braço por cerca de 30-40 segundos, o que pode causar um leve incômodo, mas é seguro e tolerável."
        },
        {
          q: "E se o aparelho apitar ou inflar repetidamente?",
          a: "Se o manguito estiver torto ou se o paciente se mover durante o enchimento, o aparelho repetirá a medição em seguida. Certifique-se de manter o braço relaxado e esticado."
        }
      ]
    },
    espirometria: {
      title: "Espirometria",
      subtitle: "Prova de Função Pulmonar",
      desc: "Conhecido como teste do sopro, a espirometria é um exame pulmonar rápido e preciso que avalia a quantidade de ar que uma pessoa consegue inspirar e expirar e a velocidade com que realiza esses sopros.",
      purpose: "Diagnosticar e acompanhar o tratamento de doenças obstrutivas ou restritivas como asma, bronquite crônica, enfisema pulmonar (DPOC), fibrose pulmonar e realizar exames de risco cirúrgico pré-operatório.",
      duration: "20 a 30 minutos",
      preparations: [
        "Não fumar por pelo menos 4 horas antes de realizar o teste.",
        "Evitar o consumo de café, chá preto, chimarrão, chocolates, refrigerantes com cafeína ou bebidas alcoólicas 6 horas antes do exame.",
        "Não realizar refeições volumosas ou pesadas imediatamente antes do exame.",
        "Suspender medicamentos broncodilatadores (bombinhas de asma) antes do teste conforme orientação da nossa secretaria (varia de 4h a 24h dependendo do remédio)."
      ],
      faqs: [
        {
          q: "O que é a etapa pós-broncodilatador?",
          a: "Se o primeiro sopro demonstrar alguma limitação do fluxo de ar, o paciente realiza a inalação de um spray broncodilatador (bombinha) e repete o teste 15 minutos depois para checar se houve melhora imediata da função pulmonar."
        },
        {
          q: "O exame causa dor?",
          a: "Não causa dor. O que ocorre é um esforço respiratório intenso e rápido. Pode haver uma leve tontura ou cansaço passageiro após os sopros forçados, o que é perfeitamente normal."
        },
        {
          q: "Quem não deve realizar o exame?",
          a: "Contraindicado temporariamente para pessoas com infarto recente, aneurismas graves no tórax/abdome, cirurgias oculares recentes (como catarata) ou pneumotórax ativo."
        }
      ]
    }
  };

  const activeData = examsInfo[activeTab];

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
            <a href="/#servicos" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">EXAMES</a>
            <a href="/entenda-exames" onClick={(e) => navigateTo('/entenda-exames', e)} className="hover:text-[#14b8a6] transition-colors">COMPARATIVO</a>
            <a href="/diretriz-primeiro-trimestre" onClick={(e) => navigateTo('/diretriz-primeiro-trimestre', e)} className="hover:text-[#14b8a6] transition-colors">DIRETRIZ AMB</a>
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
      <section className="bg-[#0e4843] text-white py-20 lg:py-24 relative overflow-hidden">
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight mb-6">
            Exames Cardiorrespiratórios
          </h1>
          <p className="text-base text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Além do ultrassom, oferecemos tecnologia de ponta para avaliar a função pulmonar, pressão arterial de 24h e ritmos elétricos do coração.
          </p>
          <p className="text-xs text-teal-200/50 mb-8 max-w-xl mx-auto">
            Atendimento em Nova Andradina - MS, recebendo também pacientes de Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).
          </p>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button 
              onClick={() => setActiveTab('holter')}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTab === 'holter' ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Activity className="w-4 h-4" />
              Holter 24h
            </button>
            <button 
              onClick={() => setActiveTab('mapa')}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTab === 'mapa' ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Clock className="w-4 h-4" />
              MAPA 24h
            </button>
            <button 
              onClick={() => setActiveTab('espirometria')}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTab === 'espirometria' ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Wind className="w-4 h-4" />
              Espirometria
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 lg:p-12 grid lg:grid-cols-5 gap-12 text-left">
          {/* Left info column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-[#14b8a6] font-bold text-xs uppercase tracking-widest">{activeData.subtitle}</span>
              <h2 className="text-3xl font-serif font-bold text-[#0e4843] mt-2">{activeData.title}</h2>
              <div className="h-1 w-12 bg-[#14b8a6] mt-4 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">{activeData.desc}</p>
            
            <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-500/10">
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#0e4843] mb-2">Finalidade do Exame</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{activeData.purpose}</p>
            </div>

            {/* Time / Duration info row */}
            <div className="flex items-center gap-3 pt-2 text-[#0e4843]">
              <div className="bg-teal-50 p-3 rounded-xl text-[#14b8a6]">
                <Icons.Hourglass className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[10px] uppercase font-bold tracking-widest text-teal-800">Tempo de Monitoramento</h5>
                <p className="font-bold text-sm">{activeData.duration}</p>
              </div>
            </div>
          </div>

          {/* Right preparation checklist column */}
          <div className="lg:col-span-2 space-y-6 lg:border-l lg:border-gray-100 lg:pl-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0e4843] flex items-center gap-2">
              <Icons.ClipboardList className="w-4 h-4 text-[#14b8a6]" />
              Manual de Preparação
            </h4>
            <div className="space-y-4">
              {activeData.preparations.map((step, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-teal-50 text-[#14b8a6] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-left">
          <h2 className="text-2xl font-serif font-bold text-center text-[#0e4843] mb-4">Dúvidas Frequentes sobre o Exame</h2>
          <div className="h-1 w-12 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
          
          <div className="space-y-4">
            {activeData.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#14b8a6]/20 transition-all">
                <summary className="flex justify-between items-center text-sm font-bold text-[#0e4843]">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-[#14b8a6]">
                    <Icons.ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#0e4843] text-white rounded-3xl p-10 space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 40px' }}></div>
          </div>
          <Icons.Activity className="w-12 h-12 text-[#14b8a6] mx-auto" />
          <h3 className="text-2xl font-serif font-bold">Solicite seu Agendamento</h3>
          <p className="text-teal-50/70 text-sm max-w-md mx-auto">
            Agende seus exames cardiorrespiratórios de forma facilitada. Nossa equipe está pronta para lhe orientar sobre preparos específicos e convênios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-8 py-4 rounded-full transition-all gap-2 shadow-md"
            >
              <Icons.MessageSquare className="w-4 h-4" />
              Falar com Atendimento no WhatsApp
            </a>
          </div>
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

export default CardioRespiratoryExamsPage;
