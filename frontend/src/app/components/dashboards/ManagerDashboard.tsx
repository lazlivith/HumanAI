import React, { useState } from 'react';
import { NC, FONT_CLASH, FONT_INTER } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard, NCButton } from '../ui/SharedPrimitives';

export function ManagerDashboard() {
  const kpis = [
    { label: "Taux d'absentéisme", val: '1.8%', sub: 'Ce mois-ci (-0.2%)', bars: [100,100,100,100,100,100,100,0,0,0] },
    { label: 'Congés en attente', val: '3', sub: 'À valider avant vendredi', bars: [20,40,60,80,100,20,40,0,0,0] },
    { label: 'Charge de travail', val: '82%', sub: 'Risque de surcharge modéré', bars: [100,100,100,0,0,0,0,0,0,0], customColor: '#EE7836' },
  ];

  const teamMembers = [
    { id: 1, name: 'Sophie Martin', role: 'UX Designer', status: 'Présent', statusColor: '#22C55E', pendingLeave: false },
    { id: 2, name: 'Lucas Dubois', role: 'Développeur Front', status: 'Télétravail', statusColor: '#01637A', pendingLeave: false },
    { id: 3, name: 'Amine Khelil', role: 'Développeur Back', status: 'En congé', statusColor: '#94A3B8', pendingLeave: false },
    { id: 4, name: 'Emma Roy', role: 'Product Manager', status: 'Présent', statusColor: '#22C55E', pendingLeave: true },
  ];

  const predictiveRisks = [
    { id: 1, name: 'Thomas Girard', riskType: 'Risque de burnout détecté', score: 78, triggers: ['Heures supplémentaires +30%', 'Emails tardifs'], action: 'Planifier un entretien de suivi' },
    { id: 2, name: 'Julie Blanc', riskType: 'Baisse d\'engagement', score: 45, triggers: ['Arrêts maladie répétés', 'Retards de livraison'], action: 'Ajuster la charge de travail' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 24, backgroundColor: '#F8FAFC' }}>
      
      {/* En-tête */}
      <div style={{ marginBottom: 4 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 26, fontWeight: 600, color: '#1E293B', margin: 0 }}>
          Pilotage d'Équipe
        </h1>
        <p style={{ fontSize: 14, color: '#64748B', marginTop: 6 }}>
          Indicateurs opérationnels, présence et alertes de désengagement.
        </p>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {kpis.map(k => (
          <div key={k.label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: 12, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, fontWeight: 600 }}>{k.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div style={{ fontFamily: FONT_CLASH, fontSize: 32, fontWeight: 700, color: k.customColor || '#1E293B', lineHeight: 1 }}>{k.val}</div>
            </div>
            <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 8 }}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
        
        {/* Gestion des Temps et Absences */}
        <NCCard style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <NCSectionLabel label="Gestion des Temps et Absences" />
            <button style={{ fontSize: 13, color: '#01637A', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}>Voir tout</button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: FONT_INTER }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: 12, textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Collaborateur</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Rôle</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Statut du jour</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, textAlign: 'right' }}>Actions rapides</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} style={{ borderBottom: '1px solid #F1F5F9', transition: 'background-color 0.2s', cursor: 'default' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F8FAFC'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 500, color: '#1E293B' }}>{member.name}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#64748B' }}>{member.role}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, backgroundColor: `${member.statusColor}15`, color: member.statusColor, fontSize: 12, fontWeight: 500 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: member.statusColor }} />
                        {member.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                      {member.pendingLeave ? (
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                          <button style={{ padding: '6px 12px', fontSize: 12, borderRadius: 6, border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', color: '#EF4444', cursor: 'pointer', fontWeight: 500 }}>Refuser</button>
                          <button style={{ padding: '6px 12px', fontSize: 12, borderRadius: 6, border: 'none', backgroundColor: '#01637A', color: '#FFFFFF', cursor: 'pointer', fontWeight: 500 }}>Valider (Congé)</button>
                        </div>
                      ) : (
                        <span style={{ fontSize: 12, color: '#94A3B8', fontStyle: 'italic' }}>À jour</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </NCCard>

        {/* Module Prédictif "Signaux Faibles & Risques" */}
        <NCCard style={{ padding: 20, borderTop: '4px solid #EE7836' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE7836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <NCSectionLabel label="Signaux Faibles & Risques (IA)" />
          </div>
          <p style={{ fontSize: 13, color: '#64748B', marginBottom: 20 }}>
            L'assistant a détecté des anomalies dans les habitudes de travail de certains collaborateurs.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {predictiveRisks.map((risk) => (
              <div key={risk.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '16px', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: 8 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #FED7AA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#EA580C' }}>{risk.score}%</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#9A3412' }}>{risk.name} — {risk.riskType}</h4>
                      <div style={{ fontSize: 12, color: '#C2410C', marginTop: 4 }}>
                        Facteurs : {risk.triggers.join(', ')}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', backgroundColor: '#FFFFFF', border: '1px solid #FED7AA', borderRadius: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#C2410C' }}>Suggestion : {risk.action}</span>
                  </div>
                </div>
                <button style={{ padding: '8px 16px', backgroundColor: '#EA580C', color: '#FFFFFF', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: 'pointer', alignSelf: 'center' }}>
                  Agir
                </button>
              </div>
            ))}
          </div>
        </NCCard>

      </div>
    </div>
  );
}

