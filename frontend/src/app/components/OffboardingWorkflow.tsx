// Offboarding Workflow — Dark theme with amber accents

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
  blue:     '#3B82F6',
  blueBg:   '#1E3A8A',
  green:    '#10B981',
} as const;

interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  completedAt?: string;
}

interface OffboardingEmployee {
  id: string;
  name: string;
  jobTitle: string;
  departureDate: string;
  departureReason: 'Resignation' | 'End of Contract' | 'Dismissal';
  completedSteps: number;
  totalSteps: number;
  checklist: ChecklistItem[];
}

export function OffboardingWorkflow() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const employees: OffboardingEmployee[] = [
    {
      id: 'OFF001',
      name: 'Thomas Bernard',
      jobTitle: 'Senior Developer',
      departureDate: '2026-06-30',
      departureReason: 'Resignation',
      completedSteps: 3,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Equipment returned', completed: true, completedAt: '2026-06-05 14:30' },
        { id: 'c2', label: 'System access revoked', completed: true, completedAt: '2026-06-06 09:15' },
        { id: 'c3', label: 'Administrative files closed', completed: true, completedAt: '2026-06-07 11:20' },
        { id: 'c4', label: 'Knowledge transfer document generated', completed: false },
        { id: 'c5', label: 'Exit interview completed', completed: false },
      ],
    },
    {
      id: 'OFF002',
      name: 'Julie Martin',
      jobTitle: 'Marketing Manager',
      departureDate: '2026-07-15',
      departureReason: 'End of Contract',
      completedSteps: 1,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Equipment returned', completed: true, completedAt: '2026-06-03 16:45' },
        { id: 'c2', label: 'System access revoked', completed: false },
        { id: 'c3', label: 'Administrative files closed', completed: false },
        { id: 'c4', label: 'Knowledge transfer document generated', completed: false },
        { id: 'c5', label: 'Exit interview completed', completed: false },
      ],
    },
    {
      id: 'OFF003',
      name: 'Marc Dubois',
      jobTitle: 'Sales Representative',
      departureDate: '2026-06-20',
      departureReason: 'Dismissal',
      completedSteps: 4,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Equipment returned', completed: true, completedAt: '2026-06-02 10:00' },
        { id: 'c2', label: 'System access revoked', completed: true, completedAt: '2026-06-02 10:05' },
        { id: 'c3', label: 'Administrative files closed', completed: true, completedAt: '2026-06-04 15:30' },
        { id: 'c4', label: 'Knowledge transfer document generated', completed: true, completedAt: '2026-06-05 14:00' },
        { id: 'c5', label: 'Exit interview completed', completed: false },
      ],
    },
  ];

  const stats = [
    { label: 'Active Offboardings', value: '8' },
    { label: 'Completed This Month', value: '12' },
    { label: 'Overdue Steps', value: '3', color: DARK.red, bg: DARK.redBg },
    { label: 'Avg Completion Days', value: '14' },
  ];

  const getReasonColor = (reason: string) => {
    if (reason === 'Resignation') return DARK.orange;
    if (reason === 'End of Contract') return DARK.blue;
    return DARK.red;
  };

  const getReasonBg = (reason: string) => {
    if (reason === 'Resignation') return DARK.orangeBg;
    if (reason === 'End of Contract') return DARK.blueBg;
    return DARK.redBg;
  };

  return (
    <div style={{ flex: 1, backgroundColor: DARK.bg, overflowY: 'auto', padding: 32, fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: DARK.text, marginBottom: 8 }}>Offboarding Workflow</h1>
        <p style={{ fontSize: 14, color: DARK.textDim }}>Manage employee departures and ensure compliance with all exit procedures</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color || DARK.text, marginBottom: 4 }}>
              {stat.value}
            </div>
            {stat.bg && (
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: stat.bg, borderRadius: 6, marginTop: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: stat.color }}>
                  Requires Attention
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Offboardings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {employees.map(emp => {
          const isExpanded = expandedId === emp.id;
          const progressPercent = (emp.completedSteps / emp.totalSteps) * 100;

          return (
            <div
              key={emp.id}
              style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.15s' }}
            >

              {/* Collapsed State */}
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>

                  {/* Avatar */}
                  <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.bg, border: `2px solid ${DARK.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: DARK.amber, flexShrink: 0 }}>
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 18, fontWeight: 600, color: DARK.text, marginBottom: 4 }}>{emp.name}</div>
                    <div style={{ fontSize: 14, color: DARK.textDim }}>{emp.jobTitle}</div>
                  </div>

                  {/* Departure Date */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: DARK.textDim, marginBottom: 4 }}>Departure Date</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: DARK.text }}>{emp.departureDate}</div>
                  </div>

                  {/* Departure Reason Badge */}
                  <div>
                    <span style={{ display: 'inline-block', padding: '6px 14px', backgroundColor: getReasonBg(emp.departureReason), borderRadius: 6, fontSize: 13, fontWeight: 600, color: getReasonColor(emp.departureReason) }}>
                      {emp.departureReason}
                    </span>
                  </div>

                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: DARK.textDim }}>Progress</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: DARK.text }}>{emp.completedSteps} of {emp.totalSteps} steps completed</span>
                  </div>
                  <div style={{ width: '100%', height: 10, backgroundColor: DARK.bg, borderRadius: 5, overflow: 'hidden' }}>
                    <div
                      style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent === 100 ? DARK.green : DARK.amber, borderRadius: 5, transition: 'width 0.3s ease' }}
                    />
                  </div>
                </div>

                {/* View Checklist Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : emp.id)}
                  style={{ height: 40, padding: '0 20px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                >
                  {isExpanded ? 'Hide Checklist' : 'View Checklist'}
                </button>

              </div>

              {/* Expanded State - Checklist */}
              {isExpanded && (
                <div style={{ borderTop: `1px solid ${DARK.border}`, padding: 24, backgroundColor: DARK.bg }}>

                  <h4 style={{ fontSize: 16, fontWeight: 600, color: DARK.text, marginBottom: 20 }}>Offboarding Checklist</h4>

                  {/* Checklist Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                    {emp.checklist.map(item => (
                      <div
                        key={item.id}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 8 }}
                      >
                        {/* Checkbox */}
                        <div
                          style={{ width: 24, height: 24, borderRadius: 6, border: `2px solid ${item.completed ? DARK.green : DARK.border}`, backgroundColor: item.completed ? DARK.green : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}
                        >
                          {item.completed && (
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L5 9L13 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>

                        {/* Label */}
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 500, color: item.completed ? DARK.textDim : DARK.text, textDecoration: item.completed ? 'line-through' : 'none' }}>
                            {item.label}
                          </div>
                          {item.completedAt && (
                            <div style={{ fontSize: 12, color: DARK.textDim, marginTop: 4 }}>
                              Completed: {item.completedAt}
                            </div>
                          )}
                        </div>

                        {/* Mark Done Button */}
                        {!item.completed && (
                          <button
                            style={{ height: 36, padding: '0 16px', backgroundColor: DARK.amber, border: 'none', borderRadius: 6, color: '#000', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                          >
                            Mark Done
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      style={{ height: 44, padding: '0 24px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                    >
                      Generate Exit Documents
                    </button>
                    <button
                      style={{ height: 44, padding: '0 24px', backgroundColor: 'transparent', border: `1px solid ${DARK.border}`, borderRadius: 8, color: DARK.text, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = DARK.cardHover; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; }}
                    >
                      View Employee Profile
                    </button>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Floating AI Button */}
      <button
        style={{ position: 'fixed', bottom: 28, right: 28, width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.amber, border: 'none', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, transition: 'transform 0.15s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        ✦
      </button>

    </div>
  );
}
