import React from 'react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard } from '../ui/SharedPrimitives';

export function QVTDashboard() {
  const kpis = [
    { label: 'Indice Bien-être', val: '78/100', sub: 'D\'après le dernier sondage', bars: [70,72,75,76,77,78,78,79,78,78] },
    { label: 'Alertes Burnout', val: '2', sub: 'Risque élevé détecté', bars: [0,0,1,0,0,2,0,1,1,2] },
    { label: 'Taux d\'Absentéisme', val: '3.1%', sub: 'Dans la moyenne nationale', bars: [3.5,3.4,3.2,3.3,3.1,3.0,3.1,3.2,3.1,3.1] },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 600, color: NC.fg, margin: 0 }}>Santé & Qualité de Vie au Travail</h1>
        <p style={{ fontSize: 13, color: NC.muted, marginTop: 6 }}>Analyse du climat social, prévention des risques psychosociaux.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Signaux faibles & Risques Sociaux" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ padding: 14, backgroundColor: NC.redBg, border: `1px solid ${NC.red}40`, borderRadius: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: NC.red }}>Alerte Surcharge (Département Marketing)</div>
              <div style={{ fontSize: 11, color: NC.fgDim, marginTop: 4 }}>
                Le volume d'heures de connexion tardives a augmenté de 40% sur les 2 dernières semaines. Risque d'épuisement professionnel.
              </div>
            </div>
            
            <div style={{ padding: 14, backgroundColor: NC.amberBg, border: `1px solid ${NC.amber}40`, borderRadius: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: NC.amber }}>Alerte Absentéisme (Équipe Support)</div>
              <div style={{ fontSize: 11, color: NC.fgDim, marginTop: 4 }}>
                Micro-absences répétées détectées chez 3 collaborateurs. Un entretien préventif est recommandé.
              </div>
            </div>
          </div>
        </NCCard>
      </div>
    </div>
  );
}
