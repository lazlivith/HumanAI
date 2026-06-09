import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route } from 'react-router';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { ROLE_NAVIGATION, View } from './config/navigation';
import { EmployeesDashboard } from './components/EmployeesDashboard';
import { RecruitmentDashboard } from './components/RecruitmentDashboard';
import { LeaveDashboard } from './components/LeaveDashboard';
import { PayrollDashboard } from './components/PayrollDashboard';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { ReportsDashboard } from './components/ReportsDashboard';
import { SettingsDashboard } from './components/SettingsDashboard';
import { AIChatDashboard } from './components/AIChatDashboard';
import { LoginPage } from './components/LoginPage';
import { SecurityAlertsPanel } from './components/SecurityAlertsPanel';
import { AIUsageLogsView } from './components/AIUsageLogsView';
import { OffboardingWorkflow } from './components/OffboardingWorkflow';
import { NC, SIDEBAR_GRADIENT, BTN_GRADIENT, FONT_CLASH, FONT_INTER } from './theme';
import { CollaboratorDashboard } from './components/dashboards/CollaboratorDashboard';
import { ManagerDashboard } from './components/dashboards/ManagerDashboard';
import { RHDashboard } from './components/dashboards/RHDashboard';
import { AdminDashboard } from './components/dashboards/AdminDashboard';
import { DirectionDashboard } from './components/dashboards/DirectionDashboard';
import { QVTDashboard } from './components/dashboards/QVTDashboard';

function RoleBasedDashboard({ role }: { role?: string }) {
  if (role === 'Collaborateur') return <CollaboratorDashboard />;
  if (role === 'Manager') return <ManagerDashboard />;
  if (role === 'Direction') return <DirectionDashboard />;
  if (role === 'Admin') return <AdminDashboard />;
  if (role === 'QVT') return <QVTDashboard />;
  return <RHDashboard />;
}
/* ── Types ───────────────────────────────────────────────────── */
const NAV: { label: string; group?: string }[] = [
  { label: 'Dashboard' },
  { label: 'Employees',   group: 'PEOPLE' },
  { label: 'Recruitment', group: 'PEOPLE' },
  { label: 'Leave',       group: 'PEOPLE' },
  { label: 'Offboarding', group: 'PEOPLE' },
  { label: 'Payroll',     group: 'OPERATIONS' },
  { label: 'Performance', group: 'OPERATIONS' },
  { label: 'Reports',     group: 'SYSTEM' },
  { label: 'Settings',    group: 'SYSTEM' },
  { label: 'Security Alerts', group: 'ADMIN' },
  { label: 'AI Usage Logs',   group: 'ADMIN' },
];

