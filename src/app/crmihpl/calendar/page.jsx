import styles from '../crm.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPage() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generating a simple 35-day grid for July 2026 (starts on Wed)
  const grid = Array.from({ length: 35 }).map((_, i) => i - 2); 

  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Calendar</h1>
          <p style={{ color: '#64748b' }}>Schedule and view all meetings, visits, and follow-ups.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ padding: '8px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronLeft size={20}/></button>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>July 2026</h2>
          <button style={{ padding: '8px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronRight size={20}/></button>
          <button style={{ padding: '10px 20px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, marginLeft: '16px' }}>+ New Event</button>
        </div>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
          {days.map(day => (
            <div key={day} style={{ padding: '16px', textAlign: 'center', fontWeight: 600, color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {day}
            </div>
          ))}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridAutoRows: 'minmax(120px, auto)' }}>
          {grid.map((date, idx) => {
            const isCurrentMonth = date > 0 && date <= 31;
            const isToday = date === 20;
            
            return (
              <div key={idx} style={{ borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '12px', background: isCurrentMonth ? '#fff' : '#f8fafc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontWeight: isToday ? 700 : 500, color: isCurrentMonth ? (isToday ? '#3b82f6' : '#0f172a') : '#94a3b8', background: isToday ? '#e0f2fe' : 'transparent', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                  {date > 0 ? (date <= 31 ? date : date - 31) : date + 30}
                </span>
                
                {/* Dummy Events */}
                {date === 20 && (
                  <>
                    <div style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>10:00 - Site Visit (Amit)</div>
                    <div style={{ background: '#f3e8ff', color: '#9333ea', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>14:00 - Follow Up (Rahul)</div>
                  </>
                )}
                {date === 21 && (
                  <div style={{ background: '#dbeafe', color: '#2563eb', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>11:30 - Sales Meeting</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
