"use client";
import { useState, useEffect } from 'react';
import styles from '../crm.module.css';
import { ShieldCheck, Plus, Trash2, ShieldAlert } from 'lucide-react';

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // New User State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [statusMsg, setStatusMsg] = useState(null);
  const [statusType, setStatusType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/crm/users');
      const data = await res.json();
      if (res.ok) setUsers(data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      const res = await fetch('/api/crm/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role })
      });
      const data = await res.json();
      
      if (!res.ok) {
        setStatusMsg(data.error);
        setStatusType('error');
      } else {
        setStatusMsg('User created successfully!');
        setStatusType('success');
        setUsername('');
        setPassword('');
        setRole('employee');
        fetchUsers(); // Refresh list
      }
    } catch (err) {
      setStatusMsg('Unexpected error occurred.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteUser = async (id, currentUsername) => {
    if (!confirm(`Are you sure you want to delete ${currentUsername}?`)) return;

    try {
      const res = await fetch(`/api/crm/users?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchUsers(); // Refresh list
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete user');
      }
    } catch (err) {
      alert('Unexpected error occurred.');
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1>Account Management Hub</h1>
        <p style={{ color: '#64748b' }}>Superadmin access only. Create and manage CRM user accounts.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        
        {/* Create User Panel */}
        <div className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
             <div style={{ background: '#dbeafe', color: '#2563eb', padding: '10px', borderRadius: '8px' }}><ShieldCheck size={20} /></div>
             <h2 className={styles.cardTitle} style={{ margin: 0 }}>Create New Account</h2>
          </div>

          <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Assign Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', background: '#fff' }}>
                <option value="employee">Employee (Restricted Access)</option>
                <option value="admin">Admin (Manager Access)</option>
                <option value="superadmin">Superadmin (Full Access)</option>
              </select>
            </div>

            {statusMsg && (
              <div style={{ padding: '10px', borderRadius: '8px', fontSize: '0.85rem', background: statusType === 'success' ? '#dcfce7' : '#fee2e2', color: statusType === 'success' ? '#16a34a' : '#ef4444' }}>
                {statusMsg}
              </div>
            )}

            <button type="submit" disabled={isSubmitting} style={{ padding: '12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              {isSubmitting ? 'Creating...' : <><Plus size={18} /> Create Account</>}
            </button>
          </form>
        </div>

        {/* Existing Users Table */}
        <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
          <table className={styles.dataTable}>
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th>Username</th>
                <th>Assigned Role</th>
                <th>Created Date</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>Loading accounts...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No accounts found.</td></tr>
              ) : (
                users.map(user => (
                  <tr key={user.id}>
                    <td style={{ fontWeight: 600, color: '#0f172a' }}>{user.username}</td>
                    <td>
                      <span style={{ 
                        padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600,
                        background: user.role === 'superadmin' ? '#fef3c7' : (user.role === 'admin' ? '#e0f2fe' : '#f1f5f9'),
                        color: user.role === 'superadmin' ? '#d97706' : (user.role === 'admin' ? '#0284c7' : '#64748b')
                      }}>
                        {user.role.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ color: '#64748b' }}>{new Date(user.created_at).toLocaleDateString()}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button onClick={() => handleDeleteUser(user.id, user.username)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px' }}>
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
