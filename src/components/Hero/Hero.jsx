import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Building the <span className={styles.highlight}>Future</span><br />
          of India
        </h1>
        <p className={styles.subtitle}>
          IHPL delivers premium residential and commercial spaces that redefine luxury and set new benchmarks for quality and design.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#projects" className="btn btn-primary">Explore Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
