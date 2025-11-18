
import React, { useState } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
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
    Activity
} from 'lucide-react';

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("https://scontent.fmgf6-1.fna.fbcdn.net/v/t39.30808-6/585283322_25300808462865092_8130294083600063357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGb8RUWYBGTI1Ied5S8tpJfaGtuylRDX5toa27KVENfm3rO1_htbBoFMJV66W3WJ5DJk0h1kapLxKoTWD5ikODK&_nc_ohc=S4yafWVpCYgQ7kNvwEOVaRF&_nc_oc=AdmebFHydxPh_u7Ocu3LMZjMwltDi6D0J02BT8OMGxKkOhQBL_nDjkjNaZXHzetSj2Q&_nc_zt=23&_nc_ht=scontent.fmgf6-1.fna&_nc_gid=I4d0UpqDi03i1jqOKV4pfg&oh=00_AfjptfXGRyS-3AaD7tVwqgTagyW3GUFFn9hED28n2-6QYg&oe=6922B3F0"); 

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // Fallback silencioso se o link expirar
        console.warn("Foto de perfil não carregada.");
    };

    const ultrasoundExams = [
        { name: "Obstétrico", icon: <Baby className="w-6 h-6" />, desc: "Acompanhamento gestacional" },
        { name: "Abdome Total", icon: <Activity className="w-6 h-6" />, desc: "Avaliação de órgãos internos" },
        { name: "Pélvico", icon: <ScanLine className="w-6 h-6" />, desc: "Útero, ovários e bexiga" },
        { name: "Próstata", icon: <User className="w-6 h-6" />, desc: "Via abdominal" },
        { name: "Tireoide", icon: <Aperture className="w-6 h-6" />, desc: "Avaliação de nódulos e cistos" },
        { name: "Mama", icon: <HeartPulse className="w-6 h-6" />, desc: "Prevenção e diagnóstico" },
        { name: "Musculoesquelético", icon: <Dumbbell className="w-6 h-6" />, desc: "Articulações e músculos" },
        { name: "Vascular", icon: <Waves className="w-6 h-6" />, desc: "Doppler colorido" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Navbar */}
            <header className="bg-white shadow-sm sticky top-0 z-50 opacity-95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                            <div className="bg-teal-600 p-2.5 rounded-lg mr-3 shadow-md">
                                <HeartPulse className="text-white h-7 w-7" />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-serif font-bold text-teal-900 tracking-tight leading-none">Dr. Rodrigo Duarte Franco</h1>
                                <p className="text-xs text-teal-600 uppercase tracking-wider font-medium mt-1">Ultrassonografia, Perícia Médica e Clínica Médica</p>
                            </div>
                        </div>
                        
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {['Serviços', 'Currículo', 'Notícias', 'Contato'].map((item) => (
                                <button 
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
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
                        {['Serviços', 'Currículo', 'Notícias', 'Contato'].map((item) => (
                            <button 
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
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

            <main>
                {/* Hero Section */}
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
                                    Diagnóstico Especializado
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                                    Ecocardiograma Fetal e Ultrassonografia Avançada
                                </h2>
                                <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed">
                                    Tecnologia de ponta e olhar experiente para acompanhar o desenvolvimento do seu bebê e cuidar da saúde da sua família em Nova Andradina e região.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={() => scrollToSection('serviços')}
                                        className="bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-center flex items-center justify-center"
                                    >
                                        <HeartPulse className="mr-2 w-5 h-5" />
                                        Conheça os Exames
                                    </button>
                                    <button 
                                        onClick={() => scrollToSection('currículo')}
                                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center"
                                    >
                                        Conheça o Especialista
                                    </button>
                                </div>
                            </div>
                            
                            {/* Hero Image */}
                            <div className="lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
                                 <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white/10 shadow-2xl overflow-hidden group bg-teal-800">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img 
                                        src={imgSrc} 
                                        onError={handleImageError}
                                        alt="Dr. Rodrigo Duarte Franco" 
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="serviços" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Nossos Procedimentos</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Exames de Alta Precisão</h3>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Foco em diagnóstico precoce e acompanhamento detalhado da gestação.</p>
                        </div>

                        {/* Featured Services */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300 relative z-10">
                                    <HeartPulse className="text-teal-600 w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Ecocardiograma Fetal</h4>
                                <p className="text-gray-600 leading-relaxed relative z-10">
                                    Exame especializado que avalia detalhadamente o coração do feto ainda no útero. Fundamental para detecção precoce de cardiopatias congênitas.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300 relative z-10">
                                    <Stethoscope className="text-purple-600 w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Perícia Médica</h4>
                                <p className="text-gray-600 leading-relaxed relative z-10">
                                    Atuação como Perito Judicial e Assistente Técnico, com especialização e sólida formação em auditoria e perícia médica.
                                </p>
                            </div>
                        </div>

                        {/* Ultrasound List */}
                        <div className="max-w-5xl mx-auto">
                            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                                <span className="bg-teal-100 p-2 rounded-full mr-3">
                                    <ScanLine className="text-teal-700 w-6 h-6" />
                                </span>
                                Catálogo de Ultrassonografia
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {ultrasoundExams.map((exam, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="text-teal-600 group-hover:text-teal-700">
                                                {exam.icon}
                                            </div>
                                            <h5 className="font-bold text-gray-800">{exam.name}</h5>
                                        </div>
                                        <p className="text-xs text-gray-500">{exam.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Curriculum Section */}
                <section id="currículo" className="py-24 bg-teal-50 relative">
                     {/* Decorative pattern */}
                     <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 20%)'}}></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                            
                            {/* Left Column: Photo & Summary */}
                            <div className="lg:col-span-5 mb-12 lg:mb-0">
                                <div className="relative group">
                                    <div className="relative rounded-xl shadow-2xl w-full overflow-hidden bg-gray-900 border-4 border-white/30">
                                        <img 
                                            src={imgSrc}
                                            onError={handleImageError}
                                            alt="Dr. Rodrigo Duarte Franco" 
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100">
                                        <h3 className="text-xl font-bold text-gray-900">Dr. Rodrigo Duarte Franco</h3>
                                        <p className="text-teal-600 font-medium">Médico</p>
                                        <a 
                                            href="http://lattes.cnpq.br/2901086695714310" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center text-xs font-bold text-gray-500 hover:text-teal-700 transition-colors uppercase tracking-wide border border-gray-300 px-3 py-1 rounded-full"
                                        >
                                            <FileText size={14} className="mr-2" />
                                            Acessar Lattes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Detailed CV */}
                            <div className="lg:col-span-7">
                                <div className="mb-8">
                                    <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Trajetória Profissional</h2>
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Formação Multidisciplinar de Excelência</h3>
                                    <p className="text-lg text-gray-700 italic font-serif border-l-4 border-teal-500 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                                        "A combinação de Medicina, Fisioterapia e Educação Física me proporciona uma visão única e integrada da saúde humana."
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    {/* Medicina & US */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="bg-teal-600 p-2 rounded-lg text-white mr-3">
                                                <Stethoscope size={20} />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">Medicina & Ultrassonografia</h4>
                                        </div>
                                        <div className="space-y-4 pl-12 border-l-2 border-teal-100 ml-5">
                                            <div className="relative">
                                                <span className="absolute -left-[54px] top-1 w-3 h-3 rounded-full bg-teal-600 border-2 border-white"></span>
                                                <h5 className="font-bold text-gray-800">Cursos realizados na FATESA</h5>
                                                <p className="text-gray-600 text-sm">Tradição de mais de 30 anos em cursos de ultrassonografia</p>
                                            </div>
                                            <div className="relative">
                                                <span className="absolute -left-[54px] top-1 w-3 h-3 rounded-full bg-teal-400 border-2 border-white"></span>
                                                <h5 className="font-bold text-gray-800">Graduação em Medicina</h5>
                                                <p className="text-gray-600 text-sm">UNEMAT - Universidade do Estado do Mato Grosso - 2018</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pós-Graduações */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="bg-teal-600 p-2 rounded-lg text-white mr-3">
                                                <Award size={20} />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">Especializações & Pós-Graduação</h4>
                                        </div>
                                        <ul className="space-y-3 pl-3 text-gray-700">
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span><strong>Perícia Médica</strong></span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span><strong>Auditoria Hospitalar e em Saúde</strong></span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span><strong>Acupuntura</strong></span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span><strong>RPG-RCS:</strong> Reeducação Postural Global</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Outras Formações */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="bg-teal-600 p-2 rounded-lg text-white mr-3">
                                                <GraduationCap size={20} />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">Outras Graduações</h4>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <h5 className="font-bold text-gray-800">Fisioterapia</h5>
                                                <p className="text-sm text-gray-500">UNOESTE - 2004</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <h5 className="font-bold text-gray-800">Educação Física</h5>
                                                <p className="text-sm text-gray-500">FIFASUL - 2002</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Atuação Profissional */}
                                    <div>
                                         <div className="flex items-center mb-4">
                                            <div className="bg-teal-600 p-2 rounded-lg text-white mr-3">
                                                <BookOpen size={20} />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">Experiência Profissional Recente</h4>
                                        </div>
                                        <ul className="space-y-3 text-sm text-gray-600 ml-1">
                                            <li>• trabalhou como Médico Plantonista - Hospital Regional de Nova Andradina - MS</li>
                                            <li>• Médico ESF - Prefeitura Municipal de Nova Andradina</li>
                                            <li>• trabalhou como Médico Plantonista - Hospital Cassems e Hospital Municipal de Taquarussu</li>
                                            <li>• Perito Judicial nomeado - Fórum de Batayporã (desde 2020)</li>
                                            <li>• Ex-Professor Universitário na FAPAN (Cáceres - MT)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic News Section (Gemini Powered) */}
                <section id="notícias" className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Atualizações em Ultrassom</h2>
                            <p className="mt-2 text-gray-600">
                                Notícias e artigos científicos sobre Ecocardiograma Fetal e Ultrassonografia selecionados por Inteligência Artificial.
                            </p>
                        </div>
                        <HealthNewsWidget />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contato" className="py-20 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-3xl font-serif font-bold mb-6">Fale Conosco</h3>
                                <p className="text-gray-400 mb-8 text-lg">
                                    Realize seus exames com quem tem experiência e formação sólida. Entre em contato para agendamento em Nova Andradina e região.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <Phone className="text-teal-400 w-6 h-6 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg">Contato</h4>
                                            <p className="text-gray-300 mt-1">(67) 99999-9999</p>
                                            <p className="text-xs text-gray-500">Número de exemplo baseada na região DDD 67</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="text-teal-400 w-6 h-6 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg">Localização</h4>
                                            <p className="text-gray-300 mt-1">
                                                Nova Andradina - Mato Grosso do Sul (MS)<br />
                                                Atendimento também em Taquarussu e região.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Calendar className="text-teal-400 w-6 h-6 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg">Atendimento</h4>
                                            <p className="text-gray-300 mt-1">
                                                Consulte disponibilidade de agenda para Ultrassom e Ecocardiograma.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Solicite um Agendamento</h4>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Seu nome" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                            <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="(67) 9..." />
                                        </div>
                                        <div>
                                             <label htmlFor="exam" className="block text-sm font-medium text-gray-700 mb-1">Exame</label>
                                            <select id="exam" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white">
                                                <option>Ecocardiograma Fetal</option>
                                                <option>Obstétrico</option>
                                                <option>Abdome Total</option>
                                                <option>Próstata</option>
                                                <option>Pélvico</option>
                                                <option>Tireoide</option>
                                                <option>Mama</option>
                                                <option>Musculoesquelético</option>
                                                <option>Vascular</option>
                                                <option>Perícia Médica</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                                        <textarea id="message" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Dúvidas ou preferência de horário"></textarea>
                                    </div>
                                    <button className="w-full bg-teal-600 text-white font-bold py-3.5 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        Enviar Solicitação
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
};

export default App;
