import styles from '../admin.module.css';
import { Download, Calendar, Mail } from 'lucide-react';

export default function ReportsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Reports Central</h1>
          <p>Export and schedule automated reports.</p>
        </div>
      </header>

      <div className={styles.gridHalf}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Generate Export</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
              <div><h4 style={{ margin: 0 }}>Daily Executive Summary</h4><p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Top level metrics for the last 24 hours.</p></div>
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}><Download size={16}/> PDF</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
              <div><h4 style={{ margin: 0 }}>Weekly Lead Roster</h4><p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>All leads acquired this week.</p></div>
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}><Download size={16}/> CSV</button>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Scheduled Reports</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ padding: '12px', background: '#e0f2fe', color: '#0284c7', borderRadius: '12px' }}><Calendar size={24}/></div>
              <div>
                <h4 style={{ margin: '0 0 4px 0' }}>Monday Morning Briefing</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', marginBottom: '8px' }}>Sends weekly performance summary to directors.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#16a34a' }}><Mail size={14}/> Active (aman@indiahousing.org)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
