import React from 'react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard, NCButton } from '../ui/SharedPrimitives';

export function AdminDashboard() {
  const kpis = [
    { label: 'Requêtes IA (24h)', val: '12.4k', sub: 'Pic à 10h', bars: [20,40,30,80,100,50,40,30,20,10] },
    { label: 'Uptime Serveurs', val: '99.9%', sub: 'Tout est opérationnel', bars: [100,100,100,100,100,100,100,100,100,100] },
    { label: 'Alertes Sécurité', val: '0', sub: 'Aucune anomalie détectée', bars: [0,0,0,0,0,0,0,0,0,0] },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 24, fontWeight: 600, color: NC.fg, margin: 0 }}>Supervision Système</h1>
        <p style={{ fontSize: 13, color: NC.muted, marginTop: 6 }}>Monitoring technique, infrastructure et logs de sécurité.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Consommation IA (Tokens)" />
          <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: NC.bg, borderRadius: 8, marginTop: 14 }}>
            <span style={{ fontSize: 12, color: NC.muted }}>[Graphique de consommation RAG]</span>
          </div>
        </NCCard>

        <NCCard style={{ padding: 18 }}>
          <NCSectionLabel label="Dernières connexions suspectes" />
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 12, color: NC.mutedDim, fontStyle: 'italic', textAlign: 'center', padding: '20px 0' }}>
              Aucune activité suspecte signalée.
            </div>
          </div>
        </NCCard>
      </div>
    </div>
  );
}
