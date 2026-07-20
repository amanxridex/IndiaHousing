import styles from './ProjectCard.module.css';
import Link from 'next/link';
import { MapPin, Maximize, Calendar, FileText, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onCompare, isCompared }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {project.isPremium && <span className={styles.badge}>Premium</span>}
        <img src={project.image} alt={project.name} className={styles.image} />
        
        {/* Hover Overlay */}
        <div className={styles.hoverOverlay}>
          <div className={styles.hoverButtons}>
            <Link href={`/projects/${project.id}`} className={styles.btnPrimary}>Explore Project</Link>
            <button className={styles.btnSecondary}>Book Site Visit</button>
            <button className={styles.btnOutline}>360° Tour</button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{project.name}</h3>
          <label className={styles.compareCheckbox}>
            <input 
              type="checkbox" 
              checked={isCompared} 
              onChange={() => onCompare(project.id)} 
            />
            <span>Compare</span>
          </label>
        </div>
        
        <p className={styles.location}>
          <MapPin size={16} /> {project.location}
        </p>

        <div className={styles.highlights}>
          {project.highlights.slice(0, 4).map((hl, i) => (
            <span key={i} className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} /> {hl}
            </span>
          ))}
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Starts From</span>
            <span className={styles.detailValue}>{project.priceStr}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}><Maximize size={14} /> Size</span>
            <span className={styles.detailValue}>{project.area}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}><Calendar size={14} /> Possession</span>
            <span className={styles.detailValue}>{project.possession}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}><FileText size={14} /> RERA</span>
            <span className={styles.detailValue}>{project.rera}</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href={`/projects/${project.id}`} className={styles.footerBtn}>View Details</Link>
        <button className={styles.footerBtn}>Brochure</button>
        <button className={styles.footerBtnPrimary}>Enquire</button>
      </div>
    </div>
  );
}
