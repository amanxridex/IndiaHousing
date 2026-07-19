import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          IH<span>PL</span>
        </a>
      </div>
    </header>
  );
}
