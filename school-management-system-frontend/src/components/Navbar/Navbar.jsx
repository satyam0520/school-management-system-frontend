import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from 'react-icons/fi';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    {
        label: 'About Us',
        path: '/about',
        dropdown: [
            { label: 'About School', path: '/about' },
            { label: 'Vision & Mission', path: '/about/vision' },
            { label: "Chairman's Message", path: '/about/chairman-message' },
            { label: "Principal's Message", path: '/about/principal-message' },
        ],
    },
    {
        label: 'Academics',
        path: '/academics',
        dropdown: [
            { label: 'Overview', path: '/academics' },
            { label: 'Pre-Primary', path: '/academics/pre-primary' },
            { label: 'Primary', path: '/academics/primary' },
            { label: 'Middle School', path: '/academics/middle' },
            { label: 'Secondary', path: '/academics/secondary' },
            { label: 'Senior Secondary', path: '/academics/senior-secondary' },
        ],
    },
    {
        label: 'Admissions',
        path: '/admissions',
        dropdown: [
            { label: 'Apply Now', path: '/admissions' },
            { label: 'Admission Process', path: '/admissions/process' },
            { label: 'Fee Structure', path: '/admissions/fee-structure' },
        ],
    },
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Student Life', path: '/student-life' },
    { label: 'Results', path: '/results' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const navRef = useRef(null);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    // Sticky shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const toggleDropdown = (label) =>
        setOpenDropdown((prev) => (prev === label ? null : label));

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    <div className={styles.topBarLeft}>
                        <span><FiPhone aria-hidden="true" /> +91 98765 43210</span>
                        <span><FiMail aria-hidden="true" /> info@vidyabharati.edu.in</span>
                    </div>
                    <div className={styles.topBarRight}>
                        <Link to="/mandatory-disclosure">Mandatory Disclosure</Link>
                        <Link to="/erp-login" className={styles.erpBtn}>ERP Login</Link>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className={`container ${styles.nav}`} aria-label="Main navigation">
                {/* Logo */}
                <Link to="/" className={styles.logo} aria-label="Vidya Bharati Home">
                    <div className={styles.logoIcon} aria-hidden="true">VB</div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Vidya Bharati</span>
                        <span className={styles.logoTag}>Senior Secondary School</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <ul className={styles.navList} role="menubar">
                    {NAV_ITEMS.map((item) => (
                        <li
                            key={item.label}
                            className={styles.navItem}
                            role="none"
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                        >
                            {item.dropdown ? (
                                <>
                                    <button
                                        className={`${styles.navLink} ${styles.navDropdownToggle}`}
                                        aria-haspopup="true"
                                        aria-expanded={openDropdown === item.label}
                                        onClick={() => toggleDropdown(item.label)}
                                        role="menuitem"
                                    >
                                        {item.label}
                                        <FiChevronDown
                                            className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ''}`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <ul className={styles.dropdown} role="menu">
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.path} role="none">
                                                    <NavLink
                                                        to={sub.path}
                                                        className={({ isActive }) =>
                                                            `${styles.dropdownLink} ${isActive ? styles.dropdownLinkActive : ''}`
                                                        }
                                                        role="menuitem"
                                                    >
                                                        {sub.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                    }
                                    role="menuitem"
                                    end={item.path === '/'}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Admission CTA */}
                <Link to="/admissions" className={styles.admissionBtn}>
                    Apply Now
                </Link>

                {/* Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
                    <ul>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            className={styles.mobileNavToggle}
                                            onClick={() => toggleDropdown(item.label)}
                                        >
                                            {item.label}
                                            <FiChevronDown
                                                className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ''}`}
                                            />
                                        </button>
                                        {openDropdown === item.label && (
                                            <ul className={styles.mobileDropdown}>
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.path}>
                                                        <Link to={sub.path} className={styles.mobileDropdownLink}>
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link to={item.path} className={styles.mobileNavLink}>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link to="/admissions" className={styles.mobileAdmissionBtn}>
                                Apply Now
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
