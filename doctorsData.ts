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
  iconName: 'HeartPulse' | 'Stethoscope' | 'Brain';
  shortBio: string;
  longBio: string;
  specialtyLabel: string;
  education: DoctorEducationItem[];
  experience: DoctorExperienceGroup[];
  focusAreas: string[];
  lattesUrl?: string;
}

export const doctorsData: DoctorData[] = [
  {
    id: 'rodrigo-franco',
    name: 'Dr. Rodrigo Franco',
    crm: 'CRM-MS 10087',
    photo: '/images/dr-rodrigo-franco.jpg',
    iconName: 'HeartPulse',
    specialtyLabel: 'Ultrassonografia Diagnóstica e Perícia Médica',
    shortBio: 'Atendimento em ultrassonografia diagnóstica, consultas de clínica geral e perícias médicas judiciais, com dedicação a um cuidado humanizado e preciso para toda a família.',
    longBio: 'Médico com ampla experiência em diagnóstico por imagem, atuando em Nova Andradina - MS e região desde 2018. Realiza exames de ultrassonografia obstétrica, morfológica, vascular e musculoesquelética, além de atuar como perito judicial nomeado pelo fórum de Batayporã. Formado em Medicina pela UNEMAT, com cursos de especialização em ultrassom pela FATESA e outras graduações em Fisioterapia e Educação Física.',
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
    focusAreas: ['Ultrassonografia Diagnóstica', 'Clínica Geral', 'Perícia Médica Judicial'],
    lattesUrl: 'http://lattes.cnpq.br/2901086695714310',
  },
  {
    id: 'lucas-franco',
    name: 'Dr. Lucas Franco',
    crm: 'CRM-MS 7462',
    photo: '/images/dr-lucas-franco.jpg',
    iconName: 'Stethoscope',
    specialtyLabel: 'Saúde do Idoso e Medicina de Urgência',
    shortBio: 'Médico dedicado ao atendimento integral, com vasta experiência em medicina de urgência, emergência e cuidados intensivos. Focado no envelhecimento saudável e na resolução clínica de seus pacientes.',
    longBio: 'Médico formado pela Famepp (UNOESTE), com atuação consolidada em unidades de emergência e terapia intensiva desde 2014. Em Nova Andradina - MS, atende como médico ESF pela Prefeitura Municipal desde 2019, com foco em saúde do idoso, envelhecimento saudável, clínica geral e pequenos procedimentos cirúrgicos.',
    education: [
      {
        title: 'Graduação em Medicina',
        year: 'Turma de 2013',
        institution: 'Famepp (UNOESTE) - Faculdade de Medicina de Presidente Prudente',
      },
      {
        title: 'Pós-graduação em Medicina Intensiva',
        institution: 'AMIB - Associação de Medicina Intensiva Brasileira (Incompleta)',
      },
    ],
    experience: [
      {
        label: 'Experiência Profissional:',
        items: [
          'Atendimento em Unidades de Emergência (desde 2014);',
          'Atuação em UTI - Unidade de Terapia Intensiva (desde 2016);',
          'Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2019).',
        ],
      },
    ],
    focusAreas: ['Saúde do Idoso e Envelhecimento Saudável', 'Clínica Geral e Check-up', 'Pequenos Procedimentos Cirúrgicos'],
  },
  {
    id: 'guilherme-zandona',
    name: 'Dr. Guilherme Henrique Zandoná',
    crm: 'CRM-MS 6347',
    photo: '/images/dr-guilherme-zandona.jpg',
    iconName: 'Brain',
    specialtyLabel: 'Clínica Médica e Avaliação Neurológica',
    shortBio: 'Médico com atuação em clínica geral e avaliação neurológica, experiência consolidada em urgência e emergência em Nova Andradina e região.',
    longBio: 'Médico formado pela Universidade do Oeste Paulista (UNOESTE), com pós-graduação em Neurologia. Atuou no Departamento de Clínica Médica do Hospital Regional de Nova Andradina entre 2018 e 2024, e atende atualmente no Pronto Socorro e na Avaliação Neurológica do Hospital Cassems, além da Policlínica Amena.',
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
];