/* ── App Router ─────────────────────────────────────────────────────── */
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/*" element={<MainLayout />} />
      </Route>
    </Routes>
  );
}

/* ── MainLayout ─────────────────────────────────────────────────────── */
function MainLayout() {
  const { user, logout } = useAuth();
  
  const allowedViews = ROLE_NAVIGATION[user?.role || 'Collaborateur'] || ROLE_NAVIGATION['Collaborateur'];
  const [currentView, setCurrentView] = useState<View>(allowedViews[0]);

  useEffect(() => {
    if (!allowedViews.includes(currentView)) {
      setCurrentView(allowedViews[0]);
    }
  }, [user, allowedViews, currentView]);

  const [aiOpen, setAiOpen]               = useState(false);
  const [cursor, setCursor]               = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover]     = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setCursorHover(!!t.closest('button,a,[role="button"],[data-cursor]'));
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  const filteredNav = NAV.filter(item => allowedViews.includes(item.label as View));
  const groups = Array.from(new Set(filteredNav.map(item => item.group).filter(Boolean))) as string[];

  return (
    <div
      className="nexcore"
      style={{
        width: '100vw', minHeight: '100dvh',
        backgroundColor: NC.bg,
        display: 'flex',
        overflow: 'hidden',
        cursor: 'none',
        position: 'relative',
      }}
    >
      {/* ── Custom cursor ──────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          left: cursor.x, top: cursor.y,
          width:  cursorHover ? 28 : 10,
          height: cursorHover ? 28 : 10,
          backgroundColor: cursorHover ? 'transparent' : NC.accent,
          border: cursorHover ? `2px solid ${NC.accent}` : 'none',
          boxShadow: `0 0 ${cursorHover ? 10 : 5}px ${NC.accent}55`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.14s ease, height 0.14s ease, background-color 0.14s ease',
        }}
      />

      {/* ── Sidebar ────────────────────────────────── */}
      <aside
        style={{
          width: 220, minHeight: '100dvh', flexShrink: 0,
          background: SIDEBAR_GRADIENT,
          display: 'flex', flexDirection: 'column',
          boxShadow: '3px 0 20px rgba(26,75,110,0.18)',
        }}
      >
        {/* Logo */}
        <div style={{ height: 56, borderBottom: `1px solid ${NC.sidebarBorder}`, display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', flexShrink: 0 }}>
          <div className="mint-pulse" style={{ width: 5, height: 22, backgroundColor: NC.accent, borderRadius: 3, flexShrink: 0 }} />
          <span style={{ fontFamily: FONT_CLASH, fontWeight: 700, fontSize: 17, letterSpacing: '0.04em', color: NC.sidebarFg, userSelect: 'none' }}>
            HUM<span style={{ color: NC.accent }}>AI</span>
          </span>
        </div>

        {/* Role badge */}
        <div style={{ padding: '7px 18px', borderBottom: `1px solid ${NC.sidebarBorder}`, flexShrink: 0 }}>
          <span style={{ fontSize: 9, color: NC.sidebarMuted, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            {user?.role || 'Admin'} — HR Department
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 1, overflowY: 'auto' }}>
          {filteredNav.filter(n => !n.group).map(({ label }) => (
            <NCNavItem key={label} label={label as View} active={currentView === label} onClick={() => setCurrentView(label as View)} />
          ))}

          {groups.map(g => {
            const items = filteredNav.filter(n => n.group === g);
            if (!items.length) return null;
            return (
              <div key={g} style={{ marginTop: 14 }}>
                <div style={{ padding: '0 12px 6px', fontSize: 8, color: NC.sidebarMuted, letterSpacing: '0.1em', fontWeight: 600 }}>{g}</div>
                {items.map(({ label }) => (
                  <NCNavItem key={label} label={label as View} active={currentView === label} onClick={() => setCurrentView(label as View)} />
                ))}
              </div>
            );
          })}
        </nav>

        {/* User strip */}
        <div style={{ padding: '14px 16px', borderTop: `1px solid ${NC.sidebarBorder}`, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: NC.accent }}>{user?.name?.substring(0, 2).toUpperCase() || 'AD'}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: NC.sidebarFg }}>{user?.name || 'Admin User'}</div>
              <div style={{ fontSize: 10, color: NC.sidebarMuted, marginTop: 1 }}>{user?.email || 'hr@company.com'}</div>
            </div>
            <div data-cursor style={{ width: 22, height: 22, border: `1px solid ${NC.sidebarBorder}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none' }} onClick={logout}>
              <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `5px solid rgba(255,255,255,0.35)` }} />
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main area ──────────────────────────────── */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 1024 }}>
        {/* Header */}
        <header style={{ height: 56, backgroundColor: '#FFFFFF', borderBottom: `1px solid ${NC.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
          <div>
            <div style={{ fontSize: 10, color: NC.mutedDim, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              HUMAI <span style={{ color: NC.border, margin: '0 4px' }}>/</span>
              <span style={{ color: NC.muted }}>{currentView}</span>
            </div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 14, fontWeight: 600, color: NC.fg, marginTop: 2, letterSpacing: '0.02em' }}>
              {currentView}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#F1F5F9', border: `1px solid ${NC.border}`, borderRadius: 6, height: 32, padding: '0 12px', width: 176 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Search...</span>
            </div>
            <button data-cursor style={{ width: 32, height: 32, backgroundColor: '#F1F5F9', border: `1px solid ${NC.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', position: 'relative' }}>
              <div style={{ width: 13, height: 13, border: `1.5px solid ${NC.muted}`, borderRadius: 3 }} />
              <div style={{ position: 'absolute', top: 6, right: 6, width: 6, height: 6, borderRadius: '50%', backgroundColor: NC.accent }} />
            </button>
            <button data-cursor style={{ width: 32, height: 32, backgroundColor: '#F1F5F9', border: `1px solid ${NC.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none' }}>
              <div style={{ width: 13, height: 13, borderRadius: '50%', border: `1.5px solid ${NC.muted}` }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 12, borderLeft: `1px solid ${NC.border}` }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{user?.name?.substring(0, 2).toUpperCase() || 'AD'}</span>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: NC.fg }}>{user?.name || 'Admin'}</div>
                <div style={{ fontSize: 9, color: NC.muted }}>{user?.role || 'HR Manager'}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            {allowedViews.includes('Dashboard') && currentView === 'Dashboard'   && <RoleBasedDashboard role={user?.role} />}
            {allowedViews.includes('Employees') && currentView === 'Employees'   && <EmployeesDashboard />}
            {allowedViews.includes('Recruitment') && currentView === 'Recruitment' && <RecruitmentDashboard />}
            {allowedViews.includes('Leave') && currentView === 'Leave'       && <LeaveDashboard />}
            {allowedViews.includes('Offboarding') && currentView === 'Offboarding' && <OffboardingWorkflow />}
            {allowedViews.includes('Payroll') && currentView === 'Payroll'     && <PayrollDashboard />}
            {allowedViews.includes('Performance') && currentView === 'Performance' && <PerformanceDashboard />}
            {allowedViews.includes('Reports') && currentView === 'Reports'     && <ReportsDashboard />}
            {allowedViews.includes('Settings') && currentView === 'Settings'    && <SettingsDashboard />}
            {allowedViews.includes('Security Alerts') && currentView === 'Security Alerts' && <SecurityAlertsPanel />}
            {allowedViews.includes('AI Usage Logs') && currentView === 'AI Usage Logs'   && <AIUsageLogsView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Floating AI Button ─────────────────────── */}
      <button
        onClick={() => setAiOpen(true)}
        data-cursor
        style={{
          position: 'fixed', bottom: 28, right: 28,
          width: 54, height: 54, borderRadius: '50%',
          background: BTN_GRADIENT,
          border: 'none',
          boxShadow: '0 4px 20px rgba(26,75,110,0.30), 0 2px 8px rgba(0,0,0,0.10)',
          cursor: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 998,
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.06em' }}>✦ AI</span>
      </button>

      {/* ── AI Panel Drawer ────────────────────────── */}
      <AnimatePresence>
        {aiOpen && (
          <>
            <motion.div
              key="ai-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setAiOpen(false)}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(26,46,69,0.18)', zIndex: 1000, backdropFilter: 'blur(2px)' }}
            />
            <motion.div
              key="ai-panel"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed', top: 0, right: 0, width: 720, height: '100%',
                backgroundColor: '#FFFFFF',
                borderLeft: `1px solid ${NC.border}`,
                zIndex: 1001, display: 'flex', flexDirection: 'column', overflow: 'hidden',
                boxShadow: '-8px 0 32px rgba(26,75,110,0.12)',
              }}
            >
              {/* Panel header */}
              <div style={{ height: 56, background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, backgroundColor: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 13, color: '#FFFFFF' }}>✦</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: FONT_CLASH, fontSize: 14, fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>HUMAI AI Assistant</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.70)' }}>HR Intelligence · Always available</div>
                  </div>
                </div>
                <button onClick={() => setAiOpen(false)} data-cursor style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid rgba(255,255,255,0.25)', backgroundColor: 'transparent', cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'rgba(255,255,255,0.80)', fontFamily: FONT_INTER, lineHeight: 1 }}>
                  ×
                </button>
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <AIChatDashboard />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Nav primitives ──────────────────────────────────────────── */

function NCNavItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      data-cursor
      style={{
        display: 'flex', alignItems: 'center', gap: 10, height: 33, padding: '0 10px',
        borderRadius: 6, cursor: 'none',
        backgroundColor: active ? 'rgba(62,207,186,0.15)' : 'transparent',
        borderLeft: active ? '2px solid #3ECFBA' : '2px solid transparent',
        transition: 'background-color 0.15s ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
    >
      <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: active ? '#3ECFBA' : 'rgba(255,255,255,0.28)', flexShrink: 0, transition: 'background-color 0.15s' }} />
      <span style={{ fontSize: 12, fontWeight: active ? 600 : 400, color: active ? '#FFFFFF' : 'rgba(255,255,255,0.65)', letterSpacing: '0.03em', transition: 'color 0.15s' }}>
        {label}
      </span>
      {active && <div style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', backgroundColor: '#3ECFBA', opacity: 0.7 }} />}
    </div>
  );
}

function NCNavGroup({ label }: { label: string }) {
  return (
    <div style={{ padding: '12px 10px 5px' }}>
      <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.40)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}


