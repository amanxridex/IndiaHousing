"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ShieldAlert } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to login');
      } else {
        router.push('/adminihpl');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fbfd', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: '#fff', width: '100%', maxWidth: '400px', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ background: '#0f172a', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
            <Lock size={32} color="#ffffff" />
          </div>
          <h1 style={{ color: '#0f172a', fontSize: '1.5rem', margin: '0 0 8px 0', fontWeight: 700 }}>Command Center</h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.9rem' }}>Enter the admin password to continue.</p>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', background: '#fee2e2', color: '#ef4444', borderRadius: '12px', marginBottom: '24px', fontSize: '0.9rem', lineHeight: 1.4 }}>
            <ShieldAlert size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 600 }}>Master Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', color: '#0f172a', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ marginTop: '8px', background: '#0f172a', color: '#fff', padding: '16px', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'background 0.2s' }}
          >
            {loading ? 'Authenticating...' : 'Unlock Command Center'}
          </button>
        </form>
      </div>
    </div>
  );
}
