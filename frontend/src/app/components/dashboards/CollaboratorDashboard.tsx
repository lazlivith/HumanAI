import React from 'react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard, NCButton } from '../ui/SharedPrimitives';

export function CollaboratorDashboard() {
  const kpis = [
    { label: 'Congés Restants', val: '14', sub: 'Jours ouvrés', bars: [100,100,100,100,100,100,100,0,0,0] },
    { label: 'Formations', val: '2', sub: 'En cours', bars: [20,40,60,80,100,20,40,0,0,0] },
    { label: 'Télétravail', val: '3', sub: 'Jours restants cette semaine', bars: [100,100,100,0,0,0,0,0,0,0] },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 600, color: NC.fg, margin: 0 }}>Mon Espace Personnel</h1>
        <p style={{ fontSize: 13, color: NC.muted, marginTop: 6 }}>Bienvenue sur votre espace. Retrouvez ici vos actions requises et informations clés.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Mes Actions Requises" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: `1px solid ${NC.borderDim}` }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: NC.fg }}>Validation de la charte informatique</div>
                <div style={{ fontSize: 10, color: NC.mutedDim }}>Onboarding - Échéance : demain</div>
              </div>
              <NCButton primary>Signer</NCButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: `1px solid ${NC.borderDim}` }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: NC.fg }}>Entretien annuel</div>
                <div style={{ fontSize: 10, color: NC.mutedDim }}>Veuillez remplir votre auto-évaluation</div>
              </div>
              <NCButton>Commencer</NCButton>
            </div>
          </div>
        </NCCard>

        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Mes Documents Récents" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, backgroundColor: NC.mintBg, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: NC.mintFill, fontWeight: 700, fontSize: 10 }}>PDF</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: NC.fg }}>Fiche de paie - Mai 2026</div>
                  <div style={{ fontSize: 10, color: NC.mutedDim }}>Généré le 31 Mai</div>
                </div>
              </div>
              <NCButton>Télécharger</NCButton>
            </div>
          </div>
        </NCCard>
      </div>
    </div>
  );
}
