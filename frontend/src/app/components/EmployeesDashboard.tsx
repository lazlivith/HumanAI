// Employees Dashboard — detailed employee management

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

export function EmployeesDashboard() {
  const employees = [
    { id: 'EMP-001', name: 'James Harlow', dept: 'Ingénierie', role: 'Développeur Senior', email: 'j.harlow@company.com', phone: '+1 555-0101', joined: '2022-03-15', status: 'Actif', manager: 'Sarah Chen' },
    { id: 'EMP-002', name: 'Sara Mitchell', dept: 'Marketing', role: 'Responsable Marketing', email: 's.mitchell@company.com', phone: '+1 555-0102', joined: '2021-08-22', status: 'Actif', manager: 'David Kim' },
    { id: 'EMP-003', name: 'David Osei', dept: 'Design', role: 'Designer UI/UX', email: 'd.osei@company.com', phone: '+1 555-0103', joined: '2023-01-10', status: 'En congé', manager: 'Maria Lopez' },
    { id: 'EMP-004', name: 'Priya Nair', dept: 'RH', role: 'Spécialiste RH', email: 'p.nair@company.com', phone: '+1 555-0104', joined: '2020-11-05', status: 'Actif', manager: 'Robert Smith' },
    { id: 'EMP-005', name: 'Carlos Rivera', dept: 'Ventes', role: 'Commercial', email: 'c.rivera@company.com', phone: '+1 555-0105', joined: '2022-06-18', status: 'Actif', manager: 'Jennifer Wu' },
    { id: 'EMP-006', name: 'Yuki Tanaka', dept: 'Ingénierie', role: 'Développeur Frontend', email: 'y.tanaka@company.com', phone: '+1 555-0106', joined: '2023-04-02', status: 'Actif', manager: 'Sarah Chen' },
    { id: 'EMP-007', name: 'Amara Diallo', dept: 'Finance', role: 'Analyste Financier', email: 'a.diallo@company.com', phone: '+1 555-0107', joined: '2021-02-28', status: 'Inactif', manager: 'Michael Brown' },
    { id: 'EMP-008', name: 'Tom Brennan', dept: 'Opérations', role: 'Directeur des Opérations', email: 't.brennan@company.com', phone: '+1 555-0108', joined: '2020-09-12', status: 'Actif', manager: 'Lisa Taylor' },
  ];

  return (
       <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header with filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Gestion des Employés</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Gérez les dossiers, profils et la structure organisationnelle</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Importation du fichier CSV en cours...')}><NCButton>Importer CSV</NCButton></div>
          <div onClick={() => alert('Ouverture du formulaire d\'ajout d\'employé...')}><NCButton primary>+ Ajouter un employé</NCButton></div>
        </div>
      </div>

      {/* Stats cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { label: 'Effectif Total', value: '248', change: '+3 ce mois-ci' },
          { label: 'Actifs', value: '231', change: '93.1%' },
          { label: 'En Congé', value: '12', change: '4.8%' },
          { label: 'Ancienneté Moy.', value: '2.4 ans', change: '+0.3 sur 1 an' },
        ].map((stat) => (
          <NCCard key={stat.label} style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: NC.fg, lineHeight: 1, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: 10, color: NC.mutedDim }}>{stat.change}</div>
          </NCCard>
        ))}
      </div>

      {/* Main employee table */}
      <NCCard style={{ padding: 0 }}>
        {/* Controls */}
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Annuaire des Employés</span>
            <div style={{ height: 22, padding: '0 8px', backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: NC.link, fontWeight: 600 }}>248 au total</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Search */}
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${NC.border}`, backgroundColor: '#F1F5F9', borderRadius: 6, height: 32, padding: '0 12px', gap: 8, width: 200 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: `1.5px solid ${NC.mutedDim}` }} />
              <span style={{ fontSize: 11, color: NC.mutedDim }}>Rechercher un employé...</span>
            </div>
            {/* Filters */}
            {['Département', 'Statut', 'Rôle'].map((f) => (
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

        {/* Table */}
        <table style={{ width: '100%' }}>
          <thead style={{ borderBottom: `1px solid ${NC.border}`, backgroundColor: NC.bg }}>
            <tr>
              <th style={{ padding: 16, width: 40 }}>
                <div style={{ width: 14, height: 14, border: `1.5px solid ${NC.mutedDim}`, borderRadius: 3 }} />
              </th>
              {['ID', 'Employé', 'Département', 'Rôle', 'Contact', 'Arrivée', 'Statut', ''].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: 16, fontSize: 10, color: NC.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr
                key={emp.id}
                style={{ borderBottom: i === employees.length - 1 ? 'none' : `1px solid ${NC.borderDim}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = '#F9FAFB'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent'; }}
              >
                <td style={{ padding: 16 }}>
                  <div style={{ width: 14, height: 14, border: `1.5px solid ${NC.mutedDim}`, borderRadius: 3 }} />
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.mutedDim }}>{emp.id}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{emp.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{emp.name}</span>
                      <span style={{ fontSize: 10, color: NC.mutedDim }}>{emp.manager}</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{emp.dept}</td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{emp.role}</td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 11, color: NC.fgDim }}>{emp.email}</span>
                    <span style={{ fontSize: 10, color: NC.mutedDim }}>{emp.phone}</span>
                  </div>
                </td>
                <td style={{ padding: 16, fontSize: 11, color: NC.muted }}>{emp.joined}</td>
                <td style={{ padding: 16 }}>
                  <StatusBadge status={emp.status} />
                </td>
                <td style={{ padding: 16 }}>
                  <button onClick={() => alert(`Options pour ${emp.name}`)} data-cursor style={{ width: 28, height: 28, border: `1px solid ${NC.border}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none', backgroundColor: 'transparent' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                      <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                      <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: NC.muted }} />
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ borderTop: `1px solid ${NC.border}`, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: NC.muted }}>Affichage 1 – 8 sur 248 résultats</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div onClick={() => alert('Page précédente')}><PageBtn label="‹" /></div>
            <div onClick={() => alert('Page 1')}><PageBtn label="1" active /></div>
            <div onClick={() => alert('Page 2')}><PageBtn label="2" /></div>
            <div onClick={() => alert('Page 3')}><PageBtn label="3" /></div>
            <span style={{ padding: '0 4px', fontSize: 11, color: NC.mutedDim }}>…</span>
            <div onClick={() => alert('Page 31')}><PageBtn label="31" /></div>
            <div onClick={() => alert('Page suivante')}><PageBtn label="›" /></div>
          </div>
        </div>
      </NCCard>

      {/* Department breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Répartition par Département" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { dept: 'Ingénierie', count: 68, pct: 27 },
              { dept: 'Ventes', count: 52, pct: 21 },
              { dept: 'Marketing', count: 41, pct: 17 },
              { dept: 'Opérations', count: 38, pct: 15 },
              { dept: 'Design', count: 28, pct: 11 },
              { dept: 'Finance', count: 21, pct: 9 },
            ].map((d) => (
              <div key={d.dept}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: NC.fgDim }}>{d.dept}</span>
                  <span style={{ fontSize: 10, color: NC.muted }}>{d.count} ({d.pct}%)</span>
                </div>
                <div style={{ height: 6, width: '100%', backgroundColor: NC.accentBg, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{ position: 'absolute', inset: '0 auto 0 0', backgroundColor: NC.accent, borderRadius: 3, width: `${d.pct * 3.7}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Recrutements Récents" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { name: 'Yuki Tanaka', role: 'Développeur Frontend', date: '2023-04-02' },
              { name: 'David Osei', role: 'Designer UI/UX', date: '2023-01-10' },
              { name: 'Carlos Rivera', role: 'Commercial', date: '2022-06-18' },
              { name: 'James Harlow', role: 'Développeur Senior', date: '2022-03-15' },
            ].map((hire, i) => (
              <div key={hire.name} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, borderBottom: i < 3 ? `1px solid ${NC.borderDim}` : 'none' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: NC.link }}>{hire.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500 }}>{hire.name}</div>
                  <div style={{ fontSize: 10, color: NC.muted, marginTop: 2 }}>{hire.role}</div>
                </div>
                <div style={{ fontSize: 10, color: NC.mutedDim }}>{hire.date}</div>
              </div>
            ))}
          </div>
        </NCCard>
      </div>

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

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; border: string; color: string }> = {
    Actif: { bg: NC.greenBg, border: NC.green, color: NC.green },
    'En congé': { bg: '#FFFBEB', border: '#92400E', color: '#92400E' },
    Inactif: { bg: NC.redBg, border: NC.red, color: NC.red },
  };
  const s = styles[status] ?? styles.Inactive;
  return (
    <span style={{ display: 'inline-block', padding: '3px 8px', fontSize: 10, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 4, color: s.color, fontWeight: 600 }}>
      {status}
    </span>
  );
}

function PageBtn({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      data-cursor
      style={{
        width: 26, height: 26, border: active ? 'none' : `1px solid ${NC.border}`, borderRadius: 5,
        background: active ? BTN_GRADIENT : 'transparent',
        color: active ? '#FFFFFF' : NC.muted,
        fontSize: 11, fontWeight: active ? 600 : 400,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'none',
      }}
    >
      {label}
    </button>
  );
}
