"use client";

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Menu, X, Mail } from 'lucide-react';
import Link from 'next/link';

const Instagram = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Twitter = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Linkedin = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topLinks}>
            <Link href="/about">About</Link>
            <Link href="/why-ihpl">Why Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          
          <div className={styles.socialIcons}>
            <a href="#"><Instagram size={14} /></a>
            <a href="#"><Twitter size={14} /></a>
            <a href="#"><Facebook size={14} /></a>
            <a href="#"><Linkedin size={14} /></a>
          </div>

          <div className={styles.emailContact}>
            <Mail size={14} className={styles.emailIcon} />
            <span>info@indiahousing.org</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          
          {/* Left Side: Logo */}
          <div className={styles.left}>
            <a href="/" className={styles.logo}>
              <img src="/ihplnewlogo.png" alt="IHPL Logo" style={{ height: '80px', objectFit: 'contain' }} />
            </a>
          </div>

          {/* Center: Navigation Menu (Desktop) */}
          <nav className={styles.navDesktop}>
            <a href="/" className={styles.navLink}>Home</a>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/projects" className={styles.navLink}>Our Projects</Link>
            <Link href="/why-ihpl" className={styles.navLink}>Why IHPL</Link>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
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
              <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>ABOUT US</Link>
              <Link href="/projects" className={styles.mobileNavLink} onClick={toggleMenu}>OUR PROJECTS</Link>
              <Link href="/why-ihpl" className={styles.mobileNavLink} onClick={toggleMenu}>WHY IHPL</Link>
              <Link href="/careers" className={styles.mobileNavLink} onClick={toggleMenu}>CAREERS</Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>CONTACT</Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
