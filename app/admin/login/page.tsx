'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  // If already logged in, skip straight to the dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace('/admin');
    });
  }, [router]);

  async function handleLogin() {
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.replace('/admin');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5EFE6',
        padding: '1.5rem',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          background: '#fff',
          border: '1px solid #E0D8C8',
          borderRadius: 8,
          padding: '2rem',
        }}
      >
        <h1 style={{ margin: '0 0 1.5rem', fontSize: 20, color: '#1E2318' }}>Admin Login</h1>

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          autoComplete="username"
        />

        <label style={labelStyle}>Password</label>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            style={{ ...inputStyle, marginBottom: 0, paddingRight: '3.5rem' }}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: '#6B5B45', fontSize: 12,
              cursor: 'pointer', padding: '4px 6px',
            }}
          >
            {showPw ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && <p style={{ color: '#b00', fontSize: 13, margin: '0 0 0.75rem' }}>{error}</p>}

        <button onClick={handleLogin} disabled={loading} style={buttonStyle}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  color: '#6B5B45',
  marginBottom: 4,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  marginBottom: '1rem',
  border: '1px solid #D4CFC8',
  borderRadius: 6,
  fontSize: 14,
  boxSizing: 'border-box',
  color: '#1E2318',
  background: '#fff',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.7rem',
  background: '#1E2318',
  color: '#F5EFE6',
  border: 'none',
  borderRadius: 6,
  fontSize: 14,
  cursor: 'pointer',
};