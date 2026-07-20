import styles from '../crm.module.css';

export default function FollowUpsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Follow Ups</h1>
        <p style={{ color: '#64748b' }}>Never let a lead go cold. Track all upcoming interactions.</p>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Lead Name</th>
              <th>Assigned Employee</th>
              <th>Next Follow-up</th>
              <th>Last Notes</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Rahul Sharma</td>
              <td>Aman</td>
              <td style={{ fontWeight: 600, color: '#ef4444' }}>Today, 02:00 PM</td>
              <td><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Interested in GF-45. Call to confirm budget.</span></td>
              <td><span className={`${styles.badge}`} style={{ background: '#fee2e2', color: '#ef4444' }}>Overdue</span></td>
              <td><button style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Done</button></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Priya Singh</td>
              <td>Sneha</td>
              <td style={{ fontWeight: 600, color: '#d97706' }}>Today, 05:30 PM</td>
              <td><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Wants to discuss payment plan for IHPL Signature.</span></td>
              <td><span className={`${styles.badge}`} style={{ background: '#fef3c7', color: '#d97706' }}>Due Today</span></td>
              <td><button style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Done</button></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Amit Kumar</td>
              <td>Raj</td>
              <td>Tomorrow, 10:00 AM</td>
              <td><span style={{ fontSize: '0.85rem', color: '#64748b' }}>Follow up after site visit. Send brochure again.</span></td>
              <td><span className={`${styles.badge} ${styles.new}`}>Upcoming</span></td>
              <td><button style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Done</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
