import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiFileText, FiCalendar, FiCreditCard, FiMonitor,
    FiTruck, FiBell, FiClipboard,
} from 'react-icons/fi';
import styles from './QuickAccess.module.css';

const ITEMS = [
    { icon: <FiFileText />, label: 'Admissions Open', sub: 'Apply for 2025-26', path: '/admissions', color: '#2563eb' },
    { icon: <FiCalendar />, label: 'Academic Calendar', sub: 'View schedule', path: '/academics', color: '#7c3aed' },
    { icon: <FiCreditCard />, label: 'Fee Payment', sub: 'Pay online', path: '/erp-login', color: '#059669' },
    { icon: <FiMonitor />, label: 'ERP Login', sub: 'Student / Parent portal', path: '/erp-login', color: '#0891b2' },
    { icon: <FiTruck />, label: 'Transportation', sub: 'Bus routes & timings', path: '/infrastructure', color: '#d97706' },
    { icon: <FiBell />, label: 'Circulars', sub: 'Latest notices', path: '/news', color: '#dc2626' },
    { icon: <FiClipboard />, label: 'Exam Schedule', sub: 'Upcoming exams', path: '/academics', color: '#4f46e5' },
];

export default function QuickAccess() {
    return (
        <section className={styles.section} aria-label="Quick access links">
            <div className="container">
                <div className={styles.grid}>
                    {ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={styles.card}
                            aria-label={item.label}
                        >
                            <div className={styles.iconWrap} style={{ background: `${item.color}18`, color: item.color }}>
                                {item.icon}
                            </div>
                            <div className={styles.textWrap}>
                                <span className={styles.label}>{item.label}</span>
                                <span className={styles.sub}>{item.sub}</span>
                            </div>
                            <div className={styles.arrow} style={{ color: item.color }}>→</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
