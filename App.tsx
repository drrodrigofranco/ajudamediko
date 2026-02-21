import React, { useState } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
import GestationalCalculator from './components/GestationalCalculator';
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
    CheckCircle, 
    GraduationCap, 
    Stethoscope,
    ExternalLink,
    Maximize2,
    Instagram,
    Facebook,
    Youtube
} from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-100 rounded-lg bg-white overflow-hidden mb-3">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-[#0e4843] text-sm md:text-base">{question}</span>
                {isOpen ? <ChevronUp className="text-[#14b8a6] w-5 h-5" /> : <ChevronDown className="text-gray-300 w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50 mt-2">
                    {answer}
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formExam, setFormExam] = useState('');

    const doctorImgSrc = "https://i.postimg.cc/kXysy26g/Chat-GPT-Image-21-de-fev-de-2026-10-12-59.png";
    const mapImgSrc = "https://i.postimg.cc/28hbWxS9/Captura-de-tela-2025-12-26-144512.jpg";
    const googleMapsLink = "https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8";

    const navItems = ['SERVIÇOS', 'CALCULADORAS', 'CURRÍCULO', 'LOCALIZAÇÃO', 'DÚVIDAS', 'NOTÍCIAS', 'CONTATO'];

    const normalizeId = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const handleNavClick = (item: string) => {
        if (item === 'LOCALIZAÇÃO') {
            window.open(googleMapsLink, '_blank');
            setIsMobileMenuOpen(false);
        } else {
            scrollToSection(normalizeId(item));
        }
    };

    const handleScheduleClick = () => {
        const phone = "5567998446674";
        const message = `Olá Clínica Franco, gostaria de solicitar um agendamento pelo site.\n\n*Paciente:* ${formName || 'Não informado'}\n*Contato:* ${formPhone || 'Não informado'}\n*Serviço/Exame Desejado:* ${formExam || 'Não selecionado'}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const ultrasoundExams = [
        {name: "Obstétrico com Doppler", Icon: Baby, desc: "Avaliação da circulação fetal" },
        {name: "Obstétrico sem Doppler", Icon: Baby, desc: "Acompanhamento de rotina" },
        {name: "Morfológico 1º Trimestre", Icon: Baby, desc: "Rastreamento de malformações" },
        {name: "Abdome Total", Icon: ScanLine, desc: "Avaliação de órgãos internos" },
        {name: "Pélvico", Icon: ScanLine, desc: "Útero, ovários e bexiga" },
        {name: "Próstata", Icon: User, desc: "Via abdominal" },
        {name: "Tireoide (com e sem Doppler)", Icon: Aperture, desc: "Avaliação de nódulos e cistos" },
        { name: "Mama", Icon: Activity, desc: "Prevenção e diagnóstico" },
        { name: "Musculoesquelético", Icon: Dumbbell, desc: "Articulações e músculos" },
        { name: "Vascular", Icon: Waves, desc: "Doppler colorido" },
        { name: "Espirometria", Icon: Wind, desc: "Prova de função pulmonar" },
        { name: "Holter 24h", Icon: HeartPulse, desc: "Eletrocardiograma contínuo" },
        { name: "MAPA", Icon: Clock, desc: "Monitoramento de pressão 24h" },
        { name: "Ecocardiograma Fetal", Icon: HeartPulse, desc: "Avaliação cardíaca fetal" },
        { name: "Transvaginal", Icon: ScanLine, desc: "Avaliação detalhada interna" },
        { name: "Clínica Geral", Icon: Stethoscope, desc: "Atendimento médico integral" },
        { name: "Geriatria", Icon: User, desc: "Saúde na terceira idade" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
            {/* Modal de Mapa Ampliado */}
            {isMapModalOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
                    onClick={() => setIsMapModalOpen(false)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors"
                        onClick={() => setIsMapModalOpen(false)}
                    >
                        <X size={40} />
                    </button>
                    <div className="max-w-5xl w-full relative" onClick={e => e.stopPropagation()}>
                        <img 
                            src={mapImgSrc} 
                            alt="Mapa Localização Ampliado" 
                            className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
                        />
                        <div className="mt-6 flex justify-center">
                            <a 
                                href={googleMapsLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#14b8a6] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#0d9488] transition-all shadow-xl"
                            >
                                <MapPin size={20} />
                                ABRIR NO GOOGLE MAPS
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Top Bar com Redes Sociais */}
            <div className="bg-[#0e4843] text-white py-3 border-b border-teal-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-8">
                    <a href="https://www.instagram.com/franco.clinica/" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                        <Instagram size={18} />
                        <span className="hidden sm:inline">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61584404454201" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                        <Facebook size={18} />
                        <span className="hidden sm:inline">Facebook</span>
                    </a>
                    <a href="https://www.youtube.com/@Dr.Francos" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                        <Youtube size={18} />
                        <span className="hidden sm:inline">YouTube</span>
                    </a>
                    <a href="https://www.tiktok.com/@dr.rodrigofranco" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                        <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                        <span className="hidden sm:inline">TikTok</span>
                    </a>
                </div>
            </div>

            {/* Cabeçalho */}
            <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                            <div className="bg-[#14b8a6] p-2.5 rounded-lg mr-4 shadow-sm">
                                <HeartPulse className="text-white h-7 w-7" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-2xl font-serif font-bold text-[#0e4843] leading-none tracking-tight">
                                    Clínica Franco
                                </h1>
                                <div className="mt-1.5 flex flex-col">
                                    <span className="text-[10px] font-bold text-[#14b8a6] uppercase tracking-wider">
                                        Dr. Rodrigo (CRM 10087) | Dr. Lucas (CRM 7462)
                                    </span>
                                    <span className="text-[9px] text-[#14b8a6] font-bold uppercase tracking-widest mt-0.5">
                                        ULTRASSONOGRAFIA, GERIATRIA, CLÍNICA GERAL E PERÍCIAS MÉDICAS
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <nav className="hidden xl:flex space-x-10 items-center">
                            {navItems.map((item) => (
                                <button 
                                    key={item} 
                                    onClick={() => handleNavClick(item)} 
                                    className="text-gray-500 hover:text-[#14b8a6] font-bold text-[11px] tracking-widest transition-colors uppercase"
                                >
                                    {item}
                                </button>
                            ))}
                            <button 
                                onClick={() => scrollToSection('contato')} 
                                className="bg-[#14b8a6] text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-[#0d9488] transition-all shadow-md active:scale-95"
                            >
                                Agendar
                            </button>
                        </nav>

                        <div className="xl:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0e4843] p-2">
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="xl:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-lg absolute w-full z-40">
                        {navItems.map((item) => (
                            <button 
                                key={item} 
                                onClick={() => handleNavClick(item)} 
                                className="block w-full text-left py-4 px-2 text-[#0e4843] font-bold text-xs border-b border-gray-50"
                            >
                                {item}
                            </button>
                        ))}
                        <button 
                            onClick={() => scrollToSection('contato')} 
                            className="w-full bg-[#14b8a6] text-white py-4 rounded-xl font-bold text-sm"
                        >
                            AGENDAR AGORA
                        </button>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#0e4843] text-white py-16 lg:py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2 text-left">
                                <div className="inline-block px-3 py-1 rounded-full bg-[#1c5d57] text-[#5eead4] text-[10px] font-bold uppercase tracking-wider mb-8">
                                    <span className="w-2 h-2 bg-[#4ade80] rounded-full inline-block mr-2"></span>
                                    Diagnóstico e Atendimentos
                                </div>
                                <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
                                    Ultrassonografia, <br/>
                                    Geriatria, <br/>
                                    Clínica Geral e <br/>
                                    Perícias Médicas
                                </h2>
                                <p className="text-lg text-teal-50/70 mb-10 leading-relaxed max-w-xl">
                                    Cuidado multigeracional com tecnologia de ponta. Dr. Rodrigo Franco e Dr. Lucas Franco unindo experiência e dedicação para a saúde da sua família em Nova Andradina-MS.
                                </p>
                                <button onClick={() => scrollToSection('contato')} className="bg-white text-[#0e4843] px-10 py-4 rounded-full font-bold shadow-lg hover:bg-teal-50 transition-all">
                                    Agendar Consulta
                                </button>
                            </div>
                            
                            {/* Bloco Foto + Mapa ao lado */}
                            <div className="lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                                    <div className="absolute inset-0 border-2 border-teal-400/20 rounded-full animate-pulse"></div>
                                    <img src={doctorImgSrc} alt="Clínica Franco - Dr. Rodrigo e Dr. Lucas" className="w-full h-full object-cover rounded-full border-4 border-teal-500/20 shadow-2xl" />
                                </div>

                                {/* Mapa de Localização ao lado da foto */}
                                <div className="bg-white p-1.5 rounded-2xl shadow-2xl max-w-[240px] border border-white/10 hidden sm:block">
                                    <div className="relative rounded-xl overflow-hidden bg-white group cursor-pointer">
                                        <div 
                                            className="absolute inset-0 z-10 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"
                                            onClick={() => setIsMapModalOpen(true)}
                                        >
                                            <Maximize2 className="text-white drop-shadow-lg" size={32} />
                                        </div>
                                        <img 
                                            src={mapImgSrc} 
                                            alt="Localização" 
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                            onClick={() => setIsMapModalOpen(true)}
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-black/80 p-3 z-20">
                                            <p className="text-[10px] font-bold text-white mb-1 tracking-tight">Rua Melvin Jones, 1243</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] text-teal-300">Sala 3 (Antigo H. Sta Helena)</p>
                                                <a 
                                                    href={googleMapsLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-[9px] bg-teal-600 text-white px-2 py-1 rounded flex items-center gap-1 hover:bg-teal-500 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    VER MAPA <ExternalLink size={8} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção Serviços */}
                <section id="servicos" className="py-24 max-w-6xl mx-auto px-4 scroll-mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Atendimento e Exames de Execelência</h2>
                        <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                            A ultrassonografia é uma ferramenta essencial na medicina moderna, permitindo a visualização não invasiva de estruturas internas do corpo em tempo real. Utilizamos equipamentos de alta resolução para garantir a precisão necessária em cada laudo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-md transition-all group">
                            <div className="bg-[#f0fdfa] p-5 rounded-2xl mb-8 group-hover:bg-[#14b8a6]/10 transition-colors">
                                <Baby className="text-[#14b8a6] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0e4843] mb-4">Ecocardiograma Fetal</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Exame detalhado do coração do bebê ainda no útero. Fundamental para detectar precocemente cardiopatias congênitas e planejar o melhor acompanhamento. A detecção precoce pode salvar vidas e preparar a equipe médica para o nascimento.
                            </p>
                            <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14598.htm" target="_blank" className="flex items-center text-[#14b8a6] text-[10px] font-bold border border-[#ccfbf1] px-4 py-2 rounded-lg hover:bg-teal-50 transition-all">
                                <Scale size={14} className="mr-2" /> Lei do Ecocardiograma Fetal
                            </a>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-md transition-all group">
                            <div className="bg-[#f0fdfa] p-5 rounded-2xl mb-8 group-hover:bg-[#14b8a6]/10 transition-colors">
                                <FileText className="text-[#14b8a6] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0e4843] mb-4">Perícia Médica</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Perícia Médica para fins judiciais e trabalhistas, com ética e atualização científica. Assistência técnica qualificada para advogados e empresas que buscam laudos imparciais e fundamentados.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Catálogo de Exames</h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Confira abaixo a lista completa de procedimentos realizados em nossa clínica. Para exames específicos não listados, entre em contato para verificar disponibilidade.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                        {ultrasoundExams.map((ex, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-50 shadow-sm flex flex-col items-center text-center hover:border-[#14b8a6]/30 transition-all">
                                <div className="text-[#14b8a6] mb-4"><ex.Icon size={28} /></div>
                                <h4 className="font-bold text-gray-800 text-sm mb-1">{ex.name}</h4>
                                <p className="text-[10px] text-gray-400 font-medium">{ex.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Calculadoras */}
                <section id="calculadoras" className="py-24 bg-gray-50 scroll-mt-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <GestationalCalculator />
                    </div>
                </section>

                {/* Seção Currículo */}
                <section id="curriculo" className="py-24 max-w-7xl mx-auto px-4 scroll-mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#0e4843] mb-4">Nossos Profissionais</h2>
                        <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="space-y-24">
                        {/* Dr. Rodrigo */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img 
                                            src="https://i.postimg.cc/3R41Y9xs/Chat-GPT-Image-18-de-fev-de-2026-09-48-23.png" 
                                            alt="Dr. Rodrigo Franco"
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-[#14b8a6] text-white p-3 rounded-xl shadow-lg">
                                        <HeartPulse size={24} />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-4xl font-serif font-bold text-[#0e4843] mb-2">Dr. Rodrigo Franco</h3>
                                    <p className="text-[#14b8a6] font-bold uppercase tracking-widest text-sm mb-4">CRM-MS 10087</p>
                                    <p className="text-gray-500 max-w-xl leading-relaxed">
                                        Atendimento com ampla experiência em diagnóstico por imagem e perícia médica. Dedicado a oferecer um atendimento humanizado e preciso para toda a família.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20">
                            <div className="text-left">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="text-[#0e4843] flex items-center">
                                        <GraduationCap className="w-10 h-10 mr-4" />
                                        <h2 className="text-3xl font-serif font-bold">Formação Acadêmica</h2>
                                    </div>
                                </div>
                                <div className="border-l-2 border-[#ccfbf1] ml-5 pl-12 space-y-12">
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-[#14b8a6] rounded-full border-4 border-white shadow-sm"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Cursos de Ultrassom - FATESA</h4>
                                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                            Ultrassom medicina interna, ultrassom de tireoide, ultrassom de mamas, ultrassom vascular, ultrassom obstétrico, ultrassom endovaginal, ultrassom ecocardiograma fetal, ultrassom musculoesquelético.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Graduação em Medicina</h4>
                                        <span className="text-[#14b8a6] font-bold text-sm block mt-1">2018</span>
                                        <p className="text-gray-500 text-sm mt-1">UNEMAT - Universidade Estadual do Mato Grosso - Cáceres - MT</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Perícia Médica</h4>
                                        <span className="text-[#14b8a6] font-bold text-sm block mt-1">2023</span>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Auditoria Hospitalar</h4>
                                        <span className="text-[#14b8a6] font-bold text-sm block mt-1">2022</span>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Acupuntura</h4>
                                        <span className="text-[#14b8a6] font-bold text-sm block mt-1">2005</span>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Outras Graduações</h4>
                                        <p className="text-gray-500 text-sm mt-1">Fisioterapia (UNOESTE - 2004) e Educação Física (FIFASUL - 2002)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-left">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="text-[#0e4843] flex items-center">
                                        <Stethoscope className="w-10 h-10 mr-4" />
                                        <h2 className="text-3xl font-serif font-bold">Trajetória Profissional</h2>
                                    </div>
                                </div>
                                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="mb-10">
                                        <h4 className="font-bold text-gray-900 mb-6">Experiência Atual (Nova Andradina e Região):</h4>
                                        <ul className="space-y-4 text-sm text-gray-600">
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2018);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Diretor clínico e técnico - Médico plantonista no Hospital Municipal de Taquarussu (2020);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Médico plantonista no UPA de Batayporã;</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Perito judicial do fórum de Batayporã nomeado desde 2021.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-6">Experiência Prévia:</h4>
                                        <ul className="space-y-4 text-sm text-gray-600">
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Professor de Educação Física contratado da SEDUC - MS - Anaurilândia - MS (2 anos);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Fisioterapeuta concursado da secretaria de saúde do Município de Canarana - MT (8 anos);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Professor universitário na Faculdade do Pantanal - FAPAN - Cáceres - MT (4,5 anos);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Médico plantonista no Hospital Cassems de Nova Andradina (5 anos);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Médico plantonista no Hospital Regional de Nova Andradina - MS (5 anos).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dr. Lucas */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-12 mt-24 pt-16 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img 
                                            src="https://i.postimg.cc/tTYS7p2c/Whats-App-Image-2026-02-21-at-10-33-13.jpg" 
                                            alt="Dr. Lucas Franco"
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-[#14b8a6] text-white p-3 rounded-xl shadow-lg">
                                        <Stethoscope size={24} />
                                    </div>
                                </div>
                                <div className="text-center md:text-right flex-grow">
                                    <h3 className="text-4xl font-serif font-bold text-[#0e4843] mb-2">Dr. Lucas Franco</h3>
                                    <p className="text-[#14b8a6] font-bold uppercase tracking-widest text-sm mb-4">CRM-MS 7462</p>
                                    <p className="text-gray-500 max-w-xl ml-auto leading-relaxed">
                                        Médico dedicado ao atendimento integral, com vasta experiência em medicina de urgência, emergência e cuidados intensivos. Focado no envelhecimento saudável e na resolução clínica de seus pacientes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20">
                            <div className="text-left">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="text-[#0e4843] flex items-center">
                                        <GraduationCap className="w-10 h-10 mr-4" />
                                        <h2 className="text-3xl font-serif font-bold">Formação Acadêmica</h2>
                                    </div>
                                </div>
                                <div className="border-l-2 border-[#ccfbf1] ml-5 pl-12 space-y-12">
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-[#14b8a6] rounded-full border-4 border-white shadow-sm"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Graduação em Medicina</h4>
                                        <span className="text-[#14b8a6] font-bold text-sm block mt-1">Turma de 2013</span>
                                        <p className="text-gray-500 text-sm mt-1">Famepp (UNOESTE) - Faculdade de Medicina de Presidente Prudente</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                                        <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Medicina Intensiva</h4>
                                        <p className="text-gray-500 text-sm mt-1">AMIB - Associação de Medicina Intensiva Brasileira (Incompleta)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-left">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="text-[#0e4843] flex items-center">
                                        <Activity className="w-10 h-10 mr-4" />
                                        <h2 className="text-3xl font-serif font-bold">Trajetória e Atuação</h2>
                                    </div>
                                </div>
                                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="mb-10">
                                        <h4 className="font-bold text-gray-900 mb-6">Experiência Profissional:</h4>
                                        <ul className="space-y-4 text-sm text-gray-600">
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Atendimento em Unidades de Emergência (desde 2014);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Atuação em UTI - Unidade de Terapia Intensiva (desde 2016);</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2019).</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                        <h4 className="text-[#0e4843] font-bold text-lg mb-4">Foco de Atendimento:</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <CheckCircle size={18} className="text-[#14b8a6]" />
                                                <span>Geriatria e Envelhecimento Saudável</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <CheckCircle size={18} className="text-[#14b8a6]" />
                                                <span>Clínica Geral e Check-up</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <CheckCircle size={18} className="text-[#14b8a6]" />
                                                <span>Pequenos Procedimentos Cirúrgicos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="duvidas" className="py-24 bg-white max-w-4xl mx-auto px-4 scroll-mt-24">
                    <h2 className="text-4xl font-serif font-bold text-[#0e4843] text-center mb-16 underline decoration-[#14b8a6] underline-offset-8 decoration-2">Dúvidas Frequentes</h2>
                    <FAQItem question="Quais exames exigem preparo especial?" answer="Abdome exige jejum de 6-8h; pélvico e próstata exigem bexiga cheia; exames como Holter e MAPA exigem banho prévio e roupas confortáveis." />
                    <FAQItem question="É necessário jejum para realizar o Ultrassom de Abdome Total?" answer="Sim, jejum de 6 a 8 horas para adultos para reduzir gases e permitir melhor visualização." />
                    <FAQItem question="O que é o Ecocardiograma Fetal e quando devo fazer?" answer="Exame detalhado do coração fetal, indicado idealmente entre 24ª e 28ª semana de gestação." />
                    <FAQItem question="Quando realizar o Morfológico de 1º Trimestre?" answer="Indicado entre a 11ª e 14ª semana de gestação para avaliar o risco de alterações genéticas e malformações precoces." />
                    <FAQItem question="Qual a diferença entre Ultrassom Pélvico e Transvaginal?" answer="O pélvico é via abdominal (bexiga cheia) e o transvaginal é via interna (imagens mais detalhadas)." />
                    <FAQItem question="Aceitam convênios médicos?" answer="Sim, atendemos PROVER e Particular. Entre em contato para outros convênios." />
                    <FAQItem question="Como funciona a Perícia Médica?" answer="Atuamos como assistentes técnicos em processos judiciais, elaborando quesitos e acompanhando perícias oficiais." />
                </section>

                <section id="noticias" className="py-24 max-w-5xl mx-auto px-4 scroll-mt-24">
                    <div className="bg-[#0e4843] rounded-3xl overflow-hidden shadow-2xl">
                        <HealthNewsWidget />
                    </div>
                </section>

                <section id="contato" className="py-24 max-w-6xl mx-auto px-4 mb-24 scroll-mt-24">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-50">
                        <div className="md:w-5/12 bg-[#0e4843] text-white p-14 text-left flex flex-col justify-center">
                            <h2 className="text-4xl font-serif font-bold mb-6">Agende seu Exame</h2>
                            <p className="text-teal-100/60 mb-14 text-sm leading-relaxed">Entre em contato para marcar sua consulta ou tirar dúvidas sobre procedimentos médicos e periciais.</p>
                            
                            <div className="space-y-12">
                                <div className="flex gap-5">
                                    <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><MapPin className="text-[#14b8a6]" /></div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-base">Endereço</h4>
                                        <p className="text-[11px] text-teal-100/70">Rua Melvin Jones, 1243<br/>Nova Andradina - MS, 79750-000</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><Phone className="text-[#14b8a6]" /></div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-base">Contato</h4>
                                        <p className="text-[11px] text-teal-100/70">(67) 99844-6674<br/>Atendimento somente com agendamento após as 17h</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><CheckCircle className="text-[#14b8a6]" /></div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-base">Convênios</h4>
                                        <p className="text-[11px] text-teal-100/70">PROVER e Particular</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-7/12 p-14 text-left bg-white">
                            <div className="space-y-7">
                                <div><label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Nome Completo</label><input value={formName} onChange={e=>setFormName(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm" placeholder="Seu nome" /></div>
                                <div><label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Telefone / WhatsApp</label><input value={formPhone} onChange={e=>setFormPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm" placeholder="(67) 99844-6674" /></div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Tipo de Exame</label>
                                    <select value={formExam} onChange={e=>setFormExam(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm text-gray-500 appearance-none">
                                        <option value="">Selecione uma opção</option>
                                        {ultrasoundExams.map((ex,i)=>(<option key={i} value={ex.name}>{ex.name}</option>))}
                                    </select>
                                </div>
                                <button onClick={handleScheduleClick} className="w-full bg-[#14b8a6] text-white py-5 rounded-2xl font-bold shadow-lg hover:bg-[#0f766e] transition-all transform active:scale-95 text-sm uppercase tracking-wider">Solicitar Agendamento</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <a href="https://wa.me/5567998446674" target="_blank" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            </a>
        </div>
    );
};

export default App;