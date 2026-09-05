import React, { useState, useEffect, Suspense, lazy } from 'react';
import { trackGetDirections } from './gtag';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import MapModal from './components/MapModal';
import ExamsDrawer from './components/ExamsDrawer';
import { useSEO } from './hooks/useSEO';
import { ultrasoundExams } from './ultrasoundExamsData';
import { articlesData } from './articlesData';

// Paginas de rota carregadas sob demanda (code-splitting): sem isso, um visitante
// da home baixava o JS de todas as ~30 rotas de uma vez (bundle unico de 1.26MB).
// Cada import() vira um chunk separado que so e buscado quando a rota e visitada.
const ExamDetailPage = lazy(() => import('./components/ExamDetailPage'));
const DoctorDetailPage = lazy(() => import('./components/DoctorDetailPage'));
const ExamsComparisonPage = lazy(() => import('./components/ExamsComparisonPage'));
const GuidelineFirstTrimesterPage = lazy(() => import('./components/GuidelineFirstTrimesterPage'));
const CardioRespiratoryExamsPage = lazy(() => import('./components/CardioRespiratoryExamsPage'));
const PregnancyGuidePage = lazy(() => import('./components/PregnancyGuidePage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const ArticleDetailPage = lazy(() => import('./components/ArticleDetailPage'));
const NewsDetailPage = lazy(() => import('./components/NewsDetailPage'));
const TeamPage = lazy(() => import('./components/TeamPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const PericiaMedicaPage = lazy(() => import('./components/PericiaMedicaPage'));

// Secoes da propria Home abaixo da dobra: antes eram import estatico (iam todas
// no mesmo chunk da Home, mesmo as que o usuario so ve depois de rolar a pagina).
// Separando em chunks proprios, o JS que precisa rodar ate a Home ficar interativa
// (LCP/TTI) diminui - o navegador so busca esses chunks depois do essencial.
const GestationalCalculator = lazy(() => import('./components/GestationalCalculator'));
const Curriculum = lazy(() => import('./components/Curriculum'));
const FAQ = lazy(() => import('./components/FAQ'));
const HealthNewsWidget = lazy(() => import('./components/HealthNewsWidget'));
const Contact = lazy(() => import('./components/Contact'));

const RouteFallback: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-[#14b8a6] border-t-transparent rounded-full animate-spin"></div>
    </div>
);
const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formExam, setFormExam] = useState('');
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useSEO({
        title: 'Ultrassom em Nova Andradina - MS | Clínica Franco',
        description: 'Ultrassom em Nova Andradina - MS: Morfológico, Obstétrico com Doppler e 3D, Abdominal e outros exames na Clínica Franco. Agende pelo WhatsApp: (67) 99844-6674.',
        path: '/',
        enabled: currentPath === '/' || currentPath === '',
    });

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    const navigateTo = (path: string, e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const doctorImgSrc = "/images/equipe-clinica-franco.jpg";
    const mapImgSrc = "/images/mapa-localizacao.jpg";
    const googleMapsLink = "https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8";

    const navItems = ['SOBRE', 'SERVIÇOS', 'ENTENDA OS EXAMES', 'ATENDIMENTOS', 'CALCULADORAS', 'CURRÍCULO', 'LOCALIZAÇÃO', 'DÚVIDAS', 'NOTÍCIAS', 'BLOG', 'EQUIPE', 'CONTATO'];

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
            trackGetDirections();
            window.open(googleMapsLink, '_blank');
            setIsMobileMenuOpen(false);
        } else if (item === 'ENTENDA OS EXAMES') {
            navigateTo('/entenda-exames');
            setIsMobileMenuOpen(false);
        } else if (item === 'BLOG') {
            navigateTo('/blog');
            setIsMobileMenuOpen(false);
        } else if (item === 'EQUIPE') {
            navigateTo('/equipe');
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

    if (currentPath.startsWith('/exame/')) {
        const examId = currentPath.replace('/exame/', '').split('/')[0];
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal 
                    isOpen={isMapModalOpen} 
                    onClose={() => setIsMapModalOpen(false)} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />
                <Suspense fallback={<RouteFallback />}>
                    <ExamDetailPage examId={examId} navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath.startsWith('/medico/')) {
        const doctorId = currentPath.replace('/medico/', '').split('/')[0];
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    <DoctorDetailPage doctorId={doctorId} navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/entenda-exames' || currentPath === '/entenda-exames/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal 
                    isOpen={isMapModalOpen} 
                    onClose={() => setIsMapModalOpen(false)} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />
                <Suspense fallback={<RouteFallback />}>
                    <ExamsComparisonPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/diretriz-primeiro-trimestre' || currentPath === '/diretriz-primeiro-trimestre/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal 
                    isOpen={isMapModalOpen} 
                    onClose={() => setIsMapModalOpen(false)} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />
                <Suspense fallback={<RouteFallback />}>
                    <GuidelineFirstTrimesterPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/exames-cardiorespiratorios' || currentPath === '/exames-cardiorespiratorios/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal 
                    isOpen={isMapModalOpen} 
                    onClose={() => setIsMapModalOpen(false)} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />
                <Suspense fallback={<RouteFallback />}>
                    <CardioRespiratoryExamsPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/dicas-gestantes' || currentPath === '/dicas-gestantes/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal 
                    isOpen={isMapModalOpen} 
                    onClose={() => setIsMapModalOpen(false)} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />
                <Suspense fallback={<RouteFallback />}>
                    <PregnancyGuidePage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath.startsWith('/blog/') && currentPath !== '/blog/') {
        const slug = currentPath.replace('/blog/', '').split('/')[0];
        // /blog/{id} atende dois tipos de conteudo com o mesmo padrao de URL:
        // artigos originais assinados pelos medicos (articlesData.ts) e materias
        // da curadoria de noticias (curatedNewsData.ts) - cada uma agora com
        // pagina propria em vez de aparecer so como bloco dentro de /blog.
        const isOriginalArticle = articlesData.some(a => a.id === slug);
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    {isOriginalArticle
                        ? <ArticleDetailPage articleId={slug} navigateTo={navigateTo} />
                        : <NewsDetailPage newsId={slug} navigateTo={navigateTo} />}
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/blog' || currentPath === '/blog/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    <BlogPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/equipe' || currentPath === '/equipe/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    <TeamPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/servicos' || currentPath === '/servicos/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    <ServicesPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    if (currentPath === '/pericia-medica' || currentPath === '/pericia-medica/') {
        return (
            <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
                <MapModal
                    isOpen={isMapModalOpen}
                    onClose={() => setIsMapModalOpen(false)}
                    mapImgSrc={mapImgSrc}
                    googleMapsLink={googleMapsLink}
                />
                <Suspense fallback={<RouteFallback />}>
                    <PericiaMedicaPage navigateTo={navigateTo} />
                </Suspense>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
            <MapModal 
                isOpen={isMapModalOpen} 
                onClose={() => setIsMapModalOpen(false)} 
                mapImgSrc={mapImgSrc} 
                googleMapsLink={googleMapsLink} 
            />

            <Navbar 
                navItems={navItems} 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setIsMobileMenuOpen} 
                handleNavClick={handleNavClick} 
                scrollToSection={scrollToSection} 
            />

            <main className="flex-grow">
                <Hero 
                    scrollToSection={scrollToSection} 
                    setIsMapModalOpen={setIsMapModalOpen} 
                    doctorImgSrc={doctorImgSrc} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />

                <About />

                <Partners />

                <Services ultrasoundExams={ultrasoundExams} />

                <section id="calculadoras" className="py-24 bg-gray-50 scroll-mt-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <Suspense fallback={null}>
                            <GestationalCalculator />
                        </Suspense>
                    </div>
                </section>

                <Suspense fallback={null}>
                    <Curriculum navigateTo={navigateTo} />
                </Suspense>

                <Suspense fallback={null}>
                    <FAQ />
                </Suspense>

                <section id="noticias" className="py-24 max-w-5xl mx-auto px-4 scroll-mt-24">
                    <div className="bg-[#0e4843] rounded-3xl overflow-hidden shadow-2xl">
                        <Suspense fallback={null}>
                            <HealthNewsWidget navigateTo={navigateTo} />
                        </Suspense>
                    </div>
                </section>

                <Suspense fallback={null}>
                    <Contact
                        formName={formName}
                        setFormName={setFormName}
                        formPhone={formPhone}
                        setFormPhone={setFormPhone}
                        formExam={formExam}
                        setFormExam={setFormExam}
                        ultrasoundExams={ultrasoundExams}
                        handleScheduleClick={handleScheduleClick}
                    />
                </Suspense>
            </main>

            <Footer />

            <ExamsDrawer />
            
            <a href="https://wa.me/5567998446674" target="_blank" aria-label="Fale conosco pelo WhatsApp" className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            </a>
        </div>
    );
};

export default App;
