import styles from '../admin.module.css';

export default function ProjectsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Projects Analytics</h1>
          <p>Performance tracking across all developments.</p>
        </div>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Project Performance Leaderboard</h2>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Views</th>
              <th>Leads</th>
              <th>Downloads</th>
              <th>Call Clicks</th>
              <th>WhatsApp</th>
              <th>Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>IHPL Signature</td>
              <td>124,500</td>
              <td>3,420</td>
              <td>1,250</td>
              <td>450</td>
              <td>890</td>
              <td><span className={`${styles.trend} ${styles.up}`}>2.7%</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Ganga Farms</td>
              <td>89,200</td>
              <td>2,150</td>
              <td>840</td>
              <td>310</td>
              <td>540</td>
              <td><span className={`${styles.trend} ${styles.up}`}>2.4%</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Commercial Park</td>
              <td>61,040</td>
              <td>1,800</td>
              <td>520</td>
              <td>280</td>
              <td>410</td>
              <td><span className={`${styles.trend} ${styles.down}`}>1.8%</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
