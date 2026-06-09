import React from 'react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard } from '../ui/SharedPrimitives';

export function DirectionDashboard() {
  const kpis = [
    { label: 'Masse Salariale', val: '4.2M€', sub: 'Prévisionnel 2026', bars: [20,30,40,45,50,60,65,70,80,90] },
    { label: 'Croissance Effectif', val: '+12%', sub: 'vs N-1', bars: [10,12,15,20,25,30,35,45,50,60] },
    { label: 'Turnover Global', val: '4.2%', sub: 'En baisse de 1.1%', bars: [8,7,6,5,4.5,4.2,4.0,4.1,4.2,4.2] },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 600, color: NC.fg, margin: 0 }}>Vue Exécutive & Pilotage Stratégique</h1>
        <p style={{ fontSize: 13, color: NC.muted, marginTop: 6 }}>Indicateurs macro, prévisions budgétaires et alertes stratégiques.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Projection des effectifs (Prédictif IA)" />
          <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: NC.bg, borderRadius: 8, marginTop: 14 }}>
            <span style={{ fontSize: 12, color: NC.muted }}>[Graphique de simulation prédictive budgétaire]</span>
          </div>
        </NCCard>
      </div>
    </div>
  );
}
