import styles from '../crm.module.css';

export default function EmployeesPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Employees Directory</h1>
        <p style={{ color: '#64748b' }}>Manage your team and track performance.</p>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Assigned Leads</th>
              <th>Converted</th>
              <th>Revenue Gen.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>A</div>
                <strong style={{ color: '#0f172a' }}>Aman</strong>
              </td>
              <td>Owner</td>
              <td>Management</td>
              <td>120</td>
              <td>42</td>
              <td style={{ fontWeight: 600, color: '#16a34a' }}>₹4.2 Cr</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>S</div>
                <strong style={{ color: '#0f172a' }}>Sneha</strong>
              </td>
              <td>Sales Exec</td>
              <td>Sales</td>
              <td>340</td>
              <td>28</td>
              <td style={{ fontWeight: 600, color: '#16a34a' }}>₹2.8 Cr</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>R</div>
                <strong style={{ color: '#0f172a' }}>Raj</strong>
              </td>
              <td>Marketing Head</td>
              <td>Marketing</td>
              <td>-</td>
              <td>-</td>
              <td style={{ fontWeight: 600, color: '#94a3b8' }}>-</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
