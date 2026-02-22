import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
    return (
        <section className={`section ${styles.section}`} aria-labelledby="about-heading">
            <div className="container">
                <div className={styles.grid}>
                    {/* Image Side */}
                    <div className={styles.imageCol}>
                        <div className={styles.imageWrap}>
                            <img
                                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=700&q=80"
                                alt="Students in a modern classroom"
                                className={styles.mainImg}
                                loading="lazy"
                            />
                            <div className={styles.badge}>
                                <span className={styles.badgeYear}>1985</span>
                                <span className={styles.badgeText}>Est. Year</span>
                            </div>
                            <div className={styles.floatCard}>
                                <span className={styles.floatNum}>5000+</span>
                                <span className={styles.floatLabel}>Happy Graduates</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className={styles.textCol}>
                        <span className={styles.eyebrow}>Who We Are</span>
                        <h2 className="section-title" id="about-heading" style={{ textAlign: 'left' }}>
                            About <span style={{ color: 'var(--primary-500)' }}>Vidya Bharati</span> School
                        </h2>
                        <div className="section-divider" style={{ margin: '0.75rem 0 1.5rem' }} />
                        <p className={styles.body}>
                            Vidya Bharati Senior Secondary School has been a beacon of academic excellence
                            since 1985. Affiliated to CBSE, we offer a holistic education that balances
                            intellectual growth with character development, sports, arts, and cultural expression.
                        </p>
                        <p className={styles.body}>
                            Our world-class infrastructure, experienced faculty of 120+ teachers, and
                            nurturing environment make us one of Delhi's most trusted institutions for
                            quality education from Pre-Primary through Class XII.
                        </p>

                        <div className={styles.highlights}>
                            {[
                                { label: 'CBSE Affiliated', icon: '🎓' },
                                { label: 'NAAC Accredited', icon: '⭐' },
                                { label: 'ISO 9001:2015', icon: '✅' },
                                { label: '38+ Years', icon: '📅' },
                            ].map((h) => (
                                <div key={h.label} className={styles.highlight}>
                                    <span className={styles.hIcon}>{h.icon}</span>
                                    <span className={styles.hLabel}>{h.label}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className={`btn btn-primary ${styles.cta}`}>
                            Read More About Us <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
