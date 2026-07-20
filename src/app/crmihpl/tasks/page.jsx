"use client";
import styles from '../crm.module.css';

export default function TasksPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Tasks Board</h1>
          <p style={{ color: '#64748b' }}>Manage your daily operational tasks using the Kanban board.</p>
        </div>
        <button style={{ padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>+ Create Task</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', minHeight: '600px' }}>
        
        {/* Pending Column */}
        <div style={{ background: '#e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Pending</h3>
            <span style={{ background: '#cbd5e1', padding: '2px 8px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>2</span>
          </div>
          
          <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'grab' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className={`${styles.badge}`} style={{ background: '#fee2e2', color: '#ef4444', fontSize: '0.7rem' }}>High Priority</span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Jul 20</span>
            </div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '0.95rem' }}>Send Agreement to Priya</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>Prepare and email the booking agreement for Ganga Farms plot GF-45.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 600 }}>S</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Sneha</span>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'grab' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className={`${styles.badge}`} style={{ background: '#fef3c7', color: '#d97706', fontSize: '0.7rem' }}>Med Priority</span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Jul 21</span>
            </div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '0.95rem' }}>Update Price List PDF</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>Upload the new Q3 price list for Commercial Park to the system.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 600 }}>R</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Raj</span>
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div style={{ background: '#e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>In Progress</h3>
            <span style={{ background: '#cbd5e1', padding: '2px 8px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>1</span>
          </div>
          
          <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid #3b82f6', cursor: 'grab' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className={`${styles.badge}`} style={{ background: '#fee2e2', color: '#ef4444', fontSize: '0.7rem' }}>High Priority</span>
              <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>Today</span>
            </div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '0.95rem' }}>Verify KYC for Ravi Verma</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>Check Aadhar and PAN uploads for booking confirmation.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 600 }}>A</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Aman</span>
            </div>
          </div>
        </div>

        {/* Completed Column */}
        <div style={{ background: '#e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Completed</h3>
            <span style={{ background: '#cbd5e1', padding: '2px 8px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>0</span>
          </div>
          
          {/* Empty state */}
          <div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '24px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            Drop completed tasks here.
          </div>
        </div>

      </div>
    </main>
  );
}
