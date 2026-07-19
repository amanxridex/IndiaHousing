import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Left Side: Contact Us */}
        <div className={styles.left}>
          <a href="#contact" className={styles.contactBtn}>Contact Us</a>
        </div>

        {/* Center: Navigation Menu */}
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#services" className={styles.navLink}>Services</a>
        </nav>

        {/* Right Side: Logo */}
        <div className={styles.right}>
          <a href="/" className={styles.logo}>
            IH<span>PL</span>
          </a>
        </div>

      </div>
    </header>
  );
}
