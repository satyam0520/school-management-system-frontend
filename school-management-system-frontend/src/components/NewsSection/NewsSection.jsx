import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiTag } from 'react-icons/fi';
import { fetchNews } from '../../services/api';
import styles from './NewsSection.module.css';

const FALLBACK_NEWS = [
    {
        id: 1,
        title: 'Annual Day Celebration 2025 — A Grand Success',
        category: 'Events',
        date: '2025-02-15',
        excerpt: "Students dazzled the audience with cultural performances, award ceremonies, and a spectacular finale at this year's Annual Day. Over 500 families attended.",
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=75',
    },
    {
        id: 2,
        title: 'Science Exhibition 2025 — Innovation Takes Centre Stage',
        category: 'Academics',
        date: '2025-02-08',
        excerpt: 'Over 80 student projects were showcased at the inter-school Science & Technology Exhibition. Three teams won state-level recognition.',
        image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=500&q=75',
    },
    {
        id: 3,
        title: 'Admissions Open for 2025-26 — Apply Before 31 March',
        category: 'Admissions',
        date: '2025-01-20',
        excerpt: 'The school is now accepting applications for Nursery through Class XI for the upcoming session. Online and offline application modes are available.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=75',
    },
];

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
    });
}

export default function NewsSection() {
    const [news, setNews] = useState(FALLBACK_NEWS);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchNews(3)
            .then((data) => { if (data?.length) setNews(data.slice(0, 3)); })
            .catch(() => { })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className={`section ${styles.section}`} aria-labelledby="news-heading">
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <h2 className="section-title" id="news-heading" style={{ textAlign: 'left' }}>
                            Latest <span style={{ color: 'var(--primary-500)' }}>News &amp; Events</span>
                        </h2>
                        <div className="section-divider" style={{ margin: '0.75rem 0' }} />
                    </div>
                    <Link to="/news" className="btn btn-outline">
                        View All <FiArrowRight aria-hidden="true" />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {loading
                        ? [1, 2, 3].map((i) => <div key={i} className={styles.skeleton} />)
                        : news.map((item) => (
                            <article key={item.id} className={styles.card}>
                                <div className={styles.imgWrap}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={styles.img}
                                        loading="lazy"
                                    />
                                    <span className={styles.category}>
                                        <FiTag aria-hidden="true" /> {item.category}
                                    </span>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.date}>
                                        <FiCalendar aria-hidden="true" />
                                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                                    </div>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.excerpt}>{item.excerpt}</p>
                                    <Link to={`/news`} className={styles.readMore}>
                                        Read More <FiArrowRight aria-hidden="true" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
}
