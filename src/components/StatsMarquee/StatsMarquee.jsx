import styles from './StatsMarquee.module.css';

const stats = [
  { value: '40+', label: 'CITIES' },
  { value: '50+', label: 'VIP PROJECTS' },
  { value: '10,000+', label: 'HAPPY FAMILIES' },
  { value: '20+', label: 'YEARS IN REAL ESTATE' },
];

export default function StatsMarquee() {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.marqueeTrack}>
        {/* First Set */}
        {stats.map((stat, index) => (
          <div key={`stat1-${index}`} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
        {/* Second Set (Duplicate) */}
        {stats.map((stat, index) => (
          <div key={`stat2-${index}`} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
        {/* Third Set (Duplicate to ensure continuous scrolling for wide screens) */}
        {stats.map((stat, index) => (
          <div key={`stat3-${index}`} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
