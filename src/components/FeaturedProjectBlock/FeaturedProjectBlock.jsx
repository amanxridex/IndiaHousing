import styles from './FeaturedProjectBlock.module.css';
import Link from 'next/link';
import { getMediaType } from '../../utils/media';

export default function FeaturedProjectBlock({ project }) {
  if (!project) return null;

  return (
    <div className={styles.featuredContainer}>
      {(() => {
        const media = getMediaType(project.image);
        if (media.type === 'youtube') {
          return <iframe src={media.src} allow="autoplay; encrypted-media" className={styles.bgImage} allowFullScreen style={{ border: 'none', pointerEvents: 'none' }} />;
        } else if (media.type === 'video') {
          return <video src={media.src} autoPlay muted loop playsInline className={styles.bgImage} />;
        } else {
          return <img src={media.src} alt={project.name} className={styles.bgImage} />;
        }
      })()}
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
