import React, { useEffect, useState } from 'react';
import { fetchTestimonials } from '../../services/api';
import styles from './TestimonialsCarousel.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FALLBACK = [
    {
        id: 1,
        name: 'Mrs. Sunita Kapoor',
        role: 'Parent of a Class X Student',
        quote: 'Vidya Bharati has transformed my daughter into a confident, curious learner. The teachers are incredibly dedicated and the environment is truly nurturing.',
        avatar: 'https://i.pravatar.cc/80?img=10',
        rating: 5,
    },
    {
        id: 2,
        name: 'Mr. Rajesh Mehta',
        role: 'Parent of Alumni',
        quote: "My son is now at IIT Delhi — and it all started with the strong foundation built at Vidya Bharati. We are forever grateful to the school's faculty.",
        avatar: 'https://i.pravatar.cc/80?img=11',
        rating: 5,
    },
    {
        id: 3,
        name: 'Aditya Kumar',
        role: 'Alumni, Class of 2022',
        quote: 'The school shaped not just my academics but my character. The sports, cultural events, and teachers made my school years truly unforgettable.',
        avatar: 'https://i.pravatar.cc/80?img=12',
        rating: 5,
    },
    {
        id: 4,
        name: 'Mrs. Deepa Nair',
        role: 'Parent of a Class VII Student',
        quote: 'The individual attention every child receives here is remarkable. My son has blossomed into a confident student with a genuine love for learning.',
        avatar: 'https://i.pravatar.cc/80?img=13',
        rating: 5,
    },
];

export default function TestimonialsCarousel() {
    const [testimonials, setTestimonials] = useState(FALLBACK);
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        fetchTestimonials()
            .then((data) => { if (data?.length) setTestimonials(data); })
            .catch(() => { });
    }, []);

    useEffect(() => {
        const t = setInterval(() => navigate(1), 6000);
        return () => clearInterval(t);
    }, [current, testimonials.length]);

    const navigate = (dir) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
            setAnimating(false);
        }, 250);
    };

    const t = testimonials[current];

    return (
        <section className={`section ${styles.section}`} aria-labelledby="testimonials-heading">
            <div className="container">
                <h2 className="section-title" id="testimonials-heading">
                    What <span style={{ color: 'var(--primary-500)' }}>Parents & Alumni</span> Say
                </h2>
                <div className="section-divider" />

                <div className={styles.carouselWrap}>
                    <button
                        className={`${styles.navBtn} ${styles.prev}`}
                        onClick={() => navigate(-1)}
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft />
                    </button>

                    <div className={`${styles.card} ${animating ? styles.fade : ''}`} aria-live="polite">
                        <div className={styles.quoteIcon} aria-hidden="true">"</div>
                        <p className={styles.quote}>{t.quote}</p>
                        <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                            {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                        </div>
                        <div className={styles.author}>
                            <img src={t.avatar} alt={t.name} className={styles.avatar} />
                            <div>
                                <span className={styles.name}>{t.name}</span>
                                <span className={styles.role}>{t.role}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.next}`}
                        onClick={() => navigate(1)}
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight />
                    </button>
                </div>

                <div className={styles.dots} role="tablist">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                            onClick={() => setCurrent(i)}
                            role="tab"
                            aria-label={`Testimonial ${i + 1}`}
                            aria-selected={i === current}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
