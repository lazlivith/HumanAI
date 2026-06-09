import React from 'react';
import { NC, BTN_GRADIENT, FONT_CLASH, FONT_INTER } from '../../theme';

export function NCCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }}>
      {children}
    </div>
  );
}

export function NCButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button
      data-cursor
      style={{
        height: 28, padding: '0 14px',
        border: primary ? 'none' : `1px solid ${NC.border}`,
        borderRadius: 999,
        background: primary ? BTN_GRADIENT : 'transparent',
        color: primary ? '#FFFFFF' : NC.muted,
        boxShadow: primary ? '0 2px 8px rgba(26,75,110,0.22)' : 'none',
        fontSize: 11, fontWeight: primary ? 600 : 400,
        cursor: 'none', transition: 'opacity 0.15s', fontFamily: FONT_INTER,
      }}
    >
      {children}
    </button>
  );
}

export function NCSectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>
        {label}
      </span>
      <button data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        See all
      </button>
    </div>
  );
}

export function NCKpiCard({ label, val, sub, bars }: { label: string; val: string; sub: string; bars: number[] }) {
  const max = Math.max(...bars);
  return (
    <NCCard style={{ padding: '18px 20px' }}>
      <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>{val}</div>
      <div style={{ fontSize: 10, color: NC.mutedDim, marginBottom: 14 }}>{sub}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 24 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${(h / max) * 100}%`, backgroundColor: i === bars.length - 1 ? NC.accent : NC.accentBg, borderRadius: 2 }} />
        ))}
      </div>
    </NCCard>
  );
}

export function NCLineChart() {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 100, paddingRight: 4 }}>
          {['300','250','200','150','100'].map(v => <span key={v} style={{ fontSize: 9, color: NC.mutedDim }}>{v}</span>)}
        </div>
        <div style={{ flex: 1, height: 100, borderLeft: `1px solid ${NC.border}`, borderBottom: `1px solid ${NC.border}`, position: 'relative', backgroundColor: NC.bg, borderRadius: '0 0 4px 0' }}>
          {[20,40,60,80].map(p => <div key={p} style={{ position: 'absolute', left: 0, right: 0, top: `${p}%`, borderTop: `1px solid ${NC.borderDim}` }} />)}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3ECFBA" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#3ECFBA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,70 50,55 100,60 150,40 200,45 250,30 300,35 350,20 400,25 450,15 450,100 0,100" fill="url(#tealGrad)" />
            <polyline points="0,70 50,55 100,60 150,40 200,45 250,30 300,35 350,20 400,25 450,15" fill="none" stroke={NC.accent} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {[[50,55],[150,40],[250,30],[350,20],[450,15]].map(([x,y]) => (
              <circle key={`pt-${x}`} cx={x} cy={y} r="3" fill={NC.card} stroke={NC.accent} strokeWidth="1.5" />
            ))}
          </svg>
        </div>
      </div>
      <div style={{ display: 'flex', marginLeft: 28, marginTop: 6, justifyContent: 'space-between' }}>
        {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'].map(m => <span key={m} style={{ fontSize: 9, color: NC.mutedDim }}>{m}</span>)}
      </div>
    </div>
  );
}

export function NCDonutChart() {
  const depts = [
    { name: 'Engineering', color: '#1A4B6E', count: 82 },
    { name: 'Marketing',   color: '#3ECFBA', count: 45 },
    { name: 'Sales',       color: '#1A8A7A', count: 58 },
    { name: 'Design',      color: '#0FA88A', count: 34 },
    { name: 'Operations',  color: '#9CA3AF', count: 29 },
  ];
  return (
    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{ position: 'relative', width: 96, height: 96 }}>
        <svg viewBox="0 0 36 36" style={{ width: 96, height: 96, transform: 'rotate(-90deg)' }}>
          {[
            { pct: 35, color: '#1A4B6E', offset: 0  },
            { pct: 20, color: '#3ECFBA', offset: 35 },
            { pct: 18, color: '#1A8A7A', offset: 55 },
            { pct: 15, color: '#0FA88A', offset: 73 },
            { pct: 12, color: '#9CA3AF', offset: 88 },
          ].map((s) => (
            <circle key={`seg-${s.offset}`} cx="18" cy="18" r="15.9" fill="none" stroke={s.color} strokeWidth="3" strokeDasharray={`${s.pct} ${100 - s.pct}`} strokeDashoffset={-s.offset} />
          ))}
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg }}>248</div>
          <div style={{ fontSize: 8, color: NC.mutedDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>total</div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {depts.map((d) => (
          <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: NC.muted, flex: 1 }}>{d.name}</span>
            <span style={{ fontSize: 10, color: NC.mutedDim }}>{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
