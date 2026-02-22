import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './InfrastructurePreview.module.css';

const IMAGES = [
    {
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80',
        label: 'State-of-the-Art Library',
        span: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&q=80',
        label: 'Science Laboratories',
        span: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=500&q=80',
        label: 'Sports Complex',
        span: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80',
        label: 'Swimming Pool',
        span: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=500&q=80',
        label: 'Smart Classrooms',
        span: 'small',
    },
];

export default function InfrastructurePreview() {
    return (
        <section className={`section ${styles.section}`} aria-labelledby="infra-heading">
            <div className="container">
                <h2 className="section-title" id="infra-heading">
                    World-Class <span style={{ color: 'var(--primary-500)' }}>Infrastructure</span>
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    Our campus provides every resource a child needs to excel — academically, athletically, and creatively.
                </p>

                <div className={styles.mosaic}>
                    {IMAGES.map((img) => (
                        <div key={img.label} className={`${styles.tile} ${img.span === 'large' ? styles.large : ''}`}>
                            <img
                                src={img.src}
                                alt={img.label}
                                className={styles.tileImg}
                                loading="lazy"
                            />
                            <div className={styles.tileOverlay}>
                                <span className={styles.tileLabel}>{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link to="/infrastructure" className="btn btn-primary">
                        View Full Infrastructure <FiArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
