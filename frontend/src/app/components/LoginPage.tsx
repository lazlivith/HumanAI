import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { apiClient } from '../api/client';

const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";
const FONT_INTER = "'Inter', sans-serif";

const SIDEBAR_GRADIENT = 'linear-gradient(175deg, #1A4B6E 0%, #1A6B7A 50%, #1A8A7A 100%)';
const BTN_GRADIENT     = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';

/* ── Checkbox ────────────────────────────────────────────────── */
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div
      onClick={onChange}
      style={{
        width: 16, height: 16, borderRadius: 4, flexShrink: 0, cursor: 'pointer',
        border: `1.5px solid ${checked ? '#0FA88A' : '#CBD5E0'}`,
        backgroundColor: checked ? 'rgba(15,168,138,0.08)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s',
      }}
    >
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M1 3.5L3.5 6L8 1" stroke="#0FA88A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

/* ── Input ───────────────────────────────────────────────────── */
function Input({
  type = 'text', placeholder, label, value, onChange, rightSlot,
}: {
  type?: string; placeholder: string; label: string;
  value: string; onChange: (v: string) => void; rightSlot?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#6B7A8D', marginBottom: 6, letterSpacing: '0.01em', fontFamily: FONT_INTER }}>
        {label}
      </label>
      <div style={{
        display: 'flex', alignItems: 'center', height: 44,
        backgroundColor: '#FFFFFF',
        border: `1.5px solid ${focused ? '#0FA88A' : '#E2E8F0'}`,
        borderRadius: 8, padding: '0 14px', gap: 10,
        transition: 'border-color 0.15s, box-shadow 0.15s',
        boxShadow: focused ? '0 0 0 3px rgba(15,168,138,0.12)' : 'none',
      }}>
        <input
          type={type} placeholder={placeholder} value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 13, color: '#1A2E45', fontFamily: FONT_INTER }}
        />
        {rightSlot}
      </div>
    </div>
  );
}

