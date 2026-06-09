// Payroll Dashboard — salary and compensation management
import React from 'react';

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

export function PayrollDashboard() {
  const payrollData = [
    { name: 'James Harlow', id: 'EMP-001', dept: 'Ingénierie', salary: 95000, bonus: 5000, deductions: 12500, net: 87500, status: 'Traité' },
    { name: 'Sara Mitchell', id: 'EMP-002', dept: 'Marketing', salary: 82000, bonus: 3000, deductions: 10800, net: 74200, status: 'Traité' },
    { name: 'David Osei', id: 'EMP-003', dept: 'Design', salary: 78000, bonus: 2000, deductions: 9800, net: 70200, status: 'En attente' },
    { name: 'Priya Nair', id: 'EMP-004', dept: 'RH', salary: 72000, bonus: 2500, deductions: 9200, net: 65300, status: 'Traité' },
    { name: 'Carlos Rivera', id: 'EMP-005', dept: 'Ventes', salary: 68000, bonus: 8000, deductions: 9500, net: 66500, status: 'Traité' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Gestion de la Paie</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Traitez la paie, gérez les rémunérations et suivez les dépenses</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Téléchargement du rapport de paie en cours...')}>
            <NCButton>Télécharger le rapport</NCButton>
          </div>
          <div onClick={() => alert('Lancement du traitement de la paie pour le mois en cours...')}>
            <NCButton primary>Traiter la Paie</NCButton>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {[
          { label: 'Masse Salariale', value: '1.8M€', sub: 'Ce mois-ci' },
          { label: 'Salaire Moyen', value: '74.2K€', sub: 'Par employé' },
          { label: 'Paiements en attente', value: '12', sub: '4.8%' },
          { label: 'Primes Versées', value: '127K€', sub: 'Ce trimestre' },
          { label: 'Retenues / Taxes', value: '385K€', sub: 'Annuel' },
        ].map((stat) => (
          <NCCard key={stat.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 28, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: 10, color: NC.mutedDim }}>{stat.sub}</div>
          </NCCard>
        ))}
      </div>

      {/* Current payroll cycle */}
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Cycle de Paie Actuel</span>
            <div style={{ height: 22, padding: '0 8px', backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: NC.link, fontWeight: 600 }}>Juin 2026</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher un employé...</span>
            </div>
            <button onClick={() => alert('Filtrer par Département')} data-cursor style={{ height: 32, padding: '0 12px', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'none' }}>
              <span style={{ fontSize: 11, color: NC.muted }}>Département</span>
              <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
            </button>
          </div>
        </div>

        <table style={{ width: '100%' }}>
          <thead style={{ borderBottom: `1px solid ${NC.border}`, backgroundColor: NC.bg }}>
            <tr>
              {['Employé', 'ID', 'Département', 'Salaire Base', 'Primes', 'Retenues', 'Net à Payer', 'Statut'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payrollData.map((p, i) => (
              <tr key={p.id} style={{ borderBottom: i === payrollData.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }} onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{p.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{p.name}</span>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.mutedDim }}>{p.id}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{p.dept}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{(p.salary / 1000).toFixed(0)}K€</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.fgDim }}>{(p.bonus / 1000).toFixed(1)}K€</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{(p.deductions / 1000).toFixed(1)}K€</td>
                <td style={{ padding: 16, fontSize: 12, color: NC.fg, fontWeight: 700 }}>{(p.net / 1000).toFixed(1)}K€</td>
                <td style={{ padding: 16 }}><PayrollStatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ borderTop: `1px solid ${NC.border}`, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: NC.muted }}>5 employés sur 248 affichés</span>
          <div style={{ fontSize: 11, color: NC.fgDim }}>Total: <span style={{ fontWeight: 700, color: NC.fg }}>363.7K€</span></div>
        </div>
      </NCCard>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {/* Department payroll breakdown */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Masse Salariale par Département" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { dept: 'Ingénierie', amount: 582000, pct: 32 },
              { dept: 'Ventes', amount: 418000, pct: 23 },
              { dept: 'Marketing', amount: 312000, pct: 17 },
              { dept: 'Opérations', amount: 275000, pct: 15 },
              { dept: 'Design', amount: 148000, pct: 8 },
              { dept: 'Finance', amount: 91000, pct: 5 },
            ].map((d) => (
              <div key={d.dept}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{d.dept}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{(d.amount / 1000).toFixed(0)}K€ ({d.pct}%)</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${d.pct * 3}%` }} />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Payroll timeline */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Calendrier de Paie" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { date: '1 Juin', event: 'Début du cycle', status: 'completed' },
              { date: '5 Juin', event: 'Feuilles de temps soumises', status: 'completed' },
              { date: '8 Juin', event: 'Revue de la paie', status: 'current' },
              { date: '12 Juin', event: 'Validation de la paie', status: 'pending' },
              { date: '15 Juin', event: 'Traitement des paiements', status: 'pending' },
              { date: '16 Juin', event: 'Dépôts directs', status: 'pending' },
            ].map((item) => (
              <div key={item.event} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 50, flexShrink: 0, fontSize: 10, color: NC.muted }}>{item.date}</div>
                <div style={{ flex: 1, borderLeft: `2px solid ${NC.border}`, paddingLeft: 12, position: 'relative' }}>
                  <div style={{
                    position: 'absolute', left: -6, top: 4, width: 10, height: 10, borderRadius: '50%',
                    border: `2px solid ${item.status === 'completed' ? NC.accent : item.status === 'current' ? NC.navy : NC.border}`,
                    backgroundColor: item.status === 'completed' ? NC.accent : NC.card,
                  }} />
                  <div style={{ fontSize: 11, color: NC.fgDim }}>{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Expense breakdown */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Répartition des Coûts" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            {/* Donut chart */}
            <div style={{ position: 'relative', width: 110, height: 110 }}>
              <svg viewBox="0 0 36 36" style={{ width: 110, height: 110, transform: 'rotate(-90deg)' }}>
                {[
                  { pct: 68, color: NC.navy, offset: 0 },
                  { pct: 12, color: NC.accent, offset: 68 },
                  { pct: 11, color: NC.teal, offset: 80 },
                  { pct: 9, color: NC.link, offset: 91 },
                ].map((s) => (
                  <circle key={`seg-${s.offset}`} cx="18" cy="18" r="15.9" fill="none" stroke={s.color} strokeWidth="3.5" strokeDasharray={`${s.pct} ${100 - s.pct}`} strokeDashoffset={-s.offset} />
                ))}
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg }}>1.8M€</div>
                <div style={{ fontSize: 9, color: NC.mutedDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>total</div>
              </div>
            </div>
            {/* Legend */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Salaire de Base', pct: 68, color: NC.navy },
                { label: 'Primes', pct: 12, color: NC.accent },
                { label: 'Avantages', pct: 11, color: NC.teal },
                { label: 'Taxes / Retenues', pct: 9, color: NC.link },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: NC.fgDim }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: 10, color: NC.muted }}>{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </NCCard>
      </div>

    </div>
  );
}

function NCCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }}>{children}</div>;
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
      <button onClick={() => alert('Affichage de la vue détaillée...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Voir tout</button>
    </div>
  );
}

function PayrollStatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Traité: { bg: NC.greenBg, border: NC.green, color: NC.green },
    'En attente': { bg: '#FFFBEB', border: '#92400E', color: '#92400E' },
    Échoué: { bg: NC.redBg, border: NC.red, color: NC.red },
  };
  const s = styles[status] ?? styles['En attente'];
  return <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>{status}</span>;
}
