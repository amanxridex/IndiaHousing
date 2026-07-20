import styles from '../crm.module.css';
import { Check, X } from 'lucide-react';

export default function RolesPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Roles & Permissions</h1>
        <p style={{ color: '#64748b' }}>Strictly control access levels across the CRM.</p>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Permission</th>
              <th style={{ textAlign: 'center' }}>Owner</th>
              <th style={{ textAlign: 'center' }}>Admin</th>
              <th style={{ textAlign: 'center' }}>Sales Exec</th>
              <th style={{ textAlign: 'center' }}>Accounts</th>
              <th style={{ textAlign: 'center' }}>Viewer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>View Dashboard</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>View Assigned Leads</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Update Leads</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>View All Customers</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Delete Leads/Users</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Global Settings</td>
              <td style={{ textAlign: 'center' }}><Check color="#16a34a" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
              <td style={{ textAlign: 'center' }}><X color="#ef4444" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
