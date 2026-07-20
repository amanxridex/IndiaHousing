"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, MessageCircle, Phone, Mail, Calendar, FileText, CheckCircle, Clock } from 'lucide-react';
import styles from '../crm.module.css';
import { supabase } from '../../../lib/supabaseClient';

export default function LeadsWorkspace() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      const { data, error } = await supabase
        .from('leads')
        .select(`
          id, name, phone, email, city, source, budget, status, priority, created_at,
          projects(name),
          employees(name)
        `)
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Error fetching leads:", error);
      } else {
        // Map the relational data to match the UI format
        const formattedLeads = data.map(lead => ({
          id: lead.id.substring(0, 8),
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
          city: lead.city,
          source: lead.source,
          project: lead.projects?.name || 'N/A',
          budget: lead.budget || '-',
          employee: lead.employees?.name || 'Unassigned',
          status: lead.status,
          priority: lead.priority,
          date: new Date(lead.created_at).toLocaleDateString()
        }));
        setLeads(formattedLeads);
      }
      setLoading(false);
    }
    fetchLeads();
  }, []);

  const renderLeadWorkspace = () => {
    if (!selectedLead) return null;

    return (
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '60%', background: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.1)', zIndex: 100, display: 'flex', flexDirection: 'column' }}>
        {/* Workspace Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#0f172a' }}>{selectedLead.name}</h2>
              <span className={`${styles.badge} ${styles.new}`}>{selectedLead.status}</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{selectedLead.phone} • {selectedLead.email}</p>
          </div>
          <button onClick={() => setSelectedLead(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}>&times;</button>
        </div>

        {/* Workspace Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', padding: '0 32px', gap: '24px' }}>
          {['Overview', 'Timeline', 'Notes', 'Calls', 'WhatsApp', 'Documents', 'Site Visits'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{ padding: '16px 0', background: 'none', border: 'none', borderBottom: activeTab === tab ? '2px solid #3b82f6' : '2px solid transparent', color: activeTab === tab ? '#3b82f6' : '#64748b', fontWeight: activeTab === tab ? 600 : 500, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Workspace Content */}
        <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          {activeTab === 'Overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>Lead Details</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Lead ID</span><strong>{selectedLead.id}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Source</span><strong>{selectedLead.source}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>City</span><strong>{selectedLead.city}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Created</span><strong>{selectedLead.date}</strong></div>
                </div>
              </div>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>Property Interest</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Project</span><strong>{selectedLead.project}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Budget</span><strong>{selectedLead.budget}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Assigned To</span><strong>{selectedLead.employee}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Priority</span><strong>{selectedLead.priority}</strong></div>
                </div>
              </div>
              
              <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                <h4 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>Quick Actions</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#25d366', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}><MessageCircle size={18}/> WhatsApp</button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}><Phone size={18}/> Call</button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}><Mail size={18}/> Email</button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}><Calendar size={18}/> Book Visit</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={16}/></div>
                    <div style={{ width: '2px', height: '100%', background: '#e2e8f0', margin: '8px 0' }}></div>
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Site Visit Booked</h5>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Assigned to Aman. Scheduled for Tomorrow at 10 AM.</p>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '4px' }}>Today, 02:30 PM</span>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={16}/></div>
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Lead Created</h5>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Lead arrived via Google Ads campaign.</p>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginTop: '4px' }}>Yesterday, 09:15 AM</span>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Leads Workspace</h1>
          <p style={{ color: '#64748b' }}>Complete 360° view of all operational leads.</p>
        </div>
        <button style={{ padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>+ Add Lead</button>
      </header>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
          <Search size={18} color="#94a3b8" />
          <input type="text" placeholder="Search by name, phone, or email..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem' }} />
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}><Filter size={18} /> Filters</button>
      </div>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Project</th>
              <th>Budget</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>Loading leads from Supabase...</td></tr>
            ) : leads.length === 0 ? (
              <tr><td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No leads found.</td></tr>
            ) : (
              leads.map(lead => (
                <tr key={lead.id} onClick={() => setSelectedLead(lead)}>
                  <td style={{ color: '#64748b' }}>{lead.id}</td>
                  <td style={{ fontWeight: 600, color: '#0f172a' }}>{lead.name}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.project}</td>
                  <td>{lead.budget}</td>
                  <td>{lead.employee}</td>
                  <td><span className={`${styles.badge} ${styles.new}`}>{lead.status}</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Slide-out Workspace Panel */}
      {renderLeadWorkspace()}
      
      {/* Overlay */}
      {selectedLead && (
        <div 
          onClick={() => setSelectedLead(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.4)', zIndex: 90 }}
        />
      )}
    </main>
  );
}
