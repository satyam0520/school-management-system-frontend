import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin,
    FiPhone, FiMail, FiMapPin,
} from 'react-icons/fi';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const aboutLinks = [
    { label: 'About School', path: '/about' },
    { label: 'Vision & Mission', path: '/about/vision' },
    { label: "Chairman's Message", path: '/about/chairman-message' },
    { label: "Principal's Message", path: '/about/principal-message' },
    { label: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
];

const quickLinks = [
    { label: 'Academic Calendar', path: '/academics' },
    { label: 'Student Life', path: '/student-life' },
    { label: 'Results', path: '/results' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News & Events', path: '/news' },
    { label: 'Infrastructure', path: '/infrastructure' },
];

const admissionsLinks = [
    { label: 'Apply Now', path: '/admissions' },
    { label: 'Admission Process', path: '/admissions/process' },
    { label: 'Fee Structure', path: '/admissions/fee-structure' },
    { label: 'ERP Login', path: '/erp-login' },
    { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
    return (
        <footer className={styles.footer} aria-label="Site footer">
            {/* Main Footer */}
            <div className={`container ${styles.footerGrid}`}>
                {/* Brand Column */}
                <div className={styles.brandCol}>
                    <Link to="/" className={styles.logoWrap}>
                        <div className={styles.logoIcon}>VB</div>
                        <div>
                            <div className={styles.logoName}>Vidya Bharati</div>
                            <div className={styles.logoTag}>Senior Secondary School</div>
                        </div>
                    </Link>
                    <p className={styles.tagline}>
                        Nurturing minds, building character, and inspiring excellence since 1985.
                        Affiliated to CBSE | School Code: 1234567
                    </p>
                    <div className={styles.socials} aria-label="Social media links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FiYoutube /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    </div>
                </div>

                {/* About Links */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colTitle}>About</h3>
                    <ul>
                        {aboutLinks.map((l) => (
                            <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul>
                        {quickLinks.map((l) => (
                            <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Admissions */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colTitle}>Admissions</h3>
                    <ul>
                        {admissionsLinks.map((l) => (
                            <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.contactCol}>
                    <h3 className={styles.colTitle}>Contact Us</h3>
                    <div className={styles.contactItems}>
                        <div className={styles.contactItem}>
                            <FiMapPin aria-hidden="true" />
                            <span>123, Education Lane, Sector 45,<br />New Delhi — 110 001</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FiPhone aria-hidden="true" />
                            <a href="tel:+919876543210">+91 98765 43210</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FiMail aria-hidden="true" />
                            <a href="mailto:info@vidyabharati.edu.in">info@vidyabharati.edu.in</a>
                        </div>
                    </div>
                    <Link to="/admissions" className={styles.admissionCta}>
                        Apply for 2025-26
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomBarInner}`}>
                    <p>© {currentYear} Vidya Bharati Senior Secondary School. All Rights Reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link to="/mandatory-disclosure">Privacy Policy</Link>
                        <Link to="/mandatory-disclosure">Terms of Use</Link>
                        <Link to="/mandatory-disclosure">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
