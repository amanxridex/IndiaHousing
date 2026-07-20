"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, ArrowRight, ShieldAlert } from 'lucide-react';

export default function CRMLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/crm/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to login');
      } else {
        router.push('/crmihpl');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: '#1e293b', width: '100%', maxWidth: '440px', padding: '40px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid #334155' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ background: '#3b82f6', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
            <Building2 size={36} color="#ffffff" />
          </div>
          <h1 style={{ color: '#f8fafc', fontSize: '1.75rem', margin: '0 0 8px 0', fontWeight: 700 }}>IHPL Operations</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>Secure CRM Access Portal</p>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', background: '#450a0a', color: '#fca5a5', borderRadius: '12px', marginBottom: '24px', fontSize: '0.9rem', lineHeight: 1.4, border: '1px solid #7f1d1d' }}>
            <ShieldAlert size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>Username</label>
            <input 
              type="text" 
              placeholder="e.g., superadmin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '14px', background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>Password</label>
              <a href="#" style={{ color: '#3b82f6', fontSize: '0.85rem', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '14px', background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <input type="checkbox" id="remember" style={{ width: '16px', height: '16px', accentColor: '#3b82f6' }} />
            <label htmlFor="remember" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Remember this device</label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ marginTop: '16px', background: '#3b82f6', color: '#fff', padding: '16px', border: 'none', borderRadius: '12px', fontSize: '1.05rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.2s' }}>
            {loading ? 'Authenticating...' : <><ArrowRight size={20} /> Access CRM</>}
          </button>
        </form>
        
        <div style={{ marginTop: '32px', textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '24px' }}>
           <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Restricted access. Unauthorized entry is prohibited.</p>
        </div>
      </div>
    </div>
  );
}
