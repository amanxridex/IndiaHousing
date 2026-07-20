"use client";
import { useState } from 'react';
import styles from '../admin.module.css';
import { Lock } from 'lucide-react';

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState(null);
  const [statusType, setStatusType] = useState('success');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setStatusMsg('Updating...');
    setStatusType('success');

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        setStatusMsg(data.error || 'Failed to update password');
        setStatusType('error');
      } else {
        setStatusMsg('Password updated successfully!');
        setStatusType('success');
        setCurrentPassword('');
        setNewPassword('');
      }
    } catch (err) {
      setStatusMsg('An unexpected error occurred.');
      setStatusType('error');
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Settings</h1>
          <p>Configure dashboard behavior and security.</p>
          <p>Configure your preferences and security.</p>
        </div>
      </header>

      <div className={styles.gridHalf}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '24px'}}>Profile Settings</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
              <input type="text" defaultValue="Aman" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
              <input type="email" defaultValue="aman@indiahousing.org" readOnly style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', width: '100%' }} />
            </div>
            <button style={{ padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', alignSelf: 'flex-start' }}>Save Changes</button>
          </form>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '24px'}}>Security & Auth</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0' }}>Two-Factor Authentication</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Add an extra layer of security to your account.</p>
              </div>
              <button style={{ padding: '8px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Enable 2FA</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0' }}>Change Password</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Update your dashboard login password.</p>
              </div>
              <button style={{ padding: '8px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
