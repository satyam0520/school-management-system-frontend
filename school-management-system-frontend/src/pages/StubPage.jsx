import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageStub.module.css';

export function StubPage({ title, subtitle, breadcrumb }) {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        {breadcrumb && (
                            <>
                                <span aria-hidden="true"> › </span>
                                <span>{breadcrumb}</span>
                            </>
                        )}
                        <span aria-hidden="true"> › </span>
                        <span aria-current="page">{title}</span>
                    </nav>
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
            </div>
            <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
                <div className={styles.comingSoon}>
                    <div className={styles.icon}>🚧</div>
                    <h2>Content Coming Soon</h2>
                    <p>This page is under development. Please check back later or contact us for more information.</p>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
