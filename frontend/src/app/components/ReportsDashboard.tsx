// Reports Dashboard — analytics and reporting
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
} as const;

const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";

export function ReportsDashboard() {
  const savedReports = [
    { name: 'Résumé RH Mensuel', type: 'Résumé', lastRun: '2024-06-01', size: '2.4 MB' },
    { name: 'Analyse de Paie T2', type: 'Financier', lastRun: '2024-05-28', size: '1.8 MB' },
    { name: 'Métriques de Recrutement', type: 'Recrutement', lastRun: '2024-05-25', size: '892 KB' },
    { name: 'Rapport de Présence Mai', type: 'Présence', lastRun: '2024-05-31', size: '1.2 MB' },
    { name: 'Performances par Département', type: 'Performance', lastRun: '2024-05-20', size: '3.1 MB' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Rapports & Analytique</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Générez des rapports, analysez des données et exportez des insights</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Ouverture du planificateur de rapports...')}>
            <NCButton>Planifier un rapport</NCButton>
          </div>
          <div onClick={() => alert('Ouverture de l\'assistant de création de rapport...')}>
            <NCButton primary>+ Créer un rapport</NCButton>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { label: 'Rapports Générés', value: '142', sub: 'Ce mois-ci' },
          { label: 'Rapports Planifiés', value: '18', sub: 'Actifs' },
          { label: 'Données Exportées', value: '67', sub: 'Ce trimestre' },
          { label: 'Temps moyen de génération', value: '8.2s', sub: 'Par rapport' },
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
          { title: 'Rapports Employés', count: 8 },
          { title: 'Rapports Financiers', count: 12 },
          { title: 'Rapports de Présence', count: 6 },
          { title: 'Rapports de Recrutement', count: 5 },
          { title: 'Rapports de Performance', count: 9 },
          { title: 'Rapports de Conformité', count: 7 },
        ].map((cat) => (
          <NCCard
            key={cat.title}
            onClick={() => alert(`Filtrage par catégorie : ${cat.title}`)}
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
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Rapports Récents</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 180 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher un rapport...</span>
            </div>
            {['Type', 'Période'].map((f) => (
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
              {['Nom du Rapport', 'Type', 'Dernière Exécution', 'Taille', 'Actions'].map((h) => (
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
                    <button onClick={() => alert(`Téléchargement de ${report.name}...`)} data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>Télécharger</button>
                    <button onClick={() => alert(`Affichage de ${report.name}...`)} data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'none', backgroundColor: 'transparent' }}>Voir</button>
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
          <NCSectionLabel label="Tendance de Génération" />
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, height: 150 }}>
            {[
              { month: 'Jan', count: 52 },
              { month: 'Fév', count: 48 },
              { month: 'Mar', count: 61 },
              { month: 'Avr', count: 58 },
              { month: 'Mai', count: 73 },
              { month: 'Juin', count: 42 },
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
          <NCSectionLabel label="Types de Rapports les plus Utilisés" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { type: 'Rapports Financiers', usage: 87, count: 45 },
              { type: 'Rapports Employés', usage: 72, count: 38 },
              { type: 'Rapports de Performance', usage: 64, count: 32 },
              { type: 'Rapports de Présence', usage: 51, count: 27 },
              { type: 'Rapports de Recrutement', usage: 38, count: 19 },
              { type: 'Rapports de Conformité', usage: 29, count: 15 },
            ].map((item) => (
              <div key={item.type}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{item.type}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{item.count} rapports</span>
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
        <NCSectionLabel label="Rapports Planifiés" />
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { name: 'Résumé Hebdomadaire des Présences', freq: 'Chaque Lundi, 9:00 AM', next: '8 Juin 2026' },
            { name: 'Rapport Mensuel de Paie', freq: 'Premier jour du mois', next: '1 Juil 2026' },
            { name: 'Revue de Performance Trimestrielle', freq: 'Tous les 3 mois', next: '1 Juil 2026' },
          ].map((sched) => (
            <div key={sched.name} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 16 }}>
              <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 8 }}>{sched.name}</div>
              <div style={{ fontSize: 10, color: NC.muted, marginBottom: 4 }}>{sched.freq}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: `1px solid ${NC.borderDim}` }}>
                <span style={{ fontSize: 10, color: NC.mutedDim }}>Prochain : {sched.next}</span>
                <button onClick={() => alert(`Options pour le rapport planifié: ${sched.name}`)} data-cursor style={{ width: 24, height: 24, border: `1px solid ${NC.border}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', backgroundColor: 'transparent' }}>
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
      <button onClick={() => alert('Voir la liste complète...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Voir tout</button>
    </div>
  );
}
