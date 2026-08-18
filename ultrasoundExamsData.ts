import { LucideIcon, Baby, ScanLine, User, Dumbbell, Aperture, Activity, Clock, HeartPulse, Wind, Waves } from 'lucide-react';

// Catalogo completo dos exames de ultrassom/diagnostico, cada um com pagina
// propria em /exame/:id (ver examsData.ts para o conteudo detalhado dessas
// paginas). Extraido de App.tsx para nao duplicar - usado pelo grid da home
// (Services.tsx), pelo select do formulario de contato (Contact.tsx) e pela
// pagina /servicos (ServicesPage.tsx). Se copiado em vez de importado daqui,
// os lugares podem dessincronizar (mesmo problema ja visto com o card do
// Dr. Lucas antes de Curriculum.tsx passar a ler de doctorsData.ts).
export interface UltrasoundExam {
  id: string;
  name: string;
  Icon: LucideIcon;
  desc: string;
}

export const ultrasoundExams: UltrasoundExam[] = [
  { id: 'obstetrico_doppler', name: "Obstétrico com Doppler", Icon: Baby, desc: "Avaliação da circulação fetal" },
  { id: 'obstetrico_sem_doppler', name: "Obstétrico sem Doppler", Icon: Baby, desc: "Acompanhamento de rotina" },
  { id: 'morfologico1', name: "Morfológico 1º Trimestre", Icon: Baby, desc: "Rastreamento de malformações" },
  { id: 'morfologico2', name: "Morfológico 2º Trimestre", Icon: Baby, desc: "Avaliação detalhada da anatomia" },
  { id: 'abdometotal', name: "Abdome Total", Icon: ScanLine, desc: "Avaliação de órgãos internos" },
  { id: 'pelvico', name: "Pélvico", Icon: ScanLine, desc: "Útero, ovários e bexiga" },
  { id: 'prostata', name: "Próstata", Icon: User, desc: "Via abdominal" },
  { id: 'tireoide', name: "Tireoide (com e sem Doppler)", Icon: Aperture, desc: "Avaliação de nódulos e cistos" },
  { id: 'carotidas', name: "Carótidas", Icon: Waves, desc: "Avaliação das artérias do pescoço" },
  { id: 'mama', name: "Mama", Icon: Activity, desc: "Prevenção e diagnóstico" },
  { id: 'articulacao_ombro', name: "Articulação: Ombro", Icon: Dumbbell, desc: "Tendões e ligamentos" },
  { id: 'articulacao_cotovelo', name: "Articulação: Cotovelo", Icon: Dumbbell, desc: "Epicondilites e traumas" },
  { id: 'articulacao_punho', name: "Articulação: Punho", Icon: Dumbbell, desc: "Túnel do carpo e cistos" },
  { id: 'articulacao_joelho', name: "Articulação: Joelho", Icon: Dumbbell, desc: "Meniscos e tendões" },
  { id: 'articulacao_tornozelo', name: "Articulação: Tornozelo", Icon: Dumbbell, desc: "Entorses e Aquiles" },
  { id: 'vascular', name: "Vascular", Icon: Waves, desc: "Doppler colorido" },
  { id: 'espirometria', name: "Espirometria", Icon: Wind, desc: "Prova de função pulmonar" },
  { id: 'holter', name: "Holter 24h", Icon: HeartPulse, desc: "Eletrocardiograma contínuo" },
  { id: 'mapa', name: "MAPA", Icon: Clock, desc: "Monitoramento de pressão 24h" },
  { id: 'eletrocardiograma', name: "Eletrocardiograma (ECG)", Icon: Activity, desc: "Registro elétrico do coração em repouso" },
  { id: 'ecofetal', name: "Ecocardiograma Fetal", Icon: HeartPulse, desc: "Avaliação cardíaca fetal" },
  { id: 'transvaginal', name: "Transvaginal", Icon: ScanLine, desc: "Avaliação detalhada interna" },
];
