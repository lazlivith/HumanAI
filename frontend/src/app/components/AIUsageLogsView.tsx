// AI Usage Logs View — Dark theme with amber accents

const DARK = {
  bg:       '#0F172A',
  card:     '#1E293B',
  cardHover:'#2A3441',
  border:   '#334155',
  text:     '#FFFFFF',
  textDim:  '#94A3B8',
  amber:    '#F59E0B',
  amberDark:'#D97706',
  red:      '#EF4444',
  orange:   '#FB923C',
  green:    '#10B981',
  gray:     '#64748B',
} as const;

interface LogEntry {
  id: string;
  userName: string;
  role: string;
  questionTopic: string;
  timestamp: string;
  status: 'Answered' | 'Blocked' | 'Redirected';
}

export function AIUsageLogsView() {
  const logs: LogEntry[] = [
    { id: 'L001', userName: 'Sophie Laurent', role: 'Employee', questionTopic: 'Remaining vacation days', timestamp: '2026-06-08 15:42', status: 'Answered' },
    { id: 'L002', userName: 'Marc Dubois', role: 'Employee', questionTopic: 'Salary data access', timestamp: '2026-06-08 14:32', status: 'Blocked' },
    { id: 'L003', userName: 'Julie Martin', role: 'Manager', questionTopic: 'Performance review scores', timestamp: '2026-06-08 11:15', status: 'Redirected' },
    { id: 'L004', userName: 'Thomas Bernard', role: 'Employee', questionTopic: 'Internal mobility process', timestamp: '2026-06-08 10:28', status: 'Answered' },
    { id: 'L005', userName: 'Emma Wilson', role: 'Manager', questionTopic: 'Export employee contacts', timestamp: '2026-06-08 09:55', status: 'Redirected' },
    { id: 'L006', userName: 'David Chen', role: 'Employee', questionTopic: 'Payroll schedule', timestamp: '2026-06-08 09:12', status: 'Answered' },
    { id: 'L007', userName: 'Alice Dupont', role: 'Employee', questionTopic: 'Company benefits overview', timestamp: '2026-06-08 08:45', status: 'Answered' },
    { id: 'L008', userName: 'Robert Martin', role: 'Employee', questionTopic: 'Remote work policy', timestamp: '2026-06-07 17:30', status: 'Answered' },
    { id: 'L009', userName: 'Sarah Chen', role: 'Employee', questionTopic: 'Restricted information access', timestamp: '2026-06-07 16:42', status: 'Blocked' },
    { id: 'L010', userName: 'Pierre Leroy', role: 'Employee', questionTopic: 'Training catalog', timestamp: '2026-06-07 14:20', status: 'Answered' },
  ];

  const stats = [
    { label: 'Questions Today', value: '247', color: DARK.text },
    { label: '% Answered', value: '82%', color: DARK.green },
    { label: '% Blocked', value: '3%', color: DARK.red },
    { label: '% Redirected to HR', value: '15%', color: DARK.orange },
  ];

  const topicsData = [
    { topic: 'Congés', count: 87, max: 100 },
    { topic: 'Paie', count: 52, max: 100 },
    { topic: 'Mobilité', count: 34, max: 100 },
    { topic: 'Procédures RH', count: 28, max: 100 },
    { topic: 'Avantages', count: 21, max: 100 },
    { topic: 'Autres', count: 25, max: 100 },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'Answered') return DARK.green;
    if (status === 'Blocked') return DARK.red;
    return DARK.orange;
  };

  return (
    <div style={{ flex: 1, backgroundColor: DARK.bg, overflowY: 'auto', padding: 32, fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: DARK.text, marginBottom: 8 }}>AI Usage Logs</h1>
        <p style={{ fontSize: 14, color: DARK.textDim }}>Monitor AI assistant usage and interaction patterns (metadata only)</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 20, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 200px' }}>
          <input
            type="text"
            placeholder="Date range"
            style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}
          />
        </div>
        <div style={{ flex: '1 1 240px' }}>
          <input
            type="text"
            placeholder="Search by user name..."
            style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}
          />
        </div>
        <div style={{ flex: '0 0 180px' }}>
          <select style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}>
            <option>All Status</option>
            <option>Answered</option>
            <option>Blocked</option>
            <option>Redirected</option>
          </select>
        </div>
        <button
          style={{ height: 40, padding: '0 20px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
        >
          Export CSV
        </button>
      </div>

      {/* Privacy Notice */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: 12, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke={DARK.amber} strokeWidth="1.5" />
          <path d="M8 4V8M8 11H8.01" stroke={DARK.amber} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 13, color: DARK.textDim, fontStyle: 'italic' }}>
          Full conversation content is not displayed — metadata only, per data privacy policy.
        </span>
      </div>

      {/* Main Table */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, overflow: 'hidden', marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${DARK.border}` }}>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Name</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Question Topic</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timestamp</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr
                key={log.id}
                style={{ borderBottom: i < logs.length - 1 ? `1px solid ${DARK.border}` : 'none', transition: 'background-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.cardHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: 16, fontSize: 14, color: DARK.text, fontWeight: 500 }}>{log.userName}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, fontSize: 12, color: DARK.textDim }}>
                    {log.role}
                  </span>
                </td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{log.questionTopic}</td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{log.timestamp}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: `${getStatusColor(log.status)}22`, borderRadius: 6, fontSize: 12, fontWeight: 600, color: getStatusColor(log.status) }}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Most Asked Topics Chart */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK.text, marginBottom: 24 }}>Most Asked Topics</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {topicsData.map((item, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, color: DARK.text, fontWeight: 500 }}>{item.topic}</span>
                <span style={{ fontSize: 14, color: DARK.textDim }}>{item.count}</span>
              </div>
              <div style={{ width: '100%', height: 8, backgroundColor: DARK.bg, borderRadius: 4, overflow: 'hidden' }}>
                <div
                  style={{ width: `${(item.count / item.max) * 100}%`, height: '100%', backgroundColor: DARK.gray, borderRadius: 4, transition: 'width 0.3s ease' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI Button */}
      <button
        style={{ position: 'fixed', bottom: 28, right: 28, width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.amber, border: 'none', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        ✦
      </button>

    </div>
  );
}
