"use client";
import styles from '../crm.module.css';
import { Plus } from 'lucide-react';

export default function ProjectsWorkspace() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Internal Projects</h1>
          <p style={{ color: '#64748b' }}>Manage inventory and internal property analytics.</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}><Plus size={18}/> Add Project</button>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Project Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Manager</th>
              <th>Inventory</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>IHPL Signature</td>
              <td>Residential</td>
              <td>Noida Ext.</td>
              <td>Aman</td>
              <td>
                <div style={{ display: 'flex', gap: '4px', fontSize: '0.8rem' }}>
                  <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px' }}>42 Avail</span>
                  <span style={{ background: '#fee2e2', color: '#ef4444', padding: '2px 6px', borderRadius: '4px' }}>12 Sold</span>
                </div>
              </td>
              <td style={{ fontWeight: 600 }}>₹14.2 Cr</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Ganga Farms</td>
              <td>Farmhouse</td>
              <td>Jewar</td>
              <td>Sneha</td>
              <td>
                <div style={{ display: 'flex', gap: '4px', fontSize: '0.8rem' }}>
                  <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px' }}>15 Avail</span>
                  <span style={{ background: '#fef3c7', color: '#d97706', padding: '2px 6px', borderRadius: '4px' }}>5 Res</span>
                  <span style={{ background: '#fee2e2', color: '#ef4444', padding: '2px 6px', borderRadius: '4px' }}>30 Sold</span>
                </div>
              </td>
              <td style={{ fontWeight: 600 }}>₹24.0 Cr</td>
              <td><span className={`${styles.badge} ${styles.interested}`}>Active</span></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600, color: '#0f172a' }}>Commercial Park</td>
              <td>Commercial</td>
              <td>Delhi</td>
              <td>Raj</td>
              <td>
                <div style={{ display: 'flex', gap: '4px', fontSize: '0.8rem' }}>
                  <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px' }}>120 Avail</span>
                </div>
              </td>
              <td style={{ fontWeight: 600 }}>₹0</td>
              <td><span className={`${styles.badge} ${styles.new}`}>Upcoming</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
