import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import styles from './HeroSection.module.css';

const SLIDES = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80',
        title: 'Nurturing Excellence,',
        highlight: 'Building Future Leaders',
        description: 'A world-class education that blends academic rigour with holistic development — preparing your child for a global future.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80',
        title: 'Where Knowledge',
        highlight: 'Meets Character',
        description: 'Our CBSE-affiliated curriculum, experienced faculty, and state-of-the-art infrastructure create the perfect learning environment.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1400&q=80',
        title: 'Admissions Open',
        highlight: 'for 2025 – 26',
        description: 'Join our vibrant community of learners. Limited seats available across all classes. Apply today to secure your childs future.',
  },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            goToSlide((current + 1) % SLIDES.length);
        }, 5500);
        return () => clearInterval(timer);
    }, [current]);

    const goToSlide = (index) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => {
            setCurrent(index);
            setTransitioning(false);
        }, 300);
    };

    const slide = SLIDES[current];

    const handleDownload = () => {
        const url = '/brochure.pdf'; // Path to your brochure in /public
        const a = document.createElement('a');
        a.href = url;
        a.download = 'VidyaBharati-Brochure-2025.pdf';
        a.click();
    };

    return (
        <section className={styles.hero} aria-label="School hero banner">
            {/* Background Image */}
            <div
                className={`${styles.bg} ${transitioning ? styles.bgFade : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                role="img"
                aria-label={slide.title}
            />
            <div className={styles.overlay} />

            {/* Content */}
            <div className={`container ${styles.content}`}>
                <div className={`${styles.textBlock} ${transitioning ? styles.textFade : ''}`}>
                    <div className={styles.badge}>🏆 CBSE Affiliated | School Code: 1234567</div>
                    <h1 className={styles.title}>
                        {slide.title}<br />
                        <span className={styles.highlight}>{slide.highlight}</span>
                    </h1>
                    <p className={styles.description}>{slide.description}</p>

                    <div className={styles.actions}>
                        <Link to="/admissions" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Apply Now <FiArrowRight aria-hidden="true" />
                        </Link>
                        <Link to="/contact" className={`btn btn-outline ${styles.ctaOutline}`}>
                            <FiMapPin aria-hidden="true" /> Book Campus Tour
                        </Link>
                        <button onClick={handleDownload} className={`btn btn-white ${styles.downloadBtn}`}>
                            <FiDownload aria-hidden="true" /> Brochure
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    {[
                        { value: '38+', label: 'Years of Excellence' },
                        { value: '5000+', label: 'Alumni Worldwide' },
                        { value: '100%', label: 'Board Results' },
                        { value: '120+', label: 'Qualified Faculty' },
                    ].map((s) => (
                        <div key={s.label} className={styles.stat}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Navigation */}
            <div className={styles.dots} role="tablist" aria-label="Hero slide navigation">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(i)}
                        role="tab"
                        aria-selected={i === current}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
