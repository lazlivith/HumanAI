// Leave Management Dashboard
import { useAuth } from '../context/AuthContext';

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
  amber:        '#92400E',
  amberBg:      '#FFFBEB',
  green:        '#065F46',
  greenBg:      '#ECFDF5',
} as const;

const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";

export function LeaveDashboard() {
  const { user } = useAuth();
  const isCollaborateur = user?.role === 'Collaborateur';
  const requests = [
    { id: 'LV-001', name: 'Maria Lopez', type: 'Congés Payés', from: '2026-06-10', to: '2026-06-14', days: 5, status: 'En attente' },
    { id: 'LV-002', name: 'Robert Smith', type: 'Arrêt Maladie', from: '2026-06-03', to: '2026-06-03', days: 1, status: 'Approuvé' },
    { id: 'LV-003', name: 'Jennifer Wu', type: 'Congé Personnel', from: '2026-06-08', to: '2026-06-09', days: 2, status: 'En attente' },
    { id: 'LV-004', name: 'Lisa Taylor', type: 'Congés Payés', from: '2026-06-20', to: '2026-06-28', days: 7, status: 'Approuvé' },
    { id: 'LV-005', name: 'David Osei', type: 'Congés Payés', from: '2026-06-01', to: '2026-06-07', days: 5, status: 'Actif' },
    { id: 'LV-006', name: 'Carlos Rivera', type: 'Urgence', from: '2026-06-05', to: '2026-06-05', days: 1, status: 'En attente' },
  ];

  const history = [
    { name: 'James Harlow', type: 'Congés Payés', dates: '15–19 Avr', days: 5, approved: 'Admin RH' },
    { name: 'Sara Mitchell', type: 'Arrêt Maladie', dates: '2 Mai', days: 1, approved: 'Manager' },
    { name: 'Priya Nair', type: 'Congé Personnel', dates: '14–15 Mai', days: 2, approved: 'Admin RH' },
    { name: 'Yuki Tanaka', type: 'Congés Payés', dates: '26–30 Mai', days: 5, approved: 'Manager' },
  ];

  const leaveDays: Record<number, string> = {
    1: 'leave', 2: 'leave', 3: 'leave', 4: 'leave', 5: 'sick',
    8: 'pending', 9: 'pending', 10: 'pending', 11: 'pending', 12: 'pending', 13: 'pending', 14: 'pending',
    20: 'approved', 21: 'approved', 22: 'approved', 23: 'approved', 24: 'approved', 28: 'approved',
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Gestion des Congés</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Gérez les demandes de congés, les soldes et les workflows d'approbation</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Génération du rapport de congés...')}>
            <NCButton>Exporter le rapport</NCButton>
          </div>
          <div onClick={() => alert('Ouverture du formulaire de demande de congé...')}>
            <NCButton primary>+ Demander un congé</NCButton>
          </div>
        </div>
      </div>

      {/* Leave balance cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {[
          { label: 'Congés Payés', used: 8, total: 20 },
          { label: 'Arrêt Maladie', used: 2, total: 10 },
          { label: 'Jours Personnels', used: 1, total: 5 },
          { label: 'Télétravail', used: 24, total: 60 },
          { label: 'En attente', used: 4, total: null },
        ].map((b) => (
          <NCCard key={b.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{b.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>
              {b.total !== null ? `${b.total - b.used}` : b.used}
            </div>
            <div style={{ fontSize: 10, color: NC.mutedDim, marginBottom: 12 }}>
              {b.total !== null ? `${b.used} pris / ${b.total} total` : 'en attente de validation'}
            </div>
            {b.total !== null && (
              <div style={{ height: 5, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${(b.used / b.total) * 100}%` }} />
              </div>
            )}
          </NCCard>
        ))}
      </div>

      {/* Main row: calendar + requests */}
      <div style={{ display: 'grid', gridTemplateColumns: isCollaborateur ? '1fr' : '2fr 1fr', gap: 20 }}>

        {/* Calendar view */}
        <NCCard style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Juin 2026 — Calendrier</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button onClick={() => alert('Mois précédent')} data-cursor style={{ width: 26, height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 14, color: NC.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', backgroundColor: 'transparent' }}>‹</button>
              <button onClick={() => alert('Mois suivant')} data-cursor style={{ width: 26, height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 14, color: NC.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', backgroundColor: 'transparent' }}>›</button>
            </div>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((d) => (
              <div key={d} style={{ textAlign: 'center', fontSize: 10, color: NC.mutedDim, padding: 4 }}>{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {Array.from({ length: 35 }, (_, i) => {
              const day = i + 1;
              if (day > 30) return <div key={`empty-${i}`} style={{ height: 38 }} />;
              const mark = leaveDays[day];
              return (
                <div
                  key={`day-${day}`}
                  style={{
                    height: 38, border: `1px solid ${mark === 'leave' || mark === 'sick' || mark === 'approved' ? NC.accentBorder : mark === 'pending' ? NC.mutedDim : NC.borderDim}`,
                    borderRadius: 6,
                    borderStyle: mark === 'pending' ? 'dashed' : 'solid',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                    backgroundColor: mark === 'leave' || mark === 'approved' ? NC.accentBg : mark === 'sick' ? NC.greenBg : mark === 'pending' ? '#F9FAFB' : 'transparent',
                  }}
                >
                  <span style={{ fontSize: 11, color: NC.fgDim, fontWeight: mark ? 600 : 400 }}>{day}</span>
                  {mark && <div style={{ width: 14, height: 2, backgroundColor: mark === 'leave' || mark === 'approved' ? NC.accent : mark === 'sick' ? NC.green : NC.mutedDim, borderRadius: 1 }} />}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${NC.border}` }}>
            {[
              { label: 'Congé Actif', bg: NC.accentBg, border: NC.accentBorder },
              { label: 'Approuvé', bg: NC.accentBg, border: NC.accentBorder },
              { label: 'En attente', bg: '#F9FAFB', border: NC.mutedDim },
              { label: 'Disponible', bg: 'transparent', border: NC.borderDim },
            ].map((l) => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 12, height: 12, backgroundColor: l.bg, border: `1px solid ${l.border}`, borderRadius: 3 }} />
                <span style={{ fontSize: 10, color: NC.muted }}>{l.label}</span>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Pending requests - only for managers / RH */}
        {!isCollaborateur && (
        <NCCard style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Demandes à Valider</span>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 11, color: '#FFFFFF', fontWeight: 600 }}>3</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {requests.filter((r) => r.status === 'En attente' || r.status === 'Pending').map((req) => (
              <div key={req.id} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{req.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{req.name}</div>
                    <div style={{ fontSize: 10, color: NC.mutedDim }}>{req.type}</div>
                  </div>
                  <div style={{ fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{req.days}j</div>
                </div>
                <div style={{ height: 1, backgroundColor: NC.borderDim }} />
                <div style={{ fontSize: 10, color: NC.muted }}>{req.from} → {req.to}</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div onClick={() => alert('Demande approuvée avec succès !')}><NCButton primary>Approuver</NCButton></div>
                  <div onClick={() => alert('Demande refusée.')}><NCButton>Refuser</NCButton></div>
                </div>
              </div>
            ))}
          </div>
        </NCCard>
        )}
      </div>

      {/* Leave requests table - only for managers/RH, not collaborateurs */}
      {!isCollaborateur && (
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Toutes les Demandes</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher...</span>
            </div>
            {['Type', 'Statut', 'Période'].map((f) => (
              <button key={f} onClick={() => alert(`Trier par ${f}`)} data-cursor style={{ height: 32, padding: '0 12px', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'none' }}>
                <span style={{ fontSize: 11, color: NC.muted }}>{f}</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </button>
            ))}
          </div>
        </div>
        <table style={{ width: '100%' }}>
          <thead style={{ borderBottom: `1px solid ${NC.border}`, backgroundColor: NC.bg }}>
            <tr>
              {['ID', 'Employé', 'Type', 'Début', 'Fin', 'Jours', 'Statut', 'Actions'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((r, i) => (
              <tr key={r.id} style={{ borderBottom: i === requests.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }} onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}>
                <td style={{ padding: 16, fontSize: 11, color: NC.mutedDim }}>{r.id}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{r.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{r.name}</span>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.type}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.from}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.to}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{r.days}j</td>
                <td style={{ padding: 16 }}><LeaveBadge status={r.status} /></td>
                <td style={{ padding: 16 }}>
                  <button onClick={() => alert(`Détails de la demande ${r.id}`)} data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>Voir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </NCCard>
      )}

      {/* Leave history */}
      <NCCard style={{ padding: 20 }}>
        <NCSectionLabel label="Historique des Congés" />
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {history.map((h) => (
            <div key={h.name} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{h.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{h.name}</div>
              </div>
              <div style={{ fontSize: 11, color: NC.muted, marginBottom: 2 }}>{h.type}</div>
              <div style={{ fontSize: 10, color: NC.mutedDim, marginBottom: 2 }}>{h.dates} · {h.days}j</div>
              <div style={{ fontSize: 10, color: NC.mutedDim }}>Approuvé par {h.approved}</div>
            </div>
          ))}
        </div>
      </NCCard>

    </div>
  );
}

function NCCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }}>{children}</div>;
}

function NCButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button data-cursor style={{ height: 28, padding: '0 14px', border: primary ? 'none' : `1px solid ${NC.border}`, borderRadius: 999, background: primary ? BTN_GRADIENT : 'transparent', color: primary ? '#FFFFFF' : NC.muted, boxShadow: primary ? '0 2px 8px rgba(26,75,110,0.22)' : 'none', fontSize: 11, fontWeight: primary ? 600 : 400, cursor: 'none', transition: 'opacity 0.15s', flex: 1 }}>
      {children}
    </button>
  );
}

function NCSectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>{label}</span>
      <button onClick={() => alert('Ouverture de la liste complète...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Voir tout</button>
    </div>
  );
}

function LeaveBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Approuvé: { bg: NC.greenBg, border: NC.green, color: NC.green },
    'En attente': { bg: NC.amberBg, border: NC.amber, color: NC.amber },
    Actif: { bg: NC.accentBg, border: NC.accentBorder, color: NC.link },
    Refusé: { bg: NC.redBg, border: NC.red, color: NC.red },
  };
  const s = styles[status] ?? styles['En attente'];
  return <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>{status}</span>;
}
