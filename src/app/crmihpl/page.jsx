import { Sparkles, Users, Calendar, BarChart, FileText, CheckCircle } from 'lucide-react';
import styles from './crm.module.css';

export default function CRMDashboard() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p style={{ color: '#64748b' }}>Good morning Aman! Here's your operations overview.</p>
      </header>

      {/* AI Insights Panel */}
      <div className={styles.aiPanel}>
        <h3><Sparkles size={20} /> AI Sales Insights</h3>
        <ul className={styles.aiList}>
          <li><strong>📈 Performance:</strong> You have 12 new leads today. Ganga Farms is converting at 21% this week.</li>
          <li><strong>⚠️ Action Required:</strong> Rahul has not followed up with 5 highly interested leads from yesterday.</li>
          <li><strong>🎯 Marketing:</strong> Facebook Ads generated 17 high-quality leads in the last 48 hours.</li>
          <li><strong>🚗 Schedule:</strong> You have 3 site visits scheduled for today across 2 projects.</li>
        </ul>
      </div>

      {/* KPIs */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Active Leads</div><div className={styles.kpiValue}>842</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Interested</div><div className={styles.kpiValue}>156</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Site Visits (Today)</div><div className={styles.kpiValue}>8</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Booked (This Month)</div><div className={styles.kpiValue}>12</div></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Sales Funnel (Static representation) */}
        <div className={styles.card}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '1.1rem' }}>Sales Funnel</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}><span>New Leads</span><strong>1,200</strong></div>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginLeft: '20px' }}><span>Contacted</span><strong>850</strong></div>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginLeft: '40px' }}><span>Interested</span><strong>340</strong></div>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginLeft: '60px' }}><span>Site Visit</span><strong>112</strong></div>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginLeft: '80px', color: '#16a34a' }}><span>Booked</span><strong>42</strong></div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.card}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '1.1rem' }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: '#dbeafe', color: '#2563eb', padding: '8px', borderRadius: '50%' }}><Users size={18} /></div>
              <div><p style={{ margin: 0, fontWeight: 500 }}>Rahul assigned to Lead #1042</p><span style={{ fontSize: '0.8rem', color: '#64748b' }}>10 mins ago</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: '#dcfce7', color: '#16a34a', padding: '8px', borderRadius: '50%' }}><Calendar size={18} /></div>
              <div><p style={{ margin: 0, fontWeight: 500 }}>Aman booked Site Visit for Ganga Farms</p><span style={{ fontSize: '0.8rem', color: '#64748b' }}>1 hour ago</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '50%' }}><FileText size={18} /></div>
              <div><p style={{ margin: 0, fontWeight: 500 }}>New Lead Received (Google Ads)</p><span style={{ fontSize: '0.8rem', color: '#64748b' }}>2 hours ago</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
