// Recruitment Dashboard — job postings and candidate tracking
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

export function RecruitmentDashboard() {
  const jobs = [
    { id: 'JOB-301', title: 'Développeur Senior Frontend', dept: 'Ingénierie', type: 'Temps plein', posted: '2024-05-15', applicants: 42, status: 'Actif' },
    { id: 'JOB-302', title: 'Product Designer', dept: 'Design', type: 'Temps plein', posted: '2024-05-20', applicants: 28, status: 'Actif' },
    { id: 'JOB-303', title: 'Commercial (SDR)', dept: 'Ventes', type: 'Temps plein', posted: '2024-05-10', applicants: 67, status: 'Actif' },
    { id: 'JOB-304', title: 'Analyste Data', dept: 'Analytics', type: 'Contrat', posted: '2024-04-28', applicants: 19, status: 'En revue' },
    { id: 'JOB-305', title: 'Ingénieur DevOps', dept: 'Ingénierie', type: 'Temps plein', posted: '2024-05-22', applicants: 31, status: 'Actif' },
  ];

  const candidates = [
    { name: 'Emily Chen', position: 'Développeur Senior Frontend', stage: 'Entretien Final', score: 92, applied: '2024-05-18' },
    { name: 'Marcus Johnson', position: 'Product Designer', stage: 'Appel Tél.', score: 78, applied: '2024-05-21' },
    { name: 'Sofia Rodriguez', position: 'Commercial (SDR)', stage: 'Offre envoyée', score: 88, applied: '2024-05-12' },
    { name: 'Arjun Patel', position: 'Analyste Data', stage: 'Test Technique', score: 85, applied: '2024-05-01' },
    { name: 'Olivia Kim', position: 'Ingénieur DevOps', stage: 'Culture Fit', score: 91, applied: '2024-05-23' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Pipeline de Recrutement</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Suivez les postes ouverts, les candidats et la progression des recrutements</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Exportation du rapport de recrutement en cours...')}>
            <NCButton>Exporter le rapport</NCButton>
          </div>
          <div onClick={() => alert('Ouverture du formulaire de création d\'offre...')}>
            <NCButton primary>+ Créer une offre</NCButton>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {[
          { label: 'Postes Ouverts', value: '17' },
          { label: 'Candidats Totaux', value: '187' },
          { label: 'En Revue', value: '43' },
          { label: 'Entretiens Prévus', value: '12' },
          { label: 'Offres en attente', value: '3' },
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
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Offres d'Emploi Actives</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher une offre...</span>
            </div>
            {['Département', 'Type', 'Statut'].map((f) => (
              <button
                key={f}
                data-cursor
                onClick={() => alert(`Filtrer par ${f}`)}
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
              {['ID', 'Poste', 'Département', 'Type', 'Publié le', 'Candidats', 'Statut', 'Actions'].map((h) => (
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
                  <button 
                    onClick={() => alert(`Détails de l'offre ${job.id}`)}
                    data-cursor 
                    style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>
                    Voir
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
          <NCSectionLabel label="Tunnel de Recrutement" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { stage: 'Revue des candidatures', count: 43, pct: 23 },
              { stage: 'Appel Téléphonique', count: 28, pct: 15 },
              { stage: 'Test Technique', count: 19, pct: 10 },
              { stage: 'Entretien Culture Fit', count: 15, pct: 8 },
              { stage: 'Entretien Final', count: 8, pct: 4 },
              { stage: 'Offre Envoyée', count: 3, pct: 2 },
            ].map((s) => (
              <div key={s.stage}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{s.stage}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{s.count} candidats</span>
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
          <NCSectionLabel label="Meilleurs Candidats" />
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
        <NCSectionLabel label="Entonnoir de Conversion" />
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, height: 180 }}>
          {[
            { label: 'Candidatures', value: 187, height: 100 },
            { label: 'Sélection', value: 116, height: 62 },
            { label: 'Entretiens', value: 62, height: 33 },
            { label: 'Phase Finale', value: 23, height: 12 },
            { label: 'Offres', value: 11, height: 6 },
            { label: 'Recrutés', value: 7, height: 4 },
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
      <button onClick={() => alert('Voir la liste complète...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        Voir tout
      </button>
    </div>
  );
}

function JobStatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Actif: { bg: NC.greenBg, border: NC.green, color: NC.green },
    'En revue': { bg: '#FFFBEB', border: '#92400E', color: '#92400E' },
    Fermé: { bg: NC.redBg, border: NC.red, color: NC.red },
  };
  const s = styles[status] ?? styles.Actif;
  return (
    <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>
      {status}
    </span>
  );
}
