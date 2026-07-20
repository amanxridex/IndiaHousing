import styles from '../crm.module.css';

export default function SiteVisitsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Site Visits</h1>
        <p style={{ color: '#64748b' }}>Track on-ground meetings and project tours.</p>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Visitor Name</th>
              <th>Project</th>
              <th>Assigned Employee</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Amit Kumar</td>
              <td>Commercial Park</td>
              <td>Raj</td>
              <td>Today, Jul 20</td>
              <td>14:00 PM</td>
              <td><span className={`${styles.badge} ${styles.new}`}>Scheduled</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Neha Gupta</td>
              <td>IHPL Signature</td>
              <td>Aman</td>
              <td>Today, Jul 20</td>
              <td>10:00 AM</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Completed</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Priya Singh</td>
              <td>Ganga Farms</td>
              <td>Sneha</td>
              <td>Tomorrow, Jul 21</td>
              <td>11:30 AM</td>
              <td><span className={`${styles.badge} ${styles.new}`}>Scheduled</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Rahul Sharma</td>
              <td>IHPL Signature</td>
              <td>Aman</td>
              <td>Jul 18</td>
              <td>15:00 PM</td>
              <td><span className={`${styles.badge} ${styles.contacted}`}>Rescheduled</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
