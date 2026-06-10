// Security Alerts Panel — Dark theme with amber accents

import React, { useState } from 'react';

const DARK = {
  bg:       '#0F172A',
  card:     '#1E293B',
  cardHover:'#2A3441',
  border:   '#334155',
  text:     '#FFFFFF',
  textDim:  '#94A3B8',
  amber:    '#F59E0B',
  amberDark:'#D97706',
  red:      '#EF4444',
  redBg:    '#7F1D1D',
  orange:   '#FB923C',
  orangeBg: '#9A3412',
  green:    '#10B981',
  greenBg:  '#065F46',
  yellow:   '#FBBF24',
} as const;

interface Alert {
  id: string;
  userName: string;
  role: string;
  actionAttempted: string;
  timestamp: string;
  severity: 'Critique' | 'Moyenne' | 'Faible';
  status: 'Ouverte' | 'Résolue';
  description: string;
  aiResponse: 'Bloqué' | 'Redirigé vers les RH';
}

export function SecurityAlertsPanel() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [resolutionNote, setResolutionNote] = useState('');

  const alerts: Alert[] = [
    {
      id: 'A001',
      userName: 'Marc Dubois',
      role: 'Employé',
      actionAttempted: 'Accès aux données salariales d\'autres employés',
      timestamp: '2026-06-08 14:32',
      severity: 'Critique',
      status: 'Ouverte',
      description: 'L\'utilisateur a tenté de demander à l\'assistant IA la liste complète des salaires des employés de l\'entreprise. La requête a été bloquée car elle dépasse ses permissions.',
      aiResponse: 'Bloqué',
    },
    {
      id: 'A002',
      userName: 'Julie Martin',
      role: 'Manager',
      actionAttempted: 'Demandes répétées de données RH confidentielles',
      timestamp: '2026-06-08 11:15',
      severity: 'Moyenne',
      status: 'Ouverte',
      description: 'Le manager a effectué 12 requêtes en 10 minutes en essayant d\'accéder aux notes d\'évaluation de performances en dehors de son équipe.',
      aiResponse: 'Redirigé vers les RH',
    },
    {
      id: 'A003',
      userName: 'Sarah Chen',
      role: 'Employé',
      actionAttempted: 'Tentative de contournement des règles de sécurité IA',
      timestamp: '2026-06-07 16:42',
      severity: 'Moyenne',
      status: 'Résolue',
      description: 'L\'utilisateur a essayé plusieurs techniques d\'injection de prompt pour extraire des informations restreintes.',
      aiResponse: 'Bloqué',
    },
    {
      id: 'A004',
      userName: 'Thomas Bernard',
      role: 'Employé',
      actionAttempted: 'Accès aux données médicales',
      timestamp: '2026-06-07 09:20',
      severity: 'Critique',
      status: 'Résolue',
      description: 'A tenté de récupérer les détails des arrêts maladie et les informations médicales de collègues.',
      aiResponse: 'Bloqué',
    },
    {
      id: 'A005',
      userName: 'Emma Wilson',
      role: 'Manager',
      actionAttempted: 'Demande d\'exportation de données inhabituelle',
      timestamp: '2026-06-06 15:55',
      severity: 'Faible',
      status: 'Résolue',
      description: 'A demandé l\'exportation de toutes les coordonnées des employés, y compris les numéros de téléphone personnels.',
      aiResponse: 'Redirigé vers les RH',
    },
  ];

  const stats = [
    { label: 'Alertes Ouvertes', value: '15', color: DARK.red },
    { label: 'Critiques', value: '3', color: DARK.red, bg: DARK.redBg },
    { label: 'Moyennes', value: '8', color: DARK.orange, bg: DARK.orangeBg },
    { label: 'Résolues Aujourd\'hui', value: '12', color: DARK.green, bg: DARK.greenBg },
  ];

  const getSeverityColor = (severity: string) => {
    if (severity === 'Critique') return DARK.red;
    if (severity === 'Moyenne') return DARK.orange;
    return DARK.yellow;
  };

  const getSeverityBg = (severity: string) => {
    if (severity === 'Critique') return DARK.redBg;
    if (severity === 'Moyenne') return DARK.orangeBg;
    return '#713F12';
  };

  return (
    <div style={{ flex: 1, backgroundColor: DARK.bg, overflowY: 'auto', padding: 32, fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: DARK.text, marginBottom: 8 }}>Centre de Sécurité</h1>
        <p style={{ fontSize: 14, color: DARK.textDim }}>Surveillez et gérez les alertes de sécurité issues des interactions avec l'assistant IA</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color, marginBottom: 4 }}>
              {stat.value}
            </div>
            {stat.bg && (
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: stat.bg, borderRadius: 6, marginTop: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: stat.color }}>
                  {stat.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 20, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 200px' }}>
          <input
            type="text"
            placeholder="Période"
            style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}
          />
        </div>
        <div style={{ flex: '0 0 160px' }}>
          <select style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}>
            <option>Toutes Sévérités</option>
            <option>Faible</option>
            <option>Moyenne</option>
            <option>Critique</option>
          </select>
        </div>
        <div style={{ flex: '0 0 160px' }}>
          <select style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}>
            <option>Tous Statuts</option>
            <option>Ouverte</option>
            <option>Résolue</option>
          </select>
        </div>
        <div style={{ flex: '1 1 240px' }}>
          <input
            type="text"
            placeholder="Rechercher par utilisateur..."
            style={{ width: '100%', height: 40, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: '0 12px', color: DARK.text, fontSize: 14 }}
          />
        </div>
        <button
          onClick={() => alert('Exportation des alertes de sécurité au format CSV...')}
          style={{ height: 40, padding: '0 20px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
        >
          Exporter CSV
        </button>
      </div>

      {/* Main Table */}
      <div style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${DARK.border}` }}>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Utilisateur</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rôle</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action Tentée</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Horodatage</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sévérité</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Statut</th>
              <th style={{ textAlign: 'left', padding: 16, fontSize: 12, fontWeight: 600, color: DARK.textDim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, i) => (
              <tr
                key={alert.id}
                style={{ borderBottom: i < alerts.length - 1 ? `1px solid ${DARK.border}` : 'none', transition: 'background-color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.cardHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: 16, fontSize: 14, color: DARK.text, fontWeight: 500 }}>{alert.userName}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, fontSize: 12, color: DARK.textDim }}>
                    {alert.role}
                  </span>
                </td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{alert.actionAttempted}</td>
                <td style={{ padding: 16, fontSize: 13, color: DARK.textDim }}>{alert.timestamp}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: getSeverityBg(alert.severity), borderRadius: 6, fontSize: 12, fontWeight: 600, color: getSeverityColor(alert.severity) }}>
                    {alert.severity}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: alert.status === 'Ouverte' ? DARK.redBg : DARK.greenBg, borderRadius: 6, fontSize: 12, fontWeight: 600, color: alert.status === 'Ouverte' ? DARK.red : DARK.green }}>
                    {alert.status}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => setSelectedAlert(alert)}
                      style={{ height: 32, padding: '0 12px', backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, color: DARK.text, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}
                    >
                      Détails
                    </button>
                    {alert.status === 'Ouverte' && (
                      <button
                        onClick={() => window.alert(`Alerte de ${alert.userName} marquée comme résolue.`)}
                        style={{ height: 32, padding: '0 12px', backgroundColor: DARK.amber, border: 'none', borderRadius: 6, color: '#000', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
                      >
                        Résoudre
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side Panel */}
      {selectedAlert && (
        <>
          <div
            onClick={() => setSelectedAlert(null)}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100 }}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, width: 360, height: '100vh', backgroundColor: DARK.card, borderLeft: `1px solid ${DARK.border}`, zIndex: 101, overflowY: 'auto', padding: 24 }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK.text }}>Détails de l'Alerte</h3>
              <button
                onClick={() => setSelectedAlert(null)}
                style={{ width: 32, height: 32, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 6, color: DARK.text, fontSize: 18, cursor: 'pointer', lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            {/* User Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, padding: 16, backgroundColor: DARK.bg, borderRadius: 8 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: DARK.amber, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#000' }}>
                {selectedAlert.userName.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: DARK.text, marginBottom: 4 }}>{selectedAlert.userName}</div>
                <span style={{ display: 'inline-block', padding: '2px 8px', backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 4, fontSize: 11, color: DARK.textDim }}>
                  {selectedAlert.role}
                </span>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action Tentée</div>
              <div style={{ fontSize: 14, color: DARK.text, lineHeight: 1.6 }}>{selectedAlert.description}</div>
            </div>

            {/* AI Response */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Réponse de l'IA</div>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: selectedAlert.aiResponse === 'Bloqué' ? DARK.redBg : DARK.orangeBg, borderRadius: 6, fontSize: 13, fontWeight: 600, color: selectedAlert.aiResponse === 'Bloqué' ? DARK.red : DARK.orange }}>
                {selectedAlert.aiResponse}
              </span>
            </div>

            {/* Severity & Status */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Sévérité</div>
                <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: getSeverityBg(selectedAlert.severity), borderRadius: 6, fontSize: 13, fontWeight: 600, color: getSeverityColor(selectedAlert.severity) }}>
                  {selectedAlert.severity}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Statut</div>
                <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: selectedAlert.status === 'Ouverte' ? DARK.redBg : DARK.greenBg, borderRadius: 6, fontSize: 13, fontWeight: 600, color: selectedAlert.status === 'Ouverte' ? DARK.red : DARK.green }}>
                  {selectedAlert.status}
                </span>
              </div>
            </div>

            {/* Timestamp */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8 }}>Horodatage</div>
              <div style={{ fontSize: 14, color: DARK.text }}>{selectedAlert.timestamp}</div>
            </div>

            {/* Resolution Note */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Note de Résolution
              </label>
              <textarea
                value={resolutionNote}
                onChange={e => setResolutionNote(e.target.value)}
                placeholder="Ajouter des notes sur la résolution de cette alerte..."
                style={{ width: '100%', minHeight: 100, backgroundColor: DARK.bg, border: `1px solid ${DARK.border}`, borderRadius: 8, padding: 12, color: DARK.text, fontSize: 14, resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                onClick={() => {
                  window.alert(`Alerte de ${selectedAlert.userName} marquée comme résolue.`);
                  setSelectedAlert(null);
                }}
                style={{ width: '100%', height: 44, backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
              >
                Marquer comme résolue
              </button>
              <button
                onClick={() => window.alert(`Alerte escaladée au département des Ressources Humaines.`)}
                style={{ width: '100%', height: 44, backgroundColor: 'transparent', border: `2px solid ${DARK.red}`, borderRadius: 8, color: DARK.red, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                Escalader aux RH
              </button>
            </div>

          </div>
        </>
      )}

      {/* Floating AI Button */}
      <button
        onClick={() => alert("Assistant Sécurité IA : 'Je peux générer un rapport de conformité sur ces incidents. Voulez-vous que je le prépare ?'")}
        style={{ position: 'fixed', bottom: 28, right: 28, width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.amber, border: 'none', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        ✦
      </button>

    </div>
  );
}
