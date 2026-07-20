import styles from '../admin.module.css';

export default function DownloadsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Downloads</h1>
          <p>What are users downloading?</p>
        </div>
      </header>

      <div className={styles.kpiGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Brochures</div><div className={styles.kpiValue}>4,520</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Price Lists</div><div className={styles.kpiValue}>2,180</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Master Plans</div><div className={styles.kpiValue}>1,840</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Layouts</div><div className={styles.kpiValue}>920</div></div>
      </div>

      <div className={styles.gridHalf}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Most Downloaded Files</h2>
          <table className={styles.dataTable}>
            <thead><tr><th>File Name</th><th>Project</th><th>Downloads</th></tr></thead>
            <tbody>
              <tr><td>Brochure 2026.pdf</td><td>IHPL Signature</td><td>2,450</td></tr>
              <tr><td>MasterPlan_HighRes.pdf</td><td>Ganga Farms</td><td>1,210</td></tr>
              <tr><td>PriceList_Q3.pdf</td><td>Commercial Park</td><td>980</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Download Sources</h2>
          <table className={styles.dataTable}>
            <thead><tr><th>Source</th><th>Count</th></tr></thead>
            <tbody>
              <tr><td>Project Pages</td><td>6,200</td></tr>
              <tr><td>Popup Modals</td><td>2,140</td></tr>
              <tr><td>WhatsApp Links</td><td>1,120</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
