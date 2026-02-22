import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Lazy-loaded pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const VisionPage = lazy(() => import('./pages/VisionPage'));
const ChairmanMessagePage = lazy(() => import('./pages/ChairmanMessagePage'));
const PrincipalMessagePage = lazy(() => import('./pages/PrincipalMessagePage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const PrePrimaryPage = lazy(() => import('./pages/PrePrimaryPage'));
const PrimaryPage = lazy(() => import('./pages/PrimaryPage'));
const MiddlePage = lazy(() => import('./pages/MiddlePage'));
const SecondaryPage = lazy(() => import('./pages/SecondaryPage'));
const SeniorSecondaryPage = lazy(() => import('./pages/SeniorSecondaryPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const AdmissionsProcessPage = lazy(() => import('./pages/AdmissionsProcessPage'));
const FeeStructurePage = lazy(() => import('./pages/FeeStructurePage'));
const InfrastructurePage = lazy(() => import('./pages/InfrastructurePage'));
const StudentLifePage = lazy(() => import('./pages/StudentLifePage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const MandatoryDisclosurePage = lazy(() => import('./pages/MandatoryDisclosurePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ErpLoginPage = lazy(() => import('./pages/ErpLoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spinner" aria-label="Loading page..." />
    </div>
);

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Navbar />
            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/about/vision" element={<VisionPage />} />
                        <Route path="/about/chairman-message" element={<ChairmanMessagePage />} />
                        <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
                        <Route path="/academics" element={<AcademicsPage />} />
                        <Route path="/academics/pre-primary" element={<PrePrimaryPage />} />
                        <Route path="/academics/primary" element={<PrimaryPage />} />
                        <Route path="/academics/middle" element={<MiddlePage />} />
                        <Route path="/academics/secondary" element={<SecondaryPage />} />
                        <Route path="/academics/senior-secondary" element={<SeniorSecondaryPage />} />
                        <Route path="/admissions" element={<AdmissionsPage />} />
                        <Route path="/admissions/process" element={<AdmissionsProcessPage />} />
                        <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
                        <Route path="/infrastructure" element={<InfrastructurePage />} />
                        <Route path="/student-life" element={<StudentLifePage />} />
                        <Route path="/results" element={<ResultsPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/erp-login" element={<ErpLoginPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
