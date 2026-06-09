import React, { useState } from 'react';
import { NC, FONT_CLASH, FONT_INTER } from '../../theme';
import { NCCard, NCButton, NCSectionLabel, NCKpiCard, NCLineChart, NCDonutChart } from '../ui/SharedPrimitives';

export function RHDashboard() {
  const kpis = [
    { label: 'Effectif Total', val: '248', sub: '+3 ce mois-ci',        bars: [40,55,45,60,52,70,65,80,72,88] },
    { label: 'Rétention / Actifs', val: '93.1%', sub: '231 collaborateurs',     bars: [60,65,70,72,68,75,80,82,85,90] },
    { label: 'Absences du jour',   val: '12',  sub: '4.8% de l\'effectif',   bars: [8,12,6,14,10,9,12,15,11,12]   },
    { label: 'Recrutements',   val: '17',  sub: '5 entretiens prévus', bars: [20,18,22,25,17,20,22,19,17,17] },
  ];

  // Données factices pour le Kanban
  const initialKanbanState = {
    todo: [
      { id: 't1', name: 'Alice Dupont', role: 'Data Scientist', dept: 'Tech', dueDate: 'J-3' },
      { id: 't2', name: 'Marc Lerois', role: 'Commercial', dept: 'Sales', dueDate: 'J-1' },
    ],
    inProgress: [
      { id: 'p1', name: 'Yuki Tanaka', role: 'Développeur Frontend', dept: 'Tech', dueDate: 'Semaine 1' },
    ],
    done: [
      { id: 'd1', name: 'Sara Mitchell', role: 'Marketing Manager', dept: 'Marketing', dueDate: 'Mois 1 validé' },
      { id: 'd2', name: 'James Harlow', role: 'Développeur Senior', dept: 'Tech', dueDate: 'Intégré' },
    ]
  };

  const [kanban, setKanban] = useState(initialKanbanState);
  const [showBanner, setShowBanner] = useState(true);

  const getDeptColor = (dept: string) => {
    switch(dept) {
      case 'Tech': return { bg: '#E0F2FE', text: '#0284C7' };
      case 'Sales': return { bg: '#FEF3C7', text: '#D97706' };
      case 'Marketing': return { bg: '#FCE7F3', text: '#DB2777' };
      default: return { bg: '#F1F5F9', text: '#475569' };
    }
  };

  const moveCard = (id: string, from: 'todo' | 'inProgress', to: 'inProgress' | 'done') => {
    const cardToMove = kanban[from].find(c => c.id === id);
    if (cardToMove) {
      setKanban({
        ...kanban,
        [from]: kanban[from].filter(c => c.id !== id),
        [to]: [...kanban[to], { ...cardToMove, dueDate: to === 'inProgress' ? 'En cours' : 'Terminé' }]
      });
    }
  };

  const handleNewDossier = () => {
    const newCard = { id: `t${Date.now()}`, name: 'Nouveau Talent', role: 'À définir', dept: 'Tech', dueDate: 'J-15' };
    setKanban({ ...kanban, todo: [...kanban.todo, newCard] });
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 24, backgroundColor: '#F8FAFC' }}>

      {/* En-tête */}
      <div style={{ marginBottom: 4 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 26, fontWeight: 600, color: '#1E293B', margin: 0 }}>
          Espace Ressources Humaines
        </h1>
        <p style={{ fontSize: 14, color: '#64748B', marginTop: 6 }}>
          Indicateurs globaux et suivi des flux d'intégration.
        </p>
      </div>

      {/* Notification banner */}
      {showBanner && (
        <NCCard style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: `3px solid ${NC.accent}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="mint-pulse" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: NC.accent, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: NC.fgDim }}>
              Vous avez{' '}
              <span style={{ color: NC.navy, fontWeight: 600 }}>4 demandes de congés</span>
              {' '}et{' '}
              <span style={{ color: NC.navy, fontWeight: 600 }}>2 corrections de paie</span>
              {' '}en attente de validation.
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div onClick={() => { alert('Redirection vers le centre de validation...'); setShowBanner(false); }}><NCButton primary>Traiter maintenant</NCButton></div>
            <div onClick={() => setShowBanner(false)}><NCButton>Ignorer</NCButton></div>
          </div>
        </NCCard>
      )}

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Évolution des Effectifs" />
          <NCLineChart />
        </NCCard>
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Répartition par Département" />
          <NCDonutChart />
        </NCCard>
      </div>

      {/* Kanban Onboarding Row */}
      <NCCard style={{ padding: 20, backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h3 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 600, color: '#1E293B', margin: 0 }}>Workflows d'Onboarding</h3>
            <p style={{ fontSize: 13, color: '#64748B', margin: '4px 0 0 0' }}>Suivez l'intégration des nouveaux collaborateurs en temps réel.</p>
          </div>
          <button onClick={handleNewDossier} style={{ padding: '8px 16px', backgroundColor: '#01637A', color: '#FFFFFF', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
            + Nouveau Dossier
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'flex-start' }}>
          
          {/* Colonne 1 : À faire */}
          <div style={{ backgroundColor: '#F1F5F9', borderRadius: 8, padding: 16, minHeight: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pré-boarding ({kanban.todo.length})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {kanban.todo.map(card => (
                <div key={card.id} style={{ backgroundColor: '#FFFFFF', padding: 16, borderRadius: 8, border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', cursor: 'grab' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>{card.name}</span>
                    <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 600, backgroundColor: getDeptColor(card.dept).bg, color: getDeptColor(card.dept).text }}>{card.dept}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B', marginBottom: 12 }}>{card.role}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#EF4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#EF4444' }}></div> {card.dueDate}
                    </span>
                    <button onClick={() => moveCard(card.id, 'todo', 'inProgress')} style={{ background: 'none', border: 'none', color: '#01637A', fontSize: 12, fontWeight: 500, cursor: 'pointer', padding: 0 }}>Démarrer</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 2 : En cours */}
          <div style={{ backgroundColor: '#F1F5F9', borderRadius: 8, padding: 16, minHeight: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>En cours ({kanban.inProgress.length})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {kanban.inProgress.map(card => (
                <div key={card.id} style={{ backgroundColor: '#FFFFFF', padding: 16, borderRadius: 8, border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', cursor: 'grab', borderLeft: '3px solid #EE7836' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>{card.name}</span>
                    <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 600, backgroundColor: getDeptColor(card.dept).bg, color: getDeptColor(card.dept).text }}>{card.dept}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B', marginBottom: 12 }}>{card.role}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#F59E0B', fontWeight: 600 }}>{card.dueDate}</span>
                    <button onClick={() => moveCard(card.id, 'inProgress', 'done')} style={{ background: 'none', border: 'none', color: '#01637A', fontSize: 12, fontWeight: 500, cursor: 'pointer', padding: 0 }}>Continuer</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 3 : Terminé */}
          <div style={{ backgroundColor: '#F1F5F9', borderRadius: 8, padding: 16, minHeight: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terminé ({kanban.done.length})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {kanban.done.map(card => (
                <div key={card.id} style={{ backgroundColor: '#FFFFFF', padding: 16, borderRadius: 8, border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', cursor: 'grab', borderLeft: '3px solid #22C55E' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>{card.name}</span>
                    <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 600, backgroundColor: getDeptColor(card.dept).bg, color: getDeptColor(card.dept).text }}>{card.dept}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B', marginBottom: 12 }}>{card.role}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#22C55E', fontWeight: 600 }}>{card.dueDate}</span>
                    <span style={{ color: '#22C55E' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </NCCard>

    </div>
  );
}

