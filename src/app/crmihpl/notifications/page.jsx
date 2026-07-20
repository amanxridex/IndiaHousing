import styles from '../crm.module.css';
import { UserPlus, CalendarCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Notifications</h1>
        <p style={{ color: '#64748b' }}>All system alerts, lead assignments, and reminders.</p>
      </header>

      <div className={styles.card} style={{ padding: '24px 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '12px', borderRadius: '50%' }}><UserPlus size={24}/></div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: '#0f172a' }}>New Lead Assigned</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>You have been assigned Lead #1042 (Rahul Sharma). Source: Google Ads.</p>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '8px' }}>10 mins ago</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ background: '#fee2e2', color: '#ef4444', padding: '12px', borderRadius: '50%' }}><AlertCircle size={24}/></div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: '#0f172a' }}>Follow-up Overdue</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Your follow-up with Priya Singh was scheduled for 2:00 PM today.</p>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '8px' }}>2 hours ago</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ background: '#dcfce7', color: '#16a34a', padding: '12px', borderRadius: '50%' }}><CheckCircle2 size={24}/></div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: '#0f172a' }}>Payment Received</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>First installment received for Commercial Park booking (C-014).</p>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '8px' }}>Yesterday, 04:30 PM</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '12px', borderRadius: '50%' }}><CalendarCheck size={24}/></div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: '#0f172a' }}>Site Visit Today</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Reminder: You have a site visit at Ganga Farms with Amit Kumar at 2:00 PM.</p>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '8px' }}>Yesterday, 09:00 AM</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
