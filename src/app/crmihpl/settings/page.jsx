import styles from '../crm.module.css';
import { Database, Key, Building } from 'lucide-react';

export default function SettingsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>System Settings</h1>
        <p style={{ color: '#64748b' }}>Configure global CRM parameters and integrations.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}><Building size={20}/></div>
            <h2 className={styles.cardTitle} style={{ margin: 0 }}>Company Profile</h2>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Company Name</label>
              <input type="text" defaultValue="India Housing" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Support Email</label>
              <input type="email" defaultValue="support@indiahousing.org" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <button style={{ padding: '10px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '8px', fontWeight: 600 }}>Save Profile</button>
          </form>
        </div>

        <div className={styles.card}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}><Key size={20}/></div>
            <h2 className={styles.cardTitle} style={{ margin: 0 }}>API Keys (Read Only)</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '4px' }}>Twilio SMS Gateway</label>
              <div style={{ padding: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'monospace', color: '#0f172a' }}>sk_test_51Nx...89xZ</div>
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '4px' }}>WhatsApp Business API</label>
              <div style={{ padding: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'monospace', color: '#0f172a' }}>EAALbY...qW7p</div>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}><Database size={20}/></div>
            <h2 className={styles.cardTitle} style={{ margin: 0 }}>Database Backup</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0' }}>Automated Daily Backups</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Last successful backup: Today at 02:00 AM. Next backup scheduled for Tomorrow at 02:00 AM.</p>
            </div>
            <button style={{ padding: '10px 20px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Force Backup Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
