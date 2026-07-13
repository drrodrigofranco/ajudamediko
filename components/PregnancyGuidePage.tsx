import React, { useState } from 'react';
import * as Icons from 'lucide-react';

interface PregnancyGuidePageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const PregnancyGuidePage: React.FC<PregnancyGuidePageProps> = ({ navigateTo }) => {
  const [activeTrim, setActiveTrim] = useState<1 | 2 | 3>(1);
  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Estou+gr%C3%A1vida+e+gostaria+de+agendar+meus+exames+obst%C3%A9tricos.";

  const trimesterData = {
    1: {
      title: "1º Trimestre (1ª a 13ª Semana)",
      focus: "Formação inicial do embrião e desenvolvimento do tubo neural.",
      tips: [
        {
          title: "Ácido Fólico",
          text: "A suplementação contínua de ácido fólico (idealmente iniciada antes mesmo de engravidar) é crucial até a 12ª semana para a correta formação e fechamento do tubo neural do bebê."
        },
        {
          title: "Alívio dos Enjooos",
          text: "Coma porções pequenas a cada 2 ou 3 horas. Alimentos frios, secos (como torradas e bolacha de água e sal logo ao acordar) e raspas de gengibre na água ou chá ajudam a acalmar o estômago."
        },
        {
          title: "Ultrassom Inicial (Datador)",
          text: "Realizado por via transvaginal entre a 6ª e 9ª semana para confirmar a viabilidade gestacional, batimentos cardíacos fetais e datar com máxima precisão a Idade Gestacional (IG)."
        },
        {
          title: "Ultrassom Morfológico de 1º Trimestre",
          text: "Fundamental de 11 a 13 semanas e 6 dias. Mede a Translucência Nucal (TN), avalia a presença do osso nasal e o fluxo do ducto venoso para rastreamento de síndromes genéticas (como Síndrome de Down) e malformações precoces."
        }
      ]
    },
    2: {
      title: "2º Trimestre (14ª a 27ª Semana)",
      focus: "Crescimento acelerado do bebê, início dos movimentos e definição do sexo.",
      tips: [
        {
          title: "Alimentação e Nutrientes",
          text: "Aumente o consumo de cálcio (leite, queijos brancos, vegetais escuros) e ferro (carnes magras, feijão, lentilha acompanhados de vitamina C para melhor absorção) para nutrir a estrutura óssea do bebê."
        },
        {
          title: "Exercícios e Postura",
          text: "Atividades físicas de baixo impacto (como caminhada, hidroginástica e pilates para gestantes) ajudam a fortalecer o assoalho pélvico, aliviar dores nas costas e controlar o ganho de peso. Sempre com liberação médica."
        },
        {
          title: "Descobrindo o Sexo (Ultrassom ou Sexagem)",
          text: "A sexagem fetal por exame de sangue pode ser feita a partir da 8ª semana. Pelo ultrassom obstétrico, a genitália do bebê costuma ser identificada com segurança a partir da 16ª semana."
        },
        {
          title: "Ultrassom Morfológico de 2º Trimestre",
          text: "Exame essencial realizado entre a 20ª e 24ª semana. O médico avalia detalhadamente toda a anatomia fetal (coração, cérebro, membros, rins, coluna), a inserção do cordão umbilical e a posição da placenta."
        }
      ]
    },
    3: {
      title: "3º Trimestre (28ª a 40ª Semana)",
      focus: "Ganho de peso do bebê, maturação pulmonar e preparo para o parto.",
      tips: [
        {
          title: "Mala da Maternidade e Plano de Parto",
          text: "Organize as roupas do bebê e da mãe e os documentos necessários por volta da 34ª semana. Escreva seu plano de parto discutindo as preferências de analgesia e vias de nascimento com seu obstetra."
        },
        {
          title: "Atenção aos Movimentos Fetais (Chutes)",
          text: "O bebê costuma se mover pelo menos 10 vezes em períodos de 2 horas, principalmente após as refeições. Se notar uma diminuição drástica ou ausência de movimentos por horas, deite de lado esquerdo, coma algo doce e, caso persista, procure seu médico."
        },
        {
          title: "Ultrassom Obstétrico com Doppler",
          text: "Realizado no final da gestação para acompanhar a velocidade de crescimento, ganho de peso (estimativa ponderal) e o volume de líquido amniótico. O Doppler mede o fluxo de sangue nas artérias do bebê e da placenta."
        },
        {
          title: "Sinais de Trabalho de Parto",
          text: "Vá à maternidade se sentir contrações uterinas dolorosas e rítmicas (a cada 5 minutos por mais de uma hora), se houver perda de líquido amniótico (bolsa rota) ou sangramento vaginal significativo."
        }
      ]
    }
  };

  const activeData = trimesterData[activeTrim];

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
            Guia Completo da Gestante
          </h1>
          <p className="text-base text-teal-50/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Dicas essenciais, cuidados recomendados a cada trimestre e o cronograma ideal de exames para uma gestação tranquila e saudável.
          </p>
          
