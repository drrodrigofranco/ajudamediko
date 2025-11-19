
import React, { useState } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
import AdPlaceholder from './components/AdPlaceholder';
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
    Scale
} from 'lucide-react';

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Usando o link fornecido pelo usuário
    const imgSrc = "https://scontent.fmgf6-1.fna.fbcdn.net/v/t39.30808-6/585283322_25300808462865092_8130294083600063357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGb8RUWYBGTI1Ied5S8tpJfaGtuylRDX5toa27KVENfm3rO1_htbBoFMJV66W3WJ5DJk0h1kapLxKoTWD5ikODK&_nc_ohc=S4yafWVpCYgQ7kNvwEOVaRF&_nc_oc=AdmebFHydxPh_u7Ocu3LMZjMwltDi6D0J02BT8OMGxKkOhQBL_nDjkjNaZXHzetSj2Q&_nc_zt=23&_nc_ht=scontent.fmgf6-1.fna&_nc_gid=I4d0UpqDi03i1jqOKV4pfg&oh=00_AfjptfXGRyS-3AaD7tVwqgTagyW3GUFFn9hED28n2-6QYg&oe=6922B3F0";

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
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
                                    Diagnóstico Especializado
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                                    Ecocardiograma Fetal e Ultrassonografia Avançada
                                </h2>
                                <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed">
                                    Tecnologia de ponta e olhar experiente para acompanhar o desenvolvimento da vida e cuidar da sua saúde. Perícia Médica e diagnósticos precisos em Nova Andradina-MS.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button onClick={() => scrollToSection('contato')} className="bg-white text-teal-900 px-8 py-3.5 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg text-center">
                                        Agendar Consulta
                                    </button>
                                    <button onClick={() => scrollToSection('currículo')} className="bg-transparent border-2 border-teal-400 text-teal-100 px-8 py-3.5 rounded-full font-bold hover:bg-teal-800/50 transition-colors text-center">
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

                {/* Content Wrapper with Sidebar */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Left Column - Main Content (75%) */}
                        <div className="w-full lg:w-3/4 space-y-16">
                            
                            {/* Services Section */}
                            <section id="serviços" className="scroll-mt-28">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-serif font-bold text-teal-900 mb-4">Exames em Destaque</h2>
                                    <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    {/* Ecocardiograma Fetal Card */}
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Especialidade</div>
                                        <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                                            <Baby className="text-teal-600 w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Ecocardiograma Fetal</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            Exame detalhado do coração do bebê ainda no útero. Fundamental para detectar precocemente cardiopatias congênitas e planejar o melhor acompanhamento.
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
                                            Avaliação técnica e imparcial para fins judiciais e administrativos. Experiência como perito judicial nomeado, garantindo laudos precisos e fundamentados.
                                        </p>
                                    </div>
                                </div>

                                {/* Catalog of Exams */}
                                <h3 className="text-2xl font-serif font-bold text-teal-900 mb-8 text-center">Catálogo de Ultrassonografia</h3>
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

                            {/* Curriculum Section */}
                            <section id="currículo" className="scroll-mt-28">
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
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-teal-900/50 px-3 py-1 rounded-full text-sm border border-teal-700">Ultrassonografista</span>
                                                    <span className="bg-teal-900/50 px-3 py-1 rounded-full text-sm border border-teal-700">Perito Médico</span>
                                                </div>
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

                            {/* News Section */}
                            <section id="notícias" className="scroll-mt-28">
                                <HealthNewsWidget />
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
                                                        <h3 className="font-bold text-lg">Localização</h3>
                                                        <p className="text-teal-100">Nova Andradina - MS</p>
                                                        <p className="text-teal-300 text-sm">Atendimento em diversas unidades</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-4">
                                                    <div className="bg-teal-800 p-3 rounded-lg">
                                                        <Phone className="w-6 h-6 text-teal-400" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">Contato</h3>
                                                        <p className="text-teal-100">(67) 99999-9999</p>
                                                        <p className="text-teal-300 text-sm">Segunda a Sexta, 08h às 18h</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-start space-x-4">
                                                     <div className="bg-teal-800 p-3 rounded-lg">
                                                        <CheckCircle2 className="w-6 h-6 text-teal-400" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">Convênios</h3>
                                                        <p className="text-teal-100">Unimed, Cassems, Particular</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-8 md:p-12">
                                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Seu nome" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50" placeholder="(67) 99999-9999" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Exame</label>
                                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50">
                                                        <option value="">Selecione uma opção</option>
                                                        {ultrasoundExams.map((exam, idx) => (
                                                             <option key={idx} value={exam.name}>{exam.name}</option>
                                                        ))}
                                                        <option value="Pericia">Perícia Médica</option>
                                                        <option value="Outro">Outros</option>
                                                    </select>
                                                </div>
                                                <button className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                                    Solicitar Agendamento
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column - Sidebar for Ads (25%) */}
                        <aside className="w-full lg:w-1/4 hidden lg:block">
                             <div className="sticky top-28 space-y-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 self-start">Publicidade</h3>
                                    <AdPlaceholder height="h-[250px]" text="Anúncio 300x250" label="Espaço Publicitário" />
                                </div>
                                
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 self-start">Publicidade</h3>
                                     <AdPlaceholder height="h-[600px]" text="Anúncio 300x600" label="Espaço Publicitário" />
                                </div>
                             </div>
                        </aside>
                        
                         {/* Mobile Ads (Visible only on small screens) */}
                        <div className="lg:hidden space-y-8 mb-12">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Publicidade</h3>
                                <AdPlaceholder height="h-[250px]" text="Anúncio 300x250" label="Espaço Publicitário" />
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
