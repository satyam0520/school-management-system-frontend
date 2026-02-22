import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import { fetchAchievements } from '../../services/api';
import styles from './ResultsPreview.module.css';

const FALLBACK_ACHIEVEMENTS = [
    { id: 1, name: 'Ananya Sharma', class: 'XII Science', score: '99.2%', rank: 'CBSE All India Rank #3', avatar: 'https://i.pravatar.cc/80?img=1' },
    { id: 2, name: 'Rohan Gupta', class: 'XII Commerce', score: '98.8%', rank: 'CBSE All India Rank #7', avatar: 'https://i.pravatar.cc/80?img=3' },
    { id: 3, name: 'Priya Patel', class: 'X', score: '99.6%', rank: 'District Topper', avatar: 'https://i.pravatar.cc/80?img=5' },
    { id: 4, name: 'Vikram Singh', class: 'XII Arts', score: '97.4%', rank: 'State Rank #2', avatar: 'https://i.pravatar.cc/80?img=7' },
];

export default function ResultsPreview() {
    const [achievements, setAchievements] = useState(FALLBACK_ACHIEVEMENTS);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchAchievements()
            .then((data) => {
                if (data && data.length) setAchievements(data.slice(0, 4));
            })
            .catch(() => {/* silently use fallback */ })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className={`section ${styles.section}`} aria-labelledby="results-heading">
            <div className="container">
                <h2 className="section-title" id="results-heading">
                    🏆 Results &amp; <span style={{ color: 'var(--gold-500)' }}>Achievements</span>
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    Our students consistently achieve outstanding results in CBSE board examinations
                    and national-level competitions.
                </p>

                {/* Stats Row */}
                <div className={styles.statsRow}>
                    {[
                        { num: '100%', label: 'Pass Rate — 2024' },
                        { num: '47', label: 'Distinctions' },
                        { num: '12', label: 'National Toppers' },
                        { num: '98.6%', label: 'School Avg (XII)' },
                    ].map((s) => (
                        <div key={s.label} className={styles.stat}>
                            <span className={styles.statNum}>{s.num}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Toppers Grid */}
                <div className={styles.grid}>
                    {loading
                        ? [1, 2, 3, 4].map((i) => <div key={i} className={styles.skeleton} />)
                        : achievements.map((a) => (
                            <div key={a.id} className={styles.card}>
                                <FiAward className={styles.awardIcon} aria-hidden="true" />
                                <img
                                    src={a.avatar || `https://i.pravatar.cc/80?img=${a.id}`}
                                    alt={a.name}
                                    className={styles.avatar}
                                />
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{a.name}</h3>
                                    <span className={styles.class}>Class {a.class}</span>
                                    <span className={styles.score}>{a.score}</span>
                                    <span className={styles.rank}>{a.rank}</span>
                                </div>
                            </div>
                        ))}
                </div>

                <div className={styles.cta}>
                    <Link to="/results" className="btn btn-primary">
                        View All Results <FiArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
