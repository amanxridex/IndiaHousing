"use client";

import { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X, Mail } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.headerWrapper}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topLinks}>
            <a href="#about">About</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact Us</a>
          </div>
          
          <div className={styles.socialIcons}>
            <a href="#">IG</a>
            <a href="#">TW</a>
            <a href="#">FB</a>
            <a href="#">LI</a>
          </div>

          <div className={styles.emailContact}>
            <Mail size={14} />
            <span>info@ihpl.in</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          
          {/* Left Side: Logo */}
          <div className={styles.left}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>&#10036;</span> IHPL
            </a>
          </div>

          {/* Center: Navigation Menu (Desktop) */}
          <nav className={styles.navDesktop}>
            <a href="#home" className={styles.navLink}>HOME</a>
            <a href="#projects" className={styles.navLink}>VIP PROJECTS</a>
            <a href="#services" className={styles.navLink}>SERVICES</a>
            <a href="#packages" className={styles.navLink}>PACKAGES</a>
          </nav>

          {/* Right Side: Contact Us & Mobile Toggle */}
          <div className={styles.right}>
            <a href="#contact" className="btn btn-dark" style={{ padding: '0.5rem 1.5rem' }}>
              <span style={{ color: '#25D366', fontSize: '1.2rem', marginRight: '4px' }}>&#x2022;</span> BOOK NOW
            </a>
            <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.navMobile}>
              <a href="#home" className={styles.mobileNavLink} onClick={toggleMenu}>HOME</a>
              <a href="#projects" className={styles.mobileNavLink} onClick={toggleMenu}>VIP PROJECTS</a>
              <a href="#services" className={styles.mobileNavLink} onClick={toggleMenu}>SERVICES</a>
              <a href="#packages" className={styles.mobileNavLink} onClick={toggleMenu}>PACKAGES</a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
