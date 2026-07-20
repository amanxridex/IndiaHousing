"use client";
import { useState } from 'react';
import styles from '../crm.module.css';

export default function CustomersWorkspace() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const customers = [
    { id: 'C-001', name: 'Ravi Verma', phone: '+91 98111 22233', email: 'ravi@gmail.com', project: 'Ganga Farms', plot: 'GF-45', status: 'Payment 1', timeline: 2 },
    { id: 'C-002', name: 'Sunita Sharma', phone: '+91 99222 33344', email: 'sunita@yahoo.com', project: 'IHPL Signature', plot: 'A-201', status: 'Agreement', timeline: 3 },
  ];

  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Customers Database</h1>
        <p style={{ color: '#64748b' }}>Every booked customer and their payment milestones.</p>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Purchased Project</th>
              <th>Unit/Plot</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} onClick={() => setSelectedCustomer(c)}>
                <td style={{ color: '#64748b' }}>{c.id}</td>
                <td style={{ fontWeight: 600, color: '#0f172a' }}>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.project}</td>
                <td>{c.plot}</td>
                <td><span className={`${styles.badge} ${styles.siteVisit}`}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCustomer && (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '400px', background: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.1)', zIndex: 100, padding: '32px' }}>
          <button onClick={() => setSelectedCustomer(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b', float: 'right' }}>&times;</button>
          <h2 style={{ margin: '0 0 8px 0' }}>{selectedCustomer.name}</h2>
          <p style={{ color: '#64748b', margin: '0 0 32px 0' }}>{selectedCustomer.project} - {selectedCustomer.plot}</p>
          
          <h4 style={{ marginBottom: '16px' }}>Customer Timeline</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', background: '#e2e8f0', zIndex: 0 }}></div>
            
            {['Booked', 'Payment 1', 'Agreement', 'Registry', 'Possession'].map((step, idx) => {
              const isPast = idx < selectedCustomer.timeline;
              const isCurrent = idx === selectedCustomer.timeline - 1;
              return (
                <div key={step} style={{ display: 'flex', gap: '16px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: isPast ? '#2563eb' : '#fff', border: isPast ? 'none' : '2px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isPast && <span style={{ color: '#fff', fontSize: '0.7rem' }}>✓</span>}
                  </div>
                  <strong style={{ color: isCurrent ? '#0f172a' : (isPast ? '#64748b' : '#94a3b8') }}>{step}</strong>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </main>
  );
}
