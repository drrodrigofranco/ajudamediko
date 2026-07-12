import React from 'react';
import * as Icons from 'lucide-react';
import { examsData, ExamData } from '../examsData';

interface ExamDetailPageProps {
  examId: string;
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const ExamDetailPage: React.FC<ExamDetailPageProps> = ({ examId, navigateTo }) => {
  const exam = examsData.find(e => e.id === examId);

  if (!exam) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold text-[#0e4843] mb-4">Exame não encontrado</h2>
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

  // Dynamically resolve icon from name
  const IconComponent = (Icons as any)[exam.iconName] || Icons.HelpCircle;
  const whatsappUrl = `https://wa.me/5567998446674?text=${encodeURIComponent(`Olá! Gostaria de solicitar um agendamento para o exame: *${exam.name}* pelo site.`)}`;

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            {exam.name}
          </h1>
          <p className="text-lg text-teal-50/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            {exam.shortDesc}
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full inline-block animate-pulse"></span>
            Exame realizado em Nova Andradina - MS
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column (Main description + FAQs) */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            {/* Image banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-md max-h-96">
              <img src={exam.imageUrl} alt={exam.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Description Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                  <Icons.Info className="text-[#14b8a6] w-5 h-5" />
                  Sobre o Exame
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{exam.longDesc}</p>
              </div>

              <hr className="border-gray-100" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                    <Icons.Stethoscope className="text-[#14b8a6] w-5 h-5" />
                    Como é Feito
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exam.howItIsDone}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                    <Icons.Target className="text-[#14b8a6] w-5 h-5" />
                    Indicação e Utilidade
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exam.purpose}</p>
                </div>
              </div>

              {exam.whenItIsDone && (
                <>
                  <hr className="border-gray-100" />
                  <div className="space-y-3">
                    <h3 className="text-lg font-serif font-bold text-[#0e4843] flex items-center gap-2">
                      <Icons.Calendar className="text-[#14b8a6] w-5 h-5" />
                      Quando Realizar
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{exam.whenItIsDone}</p>
                  </div>
                </>
              )}
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#0e4843] text-left">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                {exam.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#14b8a6]/20 transition-all">
                    <summary className="flex justify-between items-center text-sm font-bold text-[#0e4843]">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180 text-[#14b8a6]">
                        <Icons.ChevronDown className="w-5 h-5" />
                      </span>
                    </summary>
                    <p className="mt-4 text-xs leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Info + Preparation checklist) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-8">
            
            {/* Quick stats box */}
            <div className="bg-[#0e4843] text-white p-8 rounded-3xl shadow-lg border border-teal-500/10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-2xl text-[#14b8a6]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-teal-300 font-bold">Categoria</h4>
                    <p className="font-bold text-sm">Ultrassonografia / Exames</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-2xl text-[#14b8a6]">
                    <Icons.Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-teal-300 font-bold">Duração Média</h4>
                    <p className="font-bold text-sm">{exam.duration}</p>
                  </div>
                </div>

                {exam.price && exam.price !== 'Sob Consulta' && (
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-2xl text-[#14b8a6]">
                      <Icons.CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-teal-300 font-bold">Valor Estimado</h4>
                      <p className="font-bold text-sm">{exam.price} <span className="text-[10px] text-teal-100 font-normal">(consulte convênios)</span></p>
                    </div>
                  </div>
                )}

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

            {/* Preparation checklist box */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-[#0e4843] mb-6 flex items-center gap-2">
                <Icons.ClipboardList className="text-[#14b8a6] w-5 h-5" />
                Como se Preparar
              </h3>
              <ul className="space-y-4">
                {exam.preparation.map((prep, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-500 leading-relaxed">
                    <Icons.Check className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other exams navigation */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-[#0e4843] mb-4">Veja também</h3>
              <div className="space-y-2 text-xs text-[#14b8a6] font-bold">
                <a 
                  href="/exame/ecofetal" 
                  onClick={(e) => navigateTo('/exame/ecofetal', e)}
                  className="block py-2 hover:underline flex justify-between items-center"
                >
                  <span>Ecocardiograma Fetal</span>
                  <Icons.ChevronRight className="w-4 h-4 text-gray-300" />
                </a>
                <a 
                  href="/exame/morfologico1" 
                  onClick={(e) => navigateTo('/exame/morfologico1', e)}
                  className="block py-2 hover:underline flex justify-between items-center border-t border-gray-50"
                >
                  <span>Morfológico 1º Trimestre</span>
                  <Icons.ChevronRight className="w-4 h-4 text-gray-300" />
                </a>
                <a 
                  href="/exame/obstetrico_doppler" 
                  onClick={(e) => navigateTo('/exame/obstetrico_doppler', e)}
                  className="block py-2 hover:underline flex justify-between items-center border-t border-gray-50"
                >
                  <span>Obstétrico com Doppler</span>
                  <Icons.ChevronRight className="w-4 h-4 text-gray-300" />
                </a>
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

export default ExamDetailPage;
