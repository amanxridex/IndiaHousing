"use client";

import { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Left Side: Logo */}
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            IH<span>PL</span>
          </a>
        </div>

        {/* Center: Navigation Menu (Desktop) */}
        <nav className={styles.navDesktop}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#services" className={styles.navLink}>Services</a>
        </nav>

        {/* Right Side: Contact Us & Mobile Toggle */}
        <div className={styles.right}>
          <a href="#contact" className={styles.contactBtn}>Contact Us</a>
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.navMobile}>
            <a href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>About</a>
            <a href="#projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projects</a>
            <a href="#services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</a>
          </nav>
        </div>
      )}
    </header>
  );
}
