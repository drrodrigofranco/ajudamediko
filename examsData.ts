// Centralized data file for all 21 exams

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExamData {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Resolves to LucideIcon dynamically
  preparation: string[];
  duration: string;
  price: string;
  howItIsDone: string;
  whenItIsDone: string;
  purpose: string;
  imageUrl: string;
  faqs: FAQItem[];
}

export const examsData: ExamData[] = [
  {
    id: 'ecofetal',
    name: 'Ecocardiograma Fetal',
    shortDesc: 'Avaliação detalhada do coração do bebê ainda no útero materno.',
    longDesc: 'O ecocardiograma fetal é uma ultrassonografia altamente especializada que foca exclusivamente na estrutura, funcionamento e ritmo cardíaco do feto durante a gestação. Essencial para a detecção de cardiopatias congênitas precocemente.',
    iconName: 'HeartPulse',
    preparation: [
      'Não exige jejum.',
      'Recomenda-se vestir roupas confortáveis de duas peças (calça/saia e blusa).',
      'Trazer exames de ultrassom gestacional anteriores.'
    ],
    duration: '60 minutos',
    price: 'R$ 500,00',
    howItIsDone: 'Realizado via abdominal. O médico aplica um gel aquecido no abdome da gestante e desliza o transdutor, analisando detalhadamente as câmaras, válvulas e vasos sanguíneos do coração fetal.',
    whenItIsDone: 'Indicado idealmente entre a 24ª e a 28ª semana de gestação.',
    purpose: 'Avaliar a anatomia e a função do coração do bebê, identificar arritmias ou cardiopatias e planejar o suporte neonatal imediato.',
    imageUrl: 'https://picsum.photos/seed/fetalheart/600/400',
    faqs: [
      {
        question: 'Com quantas semanas devo realizar o exame?',
        answer: 'O período ideal é entre a 24ª e a 28ª semana de gestação. Em situações específicas de alto risco detectadas em exames anteriores, pode ser indicado realizá-lo mais precocemente ou repetir mais tarde.'
      },
      {
        question: 'O ecocardiograma fetal oferece riscos ao bebê?',
        answer: 'Não. Assim como a ultrassonografia obstétrica convencional, o ecocardiograma utiliza ondas sonoras de alta frequência (ultrassom) e é totalmente isento de radiação, não apresentando qualquer risco para a mãe ou para o bebê.'
      },
      {
        question: 'Aceitam convênios para este exame?',
        answer: 'Atendemos de forma particular e com convênios parceiros como PROVER. Entre em contato diretamente com nossa secretaria pelo WhatsApp para confirmar o suporte ao seu convênio.'
      }
    ]
  },
  {
    id: 'obstetrico_doppler',
    name: 'Ultrassom Obstétrico com Doppler',
    shortDesc: 'Avaliação detalhada do fluxo sanguíneo materno-fetal.',
    longDesc: 'O ultrassom obstétrico com Doppler colorido estuda a circulação de sangue no cordão umbilical, nas artérias uterinas da mãe e nas artérias cerebrais do feto. É um exame vital para monitoramento do bem-estar fetal no terceiro trimestre.',
    iconName: 'Baby',
    preparation: [
      'Não exige jejum.',
      'Tomar água antes do exame (manter a bexiga confortavelmente cheia melhora as imagens no início da gravidez).',
      'Trazer a carteira de pré-natal e ultrassons anteriores.'
    ],
    duration: '45 minutos',
    price: 'R$ 450,00',
    howItIsDone: 'O exame é feito por via abdominal. A tecnologia Doppler converte os fluxos de sangue em sinais sonoros e imagens coloridas na tela, permitindo avaliar a velocidade e a resistência da circulação sanguínea.',
    whenItIsDone: 'Geralmente solicitado a partir do terceiro trimestre (28ª semana), ou antes se houver indicação médica específica.',
    purpose: 'Verificar a oxigenação e nutrição fetal, avaliar o funcionamento da placenta e diagnosticar precocemente o sofrimento ou restrição de crescimento fetal.',
    imageUrl: 'https://picsum.photos/seed/doppler/600/400',
    faqs: [
      {
        question: 'Qual a diferença entre o ultrassom obstétrico comum e com Doppler?',
        answer: 'O obstétrico comum avalia o crescimento, peso estimado, líquido amniótico e a anatomia do bebê. O Doppler mede a circulação e fluxo de sangue nos vasos principais do bebê e da placenta, indicando se a oxigenação e nutrição estão adequadas.'
      },
      {
        question: 'O Doppler é indicado para todas as gestantes?',
        answer: 'Ele é recomendado principalmente em gestações com fatores de risco (pressão alta, diabetes, restrição de crescimento fetal) ou para acompanhamento detalhado da vitalidade no final da gravidez.'
      },
      {
        question: 'É necessário jejum para realizar o exame?',
        answer: 'Não. Não há necessidade de jejum. Recomenda-se comer normalmente antes do exame, pois o açúcar da alimentação estimula a movimentação do bebê, o que ajuda na avaliação.'
      }
    ]
  },
  {
    id: 'obstetrico_sem_doppler',
    name: 'Ultrassom Obstétrico (sem Doppler)',
    shortDesc: 'Acompanhamento regular do desenvolvimento e crescimento fetal.',
    longDesc: 'O ultrassom obstétrico de rotina é o principal exame para avaliar a evolução da gestação. Permite estimar o tempo de gravidez, calcular o peso aproximado do bebê, avaliar os batimentos cardíacos e a quantidade de líquido amniótico.',
    iconName: 'Baby',
    preparation: [
      'Não exige jejum.',
      'Vestir roupas confortáveis.',
      'Trazer exames anteriores.'
    ],
    duration: '30 minutos',
    price: 'R$ 350,00',
    howItIsDone: 'Realizado via abdominal. Um gel é aplicado sobre a pele do abdome e o médico desliza o transdutor para obter imagens em tempo real do feto dentro do saco gestacional.',
    whenItIsDone: 'Pode ser realizado em qualquer fase da gravidez como acompanhamento de rotina do pré-natal.',
    purpose: 'Confirmar os batimentos cardíacos fetais, medir o crescimento, verificar o volume de líquido amniótico e avaliar a localização da placenta.',
    imageUrl: 'https://picsum.photos/seed/obstetric/600/400',
    faqs: [
      {
        question: 'Quantas vezes devo fazer este exame durante a gravidez?',
        answer: 'Geralmente realiza-se um ultrassom obstétrico por trimestre, mas a frequência exata é definida pelo seu obstetra de acordo com a necessidade clínica.'
      },
      {
        question: 'O exame consegue identificar o sexo do bebê?',
        answer: 'Sim, dependendo da posição do bebê e da idade gestacional (geralmente a partir da 16ª semana de gestação com alta precisão).'
      },
      {
        question: 'Este exame detecta malformações?',
        answer: 'Detecta alterações físicas grosseiras, mas o exame ideal e especializado para rastreamento detalhado de malformações é o ultrassom morfológico (de 1º e 2º trimestres).'
      }
    ]
  },
  {
    id: 'morfologico1',
    name: 'Morfológico 1º Trimestre',
    shortDesc: 'Rastreamento precoce de malformações e riscos genéticos.',
    longDesc: 'O primeiro exame morfológico é crucial no rastreamento de anomalias cromossômicas (como a Síndrome de Down, Síndrome de Edwards e Síndrome de Patau). É realizado em uma janela curta de gestação.',
    iconName: 'Baby',
    preparation: [
      'Não exige jejum.',
      'Beber 2 a 3 copos de água cerca de 30 minutos antes do exame (bexiga cheia facilita a visualização via abdominal).',
      'Trazer exames anteriores.'
    ],
    duration: '45 minutos',
    price: 'R$ 550,00',
    howItIsDone: 'Geralmente realizado por via abdominal, mas em alguns casos pode requerer complementação por via transvaginal para obter detalhes mais nítidos das estruturas do bebê.',
    whenItIsDone: 'Deve ser realizado obrigatoriamente entre 11 semanas e 13 semanas e 6 dias (idade gestacional baseada no comprimento do bebê).',
    purpose: 'Medir a Translucência Nucal (TN), avaliar o osso nasal, avaliar o fluxo sanguíneo no ducto venoso e realizar a triagem estatística de riscos cromossômicos.',
    imageUrl: 'https://picsum.photos/seed/morphology1/600/400',
    faqs: [
      {
        question: 'O que é a Translucência Nucal?',
        answer: 'É a medição de uma espessura de fluido na nuca do bebê. Medidas aumentadas podem indicar maior risco de alterações genéticas ou cardiopatias.'
      },
      {
        question: 'É possível saber o sexo do bebê nesse período?',
        answer: 'Pode-se avaliar a inclinação do tubérculo genital para dar um palpite com cerca de 80% de precisão se o bebê estiver em boa posição, mas o exame não é focado nisso.'
      },
      {
        question: 'O exame de sangue NIPT substitui este ultrassom?',
        answer: 'Não. O NIPT avalia o DNA fetal no sangue materno para risco genético, mas o morfológico avalia malformações físicas precoces e fluxo sanguíneo uterino (risco de pré-eclâmpsia) que o exame de sangue não detecta.'
      }
    ]
  },
  {
    id: 'morfologico2',
    name: 'Morfológico 2º Trimestre',
    shortDesc: 'Avaliação morfológica detalhada de todos os órgãos do bebê.',
    longDesc: 'Considerado o exame de imagem mais completo da gestação, o morfológico de segundo trimestre avalia detalhadamente toda a anatomia interna e externa do bebê, confirmando a formação adequada dos órgãos.',
    iconName: 'Baby',
    preparation: [
      'Não exige jejum.',
      'Comer algo doce cerca de 20 minutos antes do exame (ajuda a deixar o bebê ativo, facilitando a visualização de diferentes ângulos).',
      'Trazer todos os ultrassons anteriores, principalmente o morfológico de 1º trimestre.'
    ],
    duration: '60 minutos',
    price: 'R$ 600,00',
    howItIsDone: 'Realizado por via transabdominal. O médico examina sistematicamente o cérebro, a face, a coluna vertebral, o coração, os rins, o estômago, a bexiga, os membros superiores e inferiores e os dedos do bebê.',
    whenItIsDone: 'Indicado idealmente entre a 20ª e 24ª semana de gestação.',
    purpose: 'Detectar malformações estruturais congênitas, avaliar a inserção do cordão umbilical, a localização da placenta e medir o colo do útero (avaliação de risco de parto prematuro).',
    imageUrl: 'https://picsum.photos/seed/morphology2/600/400',
    faqs: [
      {
        question: 'O morfológico de 2º trimestre detecta todas as doenças?',
        answer: 'Detecta a maioria das anomalias físicas estruturais (cerca de 85% a 90%), mas não detecta doenças metabólicas, autismo ou deficiências intelectuais que não geram alterações físicas visíveis.'
      },
      {
        question: 'Por que o exame demora tanto?',
        answer: 'Porque o médico precisa medir e registrar dezenas de estruturas específicas (como diâmetros cerebrais, fluxo do rim, câmaras cardíacas). Se o bebê estiver de costas ou dormindo, pode demorar mais para obter todas as imagens necessárias.'
      },
      {
        question: 'Posso gravar o exame ou levar acompanhantes?',
        answer: 'Sim, a presença de acompanhantes é permitida e incentivada. Entre em contato para verificar as políticas locais de gravação/fotos de tela.'
      }
    ]
  },
  {
    id: 'abdometotal',
    name: 'Ultrassom de Abdome Total',
    shortDesc: 'Avaliação completa dos órgãos abdominais sólidos e trato urinário.',
    longDesc: 'O ultrassom de abdome total é utilizado para examinar órgãos da cavidade abdominal como fígado, vesícula biliar, baço, pâncreas, rins, bexiga e grandes vasos sanguíneos. Muito útil na investigação de dores abdominais e check-ups.',
    iconName: 'ScanLine',
    preparation: [
      'Jejum absoluto de 6 a 8 horas (adultos). Evita a contração da vesícula biliar e reduz os gases intestinais que bloqueiam o som.',
      'Beber 4 a 5 copos de água 1 hora antes do exame e reter a urina (bexiga cheia é necessária para avaliação do trato urinário).',
      'Evitar refrigerantes, bebidas gasosas ou alimentos que causem gases no dia anterior.'
    ],
    duration: '30 minutos',
    price: 'R$ 380,00',
    howItIsDone: 'O paciente permanece deitado. O gel é aplicado no abdome e o transdutor é deslizado em diversas direções. Pode ser solicitado que o paciente prenda a respiração por alguns segundos para obter imagens estáveis.',
    whenItIsDone: 'Indicado para investigar dor abdominal, pedras na vesícula ou rins, acompanhamento de cistos, gordura no fígado (esteatose) e avaliação urinária.',
    purpose: 'Detectar cálculos (pedras), tumores, cistos, abscessos, dilatações, inflamações e avaliar o tamanho e aspecto dos órgãos abdominais.',
    imageUrl: 'https://picsum.photos/seed/abdomen/600/400',
    faqs: [
      {
        question: 'Por que é obrigatório fazer jejum?',
        answer: 'O jejum garante que a vesícula biliar esteja cheia e dilatada (facilitando a busca por pedras) e reduz os gases no estômago e intestino, que impedem a passagem das ondas de ultrassom.'
      },
      {
        question: 'Posso tomar meus medicamentos contínuos antes do exame?',
        answer: 'Sim, com pequenos goles de água. Medicamentos para pressão, diabetes ou coração não devem ser interrompidos.'
      },
      {
        question: 'O exame avalia o estômago e o intestino?',
        answer: 'Não de forma detalhada. O ultrassom avalia órgãos sólidos (fígado, rins, etc.). Para estômago e intestino, os exames padrão ouro são endoscopia e colonoscopia.'
      }
    ]
  },
  {
    id: 'pelvico',
    name: 'Ultrassom Pélvico (Via Abdominal)',
    shortDesc: 'Avaliação ginecológica externa do útero e ovários.',
    longDesc: 'O ultrassom pélvico por via abdominal é um exame ginecológico não invasivo indicado para avaliar a anatomia do útero, colo uterino, endométrio e ovários. É a alternativa principal para mulheres que não iniciaram a atividade sexual.',
    iconName: 'ScanLine',
    preparation: [
      'Não exige jejum.',
      'Beber de 4 a 6 copos de água 1 hora antes do exame e reter a urina. A bexiga muito cheia afasta as alças intestinais e serve como janela acústica.'
    ],
    duration: '20 minutos',
    price: 'R$ 300,00',
    howItIsDone: 'Realizado via abdominal. Um gel condutor é aplicado no baixo ventre e o transdutor é movido para mapear a região pélvica.',
    whenItIsDone: 'Exame de rotina ginecológica, investigação de dores pélvicas, cólicas intensas, sangramento anormal ou suspeita de miomas.',
    purpose: 'Avaliar o volume e contorno uterino, a espessura do endométrio, a presença de cistos nos ovários, miomas ou massas pélvicas.',
    imageUrl: 'https://picsum.photos/seed/pelvic/600/400',
    faqs: [
      {
        question: 'Preciso estar com a bexiga cheia mesmo?',
        answer: 'Sim. A bexiga cheia funciona como um balão transparente para o som, empurrando o intestino (cheio de gás) para cima e permitindo ver o útero e os ovários claramente.'
      },
      {
        question: 'Qual a diferença entre o pélvico e o transvaginal?',
        answer: 'O pélvico é externo (via abdome, necessita bexiga cheia). O transvaginal é interno (introdução de transdutor na vagina, bexiga vazia) e oferece imagens de maior proximidade e resolução.'
      },
      {
        question: 'Posso fazer o exame menstruada?',
        answer: 'Sim, pode ser realizado durante o fluxo menstrual sem problemas, a menos que seu ginecologista tenha solicitado especificamente em outra fase do ciclo.'
      }
    ]
  },
  {
    id: 'transvaginal',
    name: 'Ultrassom Transvaginal',
    shortDesc: 'Exame ginecológico interno de alta resolução.',
    longDesc: 'O ultrassom transvaginal é o exame ginecológico interno mais preciso para a avaliação do útero e ovários. O transdutor fica muito próximo dos órgãos, proporcionando imagens de excelente nitidez e resolução.',
    iconName: 'ScanLine',
    preparation: [
      'Não exige jejum.',
      'Esvaziar completamente a bexiga imediatamente antes do exame.',
      'Usar roupas fáceis de tirar (sendo necessária a remoção das roupas da cintura para baixo).'
    ],
    duration: '20 minutos',
    price: 'R$ 320,00',
    howItIsDone: 'Um transdutor fino, protegido com preservativo descartável e gel lubrificante estéril, é inserido delicadamente no canal vaginal. O exame é geralmente indolor e rápido.',
    whenItIsDone: 'Avaliação ginecológica periódica, investigação de dor pélvica, sangramento uterino anormal, suspeita de gravidez precoce ou controle de ovulação.',
    purpose: 'Medir com precisão a espessura endometrial, detectar pólipos, miomas, cistos ovarianos, sinais de endometriose e confirmar gestações iniciais.',
    imageUrl: 'https://picsum.photos/seed/transvaginal/600/400',
    faqs: [
      {
        question: 'O exame dói?',
        answer: 'Geralmente causa apenas uma sensação de leve pressão no baixo ventre, sendo indolor na maioria das mulheres. O uso de gel e preservativo facilita a introdução suave.'
      },
      {
        question: 'Posso fazer o exame se estiver grávida?',
        answer: 'Sim. O ultrassom transvaginal é o exame padrão no primeiro trimestre (até a 10ª semana) para confirmar a gravidez, ouvir os batimentos do embrião e verificar se está no local correto.'
      },
      {
        question: 'O exame transmite infecções?',
        answer: 'Não. O transdutor é rigorosamente higienizado e encapado com preservativo lubrificante novo e descartável a cada paciente.'
      }
    ]
  },
  {
    id: 'prostata',
    name: 'Ultrassom de Próstata (Via Abdominal)',
    shortDesc: 'Avaliação da saúde da próstata e do resíduo urinário.',
    longDesc: 'O ultrassom da próstata via abdominal avalia o tamanho da glândula prostática e das vesículas seminais nos homens, além de verificar se a bexiga esvazia completamente após a micção.',
    iconName: 'User',
    preparation: [
      'Não exige jejum.',
      'Beber de 4 a 5 copos de água 1 hora antes do exame e reter a urina (bexiga cheia é indispensável para visualização da próstata por cima do osso pélvico).'
    ],
    duration: '20 minutos',
    price: 'R$ 320,00',
    howItIsDone: 'O paciente deita-se de costas. O gel é aplicado sobre o abdome inferior e o transdutor é deslizado. Após a primeira avaliação da bexiga cheia e próstata, o paciente vai ao banheiro urinar e retorna para medir o resíduo pós-miccional.',
    whenItIsDone: 'Indicado no rastreamento de hiperplasia prostática benigna, queixas de jato urinário fraco, aumento da frequência urinária noturna ou alterações no exame de PSA.',
    purpose: 'Medir o volume da próstata, verificar a presença de nódulos ou calcificações, avaliar a parede da bexiga e quantificar a urina que resta na bexiga pós-micção.',
    imageUrl: 'https://picsum.photos/seed/prostate/600/400',
    faqs: [
      {
        question: 'Este exame substitui o exame de toque retal?',
        answer: 'Não. O ultrassom abdominal avalia o volume e anatomia macroscópica. O toque retal feito pelo urologista avalia a consistência da próstata, sendo exames complementares no diagnóstico precoce do câncer.'
      },
      {
        question: 'Por que preciso urinar no meio do exame?',
        answer: 'Para que o médico compare a bexiga cheia com ela vazia, calculando a capacidade de esvaziamento urinário (importante para diagnosticar obstruções causadas pela próstata aumentada).'
      },
      {
        question: 'O exame avalia câncer de próstata?',
        answer: 'O ultrassom pode sugerir alterações ou aumento de volume, mas o diagnóstico definitivo de câncer de próstata requer exames como biópsia ou ressonância magnética, orientados pelo PSA e toque retal.'
      }
    ]
  },
  {
    id: 'tireoide',
    name: 'Ultrassom de Tireoide (com e sem Doppler)',
    shortDesc: 'Avaliação anatômica e fluxo vascular da tireoide.',
    longDesc: 'O ultrassom de tireoide avalia o tamanho, contorno e a presença de nódulos ou cistos na glândula tireoide. O acréscimo do Doppler estuda o fluxo sanguíneo local, auxiliando a classificar o risco de malignidade de nódulos.',
    iconName: 'Aperture',
    preparation: [
      'Não exige jejum.',
      'Evitar o uso de colares ou correntes no dia do exame.',
      'Trazer exames anteriores da tireoide (incluindo exames de sangue TSH/T4 livre).'
    ],
    duration: '25 minutos',
    price: 'R$ 350,00',
    howItIsDone: 'O paciente deita-se com o pescoço estendido (geralmente apoiado sobre um travesseiro sob os ombros). O gel é aplicado na região anterior do pescoço e o transdutor é movido suavemente.',
    whenItIsDone: 'Solicitado ao palpar nódulos no pescoço, acompanhamento de bócio, hipotireoidismo, hipertireoidismo ou histórico familiar de câncer de tireoide.',
    purpose: 'Mapear nódulos (tamanho, formato, presença de microcalcificações) e avaliar a vascularização (Doppler) para classificar o risco (sistema TI-RADS).',
    imageUrl: 'https://picsum.photos/seed/thyroid/600/400',
    faqs: [
      {
        question: 'O ultrassom detecta se a tireoide está funcionando bem?',
        answer: 'Não. O ultrassom avalia apenas a estrutura física (tamanho, presença de nódulos). O funcionamento hormonal (hipo ou hipertireoidismo) é avaliado por exames de sangue (TSH e T4 livre).'
      },
      {
        question: 'Todo nódulo na tireoide é câncer?',
        answer: 'Não, a grande maioria dos nódulos tireoidianos (mais de 90%) é benigna. O ultrassom com Doppler ajuda a selecionar quais nódulos possuem critérios suspeitos para indicar biópsia (PAAF).'
      },
      {
        question: 'O exame causa dor ou sufocamento?',
        answer: 'Não. O procedimento é muito confortável. Apenas uma leve pressão do transdutor na garganta é sentida, sem qualquer interferência na respiração.'
      }
    ]
  },
  {
    id: 'carotidas',
    name: 'Ultrassom de Carótidas e Vertebrais',
    shortDesc: 'Avaliação das artérias do pescoço e prevenção de AVC.',
    longDesc: 'O Doppler de carótidas e vertebrais é um exame vascular que analisa o fluxo de sangue nas artérias do pescoço que levam oxigênio ao cérebro. Crucial para rastrear placas de gordura e prevenir o Acidente Vascular Cerebral (AVC).',
    iconName: 'Waves',
    preparation: [
      'Não exige jejum.',
      'Usar roupas com decote ou gola aberta para expor o pescoço.'
    ],
    duration: '30 minutos',
    price: 'R$ 420,00',
    howItIsDone: 'O paciente fica deitado. O médico aplica gel nas laterais do pescoço e desliza o transdutor vascular, ouvindo o fluxo de sangue e medindo a espessura das paredes arteriais e a velocidade do sangue.',
    whenItIsDone: 'Indicado para pacientes com hipertensão, diabetes, colesterol alto, fumantes, com sopro carotídeo ou histórico de AVC/infarto na família.',
    purpose: 'Pesquisar o espessamento das artérias (estrias de gordura) e detectar estenoses (estreitamentos) causadas por placas de aterosclerose.',
    imageUrl: 'https://picsum.photos/seed/carotids/600/400',
    faqs: [
      {
        question: 'O que o exame previne?',
        answer: 'Previne principalmente o AVC (derrame). Ao detectar precocemente o entupimento das artérias carótidas por gordura, o médico pode indicar medicamentos ou cirurgias preventivas.'
      },
      {
        question: 'O que é a espessura médio-intimal?',
        answer: 'É a espessura da parede interna da artéria carótida. Medidas aumentadas servem como um sinalizador precoce de risco cardiovascular sistêmico.'
      },
      {
        question: 'O exame é demorado?',
        answer: 'Leva cerca de 30 minutos, pois as artérias dos dois lados do pescoço precisam ser medidas e analisadas detalhadamente em vários segmentos.'
      }
    ]
  },
  {
    id: 'mama',
    name: 'Ultrassom de Mamas',
    shortDesc: 'Exame de imagem complementar para prevenção do câncer de mama.',
    longDesc: 'O ultrassom de mamas é um exame complementar crucial à mamografia, especialmente em mulheres com mamas jovens e densas. É muito eficiente para caracterizar alterações palpáveis ou nódulos suspeitos.',
    iconName: 'Activity',
    preparation: [
      'Não exige jejum.',
      'Evitar o uso de desodorante, talco ou cremes na região das mamas e axilas no dia do exame.',
      'Trazer mamografias e ultrassons de mama anteriores.'
    ],
    duration: '25 minutos',
    price: 'R$ 320,00',
    howItIsDone: 'A paciente deita-se com o tórax exposto e os braços levantados atrás da cabeça. O transdutor é deslizado sobre toda a extensão das duas mamas e na região das axilas (pesquisa de linfonodos).',
    whenItIsDone: 'Indicado para investigação de nódulos palpáveis, secreções mamárias, dor nas mamas (mastalgia) e como rastreamento complementar anual.',
    purpose: 'Diferenciar nódulos sólidos (fibroadenomas, cistos complexos ou tumores) de cistos simples cheios de líquido (geralmente benignos), além de guiar biópsias.',
    imageUrl: 'https://picsum.photos/seed/breast/600/400',
    faqs: [
      {
        question: 'O ultrassom de mama substitui a mamografia?',
        answer: 'Não. A mamografia é o único exame que detecta microcalcificações precoces (sinal inicial de câncer de mama). O ultrassom é um excelente exame complementar, mas não substitui a mamografia após os 40 anos.'
      },
      {
        question: 'O que significa a classificação BI-RADS no laudo?',
        answer: 'É uma escala internacional que padroniza o risco de malignidade da alteração encontrada, indo de 0 (exame inconclusivo) a 6 (câncer confirmado por biópsia). Ajuda a orientar a conduta do mastologista.'
      },
      {
        question: 'Posso fazer o exame grávida ou amamentando?',
        answer: 'Sim, o ultrassom é totalmente seguro na gestação e lactação, sendo a primeira escolha para investigar alterações mamárias nesses períodos.'
      }
    ]
  },
  {
    id: 'articulacao_ombro',
    name: 'Ultrassom de Articulação: Ombro',
    shortDesc: 'Avaliação de tendões, ligamentos e bursas do ombro.',
    longDesc: 'O ultrassom do ombro avalia tendões do manguito rotador, ligamentos, cartilagens iniciais e a presença de líquido inflamatório na articulação. Excelente para diagnosticar tendinites e bursites.',
    iconName: 'Dumbbell',
    preparation: [
      'Não exige jejum.',
      'Usar roupas folgadas ou regata para facilitar a exposição da articulação do ombro.'
    ],
    duration: '20 minutos',
    price: 'R$ 340,00',
    howItIsDone: 'O paciente senta-se na maca e o médico realiza o exame movendo o braço do paciente em diferentes posições. O exame dinâmico ajuda a identificar pinçamentos de tendões em tempo real.',
    whenItIsDone: 'Indicado para dores persistentes no ombro, dificuldade para levantar o braço, estalos articulares ou após quedas e traumas.',
    purpose: 'Diagnosticar bursite subacromial, tendinite do supraespinal, rupturas tendíneas (manguito rotador) e depósitos de cálcio (tendinite calcárea).',
    imageUrl: 'https://picsum.photos/seed/shoulder/600/400',
    faqs: [
      {
        question: 'Qual a vantagem do ultrassom sobre a ressonância para o ombro?',
        answer: 'O ultrassom permite a avaliação dinâmica (o médico move o ombro durante o exame para ver o tendão raspando no osso), além de ser mais rápido e acessível.'
      },
      {
        question: 'O exame avalia artrose?',
        answer: 'Avalia de forma indireta e inicial (desgaste articular superficial), mas alterações ósseas mais profundas e artrose grave são melhor avaliadas por raio-X ou ressonância.'
      },
      {
        question: 'Bursite tem cura?',
        answer: 'Sim. A bursite é uma inflamação da bursa (bolsa de líquido amortecedora) e o tratamento envolve fisioterapia, anti-inflamatórios ou infiltração orientada por ultrassom.'
      }
    ]
  },
  {
    id: 'articulacao_cotovelo',
    name: 'Ultrassom de Articulação: Cotovelo',
    shortDesc: 'Diagnóstico de epicondilite e tendinites no cotovelo.',
    longDesc: 'Exame focado em avaliar as estruturas tendíneas e ligamentares do cotovelo. Muito comum em esportistas (tenistas/golfistas) e profissionais com esforço repetitivo.',
    iconName: 'Dumbbell',
    preparation: [
      'Não exige jejum.',
      'Usar camiseta de manga curta.'
    ],
    duration: '20 minutos',
    price: 'R$ 340,00',
    howItIsDone: 'O paciente fica sentado com o cotovelo apoiado. O transdutor analisa a face lateral (busca de epicondilite lateral) e medial da articulação.',
    whenItIsDone: 'Dor ao digitar, dor ao carregar peso, inchaço na articulação ou suspeita de "cotovelo de tenista".',
    purpose: 'Diagnosticar epicondilite lateral e medial, bursite olecraniana, derrames articulares e lesões de ligamentos colaterais.',
    imageUrl: 'https://picsum.photos/seed/elbow/600/400',
    faqs: [
      {
        question: 'O que é cotovelo de tenista?',
        answer: 'É a epicondilite lateral, uma inflamação dolorosa dos tendões que se inserem na lateral do cotovelo, causada por movimentos repetitivos de punho e dedos.'
      },
      {
        question: 'O ultrassom detecta compressão de nervos no cotovelo?',
        answer: 'Sim, pode avaliar o nervo ulnar no canal cubital (identificando inchaços ou subluxação do nervo ao dobrar o braço).'
      },
      {
        question: 'Como é tratada a epicondilite?',
        answer: 'O tratamento costuma incluir repouso de atividades repetitivas, fisioterapia, alongamentos e uso de órteses.'
      }
    ]
  },
  {
    id: 'articulacao_punho',
    name: 'Ultrassom de Articulação: Punho',
    shortDesc: 'Investigação de cisto sinovial e síndrome do túnel do carpo.',
    longDesc: 'Avalia tendões flexores e extensores do punho, o nervo mediano (túnel do carpo) e a presença de pequenos cistos articulares muito comuns na região dorsal do punho.',
    iconName: 'Dumbbell',
    preparation: [
      'Não exige jejum.',
      'Retirar relógio, pulseiras ou anéis da mão a ser examinada.'
    ],
    duration: '20 minutos',
    price: 'R$ 340,00',
    howItIsDone: 'O paciente senta-se e apoia a mão sobre um suporte. O médico avalia a parte da frente (palmar) e de trás (dorsal) do punho com gel condutor.',
    whenItIsDone: 'Dormência ou formigamento nos dedos (polegar, indicador e médio), dor ao digitar, calosidades dolorosas ou presença de caroço (cisto).',
    purpose: 'Avaliar a espessura do nervo mediano (Síndrome do Túnel do Carpo), diagnosticar tendinite de De Quervain e identificar cistos sinoviais.',
    imageUrl: 'https://picsum.photos/seed/wrist/600/400',
    faqs: [
      {
        question: 'O ultrassom confirma a Síndrome do Túnel do Carpo?',
        answer: 'Sim, ao mostrar o nervo mediano inchado (espessado) antes da entrada no túnel do carpo. O diagnóstico pode ser complementado com exame de eletroneuromiografia.'
      },
      {
        question: 'Caroço no punho é perigoso?',
        answer: 'A grande maioria é cisto sinovial (benigno, preenchido por líquido da articulação). O ultrassom ajuda a confirmar que é líquido e não um tumor sólido.'
      },
      {
        question: 'O que é a tendinite de De Quervain?',
        answer: 'É uma inflamação dolorosa dos tendões da base do polegar, muito comum em mães recentes (pelo movimento de segurar o bebê) e digitadores.'
      }
    ]
  },
  {
    id: 'articulacao_joelho',
    name: 'Ultrassom de Articulação: Joelho',
    shortDesc: 'Avaliação de tendões, menisco externo e cisto de Baker.',
    longDesc: 'O ultrassom do joelho é um exame dinâmico focado em avaliar as estruturas extra-articulares, como o tendão patelar, quadríceps, ligamentos colaterais e a presença de acúmulo de líquido (derrame).',
    iconName: 'Dumbbell',
    preparation: [
      'Não exige jejum.',
      'Usar shorts ou roupas curtas que permitam expor totalmente o joelho e a coxa.'
    ],
    duration: '20 minutos',
    price: 'R$ 340,00',
    howItIsDone: 'O paciente deita-se de barriga para cima para avaliar a frente do joelho e, posteriormente, vira de bruços para que o médico examine a fossa poplítea (atrás do joelho).',
    whenItIsDone: 'Dores na frente do joelho ao subir escadas, inchaço articular (água no joelho), traumas esportivos ou caroço atrás do joelho.',
    purpose: 'Diagnosticar tendinite patelar, tendinite quadricipital, cisto de Baker, lesões nos ligamentos colaterais e derrame articular.',
    imageUrl: 'https://picsum.photos/seed/knee/600/400',
    faqs: [
      {
        question: 'O ultrassom avalia lesão de ligamento cruzado anterior (LCA)?',
        answer: 'Não. O LCA e o LCP ficam no interior do joelho e não são visíveis ao ultrassom. Lesões de ligamento cruzado e meniscos internos requerem Ressonância Magnética.'
      },
      {
        question: 'O que é o Cisto de Baker?',
        answer: 'É um acúmulo de líquido articular atrás do joelho (fossa poplítea), geralmente associado a processos inflamatórios internos do joelho (como artrose ou lesão de menisco).'
      },
      {
        question: 'Derrame articular tem cura?',
        answer: 'Sim, o derrame articular (água no joelho) é um sintoma de inflamação. Tratar a causa subjacente (repouso, gelo, infiltração ou fisioterapia) resolve o acúmulo de líquido.'
      }
    ]
  },
  {
    id: 'articulacao_tornozelo',
    name: 'Ultrassom de Articulação: Tornozelo',
    shortDesc: 'Avaliação do tendão de Aquiles e ligamentos após entorses.',
    longDesc: 'O ultrassom do tornozelo é muito utilizado para avaliar tendinopatias (especialmente do tendão calcâneo / Aquiles) e diagnosticar estiramentos ou rupturas de ligamentos após torções.',
    iconName: 'Dumbbell',
    preparation: [
      'Não exige jejum.',
      'Usar shorts ou calça que possa ser dobrada até o joelho, facilitando o acesso ao tornozelo e pé.'
    ],
    duration: '20 minutos',
    price: 'R$ 340,00',
    howItIsDone: 'O exame é realizado com o paciente sentado ou deitado, movendo o pé em diferentes direções para testar a integridade ligamentar dinamicamente.',
    whenItIsDone: 'Dor crônica no calcanhar, após entorses (torções de pé), suspeita de ruptura de tendão ou dor na sola do pé.',
    purpose: 'Avaliar tendinite de Aquiles, fascite plantar, rupturas de ligamentos laterais e esporão de calcâneo.',
    imageUrl: 'https://picsum.photos/seed/ankle/600/400',
    faqs: [
      {
        question: 'O ultrassom detecta esporão de calcâneo?',
        answer: 'Sim, detecta o esporão ósseo na sola do pé e avalia a inflamação associada da fáscia plantar (fascite plantar).'
      },
      {
        question: 'O tendão de Aquiles pode romper completamente?',
        answer: 'Sim. A ruptura do tendão de Aquiles é comum em atletas de fim de semana. O ultrassom detecta se a ruptura é parcial ou total e a distância entre as bordas do tendão.'
      },
      {
        question: 'Como tratar fascite plantar?',
        answer: 'Fascite plantar é tratada com fisioterapia, alongamento da sola do pé e panturrilha, palmilhas amortecedoras e controle de peso.'
      }
    ]
  },
  {
    id: 'vascular',
    name: 'Ultrassom Vascular (Doppler de Membros)',
    shortDesc: 'Estudo do sistema circulatório, varizes e trombose.',
    longDesc: 'O Doppler vascular de membros inferiores ou superiores avalia o fluxo de sangue nas veias e artérias das pernas ou braços. É o exame padrão para o diagnóstico de Trombose Venosa Profunda (TVP) e varizes.',
    iconName: 'Waves',
    preparation: [
      'Não exige jejum.',
      'Usar roupas confortáveis. Para pernas, é necessário vestir shorts ou roupas fáceis de expor os membros inferiores.'
    ],
    duration: '40 minutos',
    price: 'R$ 480,00',
    howItIsDone: 'Realizado com o paciente em pé (para avaliar varizes e refluxo venoso) ou deitado (para pesquisar trombose). O médico aperta levemente a panturrilha/braço para testar a compressão e a velocidade de fluxo das veias.',
    whenItIsDone: 'Inchaço repentino em uma das pernas com dor, varizes dolorosas, pernas cansadas, histórico de trombose ou dor ao caminhar (claudicação).',
    purpose: 'Diagnosticar trombose venosa profunda (TVP), insuficiência venosa (varizes e refluxo da veia safena) e obstrução arterial periférica.',
    imageUrl: 'https://picsum.photos/seed/vascular/600/400',
    faqs: [
      {
        question: 'O que é a Trombose Venosa Profunda (TVP)?',
        answer: 'É a formação de um coágulo de sangue dentro de uma veia profunda (geralmente na panturrilha). O ultrassom com Doppler é o exame de escolha para diagnosticar a TVP emergencialmente.'
      },
      {
        question: 'O que o exame avalia nas varizes?',
        answer: 'Ele mapeia quais veias (incluindo as safenas) estão doentes e apresentando "refluxo" (quando o sangue flui na direção errada, para baixo), orientando o cirurgião vascular.'
      },
      {
        question: 'O exame causa dor?',
        answer: 'Apenas uma leve pressão é aplicada com o transdutor para verificar se as veias são colapsáveis (o que descarta trombose). Pode causar um leve desconforto se a perna já estiver muito dolorida.'
      }
    ]
  },
  {
    id: 'espirometria',
    name: 'Espirometria (Prova de Função Pulmonar)',
    shortDesc: 'Avaliação da capacidade e volumes pulmonares.',
    longDesc: 'A espirometria mede a quantidade de ar que uma pessoa consegue soprar e a rapidez com que o faz. Muito indicada para diagnosticar doenças respiratórias crônicas como asma e enfisema pulmonar.',
    iconName: 'Wind',
    preparation: [
      'Não fumar nas 4 horas que antecedem o exame.',
      'Não tomar café, chá preto, refrigerantes de cola ou bebidas alcoólicas 6 horas antes.',
      'Não realizar refeições volumosas imediatamente antes.',
      'Se usar broncodilatadores (bombinhas de asma), verificar com nossa equipe o tempo de suspensão necessário.'
    ],
    duration: '30 minutos',
    price: 'R$ 280,00',
    howItIsDone: 'O paciente senta-se e coloca um clipe nasal para evitar a saída de ar pelo nariz. Ele inspira o máximo de ar possível e depois sopra com força máxima e rapidez em um bocal conectado ao espirômetro.',
    whenItIsDone: 'Falta de ar crônica, chiado no peito, tosse persistente, acompanhamento de asma ou DPOC e avaliação pré-operatória de grandes cirurgias.',
    purpose: 'Quantificar obstruções brônquicas e avaliar a capacidade pulmonar total.',
    imageUrl: 'https://picsum.photos/seed/lungs/600/400',
    faqs: [
      {
        question: 'O que é asma e DPOC?',
        answer: 'Asma é uma inflamação crônica dos brônquios (reversível com medicação). A DPOC (Doença Pulmonar Obstrutiva Crônica) é um dano pulmonar irreversível, geralmente causado pelo tabagismo.'
      },
      {
        question: 'O que significa o teste com broncodilatador?',
        answer: 'Após soprar uma primeira vez, o paciente inala uma medicação dilatadora (bombinha) e repete o sopro 15 minutos depois para avaliar se houve melhora no fluxo de ar.'
      },
      {
        question: 'O teste cansa?',
        answer: 'Exige esforço físico rápido e sopros fortes, o que pode causar uma leve tontura passageira ou cansaço leve.'
      }
    ]
  },
  {
    id: 'holter',
    name: 'Holter 24h',
    shortDesc: 'Monitoramento elétrico contínuo do coração por 24 horas.',
    longDesc: 'O exame de Holter registra a atividade elétrica do coração de forma contínua durante um dia inteiro de atividades habituais. Ideal para diagnosticar arritmias silenciosas e palpitações esporádicas.',
    iconName: 'HeartPulse',
    preparation: [
      'Tomar banho antes de colocar o aparelho (pois não será permitido molhar o equipamento nas 24h seguintes).',
      'Não aplicar cremes, óleos ou pomadas no tórax.',
      'Homens podem precisar realizar tricotomia (depilação) em pontos específicos do tórax para fixação dos eletrodos.'
    ],
    duration: '24 horas de monitoramento',
    price: 'R$ 350,00',
    howItIsDone: 'Vários eletrodos adesivos são colados no peito do paciente e conectados por cabos a um pequeno gravador digital preso na cintura. O paciente anota em um diário suas atividades e quaisquer sintomas sentidos.',
    whenItIsDone: 'Investigação de arritmias, palpitações, desmaios sem causa aparente, tonturas ou controle de marca-passo.',
    purpose: 'Identificar extra-sístoles, bloqueios de condução cardíaca, episódios de taquicardia e correlacionar os sintomas descritos pelo paciente com os registros elétricos.',
    imageUrl: 'https://picsum.photos/seed/holter/600/400',
    faqs: [
      {
        question: 'Posso dormir normalmente com o aparelho?',
        answer: 'Sim, recomenda-se dormir de barriga para cima ou de lado para não descolar os eletrodos. Evite movimentos bruscos que possam puxar os cabos.'
      },
      {
        question: 'Posso tomar banho com o Holter?',
        answer: 'Não. O gravador digital não é à prova de água e os eletrodos descolam facilmente. O banho deve ser tomado imediatamente antes da instalação do aparelho.'
      },
      {
        question: 'Para que serve o diário de atividades?',
        answer: 'Serve para que o médico que analisa o traçado saiba se uma alteração de frequência cardíaca ocorreu durante um esforço físico (normal) ou em repouso (suspeito), além de checar o horário exato de eventuais palpitações.'
      }
    ]
  },
  {
    id: 'mapa',
    name: 'MAPA 24h (Monitorização de Pressão)',
    shortDesc: 'Registro contínuo da pressão arterial por um dia inteiro.',
    longDesc: 'O exame MAPA monitora a pressão arterial do paciente de forma automática a intervalos regulares durante 24 horas, registrando a pressão durante o trabalho, atividades rotineiras e o sono.',
    iconName: 'Clock',
    preparation: [
      'Tomar banho antes do exame (não é permitido molhar o aparelho durante o período de 24h).',
      'Vestir camisa ou blusa folgada com mangas largas para acomodar o manguito inflável no braço.'
    ],
    duration: '24 horas de monitoramento',
    price: 'R$ 350,00',
    howItIsDone: 'Uma braçadeira de pressão (manguito) é colocada no braço não dominante do paciente e conectada a um pequeno compressor automático fixado na cintura. O aparelho infla sozinho a cada 15-20 minutos durante o dia e a cada 30 minutos à noite.',
    whenItIsDone: 'Diagnóstico de hipertensão arterial, avaliação da eficácia dos medicamentos de pressão, suspeita de hipertensão do jaleco branco (pressão que sobe apenas no consultório) ou tonturas.',
    purpose: 'Mapear a média da pressão arterial diurna e noturna, e verificar a presença do descenso sistólico no sono (queda esperada da pressão à noite).',
    imageUrl: 'https://picsum.photos/seed/bp/600/400',
    faqs: [
      {
        question: 'O que devo fazer quando o aparelho começar a inflar?',
        answer: 'Mantenha o braço estendido ao longo do corpo, relaxado e imóvel até que o aparelho termine a medição e esvazie completamente.'
      },
      {
        question: 'Por que o aparelho mede a pressão à noite?',
        answer: 'Porque o comportamento da pressão durante o sono é um fator de risco cardiovascular crítico. A ausência de queda de pressão à noite (descenso noturno) indica risco aumentado de infarto ou AVC.'
      },
      {
        question: 'O aparelho aperta muito o braço?',
        answer: 'Ele infla até detectar a pressão sistólica, o que gera uma compressão temporária no braço. Pode ser um pouco desconfortável ou acordar o paciente à noite, mas é tolerável.'
      }
    ]
  }
];
