import styles from './FeaturedProjectBlock.module.css';
import Link from 'next/link';

export default function FeaturedProjectBlock({ project }) {
  if (!project) return null;

  return (
    <div className={styles.featuredContainer}>
      <img src={project.image} alt={project.name} className={styles.bgImage} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.tag}>Project of the Month</span>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.actions}>
          <Link href={`/projects/${project.id}`} className={styles.btnPrimary}>Explore</Link>
          <button className={styles.btnSecondary}>Download Brochure</button>
        </div>
      </div>
    </div>
  );
}
