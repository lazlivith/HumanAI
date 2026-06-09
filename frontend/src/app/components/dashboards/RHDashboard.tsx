import React from 'react';
import { NC, FONT_CLASH, FONT_INTER } from '../../theme';
import { NCCard, NCButton, NCSectionLabel, NCKpiCard, NCLineChart, NCDonutChart } from '../ui/SharedPrimitives';

export function RHDashboard() {
  const kpis = [
    { label: 'Total Employees', val: '248', sub: '+3 this month',        bars: [40,55,45,60,52,70,65,80,72,88] },
    { label: 'Active Employees', val: '231', sub: '93.1% retention',     bars: [60,65,70,72,68,75,80,82,85,90] },
    { label: 'On Leave Today',   val: '12',  sub: '4.8% of workforce',   bars: [8,12,6,14,10,9,12,15,11,12]   },
    { label: 'Open Positions',   val: '17',  sub: '5 pending interviews', bars: [20,18,22,25,17,20,22,19,17,17] },
  ];

  const activities = [
    { id: 'a1', time: '09:32', desc: 'New employee onboarded — Engineering' },
    { id: 'a2', time: '10:15', desc: 'Leave request approved — Design' },
    { id: 'a3', time: '11:00', desc: 'Performance review completed — Sales' },
    { id: 'a4', time: '13:45', desc: 'Policy document updated — HR' },
    { id: 'a5', time: '14:22', desc: 'Payroll cycle initiated — Finance' },
  ];

  const events = [
    { id: 'e1', date: 'Jun 5',  label: 'Timesheet submission deadline' },
    { id: 'e2', date: 'Jun 10', label: 'Mid-year self-assessments due' },
    { id: 'e3', date: 'Jun 12', label: 'Payroll approval window' },
    { id: 'e4', date: 'Jun 15', label: 'Direct deposit processing' },
    { id: 'e5', date: 'Jun 20', label: 'Engineering calibration session' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Notification banner */}
      <NCCard style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: `3px solid ${NC.accent}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="mint-pulse" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: NC.accent, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: NC.fgDim }}>
            You have{' '}
            <span style={{ color: NC.navy, fontWeight: 600 }}>4 pending leave requests</span>
            {' '}and{' '}
            <span style={{ color: NC.navy, fontWeight: 600 }}>2 payroll corrections</span>
            {' '}awaiting review.
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <NCButton primary>Review Now</NCButton>
          <NCButton>Dismiss</NCButton>
        </div>
      </NCCard>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Headcount Trend" />
          <NCLineChart />
        </NCCard>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Dept. Distribution" />
          <NCDonutChart />
        </NCCard>
      </div>

      {/* Bottom 2-col row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Recent Activity" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {activities.map((a) => (
              <div key={a.id} style={{ display: 'flex', gap: 10 }}>
                <span style={{ fontSize: 10, color: NC.mutedDim, flexShrink: 0, width: 36, paddingTop: 1 }}>{a.time}</span>
                <div style={{ flex: 1, borderLeft: `2px solid ${NC.accentBorder}`, paddingLeft: 10 }}>
                  <div style={{ fontSize: 11, color: NC.fgDim, lineHeight: 1.4 }}>{a.desc}</div>
                </div>
              </div>
            ))}
            <button data-cursor style={{ marginTop: 4, height: 28, border: `1px solid ${NC.border}`, borderRadius: 5, backgroundColor: 'transparent', fontSize: 11, color: NC.muted, cursor: 'none', width: '100%' }}>
              View all
            </button>
          </div>
        </NCCard>

        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Upcoming Events" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {events.map((e, i) => (
              <div key={e.id} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 8, borderBottom: i < events.length - 1 ? `1px solid ${NC.borderDim}` : 'none' }}>
                <div style={{ flexShrink: 0, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, padding: '2px 6px', backgroundColor: NC.accentBg }}>
                  <span style={{ fontSize: 9, color: NC.link, fontWeight: 600, whiteSpace: 'nowrap' }}>{e.date}</span>
                </div>
                <span style={{ fontSize: 11, color: NC.muted, flex: 1, lineHeight: 1.3 }}>{e.label}</span>
              </div>
            ))}
          </div>
        </NCCard>

      </div>
    </div>
  );
}
