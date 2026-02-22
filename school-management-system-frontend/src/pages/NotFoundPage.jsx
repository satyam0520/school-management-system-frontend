import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '4rem 1.5rem',
            fontFamily: 'var(--font-body)',
        }}>
            <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🏫</div>
            <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '5rem',
                fontWeight: 800,
                color: 'var(--primary-600)',
                lineHeight: 1,
            }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--neutral-800)', margin: '0.5rem 0' }}>
                Page Not Found
            </h2>
            <p style={{ color: 'var(--neutral-600)', maxWidth: '400px', lineHeight: 1.7 }}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="btn btn-primary"
                style={{ marginTop: '2rem', display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
            >
                ← Back to Home
            </Link>
        </div>
    );
}
