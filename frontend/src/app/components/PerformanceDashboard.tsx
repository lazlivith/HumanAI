// Performance Dashboard
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

export function PerformanceDashboard() {
  const reviews = [
    { name: 'James Harlow', dept: 'Ingénierie', role: 'Développeur Senior', score: 4.7, trend: '+0.3', cycle: 'Q2 2026', status: 'Terminé', reviewer: 'Sarah Chen' },
    { name: 'Sara Mitchell', dept: 'Marketing', role: 'Responsable Marketing', score: 4.2, trend: '+0.1', cycle: 'Q2 2026', status: 'En revue', reviewer: 'David Kim' },
    { name: 'David Osei', dept: 'Design', role: 'Designer UI/UX', score: 4.5, trend: '+0.4', cycle: 'Q2 2026', status: 'Terminé', reviewer: 'Maria Lopez' },
    { name: 'Priya Nair', dept: 'RH', role: 'Spécialiste RH', score: 4.1, trend: '—', cycle: 'Q2 2026', status: 'Programmé', reviewer: 'Robert Smith' },
    { name: 'Carlos Rivera', dept: 'Ventes', role: 'Commercial', score: 3.8, trend: '-0.2', cycle: 'Q2 2026', status: 'En revue', reviewer: 'Jennifer Wu' },
    { name: 'Yuki Tanaka', dept: 'Ingénierie', role: 'Développeur Frontend', score: 4.6, trend: '+0.5', cycle: 'Q2 2026', status: 'Terminé', reviewer: 'Sarah Chen' },
    { name: 'Tom Brennan', dept: 'Opérations', role: 'Directeur Ops', score: 4.0, trend: '+0.2', cycle: 'Q2 2026', status: 'Programmé', reviewer: 'Lisa Taylor' },
  ];

  const competencies = [
    { label: 'Communication', avg: 4.3 },
    { label: 'Compétences Techniques', avg: 4.6 },
    { label: 'Collaboration', avg: 4.1 },
    { label: 'Leadership', avg: 3.9 },
    { label: 'Innovation', avg: 4.0 },
    { label: 'Livraison', avg: 4.4 },
  ];

  const distribution = [
    { label: 'Exceptionnel (5)', count: 28, pct: 11 },
    { label: 'Dépasse (4-4.9)', count: 112, pct: 45 },
    { label: 'Atteint (3-3.9)', count: 81, pct: 33 },
    { label: 'En dessous (2-2.9)', count: 22, pct: 9 },
    { label: 'Insatisfaisant (<2)', count: 5, pct: 2 },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Gestion des Performances</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Suivez les évaluations, les notations et les cycles de performance des employés</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Exportation des évaluations en cours...')}>
            <NCButton>Exporter les évaluations</NCButton>
          </div>
          <div onClick={() => alert('Ouverture du module de création d\'un nouveau cycle...')}>
            <NCButton primary>+ Lancer un cycle</NCButton>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {[
          { label: 'Score Moyen', val: '4.2', sub: 'T2 2026' },
          { label: 'Évaluations Terminées', val: '148', sub: '60% de l\'effectif' },
          { label: 'En Cours', val: '62', sub: '25% de l\'effectif' },
          { label: 'Non Démarrées', val: '38', sub: '15% de l\'effectif' },
          { label: 'Top Performers', val: '28', sub: 'Score ≥ 4.8' },
        ].map((k) => (
          <NCCard key={k.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>{k.val}</div>
            <div style={{ fontSize: 10, color: NC.mutedDim }}>{k.sub}</div>
          </NCCard>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {/* Rating distribution */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Répartition des Notes" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {distribution.map((d) => (
              <div key={d.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{d.label}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{d.count} ({d.pct}%)</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${d.pct * 2.2}%` }} />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Competency scores */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Scores par Compétence" />
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 6, height: 130 }}>
            {competencies.map((c) => (
              <div key={c.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11, color: NC.fgDim, fontWeight: 600 }}>{c.avg}</span>
                <div style={{ width: '100%', backgroundColor: NC.accent, border: `1px solid ${NC.accentBorder}`, borderRadius: '3px 3px 0 0', height: `${(c.avg / 5) * 100}%` }} />
                <span style={{ fontSize: 9, color: NC.muted, textAlign: 'center', lineHeight: 1.2 }}>{c.label}</span>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Trend chart */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Tendance des Scores" />
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 110, paddingRight: 4 }}>
                {['5.0', '4.5', '4.0', '3.5', '3.0'].map((v) => <span key={v} style={{ fontSize: 9, color: NC.mutedDim }}>{v}</span>)}
              </div>
              <div style={{ flex: 1, height: 110, borderLeft: `1px solid ${NC.border}`, borderBottom: `1px solid ${NC.border}`, position: 'relative', backgroundColor: NC.bg, borderRadius: '0 0 4px 0' }}>
                {[20, 40, 60, 80].map((p) => <div key={p} style={{ position: 'absolute', left: 0, right: 0, top: `${p}%`, borderTop: `1px solid ${NC.borderDim}` }} />)}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} preserveAspectRatio="none">
                  <polyline points="0,80 100,70 200,60 300,55 400,48" fill="none" stroke={NC.accent} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                  {[[100,70],[200,60],[300,55],[400,48]].map(([x,y]) => (
                    <circle key={`pt-${x}`} cx={x} cy={y} r="3" fill={NC.card} stroke={NC.accent} strokeWidth="1.5" />
                  ))}
                </svg>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: 28, marginTop: 6, justifyContent: 'space-between' }}>
              {['T2 25', 'T3 25', 'T4 25', 'T1 26', 'T2 26'].map((q) => <span key={q} style={{ fontSize: 9, color: NC.mutedDim }}>{q}</span>)}
            </div>
          </div>
        </NCCard>
      </div>

      {/* Employee ratings table */}
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Évaluations — T2 2026</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher...</span>
            </div>
            {['Département', 'Statut', 'Score'].map((f) => (
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
              {['Employé', 'Département', 'Rôle', 'Score', 'Tendance', 'Cycle', 'Évaluateur', 'Statut', 'Actions'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <tr key={r.name} style={{ borderBottom: i === reviews.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }} onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{r.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{r.name}</span>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.dept}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.role}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 12, color: NC.fg, fontWeight: 700 }}>{r.score}</span>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: s <= Math.floor(r.score) ? NC.accent : NC.borderDim }} />
                      ))}
                    </div>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.trend}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.cycle}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{r.reviewer}</td>
                <td style={{ padding: 16 }}><PerfBadge status={r.status} /></td>
                <td style={{ padding: 16 }}>
                  <button onClick={() => alert(`Ouvrir l'évaluation de ${r.name}`)} data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>Ouvrir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </NCCard>

      {/* Goal tracking */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Moyenne par Département" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { dept: 'Ingénierie', avg: 4.5, pct: 90 },
              { dept: 'Design', avg: 4.4, pct: 88 },
              { dept: 'RH', avg: 4.2, pct: 84 },
              { dept: 'Marketing', avg: 4.1, pct: 82 },
              { dept: 'Opérations', avg: 4.0, pct: 80 },
              { dept: 'Ventes', avg: 3.8, pct: 76 },
            ].map((d) => (
              <div key={d.dept}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{d.dept}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{d.avg} / 5.0</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Prochaines Étapes d'Évaluation" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { date: '10 Juin', event: 'Date limite auto-évaluations', dept: 'Tous les départements' },
              { date: '15 Juin', event: 'Date limite évaluations managers', dept: 'Tous les départements' },
              { date: '20 Juin', event: 'Calibration Ingénierie', dept: 'Ingénierie' },
              { date: '25 Juin', event: 'Revue de performance Ventes T2', dept: 'Ventes' },
              { date: '30 Juin', event: 'Clôture du cycle d\'évaluation T2', dept: 'Tous les départements' },
            ].map((m, i) => (
              <div key={m.event} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, paddingBottom: 12, borderBottom: i < 4 ? `1px solid ${NC.borderDim}` : 'none' }}>
                <div style={{ width: 48, flexShrink: 0 }}>
                  <div style={{ border: `1px solid ${NC.accentBorder}`, borderRadius: 4, padding: '4px 6px', textAlign: 'center', backgroundColor: NC.accentBg }}>
                    <span style={{ fontSize: 10, color: NC.link, fontWeight: 600 }}>{m.date}</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 2 }}>{m.event}</div>
                  <div style={{ fontSize: 10, color: NC.mutedDim }}>{m.dept}</div>
                </div>
              </div>
            ))}
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
      <button onClick={() => alert('Affichage de la liste complète...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Voir tout</button>
    </div>
  );
}

function PerfBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Terminé: { bg: NC.greenBg, border: NC.green, color: NC.green },
    'En revue': { bg: '#FFFBEB', border: '#92400E', color: '#92400E' },
    Programmé: { bg: NC.accentBg, border: NC.accentBorder, color: NC.link },
  };
  const s = styles[status] ?? styles.Programmé;
  return <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>{status}</span>;
}
