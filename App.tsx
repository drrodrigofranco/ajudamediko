import React, { useState, useEffect } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
import GestationalCalculator from './components/GestationalCalculator';
import ChatInterface from './components/ChatInterface';
import AdBlockerDetector from './components/AdBlockerDetector';
import { 
    HeartPulse, 
    Menu, 
    X, 
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
    Clock,
    FileText,
    MapPin,
    Phone,
    Mail,
    Sparkles
} from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
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
    const [adBlockDetected, setAdBlockDetected] = useState(false);
    
    // Form States
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formExam, setFormExam] = useState('');

    // Usando o link fornecido pelo usuário (Postimages)
    const imgSrc = "https://i.postimg.cc/JnZ8kw3b/585283322-25300808462865092-8130294083600063357-n.jpg";

    const navItems = ['Serviços', 'Calculadoras', 'IA Médica', 'Currículo', 'Dúvidas', 'Notícias', 'Contato'];

    const normalizeId = (text: string) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/\s+/g, "") // Remove espaços
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

    useEffect(() => {
        const checkAdBlock = async () => {
          try {
            await fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' }));
          } catch (error) {
            setAdBlockDetected(true);
          }
        };
        checkAdBlock();
    }, []);

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
            question: "Quais exames exigem preparo especial?",
            answer: (
                <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Ultrassom de Abdome Total ou Superior:</strong> Necessário jejum absoluto de 6 a 8 horas (adultos). Água e medicamentos de uso contínuo são permitidos.</li>
                    <li><strong>Ultrassom Pélvico, Próstata (via abdominal) e Vias Urinárias:</strong> É necessário estar com a bexiga cheia. Recomenda-se tomar 4 a 6 copos de água 1 hora antes do exame e não urinar.</li>
                    <li><strong>Holter 24h e MAPA:</strong> Tomar banho antes de comparecer à clínica, pois não será possível molhar o aparelho nas 24 horas de monitoramento. Usar cinto (para fixar o aparelho) e camisa larga/confortável.</li>
                    <li><strong>Espirometria:</strong> Não fumar 2 horas antes; não ingerir café ou chá 6 horas antes; suspender broncodilatadores de curta duração 4 horas antes (salvo orientação médica contrária).</li>
                </ul>
            )
        },
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
            <AdBlockerDetector detected={adBlockDetected} />
            
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
                        <nav className="hidden xl:flex space-x-8 items-center">
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
                                Agendar
                            </button>
                        </nav>

                         {/* Tablet/Smaller Desktop Menu (Simplified) */}
                         <nav className="hidden md:flex xl:hidden space-x-4 items-center">
                            <button onClick={() => scrollToSection('servicos')} className="text-gray-600 hover:text-teal-600 text-sm font-medium">Serviços</button>
                             <button onClick={() => scrollToSection('iamedica')} className="text-gray-600 hover:text-teal-600 text-sm font-medium">IA Médica</button>
                            <button 
                                onClick={() => scrollToSection('contato')}
                                className="bg-teal-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md"
                            >
                                Agendar
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
                    <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg absolute w-full z-40">
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
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold mt-2 shadow-md"
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
                        </section>

                         {/* AI Section */}
                        <section id="iamedica" className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-1 shadow-2xl overflow-hidden border border-teal-700/50">
                                 <div className="bg-white/5 backdrop-blur-sm rounded-[20px] overflow-hidden">
                                    <div className="p-8 md:p-12 text-center text-white relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                         <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center p-3 bg-teal-500/20 rounded-full mb-6 ring-1 ring-teal-400/30">
                                                 <Sparkles className="w-8 h-8 text-teal-300" />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">AJUDAMEDIKO <span className="text-teal-400">IA</span></h2>
                                            <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
                                                Inteligência Artificial treinada para auxiliar profissionais de saúde com protocolos clínicos, interpretação de exames e busca rápida em bases científicas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-8 md:px-8 md:pb-12">
                                         <ChatInterface />
                                    </div>
                                 </div>
                            </div>
                        </section>

                        {/* Curriculo Section */}
                        <section id="curriculo" className="scroll-mt-28">
                             <div className="bg-white rounded-2xl shadow-lg border border-teal-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-teal-900 mb-6 flex items-center">
                                    <FileText className="mr-3 text-teal-600" />
                                    Currículo Resumido
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-teal-500"></div></div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Médico Formado</h4>
                                            <p className="text-gray-600 text-sm">Graduação em Medicina com registro no CRM-MS 10087.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-teal-500"></div></div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Especialista em Diagnóstico por Imagem</h4>
                                            <p className="text-gray-600 text-sm">Pós-graduação e residência em Ultrassonografia Geral e Ecocardiograma Fetal.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-teal-500"></div></div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Perito Judicial</h4>
                                            <p className="text-gray-600 text-sm">Atuação como perito nomeado em diversas varas cíveis e trabalhistas, com vasta experiência em laudos técnicos.</p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="duvidas" className="scroll-mt-28">
                            <h2 className="text-2xl font-serif font-bold text-teal-900 mb-6 text-center">Dúvidas Frequentes</h2>
                            <div className="space-y-3 max-w-3xl mx-auto">
                                {faqList.map((faq, index) => (
                                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </section>

                        {/* News Section */}
                        <section id="noticias" className="scroll-mt-28">
                            <HealthNewsWidget />
                        </section>

                        {/* Contact Section */}
                        <section id="contato" className="scroll-mt-28 mb-12">
                            <div className="bg-teal-900 rounded-3xl overflow-hidden shadow-xl text-white">
                                <div className="grid md:grid-cols-2">
                                    <div className="p-8 lg:p-12">
                                        <h2 className="text-3xl font-serif font-bold mb-6">Entre em Contato</h2>
                                        <p className="text-teal-100 mb-8">
                                            Agende seu exame ou tire suas dúvidas. Estamos prontos para oferecer o melhor atendimento.
                                        </p>
                                        
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-teal-800 p-3 rounded-lg"><Phone className="w-6 h-6" /></div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                                                    <p className="text-teal-200">(67) 99844-6674</p>
                                                    <p className="text-teal-400 text-sm mt-1">Segunda a Sexta, das 7h às 17h</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-4">
                                                <div className="bg-teal-800 p-3 rounded-lg"><MapPin className="w-6 h-6" /></div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Localização</h3>
                                                    <p className="text-teal-200">
                                                        Rua Walter Hubacher, 1088<br/>
                                                        Centro, Nova Andradina - MS
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="bg-teal-800 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                                                <div>
                                                    <h3 className="font-bold text-lg">E-mail</h3>
                                                    <p className="text-teal-200">
                                                        fisiorod@gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-8 lg:p-12 text-gray-800">
                                        <h3 className="text-xl font-bold text-teal-900 mb-4">Pré-Agendamento Rápido</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                                                <input 
                                                    type="text" 
                                                    value={formName}
                                                    onChange={(e) => setFormName(e.target.value)}
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                    placeholder="Digite seu nome completo"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                                <input 
                                                    type="tel" 
                                                    value={formPhone}
                                                    onChange={(e) => setFormPhone(e.target.value)}
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                    placeholder="(67) 99999-9999"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Exame de Interesse</label>
                                                <select 
                                                    value={formExam}
                                                    onChange={(e) => setFormExam(e.target.value)}
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                >
                                                    <option value="">Selecione um exame...</option>
                                                    {ultrasoundExams.map((ex, i) => (
                                                        <option key={i} value={ex.name}>{ex.name}</option>
                                                    ))}
                                                    <option value="Outro">Outro / Dúvida</option>
                                                </select>
                                            </div>
                                            <button 
                                                onClick={handleScheduleClick}
                                                className="w-full bg-teal-600 text-white py-3.5 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-lg mt-2"
                                            >
                                                Enviar via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;