/* ── LoginPage ───────────────────────────────────────────────── */
/* ── LoginPage ───────────────────────────────────────────────── */
export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Real API call
      const response = await apiClient.post('/auth/login', { email, password });
      const { token, user } = response.data;
      login(token, user);
      navigate('/');
    } catch (err: any) {
      // Fallback for frontend dev if backend is unavailable
      if (err.code === 'ERR_NETWORK' || err.response?.status === 404) {
        console.warn('Backend not reachable. Using mock login for frontend development.');
        setTimeout(() => {
          const mockRole = email.includes('collab') ? 'Collaborateur' : 
                           email.includes('manager') ? 'Manager' :
                           email.includes('rh') ? 'RH' :
                           email.includes('dir') ? 'Direction' :
                           email.includes('qvt') ? 'QVT' : 'Admin';
          
          const mockUser = {
            id: 'mock-id-123',
            name: email.split('@')[0] || 'Test User',
            email: email,
            role: mockRole,
            department: 'Human Resources'
          };
          login('mock-jwt-token', mockUser as any);
          navigate('/');
        }, 800);
      } else {
        setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', fontFamily: FONT_INTER, backgroundColor: '#EDF2F7', overflow: 'hidden' }}>

      {/* ── Left: Authentication panel (35-40%) ────── */}
      <div style={{ width: '38%', minWidth: 420, maxWidth: 540, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', backgroundColor: '#FFFFFF', position: 'relative', borderRight: `1px solid #E2E8F0`, boxShadow: '4px 0 24px rgba(26,75,110,0.06)' }}>

        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(94,201,181,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -40, width: 280, height: 280, borderRadius: '50%', background: 'rgba(26,75,110,0.05)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, color: '#FFFFFF' }}>✦</span>
            </div>
            <div style={{ fontFamily: FONT_CLASH, fontWeight: 700, fontSize: 19, color: '#1A2E45', letterSpacing: '0.04em', lineHeight: 1 }}>
              HUM<span style={{ color: '#0FA88A' }}>AI</span>
            </div>
          </div>

          {/* Welcome headline */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: '#1A2E45', margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Welcome back
            </h1>
            <p style={{ fontSize: 14, color: '#6B7A8D', margin: 0, lineHeight: 1.6 }}>
              AI-powered HR Management Platform for modern teams
            </p>
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 18 }}>
            <Input
              label="Email address"
              placeholder="admin@company.com"
              value={email}
              onChange={setEmail}
            />
            <Input
              type={showPass ? 'text' : 'password'}
              label="Password"
              placeholder="••••••••••"
              value={password}
              onChange={setPassword}
              rightSlot={
                <button
                  onClick={() => setShowPass(p => !p)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    {showPass
                      ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="#A0ADB8" strokeWidth="1.6" strokeLinecap="round"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="#A0ADB8" strokeWidth="1.6" strokeLinecap="round"/><path d="M1 1l22 22" stroke="#A0ADB8" strokeWidth="1.6" strokeLinecap="round"/></>
                      : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={showPass ? '#0FA88A' : '#A0ADB8'} strokeWidth="1.6"/><circle cx="12" cy="12" r="3" stroke={showPass ? '#0FA88A' : '#A0ADB8'} strokeWidth="1.6"/></>
                    }
                  </svg>
                </button>
              }
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              style={{ padding: '10px 14px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 8, marginBottom: 18, color: '#991B1B', fontSize: 13 }}
            >
              {error}
            </motion.div>
          )}

          {/* Remember + Forgot */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setRemember(r => !r)}>
              <Checkbox checked={remember} onChange={() => setRemember(r => !r)} />
              <span style={{ fontSize: 12, color: '#374151' }}>Remember me</span>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#0FA88A', fontFamily: FONT_INTER, fontWeight: 500 }}>
              Forgot password?
            </button>
          </div>

          {/* Sign In button */}
          <motion.button
            onClick={handleSignIn}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%', height: 48, borderRadius: 10, border: 'none',
              background: loading ? 'rgba(26,75,110,0.55)' : BTN_GRADIENT,
              color: '#FFFFFF', fontFamily: FONT_CLASH, fontWeight: 700, fontSize: 14,
              cursor: loading ? 'wait' : 'pointer', letterSpacing: '0.02em',
              boxShadow: '0 4px 16px rgba(26,75,110,0.28)',
              transition: 'opacity 0.15s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              marginBottom: 28,
            }}
          >
            {loading ? (
              <>
                <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#FFFFFF', animation: 'spin 0.6s linear infinite' }} />
                Signing in…
              </>
            ) : 'Sign In'}
          </motion.button>

          {/* Sign up link */}
          

          {/* Footer links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, paddingTop: 20, borderTop: '1px solid #EEF2F6' }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <button key={link} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: '#9CA3AF', fontFamily: FONT_INTER }}>
                {link}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Right: Dashboard preview (60-65%) ────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 60px', backgroundColor: '#EDF2F7', position: 'relative', overflow: 'hidden', gap: 28 }}>

        {/* Decorative background elements */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(26,75,110,0.08) 0%, rgba(26,138,122,0.06) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(62,207,186,0.12) 0%, rgba(15,168,138,0.08) 100%)', pointerEvents: 'none' }} />
        {/* Grid dots pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(26,75,110,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        {/* Marketing headline */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 620 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: 'rgba(62,207,186,0.12)', border: '1px solid rgba(62,207,186,0.28)', borderRadius: 999, padding: '4px 14px', marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3ECFBA' }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#0FA88A', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: FONT_INTER }}>AI-Powered HR Platform</span>
          </div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 30, fontWeight: 700, color: '#1A2E45', margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Everything you need to<br />
            <span style={{ background: 'linear-gradient(90deg, #1A4B6E, #0FA88A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>manage your workforce</span>
          </h2>
          <p style={{ fontSize: 14, color: '#6B7A8D', margin: 0, lineHeight: 1.6, fontFamily: FONT_INTER }}>
            AI-powered analytics, recruitment pipelines, and more — all in one place.
          </p>
        </motion.div>

        {/* Dashboard preview container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
          style={{
            width: '100%',
            maxWidth: 1000,
            height: '62vh',
            maxHeight: 560,
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(26,75,110,0.20), 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid rgba(226,232,240,0.60)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Browser chrome */}
          <div style={{ height: 36, backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10, flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 5, padding: '4px 14px', fontSize: 10, color: '#9CA3AF', minWidth: 280, textAlign: 'center', fontFamily: FONT_INTER }}>
                app.humai-platform.com/dashboard
              </div>
            </div>
            <div style={{ width: 60 }} />
          </div>

          {/* Dashboard content */}
          <DashboardPreview />
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative', zIndex: 1 }}
        >
          {[
            { val: '500+', label: 'Companies' },
            { val: '50K+', label: 'Employees managed' },
            { val: '99.9%', label: 'Uptime SLA' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: '#1A4B6E', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 3, fontFamily: FONT_INTER }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/* ── Dashboard Preview Component ─────────────────────────────── */
function DashboardPreview() {
  const kpis = [
    { label: 'Total Employees', val: '248', change: '+3 this month', color: '#1A4B6E' },
    { label: 'Active Employees', val: '231', change: '93.1% retention', color: '#0FA88A' },
    { label: 'Open Positions', val: '17', change: '5 pending', color: '#3ECFBA' },
  ];

  return (
    <div style={{ display: 'flex', height: 'calc(100% - 36px)' }}>
      {/* Sidebar */}
      <div style={{ width: 160, background: SIDEBAR_GRADIENT, display: 'flex', flexDirection: 'column', boxShadow: '2px 0 12px rgba(26,75,110,0.12)' }}>
        {/* Logo */}
        <div style={{ height: 44, borderBottom: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px' }}>
          <div style={{ width: 4, height: 16, backgroundColor: '#3ECFBA', borderRadius: 2 }} />
          <span style={{ fontFamily: FONT_CLASH, fontWeight: 700, fontSize: 12, color: '#FFFFFF', letterSpacing: '0.04em' }}>
            HUM<span style={{ color: '#3ECFBA' }}>AI</span>
          </span>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '8px 6px', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {['Dashboard', 'Employees', 'Recruitment', 'Attendance', 'Payroll', 'Performance', 'Reports', 'Settings'].map((item, i) => (
            <div
              key={item}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, height: 26, padding: '0 8px', borderRadius: 5,
                backgroundColor: i === 0 ? 'rgba(62,207,186,0.15)' : 'transparent',
                borderLeft: i === 0 ? '2px solid #3ECFBA' : '2px solid transparent',
              }}
            >
              <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: i === 0 ? '#3ECFBA' : 'rgba(255,255,255,0.30)' }} />
              <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? '#FFFFFF' : 'rgba(255,255,255,0.65)' }}>
                {item}
              </span>
            </div>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: '10px', borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#3ECFBA' }}>AD</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 500, color: '#FFFFFF', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Admin</div>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.55)' }}>HR Manager</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#EDF2F7' }}>
        {/* Header */}
        <div style={{ height: 44, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 11, fontWeight: 600, color: '#1A2E45' }}>Dashboard</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 120, height: 26, backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', border: '1px solid #9CA3AF' }} />
              <span style={{ fontSize: 9, color: '#9CA3AF' }}>Search...</span>
            </div>
            <div style={{ width: 26, height: 26, backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: 10, height: 10, border: '1px solid #6B7A8D', borderRadius: 2 }} />
              <div style={{ position: 'absolute', top: 5, right: 5, width: 5, height: 5, borderRadius: '50%', backgroundColor: '#3ECFBA' }} />
            </div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: '#FFFFFF' }}>AD</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 16, overflowY: 'auto' }}>
          {/* Alert banner */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '3px solid #3ECFBA', borderRadius: 8, padding: '10px 14px', marginBottom: 14, boxShadow: '0 1px 3px rgba(26,75,110,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3ECFBA' }} />
              <span style={{ fontSize: 10, color: '#374151' }}>
                You have <span style={{ fontWeight: 600, color: '#1A4B6E' }}>4 pending leave requests</span> awaiting review.
              </span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                <button style={{ height: 22, padding: '0 10px', borderRadius: 999, background: BTN_GRADIENT, border: 'none', fontSize: 9, color: '#FFFFFF', fontWeight: 600, cursor: 'pointer' }}>
                  Review
                </button>
                <button style={{ height: 22, padding: '0 10px', borderRadius: 999, backgroundColor: 'transparent', border: '1px solid #E2E8F0', fontSize: 9, color: '#6B7A8D', cursor: 'pointer' }}>
                  Dismiss
                </button>
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 14 }}>
            {kpis.map((k) => (
              <div key={k.label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: '12px 14px', boxShadow: '0 1px 3px rgba(26,75,110,0.05)' }}>
                <div style={{ fontSize: 8, color: '#6B7A8D', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{k.label}</div>
                <div style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 700, color: '#1A2E45', lineHeight: 1, marginBottom: 4 }}>{k.val}</div>
                <div style={{ fontSize: 8, color: '#9CA3AF' }}>{k.change}</div>
                <div style={{ marginTop: 10, display: 'flex', gap: 1, height: 16, alignItems: 'flex-end' }}>
                  {[30,45,35,55,42,65,58,70,62,75].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 9 ? k.color : `${k.color}20`, borderRadius: 1 }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
            {/* Headcount chart */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: 14, boxShadow: '0 1px 3px rgba(26,75,110,0.05)' }}>
              <div style={{ fontFamily: FONT_CLASH, fontSize: 10, fontWeight: 600, color: '#1A2E45', marginBottom: 12 }}>Headcount Trend</div>
              <div style={{ height: 80, borderLeft: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', position: 'relative', backgroundColor: '#F8FAFC', borderRadius: '0 0 4px 0' }}>
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="previewGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3ECFBA" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#3ECFBA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,60 50,50 100,55 150,35 200,40 250,25 300,30 350,15 400,20 450,10 450,80 0,80" fill="url(#previewGrad)" />
                  <polyline points="0,60 50,50 100,55 150,35 200,40 250,25 300,30 350,15 400,20 450,10" fill="none" stroke="#3ECFBA" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Department donut */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: 14, boxShadow: '0 1px 3px rgba(26,75,110,0.05)' }}>
              <div style={{ fontFamily: FONT_CLASH, fontSize: 10, fontWeight: 600, color: '#1A2E45', marginBottom: 12 }}>Departments</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 64, height: 64 }}>
                  <svg viewBox="0 0 36 36" style={{ width: 64, height: 64, transform: 'rotate(-90deg)' }}>
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1A4B6E" strokeWidth="2.5" strokeDasharray="35 65" strokeDashoffset="0" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3ECFBA" strokeWidth="2.5" strokeDasharray="20 80" strokeDashoffset="-35" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1A8A7A" strokeWidth="2.5" strokeDasharray="18 82" strokeDashoffset="-55" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#0FA88A" strokeWidth="2.5" strokeDasharray="15 85" strokeDashoffset="-73" />
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontFamily: FONT_CLASH, fontSize: 14, fontWeight: 700, color: '#1A2E45' }}>248</div>
                    <div style={{ fontSize: 6, color: '#9CA3AF', textTransform: 'uppercase' }}>total</div>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { name: 'Engineering', count: 82, color: '#1A4B6E' },
                    { name: 'Marketing', count: 45, color: '#3ECFBA' },
                    { name: 'Sales', count: 58, color: '#1A8A7A' },
                    { name: 'Design', count: 34, color: '#0FA88A' },
                  ].map((d) => (
                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: d.color }} />
                      <span style={{ fontSize: 9, color: '#6B7A8D', flex: 1 }}>{d.name}</span>
                      <span style={{ fontSize: 8, color: '#9CA3AF' }}>{d.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
