
import React, { useState } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
import GestationalCalculator from './components/GestationalCalculator';
import { 
    Stethoscope, 
    HeartPulse, 
    Calendar, 
    Phone, 
    MapPin, 
    Award, 
    GraduationCap, 
    Menu, 
    X, 
    CheckCircle2,
    BookOpen,
    FileText,
    Baby, 
    Waves,
    ScanLine,
    User,
    Dumbbell,
    Aperture,
    Activity,
    Scale,
    Wind,
    ChevronDown,
    ChevronUp,
    HelpCircle,
    Facebook,
    Youtube,
    Play,
    Clock
} from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-teal-900">{question}</span>
                {isOpen ? <ChevronUp className="text-teal-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2 bg-gray-50/50">
                    {answer}
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Form States
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formExam, setFormExam] = useState('');

    // Usando o link fornecido pelo usuário (Postimages)
    const imgSrc = "https://i.postimg.cc/JnZ8kw3b/585283322-25300808462865092-8130294083600063357-n.jpg";

    const navItems = ['Serviços', 'Calculadoras', 'Currículo', 'Dúvidas', 'Notícias', 'Contato'];

    const normalizeId = (text: string) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .toLowerCase();
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const handleScheduleClick = () => {
        const phone = "5567998446674";
        const message = `Olá Dr. Rodrigo, gostaria de solicitar um agendamento pelo site.
        
*Paciente:* ${formName || 'Não informado'}
*Contato:* ${formPhone || 'Não informado'}
*Exame Desejado:* ${formExam || 'Não selecionado'}`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    const ultrasoundExams = [
        { name: "Obstétrico", icon: <Baby className="w-6 h-6" />, desc: "Acompanhamento gestacional" },
        { name: "Abdome Total", icon: <ScanLine className="w-6 h-6" />, desc: "Avaliação de órgãos internos" },
        { name: "Pélvico", icon: <ScanLine className="w-6 h-6" />, desc: "Útero, ovários e bexiga" },
        { name: "Próstata", icon: <User className="w-6 h-6" />, desc: "Via abdominal" },
        { name: "Tireoide", icon: <Aperture className="w-6 h-6" />, desc: "Avaliação de nódulos e cistos" },
        { name: "Mama", icon: <Activity className="w-6 h-6" />, desc: "Prevenção e diagnóstico" },
        { name: "Musculoesquelético", icon: <Dumbbell className="w-6 h-6" />, desc: "Articulações e músculos" },
        { name: "Vascular", icon: <Waves className="w-6 h-6" />, desc: "Doppler colorido" },
        { name: "Espirometria", icon: <Wind className="w-6 h-6" />, desc: "Prova de função pulmonar" },
        { name: "Holter 24h", icon: <HeartPulse className="w-6 h-6" />, desc: "Eletrocardiograma contínuo" },
        { name: "MAPA", icon: <Clock className="w-6 h-6" />, desc: "Monitoramento de pressão 24h" },
    ];

    const faqList = [
        {
            question: "É necessário jejum para realizar o Ultrassom de Abdome Total?",
            answer: "Sim. Geralmente, recomenda-se jejum de 6 a 8 horas para adultos. Isso reduz a quantidade de gases no intestino e permite que a vesícula biliar esteja cheia, facilitando a visualização dos órgãos. Para crianças, o tempo pode ser menor. Consulte nossas orientações no momento do agendamento."
        },
        {
            question: "O que é o Ecocardiograma Fetal e quando devo fazer?",
            answer: "O Ecocardiograma Fetal é um exame de ultrassom focado especificamente no coração do bebê. Ele é capaz de detectar alterações estruturais e funcionais cardíacas precocemente. É indicado principalmente entre a 24ª e 28ª semana de gestação, especialmente em casos de histórico familiar de cardiopatias ou diabetes gestacional."
        },
        {
            question: "Qual a diferença entre Ultrassom Pélvico e Transvaginal?",
            answer: "O Ultrassom Pélvico (via abdominal) é realizado com a bexiga cheia e o transdutor sobre a barriga, indicado para pacientes virgens ou quando se deseja uma visão mais ampla. O Transvaginal (via interna) oferece imagens mais detalhadas do útero e ovários, sendo o método preferencial para diagnósticos precisos em mulheres que já iniciaram a vida sexual."
        },
        {
            question: "Aceitam convênios médicos?",
            answer: "Atualmente, atendemos através do convênio PROVER e consultas Particulares. Fornecemos recibo para que você possa solicitar reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade."
        },
        {
            question: "Como funciona a Perícia Médica?",
            answer: "A Perícia Médica é uma avaliação técnica realizada para esclarecer questões de saúde em processos administrativos ou judiciais."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Navbar */}
            <header className="bg-white shadow-sm sticky top-0 z-50 opacity-95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                            <div className="bg-teal-600 p-2.5 rounded-lg mr-3 shadow-md hidden sm:block">
                                <HeartPulse className="text-white h-7 w-7" />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-serif font-bold text-teal-900 tracking-tight leading-none">Dr. Rodrigo Duarte Franco</h1>
                                <p className="text-sm font-bold text-teal-700 mt-0.5">CRM-MS 10087</p>
                                <p className="text-xs text-teal-600 uppercase tracking-wider font-medium mt-0.5">Ultrassonografia, Perícia Médica e Clínica Médica</p>
                            </div>
                        </div>
                        
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {navItems.map((item) => (
                                <button 
                                    key={item}
                                    onClick={() => scrollToSection(normalizeId(item))}
                                    className="text-gray-600 hover:text-teal-600 font-medium transition-colors text-sm uppercase tracking-wide"
                                >
                                    {item}
                                </button>
                            ))}
                            <button 
                                onClick={() => scrollToSection('contato')}
                                className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Agendar Exame
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg absolute w-full">
                        {navItems.map((item) => (
                            <button 
                                key={item}
                                onClick={() => scrollToSection(normalizeId(item))}
                                className="block w-full text-left py-3 px-2 text-gray-600 font-medium border-b border-gray-50 hover:bg-gray-50"
                            >
                                {item}
                            </button>
                        ))}
                        <button 
                            onClick={() => scrollToSection('contato')}
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold mt-4 shadow-md"
                        >
                            Agendar Exame
                        </button>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                {/* Hero Section - Full Width */}
                <section className="relative bg-teal-900 text-white py-12 lg:py-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img 
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                            alt="Ultrassom Fetal Background" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/95 to-teal-900/90"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="lg:w-3/5 order-2 lg:order-1">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-700">
                                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                                    Diagnóstico e Atendimentos
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                                    Ecocardiograma Fetal, Ultrassonografia Avançada, Perícias Médicas
                                </h2>
                                <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed">
                                    Tecnologia de ponta e olhar experiente para acompanhar o desenvolvimento da vida e cuidar da sua saúde. Perícia Médica e diagnósticos precisos em Nova Andradina-MS.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button onClick={() => scrollToSection('contato')} className="bg-white text-teal-900 px-8 py-3.5 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg text-center">
                                        Agendar Consulta
                                    </button>
                                    <button onClick={() => scrollToSection('curriculo')} className="bg-transparent border-2 border-teal-400 text-teal-100 px-8 py-3.5 rounded-full font-bold hover:bg-teal-800/50 transition-colors text-center">
                                        Conheça o Médico
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    <div className="absolute inset-0 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                                    <img 
                                        src={imgSrc}
                                        alt="Dr. Rodrigo Duarte Franco" 
                                        className="relative w-full h-full object-cover object-top rounded-full border-4 border-teal-400/30 shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Wrapper - Centered without Ads */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="space-y-16">
                        
                        {/* Services Section */}
                        <section id="servicos" className="scroll-mt-28">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-serif font-bold text-teal-900 mb-4">Excelência em Diagnóstico por Imagem</h2>
                                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full mb-6"></div>
                                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    A ultrassonografia é uma ferramenta essencial na medicina moderna, permitindo a visualização não invasiva de estruturas internas do corpo em tempo real. Utilizamos equipamentos de alta resolução para garantir a precisão necessária em cada laudo, seja para acompanhamento gestacional, investigação de dores abdominais ou avaliações vasculares e musculoesqueléticas.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Ecocardiograma Fetal Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                    <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                                        <Baby className="text-teal-600 w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ecocardiograma Fetal</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Exame detalhado do coração do bebê ainda no útero. Fundamental para detectar precocemente cardiopatias congênitas e planejar o melhor acompanhamento. A detecção precoce pode salvar vidas e preparar a equipe médica para o nascimento.
                                    </p>
                                    <a 
                                        href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14598.htm" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-100 transition-colors mt-2"
                                    >
                                        <Scale className="w-4 h-4 mr-2" />
                                        Lei do Ecocardiograma Fetal
                                    </a>
                                </div>

                                {/* Perícia Médica Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow group">
                                    <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                                        <FileText className="text-teal-600 w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Perícia Médica</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Avaliação técnica e imparcial para fins judiciais e administrativos. Experiência sólida como perito judicial nomeado em diversas comarcas, garantindo laudos precisos, éticos e devidamente fundamentados na literatura médica vigente.
                                    </p>
                                </div>
                            </div>

                            {/* Catalog of Exams */}
                            <h3 className="text-2xl font-serif font-bold text-teal-900 mb-8 text-center">Catálogo de Exames</h3>
                            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                                Confira abaixo a lista completa de procedimentos realizados em nossa clínica. Para exames específicos não listados, entre em contato para verificar disponibilidade.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {ultrasoundExams.map((exam, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all text-center flex flex-col items-center">
                                        <div className="text-teal-600 mb-2">{exam.icon}</div>
                                        <h4 className="font-bold text-gray-800 text-sm">{exam.name}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{exam.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gestational Calculator Section */}
                        <section id="calculadoras" className="scroll-mt-28">
                            <div className="bg-teal-50/50 p-1 rounded-3xl border border-teal-100/50">
                                <GestationalCalculator />
                            </div>
                            <div className="mt-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600">
                                <h4 className="font-bold text-teal-900 mb-2 flex items-center">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Entendendo os Cálculos
                                </h4>
                                <p className="mb-2">
                                    <strong>DUM (Data da Última Menstruação):</strong> O método mais comum para datar a gravidez, contando o primeiro dia do último ciclo menstrual como o início da gestação.
                                </p>
                                <p>
                                    <strong>DPP (Data Provável do Parto):</strong> Uma estimativa de quando o bebê completará 40 semanas. Apenas 5% dos bebês nascem exatamente na data prevista.
                                </p>
                            </div>
                        </section>

                        {/* Curriculum Section */}
                        <section id="curriculo" className="scroll-mt-28">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-teal-800 p-8 md:p-12 text-white">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <div className="shrink-0">
                                                <img 
                                                src={imgSrc} 
                                                alt="Dr. Rodrigo Duarte Franco" 
                                                className="w-32 h-32 rounded-full object-cover object-top border-4 border-white/20 shadow-xl"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-serif font-bold mb-2">Dr. Rodrigo Duarte Franco</h2>
                                            <p className="text-teal-200 font-medium text-lg mb-4">CRM-MS 10087</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-8 md:p-12 space-y-8">
                                    {/* Destaque FATESA */}
                                    <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-teal-100 p-3 rounded-lg text-teal-700 mt-1">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-teal-900 mb-2">Cursos em Ultrassonografia</h3>
                                                <p className="text-gray-700 font-medium">
                                                    Cursos realizados na FATESA - Tradição de mais de 30 anos em cursos de ultrassonografia.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="flex items-center text-xl font-bold text-gray-800 mb-6">
                                                <GraduationCap className="w-5 h-5 text-teal-600 mr-2" />
                                                Formação Acadêmica
                                            </h3>
                                            <ul className="space-y-6 relative border-l-2 border-gray-200 ml-3 pl-6 pb-2">
                                                <li className="relative">
                                                    <div className="absolute -left-[31px] bg-teal-600 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Cursos de Ultrassom - FATESA</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Ultrassom medicina interna, ultrassom de tireoide, ultrassom de mamas, ultrassom vascular, ultrassom obstétrico, ultrassom endovaginal, ultrassom ecocardiograma fetal, ultrassom musculoesquelético.
                                                    </p>
                                                </li>
                                                <li className="relative">
                                                    <div className="absolute -left-[31px] bg-teal-600 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Graduação em Medicina</h4>
                                                    <span className="text-xs text-teal-600 font-semibold block mb-1">2018</span>
                                                    <p className="text-sm text-gray-600">UNEMAT - Universidade Estadual do Mato Grosso - Cáceres - MT</p>
                                                </li>
                                                <li className="relative">
                                                    <div className="absolute -left-[31px] bg-gray-400 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Pós-graduação em Perícia Médica</h4>
                                                    <span className="text-xs text-teal-600 font-semibold block mb-1">2023</span>
                                                </li>
                                                <li className="relative">
                                                    <div className="absolute -left-[31px] bg-gray-400 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Pós-graduação em Auditoria Hospitalar</h4>
                                                    <span className="text-xs text-teal-600 font-semibold block mb-1">2022</span>
                                                </li>
                                                <li className="relative">
                                                    <div className="absolute -left-[31px] bg-gray-400 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Pós-graduação em Acupuntura</h4>
                                                    <span className="text-xs text-teal-600 font-semibold block mb-1">2005</span>
                                                </li>
                                                    <li className="relative">
                                                    <div className="absolute -left-[31px] bg-gray-300 h-4 w-4 rounded-full border-4 border-white"></div>
                                                    <h4 className="font-bold text-gray-900">Outras Graduações</h4>
                                                    <p className="text-sm text-gray-600 mt-1">Fisioterapia (UNOESTE - 2004) e Educação Física (FIFASUL - 2002)</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="flex items-center text-xl font-bold text-gray-800 mb-6">
                                                <Stethoscope className="w-5 h-5 text-teal-600 mr-2" />
                                                Trajetória Profissional
                                            </h3>
                                            <div className="space-y-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                <p>
                                                    <strong className="text-gray-900 block mb-1">Experiência Atual (Nova Andradina e Região):</strong>
                                                    • Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2018);<br/>
                                                    • Diretor clínico e técnico - Médico plantonista no Hospital Municipal de Taquarussu (2020);<br/> 
                                                    • Médico plantonista no UPA de Batayporã;<br/>
                                                    • Perito judicial do fórum de Batayporã nomeado desde 2021.
                                                </p>
                                                <p>
                                                    <strong className="text-gray-900 block mb-1">Experiência Prévia:</strong>
                                                    • Professor de Educação Física contratado da SEDUC - MS - Anaurilândia - MS (2 anos);<br/> 
                                                    • Fisioterapeuta concursado da secretaria de saúde do Município de Canarana - MT (8 anos);<br/> 
                                                    • Professor universitário na Faculdade do Pantanal - FAPAN - Cáceres - MT (4,5 anos);<br/>
                                                    • Médico plantonista no Hospital Cassems de Nova Andradina (5 anos);<br/>
                                                    • Médico plantonista no Hospital Regional de Nova Andradina - MS (5 anos).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="duvidas" className="scroll-mt-28">
                            <div className="mb-8">
                                <h3 className="flex items-center text-2xl font-serif font-bold text-teal-900 mb-4">
                                    <HelpCircle className="w-6 h-6 mr-2 text-teal-600" />
                                    Dúvidas Frequentes
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Confira abaixo as respostas para as perguntas mais comuns sobre os exames de ultrassom e nossos atendimentos. Informação de qualidade é o primeiro passo para sua saúde.
                                </p>
                                <div className="space-y-4">
                                    {faqList.map((item, index) => (
                                        <FAQItem key={index} question={item.question} answer={item.answer} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* News Section */}
                        <section id="noticias" className="scroll-mt-28">
                            <HealthNewsWidget />
                        </section>

                        {/* Social Media & Connectivity - New Section */}
                        <section id="conectar" className="scroll-mt-28 mb-12">
                            <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden shadow-xl text-white">
                                <div className="p-8 md:p-12 text-center">
                                    <h2 className="text-3xl font-serif font-bold mb-6">Conecte-se Conosco</h2>
                                    <p className="text-teal-100 max-w-2xl mx-auto mb-10 text-lg">
                                        Acompanhe nosso trabalho nas redes sociais. Vídeos explicativos, novidades sobre ultrassonografia e muito mais.
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                        {/* Facebook Card */}
                                        <a 
                                            href="https://www.facebook.com/profile.php?id=61584404454201" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#1877F2] hover:bg-[#166fe5] p-6 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-center gap-4 group"
                                        >
                                            <Facebook className="w-10 h-10 text-white" />
                                            <div className="text-left">
                                                <h3 className="font-bold text-xl">Facebook</h3>
                                                <p className="text-blue-100 text-sm">Siga nossa página</p>
                                            </div>
                                        </a>

                                        {/* YouTube Card */}
                                        <a 
                                            href="https://www.youtube.com/@Dr.RodrigoFrancousg" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#FF0000] hover:bg-[#e60000] p-6 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-center gap-4 group"
                                        >
                                            <Youtube className="w-10 h-10 text-white" />
                                            <div className="text-left">
                                                <h3 className="font-bold text-xl">YouTube</h3>
                                                <p className="text-red-100 text-sm">Inscreva-se no canal</p>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Video Highlight / Channel Link */}
                                    <div className="mt-10 max-w-3xl mx-auto">
                                        <a 
                                            href="https://www.youtube.com/@Dr.RodrigoFrancousg" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group"
                                        >
                                            <div className="aspect-video bg-gray-900 relative">
                                                <img 
                                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                                                    alt="Canal Dr. Rodrigo" 
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                        <Play className="w-10 h-10 text-white fill-current ml-1" />
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-left">
                                                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase mb-2 inline-block">Assista Agora</span>
                                                    <h4 className="text-xl font-bold text-white">Canal Dr. Rodrigo Duarte Franco</h4>
                                                    <p className="text-gray-300 text-sm mt-1">Conteúdos sobre ultrassonografia, saúde fetal e muito mais.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section id="contato" className="scroll-mt-28 mb-12">
                            <div className="bg-teal-900 rounded-3xl overflow-hidden shadow-xl">
                                <div className="grid md:grid-cols-2">
                                    <div className="p-8 md:p-12 text-white space-y-8">
                                        <div>
                                            <h2 className="text-3xl font-serif font-bold mb-4">Agende seu Exame</h2>
                                            <p className="text-teal-200">Entre em contato para marcar sua consulta ou tirar dúvidas sobre procedimentos.</p>
                                        </div>
                                        
                                        <div className="space-y-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-teal-800 p-3 rounded-lg">
                                                    <MapPin className="w-6 h-6 text-teal-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Endereço</h3>
                                                    <p className="text-teal-100">Rua Melvin Jones, 1243</p>
                                                    <p className="text-teal-300 text-sm">Nova Andradina - MS, 79750-000</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-teal-800 p-3 rounded-lg">
                                                    <Phone className="w-6 h-6 text-teal-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Contato</h3>
                                                    <p className="text-teal-100">(67) 99844-6674</p>
                                                    <p className="text-teal-300 text-sm">Atendimento somente com agendamento após as 17h</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start space-x-4">
                                                    <div className="bg-teal-800 p-3 rounded-lg">
                                                    <CheckCircle2 className="w-6 h-6 text-teal-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Convênios</h3>
                                                    <p className="text-teal-100">PROVER e Particular</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-8 md:p-12">
                                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                                <input 
                                                    type="text" 
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50" 
                                                    placeholder="Seu nome"
                                                    value={formName}
                                                    onChange={(e) => setFormName(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                                                <input 
                                                    type="tel" 
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50" 
                                                    placeholder="(67) 99844-6674" 
                                                    value={formPhone}
                                                    onChange={(e) => setFormPhone(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Exame</label>
                                                <select 
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50"
                                                    value={formExam}
                                                    onChange={(e) => setFormExam(e.target.value)}
                                                >
                                                    <option value="">Selecione uma opção</option>
                                                    {ultrasoundExams.map((exam, idx) => (
                                                            <option key={idx} value={exam.name}>{exam.name}</option>
                                                    ))}
                                                    <option value="Pericia">Perícia Médica</option>
                                                    <option value="Outro">Outros</option>
                                                </select>
                                            </div>
                                            <button 
                                                onClick={handleScheduleClick}
                                                className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                            >
                                                Solicitar Agendamento
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            
            {/* WhatsApp Floating Button */}
            <a 
                href="https://wa.me/5567998446674" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center justify-center group"
                aria-label="Conversar no WhatsApp"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </a>

            <Footer />
        </div>
    );
};

export default App;
