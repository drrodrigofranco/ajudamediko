// Dados centralizados dos medicos, espelhando o que ja existe em components/Curriculum.tsx.
// Usado tanto pelos cards da home quanto pelas paginas individuais /medico/:id.

export interface DoctorEducationItem {
  title: string;
  year?: string;
  institution?: string;
  description?: string;
}

export interface DoctorExperienceGroup {
  label: string;
  items: string[];
}

export interface DoctorData {
  id: string;
  name: string;
  crm: string;
  photo: string;
  photoWidth: number;
  photoHeight: number;
  // Ancoragem do object-cover para fotos com pouca folga acima da cabeça no
  // enquadramento original. Sem o campo, o crop fica centralizado (padrão).
  photoObjectPosition?: 'center' | 'top';
  iconName: 'HeartPulse' | 'Stethoscope' | 'Brain' | 'Baby';
  shortBio: string;
  longBio: string[];
  specialtyLabel: string;
  education: DoctorEducationItem[];
  experience: DoctorExperienceGroup[];
  procedures?: string[];
  focusAreas: string[];
  lattesUrl?: string;
  // Overrides opcionais de title/description da pagina (ver hooks/useSEO). Sem eles,
  // DoctorDetailPage usa um template generico com nome + CRM + shortBio.
  seoTitle?: string;
  seoDescription?: string;
}

