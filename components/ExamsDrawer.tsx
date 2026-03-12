
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  Info, 
  ChevronRight, 
  Baby, 
  ScanLine, 
  User, 
  Dumbbell, 
  Aperture, 
  Activity, 
  Clock, 
  HeartPulse, 
  Wind, 
  Stethoscope,
  Waves,
  ClipboardList
} from 'lucide-react';

interface ExamDetail {
  id: string;
  name: string;
  icon: any;
  description: string;
  howItIsDone: string;
  whenItIsDone: string;
  purpose: string;
  image: string;
}

const examsData: ExamDetail[] = [
  {
    id: 'ecofetal',
    name: 'Ecocardiograma Fetal',
    icon: HeartPulse,
    description: 'Avaliação detalhada do coração do bebê ainda no útero materno.',
    howItIsDone: 'Realizado via abdominal, similar a um ultrassom obstétrico comum, mas com foco exclusivo na anatomia e função do coração fetal.',
    whenItIsDone: 'Idealmente entre a 24ª e 28ª semana de gestação.',
    purpose: 'Detectar cardiopatias congênitas precocemente, permitindo planejamento do parto e tratamento imediato.',
    image: 'https://picsum.photos/seed/fetalheart/600/400'
  },
  {
    id: 'abdometotal',
    name: 'Ultrassom de Abdome Total',
    icon: ScanLine,
    description: 'Exame que avalia os órgãos sólidos e vísceras da cavidade abdominal.',
    howItIsDone: 'O paciente deita-se e um gel é aplicado no abdome para deslizar o transdutor.',
    whenItIsDone: 'Indicado para investigação de dores abdominais, pedras na vesícula ou rins, e check-ups.',
    purpose: 'Avaliar fígado, vesícula biliar, baço, pâncreas, rins, bexiga e aorta.',
    image: 'https://picsum.photos/seed/abdomen/600/400'
  },
  {
    id: 'obstetrico_doppler',
    name: 'Obstétrico com Doppler',
    icon: Baby,
    description: 'Ultrassom gestacional que avalia o fluxo sanguíneo entre a mãe e o bebê.',
    howItIsDone: 'Procedimento abdominal padrão com uso da tecnologia Doppler para ouvir e ver o fluxo de sangue nos vasos umbilicais e fetais.',
    whenItIsDone: 'Geralmente no terceiro trimestre ou quando há necessidade de monitorar o bem-estar fetal.',
    purpose: 'Verificar a oxigenação do bebê, o funcionamento da placenta e detectar sinais de sofrimento fetal.',
    image: 'https://picsum.photos/seed/doppler/600/400'
  },
  {
    id: 'obstetrico_sem_doppler',
    name: 'Obstétrico (sem Doppler)',
    icon: Baby,
    description: 'Exame de rotina para acompanhamento do desenvolvimento fetal.',
    howItIsDone: 'Realizado via abdominal com aplicação de gel e deslizamento do transdutor.',
    whenItIsDone: 'Em qualquer fase da gestação para acompanhamento regular.',
    purpose: 'Avaliar o crescimento do bebê, batimentos cardíacos, posição fetal e volume de líquido amniótico.',
    image: 'https://picsum.photos/seed/obstetric/600/400'
  },
  {
    id: 'morfologico1',
    name: 'Morfológico 1º Trimestre',
    icon: Baby,
    description: 'Exame crucial para rastreamento de riscos genéticos e malformações precoces.',
    howItIsDone: 'Realizado via abdominal ou transvaginal para medir a translucência nucal e osso nasal.',
    whenItIsDone: 'Entre 11 semanas e 13 semanas e 6 dias.',
    purpose: 'Avaliar riscos de Síndrome de Down e outras anomalias cromossômicas.',
    image: 'https://picsum.photos/seed/morphology1/600/400'
  },
  {
    id: 'morfologico2',
    name: 'Morfológico 2º Trimestre',
    icon: Baby,
    description: 'Exame detalhado da anatomia fetal completa.',
    howItIsDone: 'Ultrassonografia abdominal detalhada que percorre todos os órgãos e sistemas do bebê.',
    whenItIsDone: 'Idealmente entre 20 e 24 semanas de gestação.',
    purpose: 'Avaliar a formação de todos os órgãos (coração, cérebro, rins, coluna) e detectar malformações estruturais.',
    image: 'https://picsum.photos/seed/morphology2/600/400'
  },
  {
    id: 'transvaginal',
    name: 'Ultrassom Transvaginal',
    icon: ScanLine,
    description: 'Exame ginecológico interno para visualização detalhada.',
    howItIsDone: 'Um transdutor fino e protegido é inserido no canal vaginal.',
    whenItIsDone: 'Rotina ginecológica, início da gravidez ou investigação de dores e sangramentos.',
    purpose: 'Avaliar útero, endométrio e ovários com alta precisão.',
    image: 'https://picsum.photos/seed/transvaginal/600/400'
  },
  {
    id: 'tireoide',
    name: 'Tireoide (com e sem Doppler)',
    icon: Aperture,
    description: 'Avaliação da glândula tireoide. O exame "Sem Doppler" avalia a anatomia (tamanho e nódulos), enquanto o "Com Doppler" avalia a vascularização.',
    howItIsDone: 'O paciente deita-se com o pescoço estendido. O Doppler adiciona a análise do fluxo sanguíneo na glândula.',
    whenItIsDone: 'Presença de nódulos, alterações hormonais ou acompanhamento de doenças tireoidianas.',
    purpose: 'O modo convencional identifica nódulos e cistos. O Doppler ajuda a diferenciar nódulos benignos de suspeitos e avaliar inflamações (tireoidites).',
    image: 'https://picsum.photos/seed/thyroid/600/400'
  },
  {
    id: 'carotidas',
    name: 'Ultrassom de Carótidas',
    icon: Waves,
    description: 'Avaliação das artérias carótidas e vertebrais no pescoço.',
    howItIsDone: 'Uso de Doppler colorido para visualizar o fluxo sanguíneo e possíveis placas de gordura.',
    whenItIsDone: 'Prevenção de AVC, pacientes com hipertensão, diabetes ou colesterol alto.',
    purpose: 'Detectar estreitamentos (estenoses) e placas que podem causar derrame cerebral.',
    image: 'https://picsum.photos/seed/carotids/600/400'
  },
  {
    id: 'mama',
    name: 'Ultrassom de Mamas',
    icon: Activity,
    description: 'Exame complementar à mamografia para avaliação mamária.',
    howItIsDone: 'Deslizamento do transdutor sobre as mamas e axilas.',
    whenItIsDone: 'Rastreamento anual, avaliação de nódulos ou em mulheres com mamas densas.',
    purpose: 'Diferenciar cistos de nódulos sólidos e investigar alterações palpáveis.',
    image: 'https://picsum.photos/seed/breast/600/400'
  },
  {
    id: 'vascular',
    name: 'Ultrassom Vascular (Doppler)',
    icon: Waves,
    description: 'Estudo dos vasos sanguíneos (artérias e veias).',
    howItIsDone: 'Uso do Doppler colorido para mapear a direção e velocidade do sangue.',
    whenItIsDone: 'Suspeita de varizes, trombose ou obstruções arteriais.',
    purpose: 'Avaliar a circulação periférica e carótidas.',
    image: 'https://picsum.photos/seed/vascular/600/400'
  },
  {
    id: 'espirometria',
    name: 'Espirometria',
    icon: Wind,
    description: 'Teste de sopro para avaliar a capacidade pulmonar.',
    howItIsDone: 'O paciente sopra com força em um bocal conectado a um computador.',
    whenItIsDone: 'Investigação de falta de ar, asma, DPOC ou avaliação pré-operatória.',
    purpose: 'Medir quanto ar os pulmões conseguem reter e a velocidade do sopro.',
    image: 'https://picsum.photos/seed/lungs/600/400'
  },
  {
    id: 'holter',
    name: 'Holter 24h',
    icon: HeartPulse,
    description: 'Monitoramento contínuo do ritmo cardíaco por um dia inteiro.',
    howItIsDone: 'Eletrodos são fixados no peito e conectados a um pequeno gravador na cintura.',
    whenItIsDone: 'Investigação de palpitações, tonturas ou arritmias silenciosas.',
    purpose: 'Registrar a atividade elétrica do coração durante as atividades habituais.',
    image: 'https://picsum.photos/seed/holter/600/400'
  },
  {
    id: 'articulacao_ombro',
    name: 'Articulação: Ombro',
    icon: Dumbbell,
    description: 'Avaliação detalhada das estruturas do ombro.',
    howItIsDone: 'O transdutor é passado sobre a região do ombro em diversas posições.',
    whenItIsDone: 'Dores no ombro, limitação de movimento ou suspeita de lesões em tendões.',
    purpose: 'Detectar tendinites, bursites, rupturas de tendões e calcificações.',
    image: 'https://picsum.photos/seed/shoulder/600/400'
  },
  {
    id: 'articulacao_cotovelo',
    name: 'Articulação: Cotovelo',
    icon: Dumbbell,
    description: 'Avaliação das estruturas articulares do cotovelo.',
    howItIsDone: 'Exame dinâmico com movimentos do braço para avaliar tendões e ligamentos.',
    whenItIsDone: 'Dores laterais ou mediais (epicondilites), traumas ou inchaços.',
    purpose: 'Identificar inflamações nos tendões, derrames articulares e compressões nervosas.',
    image: 'https://picsum.photos/seed/elbow/600/400'
  },
  {
    id: 'articulacao_punho',
    name: 'Articulação: Punho',
    icon: Dumbbell,
    description: 'Avaliação de tendões, nervos e articulações do punho.',
    howItIsDone: 'O transdutor percorre a face palmar e dorsal do punho.',
    whenItIsDone: 'Suspeita de Síndrome do Túnel do Carpo, cistos ou tendinites.',
    purpose: 'Detectar compressão de nervos, cistos sinoviais e inflamações.',
    image: 'https://picsum.photos/seed/wrist/600/400'
  },
  {
    id: 'articulacao_joelho',
    name: 'Articulação: Joelho',
    icon: Dumbbell,
    description: 'Avaliação das partes moles do joelho (tendões, ligamentos e meniscos externos).',
    howItIsDone: 'O paciente permanece deitado ou sentado enquanto o transdutor avalia a frente e os lados do joelho.',
    whenItIsDone: 'Dores, inchaços, traumas esportivos ou suspeita de cisto de Baker.',
    purpose: 'Identificar tendinites, lesões ligamentares, derrames e cistos.',
    image: 'https://picsum.photos/seed/knee/600/400'
  },
  {
    id: 'articulacao_tornozelo',
    name: 'Articulação: Tornozelo',
    icon: Dumbbell,
    description: 'Avaliação dos tendões e ligamentos do tornozelo.',
    howItIsDone: 'O transdutor avalia o tendão de Aquiles e ligamentos laterais/mediais.',
    whenItIsDone: 'Entorses, dores crônicas ou suspeita de ruptura de tendão.',
    purpose: 'Detectar rupturas, tendinites e processos inflamatórios após traumas.',
    image: 'https://picsum.photos/seed/ankle/600/400'
  },
  {
    id: 'mapa',
    name: 'MAPA 24h',
    icon: Clock,
    description: 'Monitorização Ambulatorial da Pressão Arterial.',
    howItIsDone: 'Uma braçadeira de pressão é colocada no braço e infla automaticamente a cada 15-30 min.',
    whenItIsDone: 'Diagnóstico de hipertensão ou avaliação da eficácia do tratamento.',
    purpose: 'Verificar o comportamento da pressão arterial durante o dia e o sono.',
    image: 'https://picsum.photos/seed/bp/600/400'
  }
];

const ExamsDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamDetail | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Listen for custom event to open drawer from other components
  React.useEffect(() => {
    const handleOpenDrawer = (event: any) => {
      setIsOpen(true);
      if (event.detail && event.detail.examId) {
        const exam = examsData.find(e => e.id === event.detail.examId);
        if (exam) setSelectedExam(exam);
      }
    };

    window.addEventListener('openExamsDrawer', handleOpenDrawer);
    return () => window.removeEventListener('openExamsDrawer', handleOpenDrawer);
  }, []);

  const filteredExams = examsData.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Botão Lateral (Aba) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-[85%] -translate-y-1/2 z-[60] bg-[#0e4843] text-white py-8 px-3 md:py-12 md:px-6 rounded-l-2xl md:rounded-l-[40px] shadow-[0_0_40px_rgba(20,184,166,0.3)] flex flex-col items-center gap-4 md:gap-6 hover:bg-[#14b8a6] transition-all group border-y border-l border-teal-400/40 hover:pr-5 md:hover:pr-8"
      >
        <div className="relative">
          <div className="absolute -inset-1 md:-inset-2 bg-teal-400/20 rounded-full blur-md md:blur-lg group-hover:bg-white/20 transition-all"></div>
          <ClipboardList className="relative group-hover:scale-110 transition-transform text-[#14b8a6] group-hover:text-white w-7 h-7 md:w-10 md:h-10" />
        </div>
        <span className="[writing-mode:vertical-rl] text-[11px] md:text-[16px] font-black tracking-[0.25em] uppercase drop-shadow-sm">Guia de Exames</span>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              setSelectedExam(null);
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#0e4843] text-white">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-[#14b8a6]" />
                <h2 className="text-lg font-serif font-bold">Catálogo Informativo</h2>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setSelectedExam(null);
                }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              {!selectedExam ? (
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    Selecione um exame abaixo para ver detalhes sobre preparo, indicações e como o procedimento é realizado.
                  </p>
                  
                  {/* Search */}
                  <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Pesquisar exame..." 
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* List */}
                  <div className="space-y-3">
                    {filteredExams.map((exam) => (
                      <button 
                        key={exam.id}
                        onClick={() => setSelectedExam(exam)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-[#14b8a6]/30 hover:bg-teal-50/30 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-[#f0fdfa] p-2.5 rounded-xl text-[#14b8a6] group-hover:bg-[#14b8a6] group-hover:text-white transition-colors">
                            <exam.icon size={20} />
                          </div>
                          <span className="font-bold text-[#0e4843] text-sm">{exam.name}</span>
                        </div>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-[#14b8a6] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-0"
                >
                  {/* Detail View */}
                  <div className="relative h-56 w-full">
                    <img src={selectedExam.image} alt={selectedExam.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#14b8a6] p-2 rounded-xl text-white">
                          <selectedExam.icon size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white">{selectedExam.name}</h3>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedExam(null)}
                      className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-8 space-y-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#14b8a6]">
                        <Info size={18} />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">O que é?</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedExam.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#14b8a6]">
                        <Stethoscope size={18} />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Como é feito?</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedExam.howItIsDone}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#14b8a6]">
                        <Clock size={18} />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Quando fazer?</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedExam.whenItIsDone}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#14b8a6]">
                        <Activity size={18} />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Para que serve?</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedExam.purpose}</p>
                    </div>

                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedExam(null);
                        const contactSection = document.getElementById('contato');
                        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-[#0e4843] text-white py-4 rounded-2xl font-bold hover:bg-[#14b8a6] transition-all shadow-lg mt-8"
                    >
                      Agendar este Exame
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExamsDrawer;
