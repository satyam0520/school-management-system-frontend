import React from 'react';
import styles from './WhyChooseUs.module.css';

const FEATURES = [
    {
        icon: '🖥️',
        title: 'Smart Classrooms',
        description: 'Interactive digital boards, audio-visual systems, and tech-enabled learning in every classroom.',
    },
    {
        icon: '👩‍🏫',
        title: 'Experienced Faculty',
        description: '120+ qualified, dedicated teachers with subject expertise and a passion for holistic education.',
    },
    {
        icon: '📊',
        title: '100% Board Results',
        description: 'Consistent 100% pass rate in CBSE Board examinations with numerous top scorers every year.',
    },
    {
        icon: '🔬',
        title: 'Modern Labs',
        description: 'Fully equipped Physics, Chemistry, Biology, and Computer labs with the latest instruments.',
    },
    {
        icon: '⚽',
        title: 'Sports Facilities',
        description: 'Olympic-sized pool, multi-purpose courts, athletics track, and professional sports coaching.',
    },
    {
        icon: '🛡️',
        title: 'Safe Campus',
        description: '24/7 CCTV surveillance, biometric entry, trained security staff, and a zero-tolerance safety policy.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className={`section ${styles.section}`} aria-labelledby="why-heading">
            <div className="container">
                <h2 className="section-title" id="why-heading">
                    Why Choose <span style={{ color: 'var(--primary-500)' }}>Vidya Bharati</span>?
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    We go beyond textbooks — our students thrive in every sphere of life because of the well-rounded, world-class education we provide.
                </p>

                <div className={styles.grid}>
                    {FEATURES.map((f) => (
                        <div key={f.title} className={styles.card}>
                            <div className={styles.iconCircle} role="img" aria-hidden="true">{f.icon}</div>
                            <h3 className={styles.title}>{f.title}</h3>
                            <p className={styles.description}>{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
