// Recruitment Dashboard — job postings and candidate tracking

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
  red:          '#991B1B',
  redBg:        '#FEF2F2',
  green:        '#065F46',
  greenBg:      '#ECFDF5',
} as const;

const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";

export function RecruitmentDashboard() {
  const jobs = [
    { id: 'JOB-301', title: 'Senior Frontend Engineer', dept: 'Engineering', type: 'Full-time', posted: '2024-05-15', applicants: 42, status: 'Active' },
    { id: 'JOB-302', title: 'Product Designer', dept: 'Design', type: 'Full-time', posted: '2024-05-20', applicants: 28, status: 'Active' },
    { id: 'JOB-303', title: 'Sales Development Rep', dept: 'Sales', type: 'Full-time', posted: '2024-05-10', applicants: 67, status: 'Active' },
    { id: 'JOB-304', title: 'Data Analyst', dept: 'Analytics', type: 'Contract', posted: '2024-04-28', applicants: 19, status: 'Reviewing' },
    { id: 'JOB-305', title: 'DevOps Engineer', dept: 'Engineering', type: 'Full-time', posted: '2024-05-22', applicants: 31, status: 'Active' },
  ];

  const candidates = [
    { name: 'Emily Chen', position: 'Senior Frontend Engineer', stage: 'Final Round', score: 92, applied: '2024-05-18' },
    { name: 'Marcus Johnson', position: 'Product Designer', stage: 'Phone Screen', score: 78, applied: '2024-05-21' },
    { name: 'Sofia Rodriguez', position: 'Sales Development Rep', stage: 'Offer Sent', score: 88, applied: '2024-05-12' },
    { name: 'Arjun Patel', position: 'Data Analyst', stage: 'Technical Test', score: 85, applied: '2024-05-01' },
    { name: 'Olivia Kim', position: 'DevOps Engineer', stage: 'Culture Fit', score: 91, applied: '2024-05-23' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Recruitment Pipeline</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Track open positions, candidates, and hiring progress</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <NCButton>Export Report</NCButton>
          <NCButton primary>+ Create Job Posting</NCButton>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {[
          { label: 'Open Positions', value: '17' },
          { label: 'Total Applicants', value: '187' },
          { label: 'In Review', value: '43' },
          { label: 'Interviews Scheduled', value: '12' },
          { label: 'Offers Pending', value: '3' },
        ].map((stat) => (
          <NCCard key={stat.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1 }}>{stat.value}</div>
          </NCCard>
        ))}
      </div>

      {/* Job postings table */}
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Active Job Postings</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Search jobs...</span>
            </div>
            {['Department', 'Type', 'Status'].map((f) => (
              <button
                key={f}
                data-cursor
                style={{ height: 32, padding: '0 12px', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'none' }}
              >
                <span style={{ fontSize: 11, color: NC.muted }}>{f}</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </button>
            ))}
          </div>
        </div>

        <table style={{ width: '100%' }}>
          <thead style={{ borderBottom: `1px solid ${NC.border}`, backgroundColor: NC.bg }}>
            <tr>
              {['Job ID', 'Position', 'Department', 'Type', 'Posted', 'Applicants', 'Status', 'Actions'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <tr
                key={job.id}
                style={{ borderBottom: i === jobs.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}
              >
                <td style={{ padding: 16, fontSize: 11, color: NC.mutedDim }}>{job.id}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.fg, fontWeight: 500 }}>{job.title}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{job.dept}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, color: NC.link, fontWeight: 600 }}>{job.type}</span>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{job.posted}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', backgroundColor: NC.accentBg, border: `1.5px solid ${NC.accentBorder}` }}>
                    <span style={{ fontSize: 11, color: NC.link, fontWeight: 600 }}>{job.applicants}</span>
                  </div>
                </td>
                <td style={{ padding: 16 }}>
                  <JobStatusBadge status={job.status} />
                </td>
                <td style={{ padding: 16 }}>
                  <button data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </NCCard>

      {/* Bottom row: pipeline stages + top candidates */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Pipeline stages */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Hiring Pipeline" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { stage: 'Application Review', count: 43, pct: 23 },
              { stage: 'Phone Screen', count: 28, pct: 15 },
              { stage: 'Technical Assessment', count: 19, pct: 10 },
              { stage: 'Culture Fit Interview', count: 15, pct: 8 },
              { stage: 'Final Round', count: 8, pct: 4 },
              { stage: 'Offer Sent', count: 3, pct: 2 },
            ].map((s) => (
              <div key={s.stage}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{s.stage}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{s.count} candidates</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${s.pct * 4}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Top candidates */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Top Candidates" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {candidates.map((c, i) => (
              <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, borderBottom: i < candidates.length - 1 ? `1px solid ${NC.borderDim}` : 'none' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{c.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 10, color: NC.muted }}>{c.position}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                  <div style={{ fontSize: 11, color: NC.fgDim }}>{c.stage}</div>
                  <div style={{ fontSize: 10, color: NC.mutedDim }}>Score: {c.score}</div>
                </div>
              </div>
            ))}
          </div>
        </NCCard>
      </div>

      {/* Recruitment funnel visualization */}
      <NCCard style={{ padding: 20 }}>
        <NCSectionLabel label="Conversion Funnel" />
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, height: 180 }}>
          {[
            { label: 'Applications', value: 187, height: 100 },
            { label: 'Screening', value: 116, height: 62 },
            { label: 'Interviews', value: 62, height: 33 },
            { label: 'Final Stage', value: 23, height: 12 },
            { label: 'Offers', value: 11, height: 6 },
            { label: 'Hired', value: 7, height: 4 },
          ].map((stage) => (
            <div key={stage.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{stage.value}</div>
              <div
                style={{ width: '100%', backgroundColor: NC.accent, border: `1px solid ${NC.accentBorder}`, borderRadius: '4px 4px 0 0', height: `${stage.height}%` }}
              />
              <div style={{ fontSize: 10, color: NC.muted, textAlign: 'center' }}>{stage.label}</div>
            </div>
          ))}
        </div>
      </NCCard>

    </div>
  );
}

function NCCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }}>
      {children}
    </div>
  );
}

function NCButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
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
        cursor: 'none', transition: 'opacity 0.15s',
      }}
    >
      {children}
    </button>
  );
}

function NCSectionLabel({ label }: { label: string }) {
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

function JobStatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Active: { bg: NC.greenBg, border: NC.green, color: NC.green },
    Reviewing: { bg: '#FFFBEB', border: '#92400E', color: '#92400E' },
    Closed: { bg: NC.redBg, border: NC.red, color: NC.red },
  };
  const s = styles[status] ?? styles.Active;
  return (
    <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>
      {status}
    </span>
  );
}