          {/* Trimester selection buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button 
              onClick={() => setActiveTrim(1)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTrim === 1 ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Sparkles className="w-4 h-4" />
              1º Trimestre
            </button>
            <button 
              onClick={() => setActiveTrim(2)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTrim === 2 ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Heart className="w-4 h-4" />
              2º Trimestre
            </button>
            <button 
              onClick={() => setActiveTrim(3)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 ${activeTrim === 3 ? 'bg-[#14b8a6] text-white' : 'bg-[#125851] text-teal-100 hover:bg-[#186b62]'}`}
            >
              <Icons.Baby className="w-4 h-4" />
              3º Trimestre
            </button>
          </div>
        </div>
      </section>

      {/* Trimester Content Details */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 lg:p-12 text-left">
          <div className="mb-8">
            <span className="text-[#14b8a6] font-bold text-xs uppercase tracking-widest">Acompanhamento Gestacional</span>
            <h2 className="text-3xl font-serif font-bold text-[#0e4843] mt-2">{activeData.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{activeData.focus}</p>
            <div className="h-1 w-12 bg-[#14b8a6] mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activeData.tips.map((tip, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100/50 hover:border-[#14b8a6]/20 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0e4843] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-[#14b8a6] flex items-center justify-center text-xs font-black">{idx + 1}</span>
                    {tip.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Golden Tips section */}
      <section className="py-20 bg-white border-y border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Dicas de Ouro para a Saúde da Mãe e do Bebê</h2>
            <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto text-center leading-relaxed">
              Conselhos fundamentais recomendados por médicos obstetras para garantir bem-estar e segurança nos 9 meses de gestação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-start">
              <div className="bg-teal-50 p-3 rounded-xl text-[#14b8a6] mb-6">
                <Icons.Apple className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#0e4843] mb-2">Alimentação Segura</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Evite carnes mal passadas, peixes crus e ovos moles para prevenir a toxoplasmose e listeriose. Lave abundantemente frutas e verduras em água corrente com solução clorada.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-start">
              <div className="bg-teal-50 p-3 rounded-xl text-[#14b8a6] mb-6">
                <Icons.Moon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#0e4843] mb-2">Dormir do Lado Esquerdo</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dormir sobre o lado esquerdo desprime a veia cava inferior do corpo, o que otimiza de forma expressiva o fluxo sanguíneo, nutrientes e oxigênio para a placenta e para o bebê.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-start">
              <div className="bg-teal-50 p-3 rounded-xl text-[#14b8a6] mb-6">
                <Icons.ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#0e4843] mb-2">Automedicação Zero</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                NUNCA tome chás medicinais, anti-inflamatórios ou analgésicos sem o aval prévio do seu obstetra. Substâncias aparentemente inofensivas podem atravessar a placenta e fazer mal ao feto.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-start">
              <div className="bg-teal-50 p-3 rounded-xl text-[#14b8a6] mb-6">
                <Icons.Syringe className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#0e4843] mb-2">Calendário de Vacinas</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Garanta a proteção do seu bebê ainda no útero mantendo as vacinas em dia: Influenza (qualquer período), dTpa (coqueluche, tétano e difteria) a partir da 20ª semana, e Hepatite B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ultrasound Scans Timeline Table */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Cronograma de Exames Recomendados</h2>
          <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Acompanhe o cronograma padrão para realizar cada ultrassom gestacional no tempo correto recomendado pelas sociedades médicas.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0e4843] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-5">Idade Gestacional</th>
                  <th className="p-5">Nome do Exame</th>
                  <th className="p-5">Objetivo Principal</th>
                  <th className="p-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold">6ª a 9ª semana</td>
                  <td className="p-5 font-bold text-[#0e4843]">Ultrassom Obstétrico Inicial</td>
                  <td className="p-5">Confirmar gravidez no útero, ouvir batimentos cardíacos e datar a gravidez.</td>
                  <td className="p-5"><span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#14b8a6] font-bold text-[9px] uppercase">Recomendado</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold">11ª a 13ª semana e 6 dias</td>
                  <td className="p-5 font-bold text-[#0e4843]">Ultrassom Morfológico de 1º Trimestre</td>
                  <td className="p-5">Medir a Translucência Nucal, osso nasal e rastrear risco de síndromes cromossômicas.</td>
                  <td className="p-5"><span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#14b8a6] font-bold text-[9px] uppercase">Essencial</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold">A partir da 20ª semana</td>
                  <td className="p-5 font-bold text-[#0e4843]">Ecocardiograma Fetal</td>
                  <td className="p-5">Avaliação cardiológica minuciosa do coração do bebê para prevenção de cardiopatias.</td>
                  <td className="p-5"><span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#14b8a6] font-bold text-[9px] uppercase">Recomendado</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold">20ª a 24ª semana</td>
                  <td className="p-5 font-bold text-[#0e4843]">Ultrassom Morfológico de 2º Trimestre</td>
                  <td className="p-5">Mapear detalhadamente a anatomia de todos os órgãos e membros fetais.</td>
                  <td className="p-5"><span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#14b8a6] font-bold text-[9px] uppercase">Essencial</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold">28ª semana em diante</td>
                  <td className="p-5 font-bold text-[#0e4843]">Obstétrico com Doppler colorido</td>
                  <td className="p-5">Avaliar crescimento, peso do bebê, quantidade de líquido e oxigenação da placenta.</td>
                  <td className="p-5"><span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#14b8a6] font-bold text-[9px] uppercase">Recomendado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#0e4843] text-white rounded-3xl p-10 space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 40px' }}></div>
          </div>
          <Icons.Baby className="w-12 h-12 text-[#14b8a6] mx-auto" />
          <h3 className="text-2xl font-serif font-bold">Cuide de você e do seu bebê</h3>
          <p className="text-teal-50/70 text-sm max-w-md mx-auto">
            Não deixe passar o período ideal para os seus ultrassons morfológicos. Agende seus exames obstétricos com nossa equipe e garanta um acompanhamento seguro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-8 py-4 rounded-full transition-all gap-2 shadow-md"
            >
              <Icons.MessageSquare className="w-4 h-4" />
              Agendar Exame Obstétrico no WhatsApp
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
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Canais de Contato</h3>
            <p className="text-[#14b8a6] font-extrabold text-lg mb-2">+55 67 99844-6674</p>
            <p className="text-teal-50/50 text-[10px] leading-relaxed">
              Atendimento de Segunda a sexta, 07:00 às 18:00
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

export default PregnancyGuidePage;
