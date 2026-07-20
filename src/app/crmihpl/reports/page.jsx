import styles from '../crm.module.css';
import { Download, PieChart, Users, Building2 } from 'lucide-react';

export default function ReportsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Operations Reports</h1>
        <p style={{ color: '#64748b' }}>Export detailed performance metrics across sales, employees, and projects.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '12px', borderRadius: '12px' }}><PieChart size={24}/></div>
            <h3 style={{ margin: 0, color: '#0f172a' }}>Sales Report</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>Comprehensive breakdown of all leads, conversion rates, and total revenue generated.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> PDF</button>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> CSV</button>
          </div>
        </div>

        <div className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: '#dcfce7', color: '#16a34a', padding: '12px', borderRadius: '12px' }}><Users size={24}/></div>
            <h3 style={{ margin: 0, color: '#0f172a' }}>Employee Report</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>Individual performance metrics including assigned leads, site visits, and closures.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> PDF</button>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> CSV</button>
          </div>
        </div>

        <div className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '12px', borderRadius: '12px' }}><Building2 size={24}/></div>
            <h3 style={{ margin: '0', color: '#0f172a' }}>Project Report</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>Inventory status, available units, and revenue generated per property.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> PDF</button>
            <button style={{ flex: 1, padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }}><Download size={18}/> CSV</button>
          </div>
        </div>
      </div>
    </main>
  );
}
