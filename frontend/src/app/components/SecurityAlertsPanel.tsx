// Security Alerts Panel — Dark theme with amber accents

import { useState } from 'react';

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
  redBg:    '#7F1D1D',
  orange:   '#FB923C',
  orangeBg: '#9A3412',
  green:    '#10B981',
  greenBg:  '#065F46',
  yellow:   '#FBBF24',
} as const;

interface Alert {
  id: string;
  userName: string;
  role: string;
  actionAttempted: string;
  timestamp: string;
  severity: 'Critical' | 'Medium' | 'Low';
  status: 'Open' | 'Resolved';
  description: string;
  aiResponse: 'Blocked' | 'Redirected to HR';
}

export function SecurityAlertsPanel() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [resolutionNote, setResolutionNote] = useState('');

  const alerts: Alert[] = [
    {
      id: 'A001',
      userName: 'Marc Dubois',
      role: 'Employee',
      actionAttempted: 'Access to salary data of other employees',
      timestamp: '2026-06-08 14:32',
      severity: 'Critical',
      status: 'Open',
      description: 'User attempted to query the AI assistant for full list of employee salaries across the company. Request was blocked as it exceeds user permissions.',
      aiResponse: 'Blocked',
    },
    {
      id: 'A002',
      userName: 'Julie Martin',
      role: 'Manager',
      actionAttempted: 'Repeated requests for confidential HR data',
      timestamp: '2026-06-08 11:15',
      severity: 'Medium',
      status: 'Open',
      description: 'Manager made 12 requests in 10 minutes trying to access performance review scores outside their team perimeter.',
      aiResponse: 'Redirected to HR',
    },
    {
      id: 'A003',
      userName: 'Sarah Chen',
      role: 'Employee',
      actionAttempted: 'Attempt to bypass AI safety rules',
      timestamp: '2026-06-07 16:42',
      severity: 'Medium',
      status: 'Resolved',
      description: 'User tried multiple prompt injection techniques to extract restricted information.',
      aiResponse: 'Blocked',
    },
    {
      id: 'A004',
      userName: 'Thomas Bernard',
      role: 'Employee',
      actionAttempted: 'Access to medical data',
      timestamp: '2026-06-07 09:20',
      severity: 'Critical',
      status: 'Resolved',
      description: 'Attempted to retrieve sick leave details and medical information of colleagues.',
      aiResponse: 'Blocked',
    },
    {
      id: 'A005',
      userName: 'Emma Wilson',
      role: 'Manager',
      actionAttempted: 'Unusual data export request',
      timestamp: '2026-06-06 15:55',
      severity: 'Low',
      status: 'Resolved',
      description: 'Requested export of all employee contact information including personal phone numbers.',
      aiResponse: 'Redirected to HR',
    },
  ];

  const stats = [
    { label: 'Open Alerts', value: '15', color: DARK.red },
    { label: 'Critical', value: '3', color: DARK.red, bg: DARK.redBg },
    { label: 'Medium', value: '8', color: DARK.orange, bg: DARK.orangeBg },
    { label: 'Resolved Today', value: '12', color: DARK.green, bg: DARK.greenBg },
  ];

  const getSeverityColor = (severity: string) => {
    if (severity === 'Critical') return DARK.red;
    if (severity === 'Medium') return DARK.orange;
    return DARK.yellow;
  };

  const getSeverityBg = (severity: string) => {
    if (severity === 'Critical') return DARK.redBg;
    if (severity === 'Medium') return DARK.orangeBg;
    return '#713F12';
  };

  return (
    <div style={{ flex: 1, backgroundColor: DARK.bg, overflowY: 'auto', padding: 32, fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: DARK.text, marginBottom: 8 }}>Security Alerts Panel</h1>
        <p style={{ fontSize: 14, color: DARK.textDim }}>Monitor and manage security alerts from AI assistant interactions</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color, marginBottom: 4 }}>
              {stat.value}
            </div>
            {stat.bg && (
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: stat.bg, borderRadius: 6, marginTop: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: stat.color }}>
                  {stat.label}
                </span>
              </div>
            )}
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
        <div style={{ flex: '0 0 160px' }}>
          <select style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}>
            <option>All Severities</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Critical</option>
          </select>
        </div>
        <div style={{ flex: '0 0 160px' }}>
          <select style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}>
            <option>All Status</option>
            <option>Open</option>
            <option>Resolved</option>
          </select>
        </div>
        <div style={{ flex: '1 1 240px' }}>
          <input
            type="text"
            placeholder="Search by user name..."
            style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}
          />
        </div>
        <button
          style={{ height: 40, padding: '0 20px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
        >
          Export CSV
        </button>
      </div>

      {/* Main Table */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${DARK.border}` }}>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Name</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action Attempted</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timestamp</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Severity</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, i) => (
              <tr
                key={alert.id}
                style={{ borderBottom: i < alerts.length - 1 ? `1px solid ${DARK.border}` : 'none', transition: 'background-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.cardHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: 16, fontSize: 14, color: DARK.text, fontWeight: 500 }}>{alert.userName}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, fontSize: 12, color: DARK.textDim }}>
                    {alert.role}
                  </span>
                </td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{alert.actionAttempted}</td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{alert.timestamp}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: getSeverityBg(alert.severity), borderRadius: 6, fontSize: 12, fontWeight: 600, color: getSeverityColor(alert.severity) }}>
                    {alert.severity}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: alert.status === 'Open' ? DARK.redBg : DARK.greenBg, borderRadius: 6, fontSize: 12, fontWeight: 600, color: alert.status === 'Open' ? DARK.red : DARK.green }}>
                    {alert.status}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => setSelectedAlert(alert)}
                      style={{ height: 32, padding: '0 12px', backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, color: DARK.text, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}
                    >
                      View Details
                    </button>
                    {alert.status === 'Open' && (
                      <button
                        style={{ height: 32, padding: '0 12px', backgroundColor: DARK.amber, border: 'none', borderRadius: 6, color: '#000', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side Panel */}
      {selectedAlert && (
        <>
          <div
            onClick={() => setSelectedAlert(null)}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100 }}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, width: 360, height: '100vh', backgroundColor: DARK.card, borderLeft: `1px solid ${DARK.border}`, zIndex: 101, overflowY: 'auto', padding: 24 }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK.text }}>Alert Details</h3>
              <button
                onClick={() => setSelectedAlert(null)}
                style={{ width: 32, height: 32, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, color: DARK.text, fontSize: 18, cursor: 'pointer', lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            {/* User Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, padding: 16, backgroundColor: DARK.bg, borderRadius: 8 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: DARK.amber, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#000' }}>
                {selectedAlert.userName.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: DARK.text, marginBottom: 4 }}>{selectedAlert.userName}</div>
                <span style={{ display: 'inline-block', padding: '2px 8px', backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 4, fontSize: 11, color: DARK.textDim }}>
                  {selectedAlert.role}
                </span>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action Attempted</div>
              <div style={{ fontSize: 14, color: DARK.text, lineHeight: 1.6 }}>{selectedAlert.description}</div>
            </div>

            {/* AI Response */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Response</div>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: selectedAlert.aiResponse === 'Blocked' ? DARK.redBg : DARK.orangeBg, borderRadius: 6, fontSize: 13, fontWeight: 600, color: selectedAlert.aiResponse === 'Blocked' ? DARK.red : DARK.orange }}>
                {selectedAlert.aiResponse}
              </span>
            </div>

            {/* Severity & Status */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Severity</div>
                <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: getSeverityBg(selectedAlert.severity), borderRadius: 6, fontSize: 13, fontWeight: 600, color: getSeverityColor(selectedAlert.severity) }}>
                  {selectedAlert.severity}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Status</div>
                <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: selectedAlert.status === 'Open' ? DARK.redBg : DARK.greenBg, borderRadius: 6, fontSize: 13, fontWeight: 600, color: selectedAlert.status === 'Open' ? DARK.red : DARK.green }}>
                  {selectedAlert.status}
                </span>
              </div>
            </div>

            {/* Timestamp */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Timestamp</div>
              <div style={{ fontSize: 14, color: DARK.text }}>{selectedAlert.timestamp}</div>
            </div>

            {/* Resolution Note */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Resolution Note
              </label>
              <textarea
                value={resolutionNote}
                onChange={e => setResolutionNote(e.target.value)}
                placeholder="Add notes about how this alert was resolved..."
                style={{ width: '100%', minHeight: 100, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: 12, color: DARK.text, fontSize: 14, resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                style={{ width: '100%', height: 44, backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
              >
                Mark as Resolved
              </button>
              <button
                style={{ width: '100%', height: 44, backgroundColor: 'transparent', border: `2px solid ${DARK.red}`, borderRadius: 8, color: DARK.red, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                Escalate to HR
              </button>
            </div>

          </div>
        </>
      )}

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
