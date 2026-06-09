import React from 'react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard, NCButton } from '../ui/SharedPrimitives';

export function ManagerDashboard() {
  const kpis = [
    { label: 'Effectif Équipe', val: '12', sub: '1 recrutement en cours', bars: [10,10,11,11,11,12,12,12,12,12] },
    { label: 'Absences ce jour', val: '2', sub: '16% de l\'équipe', bars: [1,0,2,1,3,0,1,2,0,2] },
    { label: 'Performance', val: '8.4', sub: 'Note moyenne / 10', bars: [7,7.5,7.8,8.0,8.2,8.1,8.3,8.4,8.4,8.4] },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 600, color: NC.fg, margin: 0 }}>Vue Équipe</h1>
        <p style={{ fontSize: 13, color: NC.muted, marginTop: 6 }}>Pilotez les effectifs et la performance de votre département.</p>
      </div>

      <NCCard style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: `3px solid ${NC.accent}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="mint-pulse" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: NC.accent, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: NC.fgDim }}>
            Vous avez{' '}
            <span style={{ color: NC.navy, fontWeight: 600 }}>3 validations de congés</span>
            {' '}en attente pour votre équipe.
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <NCButton primary>Valider les congés</NCButton>
        </div>
      </NCCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Entretiens et Suivis à venir" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: `1px solid ${NC.borderDim}` }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: NC.fg }}>Point mensuel - Sophie Martin</div>
                <div style={{ fontSize: 10, color: NC.mutedDim }}>Aujourd'hui à 14h00</div>
              </div>
              <NCButton>Préparer</NCButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: `1px solid ${NC.borderDim}` }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: NC.fg }}>Entretien de fin de période d'essai - Lucas Dubois</div>
                <div style={{ fontSize: 10, color: NC.mutedDim }}>Demain à 10h00</div>
              </div>
              <NCButton>Voir le dossier</NCButton>
            </div>
          </div>
        </NCCard>
      </div>
    </div>
  );
}
