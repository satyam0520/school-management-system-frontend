import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import QuickAccess from '../components/QuickAccess/QuickAccess';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import AcademicsOverview from '../components/AcademicsOverview/AcademicsOverview';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import InfrastructurePreview from '../components/InfrastructurePreview/InfrastructurePreview';
import ResultsPreview from '../components/ResultsPreview/ResultsPreview';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel';
import NewsSection from '../components/NewsSection/NewsSection';
import AdmissionCTA from '../components/AdmissionCTA/AdmissionCTA';

/**
 * HomePage — assembles all homepage sections.
 * Sections are ordered for optimal user journey:
 * Hero → Quick Access → About → Academics → Why Us →
 * Infrastructure → Results → Testimonials → News → Admission CTA
 */
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <QuickAccess />
            <AboutPreview />
            <AcademicsOverview />
            <WhyChooseUs />
            <InfrastructurePreview />
            <ResultsPreview />
            <TestimonialsCarousel />
            <NewsSection />
            <AdmissionCTA />
        </>
    );
}
