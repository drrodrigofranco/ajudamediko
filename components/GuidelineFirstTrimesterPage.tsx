import React from 'react';
import * as Icons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface GuidelineFirstTrimesterPageProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const GuidelineFirstTrimesterPage: React.FC<GuidelineFirstTrimesterPageProps> = ({ navigateTo }) => {
  useSEO({
    title: 'Diretriz AMB: Ultrassom no 1º Trimestre | Clínica Franco + Associados - Nova Andradina - MS',
    description: 'Recomendações oficiais da AMB para exames de ultrassonografia até a 13ª semana de gestação. Clínica Franco + Associados atende Nova Andradina e região: Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).',
    path: '/diretriz-primeiro-trimestre',
  });
  const whatsappUrl = "https://wa.me/5567998446674?text=Ol%C3%A1%21+Gostaria+de+agendar+um+ultrassom+obst%C3%A9trico+de+primeiro+trimestre.";
  const pdfUrl = "https://amb.org.br/wp-content/uploads/2021/04/ULTRASSONOGRAFIA-NO-PRIMEIRO-TRIMESTRE-DA-GRAVIDEZ-FINAL-12.09.2020.pdf";

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
            <a href="/#curriculo" onClick={(e) => navigateTo('/', e)} className="hover:text-[#14b8a6] transition-colors">SOBRE NÓS</a>
          </nav>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-all"
          >
            AGENDAR EXAME
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
            href="/entenda-exames" 
            onClick={(e) => navigateTo('/entenda-exames', e)}
            className="inline-flex items-center text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 hover:text-teal-400 transition-colors"
          >
            <Icons.ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Comparativo
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Diretriz AMB: Ultrassom no 1º Trimestre
          </h1>
          <p className="text-lg text-teal-50/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            Entenda as recomendações oficiais da Associação Médica Brasileira (AMB) para exames de ultrassonografia realizados até a 13ª semana de gestação.
          </p>
          <p className="text-xs text-teal-200/50 mb-8 max-w-xl mx-auto">
            Atendimento em Nova Andradina - MS, recebendo também pacientes de Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica e Rosana (SP).
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c5d57] text-[#5eead4] text-xs font-bold uppercase tracking-wider">
            <Icons.BookOpen className="w-4 h-4 text-teal-300" />
            Diretriz Oficial 2020 / Projeto Diretrizes
          </div>
        </div>
      </section>

      {/* Sobre o Estudo */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12 space-y-6">
          <div className="flex items-center gap-4 text-gray-400">
            <Icons.Quote className="w-8 h-8 text-teal-500/30" />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-600">Referência do Estudo</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#0e4843]">
            Associação Médica Brasileira: Diretrizes Clínicas na Saúde Materno-Fetal
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            O estudo de diretrizes intitulado <strong>"Ultrassonografia no Primeiro Trimestre da Gravidez"</strong> foi elaborado pela Associação Médica Brasileira (AMB) a partir de uma revisão sistemática da literatura científica de alta relevância médica. O objetivo principal é padronizar os critérios de diagnóstico clínico e triagem até <strong>13 semanas e 6 dias</strong> de idade gestacional, mitigando condutas médicas imprecisas e maximizando a segurança e o cuidado com a gestante e o feto.
          </p>
          <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-500/10">
            <h4 className="font-bold text-xs uppercase tracking-widest text-teal-800 mb-2">Escopo do Exame de 1º Trimestre</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              O exame visa responder a perguntas clínicas essenciais como a determinação precisa da idade gestacional, a viabilidade do embrião, a corionicidade em gestações de múltiplos (gêmeos) e o rastreamento inicial de malformações graves ou risco cromossômico.
            </p>
          </div>
        </div>
      </section>

      {/* Os 4 Pilares da Diretriz */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#0e4843]">As 4 Recomendações Críticas do Estudo</h2>
          <div className="h-1 w-16 bg-[#14b8a6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pilar 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-[#14b8a6]">
              <Icons.CalendarRange className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0e4843]">1. Datação Exata da Idade Gestacional</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              O estudo científico determina que a medição do <strong>Comprimento Cabeça-Nádega (CCN)</strong> é o parâmetro mais preciso para datar a gestação no primeiro trimestre. Ele corrige erros frequentes gerados pela estimativa baseada apenas na data da última menstruação (DUM), o que previne induções desnecessárias ao parto ou preocupações falsas sobre atraso de crescimento.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-[#14b8a6]">
              <Icons.HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0e4843]">2. Confirmação de Viabilidade Embrionária</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              A diretriz padroniza que a viabilidade da gestação é confirmada ao constatar um embrião dentro de um saco gestacional intrauterino com <strong>atividade cardíaca visível e mensurável</strong>. Esse passo é crucial para descartar precocemente situações de risco como a gravidez ectópica (fora do útero) ou abortamento retido.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-[#14b8a6]">
              <Icons.Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0e4843]">3. Determinação de Corionicidade em Gêmeos</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Em gestações múltiplas, a ultrassonografia do primeiro trimestre é a **melhor e mais precisa janela temporal** para identificar a corionicidade (número de placentas) e a amnionicidade (número de bolsas). Gestações monocoriônicas (uma placenta para dois bebês) requerem um controle de pré-natal muito mais frequente, e a datação precoce salva vidas.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-[#14b8a6]">
              <Icons.Dna className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0e4843]">4. Triagem de Anomalias Cromossômicas</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Entre a 11ª e a 13ª semana e 6 dias, a diretriz recomenda a medição da **Translucência Nucal (TN)** associada à avaliação do osso nasal e do ducto venoso. Essa triagem é altamente precisa para estimar riscos estatísticos de síndromes genéticas (como Síndrome de Down, Edwards e Patau), além de identificar malformações físicas cardíacas graves precocemente.
            </p>
          </div>
        </div>
      </section>

      {/* Caixa de Segurança ALARA */}
      <section className="py-8 max-w-4xl mx-auto px-4">
        <div className="bg-[#0e4843] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 border border-teal-500/10 shadow-lg">
          <div className="bg-[#14b8a6] p-4 rounded-2xl text-white flex-shrink-0">
            <Icons.ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-left">
            <h4 className="font-serif font-bold text-lg text-teal-300">Segurança de Exposição: O Princípio ALARA</h4>
            <p className="text-xs text-teal-50/70 leading-relaxed">
              Embora o ultrassom não utilize radiação, a diretriz da AMB adota o protocolo internacional **ALARA (As Low As Reasonably Achievable)**. Recomenda-se realizar o exame apenas por médicos habilitados, regulando o equipamento para emitir a menor energia de ultrassom e no menor tempo necessários para obter o laudo de diagnóstico preciso.
            </p>
          </div>
        </div>
      </section>

      {/* Download do Estudo Original */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 space-y-6">
          <Icons.FileText className="w-12 h-12 text-[#14b8a6] mx-auto" />
          <h3 className="text-xl font-bold text-[#0e4843]">Quer ler o estudo científico completo?</h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            O documento original da Associação Médica Brasileira está disponível em formato PDF e pode ser baixado ou lido diretamente pelo portal oficial da instituição.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-6 py-3.5 rounded-full transition-all gap-2"
            >
              <Icons.Download className="w-4 h-4" />
              Visualizar PDF Oficial da AMB
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#14b8a6] hover:bg-[#0d9488] text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all gap-2 shadow-sm"
            >
              <Icons.MessageSquare className="w-4 h-4" />
              Agendar Exame de 1º Trimestre
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

export default GuidelineFirstTrimesterPage;