export const doctorsData: DoctorData[] = [
  {
    id: 'rodrigo-franco',
    name: 'Dr. Rodrigo Franco',
    crm: 'CRM-MS 10087',
    photo: '/images/dr-rodrigo-franco.jpg',
    photoWidth: 450,
    photoHeight: 599,
    iconName: 'HeartPulse',
    specialtyLabel: 'Ultrassonografia Diagnóstica e Perícia Médica',
    shortBio: 'Atendimento em ultrassonografia diagnóstica, consultas de clínica geral e perícias médicas judiciais, com dedicação a um cuidado humanizado e preciso para toda a família.',
    seoTitle: 'Dr. Rodrigo Franco (CRM-MS 10087) - Ultrassom e Perícias em Nova Andradina | Clínica Franco',
    seoDescription: 'Ultrassom em Nova Andradina - MS: morfológico, 3D/4D e Doppler de carótidas, além de perícias médicas judiciais com o Dr. Rodrigo Franco (CRM-MS 10087).',
    longBio: [
      'Médico com ampla experiência em diagnóstico por imagem, atuando em Nova Andradina - MS e região desde 2018. Realiza exames de ultrassonografia obstétrica, morfológica, vascular e musculoesquelética, além de atuar como perito judicial nomeado pelo fórum de Batayporã. Formado em Medicina pela UNEMAT, com cursos de especialização em ultrassom pela FATESA e outras graduações em Fisioterapia e Educação Física.',
      'Entre os exames de ultrassom realizados em Nova Andradina - MS estão o ultrassom morfológico (1º e 2º trimestre), ultrassom obstétrico com Doppler e 3D/4D, Doppler de carótidas e vascular, tireoide, abdome e musculoesquelético, sempre com atenção individualizada a cada paciente.',
    ],
    education: [
      {
        title: 'Cursos de Ultrassom - FATESA',
        description: 'Ultrassom medicina interna, ultrassom de tireoide, ultrassom de mamas, ultrassom vascular, ultrassom obstétrico, ultrassom endovaginal, ultrassom ecocardiograma fetal, ultrassom musculoesquelético.',
      },
      {
        title: 'Graduação em Medicina',
        year: '2018',
        institution: 'UNEMAT - Universidade Estadual do Mato Grosso - Cáceres - MT',
      },
      { title: '5 Pós-graduações' },
      {
        title: 'Outras Graduações',
        description: 'Fisioterapia (UNOESTE - 2004) e Educação Física (FIFASUL - 2002)',
      },
    ],
    experience: [
      {
        label: 'Experiência Atual (Nova Andradina e Região):',
        items: [
          'Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2018);',
          'Diretor clínico e técnico - Médico plantonista no Hospital Municipal de Taquarussu (2020);',
          'Médico plantonista no UPA de Batayporã;',
          'Perito judicial do fórum de Batayporã nomeado desde 2021.',
        ],
      },
      {
        label: 'Experiência Prévia:',
        items: [
          'Professor de Educação Física contratado da SEDUC - MS - Anaurilândia - MS (2 anos);',
          'Fisioterapeuta concursado da secretaria de saúde do Município de Canarana - MT (8 anos);',
          'Professor universitário na Faculdade do Pantanal - FAPAN - Cáceres - MT (4,5 anos);',
          'Médico plantonista no Hospital Cassems de Nova Andradina (5 anos);',
          'Médico plantonista no Hospital Regional de Nova Andradina - MS (5 anos).',
        ],
      },
    ],
    focusAreas: ['Ultrassom Morfológico e 3D/4D', 'Doppler Vascular e de Carótidas', 'Clínica Geral', 'Perícia Médica Judicial'],
    lattesUrl: 'http://lattes.cnpq.br/2901086695714310',
  },
  {
    id: 'lucas-franco',
    name: 'Dr. Lucas Duarte Franco',
    crm: 'CRM-MS 7462',
    photo: '/images/dr-lucas-franco.jpg',
    photoWidth: 554,
    photoHeight: 675,
    photoObjectPosition: 'top',
    iconName: 'Stethoscope',
    specialtyLabel: 'Atendimento Clínico ao Adulto e Saúde do Idoso',
    shortBio: 'Médico formado pela Faculdade de Medicina de Presidente Prudente (FAMEPP) em 2013, com mais de uma década de atuação em Clínica Médica, Urgência e Emergência, UTI e Atenção Primária à Saúde, com atenção especial à saúde do idoso em Nova Andradina - MS.',
    seoTitle: 'Dr. Lucas Duarte Franco (CRM-MS 7462) - Saúde do Idoso em Nova Andradina - MS | Clínica Franco',
    seoDescription: 'Atendimento clínico ao adulto e à pessoa idosa em Nova Andradina - MS: acompanhamento geriátrico, check-up clínico, controle de doenças crônicas e pequenos procedimentos com o Dr. Lucas Duarte Franco.',
    longBio: [
      'Atuo há mais de uma década na assistência médica, com experiência em Clínica Médica, Medicina de Urgência e Emergência, Unidade de Terapia Intensiva (UTI) e Atenção Primária à Saúde. Desde 2019, exerço minhas atividades na Estratégia Saúde da Família, acompanhando pacientes de forma contínua, com foco na prevenção, diagnóstico e tratamento das principais condições de saúde.',
      'Em consultório, realizo atendimento clínico de adultos e idosos, oferecendo acompanhamento de doenças agudas e crônicas, check-up clínico, avaliação de fatores de risco cardiovascular, controle da hipertensão arterial, diabetes mellitus, dislipidemias, hipotireoidismo, obesidade e outras condições frequentes da prática clínica.',
      'Meu compromisso é oferecer um atendimento ético, humanizado e baseado em evidências científicas, valorizando a escuta, a prevenção, o diagnóstico precoce e o acompanhamento individualizado de cada paciente.',
    ],
    education: [
      {
        title: 'Graduação em Medicina',
        year: '2013',
        institution: 'Faculdade de Medicina de Presidente Prudente (FAMEPP)',
      },
    ],
    experience: [
      {
        label: 'Experiência Profissional:',
        items: [
          'Clínica Médica, Medicina de Urgência e Emergência, UTI e Atenção Primária à Saúde (mais de uma década de atuação);',
          'Estratégia Saúde da Família (ESF) - Prefeitura Municipal de Nova Andradina - MS (desde 2019).',
        ],
      },
    ],
    procedures: [
      'Remoção de verrugas;',
      'Remoção de cistos cutâneos (cistos sebáceos e outras lesões benignas da pele);',
      'Tratamento cirúrgico de unha encravada (cantoplastia);',
      'Biópsias de pequenas lesões de pele.',
    ],
    focusAreas: [
      'Clínica Médica',
      'Saúde do Adulto',
      'Saúde do Idoso e Acompanhamento Geriátrico',
      'Medicina Preventiva',
      'Check-up Clínico',
      'Controle de Doenças Crônicas',
      'Pequenas Cirurgias Ambulatoriais',
    ],
  },
  {
    id: 'guilherme-zandona',
    name: 'Dr. Guilherme Henrique Zandoná',
    crm: 'CRM-MS 6347',
    photo: '/images/dr-guilherme-zandona.jpg',
    photoWidth: 450,
    photoHeight: 600,
    iconName: 'Brain',
    specialtyLabel: 'Clínica Médica e Avaliação Neurológica',
    shortBio: 'Médico com atuação em clínica geral e avaliação neurológica, experiência consolidada em urgência e emergência em Nova Andradina e região.',
    longBio: [
      'Médico formado pela Universidade do Oeste Paulista (UNOESTE), com pós-graduação em Neurologia. Atuou no Departamento de Clínica Médica do Hospital Regional de Nova Andradina entre 2018 e 2024, e atende atualmente no Pronto Socorro e na Avaliação Neurológica do Hospital Cassems, além da Policlínica Amena.',
    ],
    education: [
      {
        title: 'Graduação em Medicina',
        institution: 'Universidade do Oeste Paulista (UNOESTE) - Presidente Prudente - SP',
      },
      {
        title: 'Pós-graduação em Neurologia',
        description: 'Curso de pós-graduação com ênfase em Neurologia',
      },
    ],
    experience: [
      {
        label: 'Experiência Profissional:',
        items: [
          'Departamento de Clínica Médica - Hospital Regional de Nova Andradina (2018 - 2024);',
          'Médico de Pronto Socorro (Urgência) - Hospital Cassems de Nova Andradina;',
          'Médico de Clínica Médica e Avaliação Neurológica - Hospital Cassems de Nova Andradina;',
          'Policlínica Amena.',
        ],
      },
    ],
    focusAreas: ['Avaliação Neurológica', 'Clínica Médica', 'Urgência e Emergência'],
  },
  {
    id: 'tiago-wizenfad',
    name: 'Dr. Tiago Dantas Wizenfad',
    crm: 'CRM-MS 16149',
    photo: '/images/dr-tiago-wizenfad.jpg',
    photoWidth: 450,
    photoHeight: 600,
    iconName: 'Baby',
    specialtyLabel: 'Pediatria Clínica',
    shortBio: 'Atendimento médico infantil com cuidado, acompanhamento e atenção em cada fase do desenvolvimento - de recém-nascidos a adolescentes, com pós-graduação em Pediatria Clínica.',
    seoTitle: 'Dr. Tiago Dantas Wizenfad (CRM-MS 16149) - Pediatria em Nova Andradina - MS | Clínica Franco',
    seoDescription: 'Atendimento pediátrico em Nova Andradina - MS: puericultura, acompanhamento do crescimento e desenvolvimento, vacinação e avaliação de crianças e adolescentes com o Dr. Tiago Dantas Wizenfad.',
    longBio: [
      'Dr. Tiago Dantas Wizenfad realiza atendimento médico de recém-nascidos, lactentes, crianças e adolescentes, com uma abordagem acolhedora, individualizada e voltada às necessidades específicas de cada etapa da infância.',
      'Com pós-graduação em Pediatria Clínica, seu trabalho é direcionado à promoção da saúde infantil, prevenção de doenças, acompanhamento do crescimento e desenvolvimento e avaliação das principais condições clínicas que acometem crianças e adolescentes.',
      'Na Clínica Franco, o acompanhamento valoriza não apenas a avaliação clínica da criança, mas também a orientação clara e próxima aos pais e responsáveis, contribuindo para decisões seguras e para a continuidade do cuidado.',
      'Entre os principais atendimentos estão a puericultura, o acompanhamento do crescimento e desenvolvimento, a avaliação de recém-nascidos, lactentes, crianças e adolescentes, orientações sobre alimentação e introdução alimentar, acompanhamento vacinal, avaliação de febre e infecções comuns da infância, queixas respiratórias (tosse, resfriados, rinite, sinusite), otalgia e otites, queixas gastrointestinais, alergias e alterações dermatológicas frequentes na infância, além da solicitação, interpretação e acompanhamento de exames quando clinicamente indicados.',
    ],
    education: [
      { title: 'Pós-graduação em Pediatria Clínica' },
    ],
    experience: [
      {
        label: 'Atuação Atual:',
        items: [
          'Atendimento pediátrico na Clínica Franco - Nova Andradina - MS.',
        ],
      },
    ],
    focusAreas: [
      'Puericultura e Acompanhamento do Desenvolvimento',
      'Avaliação de Recém-Nascidos, Lactentes, Crianças e Adolescentes',
      'Orientação e Acompanhamento da Vacinação',
      'Doenças Respiratórias e Infecções Comuns da Infância',
      'Alergias e Dermatologia Infantil',
      'Orientação aos Pais e Responsáveis',
    ],
  },
];
