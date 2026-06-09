// Reports Dashboard — analytics and reporting

const NC = {
  bg:           '#EDF2F7',
  card:         '#FFFFFF',
  border:       '#E2E8F0',
  borderDim:    '#EEF2F6',
  fg:           '#1A2E45',
  fgDim:        '#374151',
  muted:        '#6B7A8D',
  mutedDim:     '#9CA3AF',
  navy:         '#1A4B6E',
  teal:         '#1A8A7A',
  accent:       '#3ECFBA',
  link:         '#0FA88A',
  accentBg:     'rgba(62,207,186,0.10)',
  accentBorder: 'rgba(62,207,186,0.28)',
} as const;

const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";

export function ReportsDashboard() {
  const savedReports = [
    { name: 'Monthly HR Summary', type: 'Summary', lastRun: '2024-06-01', size: '2.4 MB' },
    { name: 'Payroll Analysis Q2', type: 'Financial', lastRun: '2024-05-28', size: '1.8 MB' },
    { name: 'Recruitment Metrics', type: 'Recruitment', lastRun: '2024-05-25', size: '892 KB' },
    { name: 'Attendance Report May', type: 'Attendance', lastRun: '2024-05-31', size: '1.2 MB' },
    { name: 'Department Performance', type: 'Performance', lastRun: '2024-05-20', size: '3.1 MB' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Reports & Analytics</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Generate reports, analyze data, and export insights</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <NCButton>Schedule Report</NCButton>
          <NCButton primary>+ Create Report</NCButton>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { label: 'Reports Generated', value: '142', sub: 'This month' },
          { label: 'Scheduled Reports', value: '18', sub: 'Active' },
          { label: 'Data Exports', value: '67', sub: 'This quarter' },
          { label: 'Avg. Generation Time', value: '8.2s', sub: 'Per report' },
        ].map((stat) => (
          <NCCard key={stat.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: 10, color: NC.mutedDim }}>{stat.sub}</div>
          </NCCard>
        ))}
      </div>

      {/* Report categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { title: 'Employee Reports', count: 8 },
          { title: 'Financial Reports', count: 12 },
          { title: 'Attendance Reports', count: 6 },
          { title: 'Recruitment Reports', count: 5 },
          { title: 'Performance Reports', count: 9 },
          { title: 'Compliance Reports', count: 7 },
        ].map((cat) => (
          <NCCard
            key={cat.title}
            style={{ padding: 20, cursor: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F9FAFB'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = NC.card; }}
            data-cursor
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 18, height: 18, border: `1.5px solid ${NC.accent}`, borderRadius: 2 }} />
              </div>
              <div style={{ height: 22, padding: '0 8px', backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: NC.link, fontWeight: 600 }}>{cat.count}</span>
              </div>
            </div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg }}>{cat.title}</div>
          </NCCard>
        ))}
      </div>

      {/* Saved reports table */}
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Recent Reports</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Search reports...</span>
            </div>
            {['Type', 'Date Range'].map((f) => (
              <button key={f} data-cursor style={{ height: 32, padding: '0 12px', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'none' }}>
                <span style={{ fontSize: 11, color: NC.muted }}>{f}</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </button>
            ))}
          </div>
        </div>

        <table style={{ width: '100%' }}>
          <thead style={{ borderBottom: `1px solid ${NC.border}`, backgroundColor: NC.bg }}>
            <tr>
              {['Report Name', 'Type', 'Last Run', 'File Size', 'Actions'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {savedReports.map((report, i) => (
              <tr key={report.name} style={{ borderBottom: i === savedReports.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }} onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: 14, height: 14, border: `1.5px solid ${NC.accent}`, borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{report.name}</span>
                  </div>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, color: NC.link, fontWeight: 600 }}>{report.type}</span>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{report.lastRun}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{report.size}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>Download</button>
                    <button data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </NCCard>

      {/* Bottom row: charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Report generation trend */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Report Generation Trend" />
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, height: 150 }}>
            {[
              { month: 'Jan', count: 52 },
              { month: 'Feb', count: 48 },
              { month: 'Mar', count: 61 },
              { month: 'Apr', count: 58 },
              { month: 'May', count: 73 },
              { month: 'Jun', count: 42 },
            ].map((d) => (
              <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{d.count}</div>
                <div style={{ width: '100%', backgroundColor: NC.accent, border: `1px solid ${NC.accentBorder}`, borderRadius: '3px 3px 0 0', height: `${(d.count / 73) * 100}%` }} />
                <div style={{ fontSize: 10, color: NC.muted }}>{d.month}</div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Popular report types */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Most Used Report Types" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { type: 'Financial Reports', usage: 87, count: 45 },
              { type: 'Employee Reports', usage: 72, count: 38 },
              { type: 'Performance Reports', usage: 64, count: 32 },
              { type: 'Attendance Reports', usage: 51, count: 27 },
              { type: 'Recruitment Reports', usage: 38, count: 19 },
              { type: 'Compliance Reports', usage: 29, count: 15 },
            ].map((item) => (
              <div key={item.type}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{item.type}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{item.count} reports</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${item.usage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </NCCard>
      </div>

      {/* Scheduled reports */}
      <NCCard style={{ padding: 20 }}>
        <NCSectionLabel label="Scheduled Reports" />
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { name: 'Weekly Attendance Summary', freq: 'Every Monday, 9:00 AM', next: 'Jun 8, 2026' },
            { name: 'Monthly Payroll Report', freq: 'First day of month', next: 'Jul 1, 2026' },
            { name: 'Quarterly Performance Review', freq: 'Every 3 months', next: 'Jul 1, 2026' },
          ].map((sched) => (
            <div key={sched.name} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 16 }}>
              <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 8 }}>{sched.name}</div>
              <div style={{ fontSize: 10, color: NC.muted, marginBottom: 4 }}>{sched.freq}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: `1px solid ${NC.borderDim}` }}>
                <span style={{ fontSize: 10, color: NC.mutedDim }}>Next: {sched.next}</span>
                <button data-cursor style={{ width: 24, height: 24, border: `1px solid ${NC.border}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', backgroundColor: 'transparent' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                    <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                    <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </NCCard>

    </div>
  );
}

function NCCard({ children, style, ...props }: { children: React.ReactNode; style?: React.CSSProperties; [key: string]: any }) {
  return <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }} {...props}>{children}</div>;
}

function NCButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button data-cursor style={{ height: 28, padding: '0 14px', border: primary ? 'none' : `1px solid ${NC.border}`, borderRadius: 999, background: primary ? BTN_GRADIENT : 'transparent', color: primary ? '#FFFFFF' : NC.muted, boxShadow: primary ? '0 2px 8px rgba(26,75,110,0.22)' : 'none', fontSize: 11, fontWeight: primary ? 600 : 400, cursor: 'none', transition: 'opacity 0.15s' }}>
      {children}
    </button>
  );
}

function NCSectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>{label}</span>
      <button data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>See all</button>
    </div>
  );
}
