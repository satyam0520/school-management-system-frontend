import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './AcademicsOverview.module.css';

const LEVELS = [
    {
        label: 'Pre-Primary',
        grades: 'Nursery – KG',
        description: 'Play-based learning that sparks curiosity and builds early communication, numeracy, and social skills.',
        path: '/academics/pre-primary',
        icon: '🌱',
        color: '#f59e0b',
    },
    {
        label: 'Primary',
        grades: 'Class I – V',
        description: 'A strong foundation in languages, mathematics, science, and arts through experiential learning.',
        path: '/academics/primary',
        icon: '📚',
        color: '#3b82f6',
    },
    {
        label: 'Middle School',
        grades: 'Class VI – VIII',
        description: 'Expanding horizons with deeper subject exploration, critical thinking, and leadership activities.',
        path: '/academics/middle',
        icon: '🔬',
        color: '#8b5cf6',
    },
    {
        label: 'Secondary',
        grades: 'Class IX – X',
        description: 'CBSE Board preparation with comprehensive study material, expert coaching, and mock exams.',
        path: '/academics/secondary',
        icon: '📝',
        color: '#10b981',
    },
    {
        label: 'Senior Secondary',
        grades: 'Class XI – XII',
        description: 'Specialised streams — Science, Commerce, and Humanities — with career counselling and entrance prep.',
        path: '/academics/senior-secondary',
        icon: '🎓',
        color: '#ef4444',
    },
];

export default function AcademicsOverview() {
    return (
        <section className={`section ${styles.section}`} aria-labelledby="academics-heading">
            <div className="container">
                <p className="section-title" id="academics-heading">Academic <span style={{ color: 'var(--primary-500)' }}>Programmes</span></p>
                <div className="section-divider" />
                <p className="section-subtitle">
                    From Nursery to Class XII, we offer structured, CBSE-aligned curricula that nurture every child's unique potential.
                </p>

                <div className={styles.grid}>
                    {LEVELS.map((level) => (
                        <Link key={level.label} to={level.path} className={styles.card}>
                            <div className={styles.iconWrap} style={{ background: `${level.color}18` }}>
                                <span className={styles.icon} role="img" aria-label={level.label}>{level.icon}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h3 className={styles.label}>{level.label}</h3>
                                    <span className={styles.grades} style={{ color: level.color }}>{level.grades}</span>
                                </div>
                                <p className={styles.description}>{level.description}</p>
                                <span className={styles.link} style={{ color: level.color }}>
                                    Learn More <FiArrowRight aria-hidden="true" />
                                </span>
                            </div>
                            <div className={styles.colorBar} style={{ background: level.color }} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
