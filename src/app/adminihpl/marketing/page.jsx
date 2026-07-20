import styles from '../admin.module.css';

export default function MarketingPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Marketing</h1>
          <p>Where are your leads coming from?</p>
        </div>
      </header>

      <div className={styles.kpiGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Total Ad Spend</div><div className={styles.kpiValue}>₹4,50,000</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Cost Per Lead (CPL)</div><div className={styles.kpiValue}>₹350</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Total Ad Clicks</div><div className={styles.kpiValue}>12,400</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Conversion Rate</div><div className={styles.kpiValue}>4.2%</div></div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Campaign Performance</h2>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Platform</th>
              <th>Spend</th>
              <th>Leads</th>
              <th>CPL</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Signature Launch Q3</td>
              <td>Google Ads</td>
              <td>₹1,50,000</td>
              <td>420</td>
              <td>₹357</td>
              <td><span className={`${styles.trend} ${styles.up}`}>420%</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Farmhouse Retargeting</td>
              <td>Meta Ads</td>
              <td>₹80,000</td>
              <td>310</td>
              <td>₹258</td>
              <td><span className={`${styles.trend} ${styles.up}`}>380%</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Commercial Leads Broad</td>
              <td>Google Ads</td>
              <td>₹1,20,000</td>
              <td>140</td>
              <td>₹857</td>
              <td><span className={`${styles.trend} ${styles.down}`}>85%</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
