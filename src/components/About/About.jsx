import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Defining Luxury Living in India</h2>
          <p className={styles.text}>
            At India Housing Projects Limited (IHPL), we don't just build structures; we craft environments that inspire and elevate. With a legacy of over 2 decades, we have been at the forefront of the real estate revolution in India.
          </p>
          <p className={styles.text}>
            Our commitment to architectural brilliance, sustainable development, and unwavering quality has made us the trusted choice for thousands of families and businesses.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Happy Families</div>
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
            alt="Modern luxury home exterior" 
            className={styles.image} 
          />
        </div>
      </div>
    </section>
  );
}
