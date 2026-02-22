import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import styles from './AdmissionCTA.module.css';

export default function AdmissionCTA() {
    return (
        <section className={styles.section} aria-labelledby="admission-cta-heading">
            <div className={styles.particles} aria-hidden="true">
                {[...Array(8)].map((_, i) => <span key={i} className={styles.particle} />)}
            </div>
            <div className={`container ${styles.content}`}>
                <div className={styles.textBlock}>
                    <span className={styles.badge}>📢 Limited Seats Available</span>
                    <h2 className={styles.title} id="admission-cta-heading">
                        Admissions Open<br />
                        <span className={styles.year}>for Session 2025 – 26</span>
                    </h2>
                    <p className={styles.description}>
                        Give your child the best start in life. Applications are now open for
                        Nursery through Class XI. Join 5,000+ families who trust Vidya Bharati.
                    </p>
                </div>
                <div className={styles.actions}>
                    <Link to="/admissions" className={styles.applyBtn}>
                        Apply Now <FiArrowRight aria-hidden="true" />
                    </Link>
                    <Link to="/contact" className={styles.contactBtn}>
                        <FiPhoneCall aria-hidden="true" /> Contact Admission Office
                    </Link>
                    <div className={styles.deadline}>
                        <span className={styles.deadlineLabel}>Last Date to Apply</span>
                        <span className={styles.deadlineDate}>31 March 2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
