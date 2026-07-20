import styles from '../admin.module.css';
import { Shield } from 'lucide-react';

export default function UsersPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Dashboard Users</h1>
          <p>Manage who has access to the Command Center.</p>
        </div>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Shield className={styles.sidebarIcon} />
            <h2 className={styles.cardTitle} style={{ margin: 0 }}>Active Team Members</h2>
          </div>
          <button style={{ padding: '8px 16px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>+ Add User</button>
        </div>
        
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Aman</td>
              <td>aman@indiahousing.org</td>
              <td><span className={`${styles.badge} ${styles.blue}`}>Owner</span></td>
              <td>Today, 09:00 AM</td>
              <td><span className={`${styles.badge} ${styles.green}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Marketing Head</td>
              <td>marketing@indiahousing.org</td>
              <td><span className={`${styles.badge} ${styles.orange}`}>Marketing</span></td>
              <td>Yesterday, 04:30 PM</td>
              <td><span className={`${styles.badge} ${styles.green}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Sales Lead</td>
              <td>sales@indiahousing.org</td>
              <td><span className={`${styles.badge} ${styles.orange}`}>Sales</span></td>
              <td>Today, 10:15 AM</td>
              <td><span className={`${styles.badge} ${styles.green}`}>Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
