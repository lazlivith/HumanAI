// Offboarding Workflow — Dark theme with amber accents

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
  blue:     '#3B82F6',
  blueBg:   '#1E3A8A',
  green:    '#10B981',
} as const;

interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  completedAt?: string;
}

interface OffboardingEmployee {
  id: string;
  name: string;
  jobTitle: string;
  departureDate: string;
  departureReason: 'Démission' | 'Fin de Contrat' | 'Licenciement';
  completedSteps: number;
  totalSteps: number;
  checklist: ChecklistItem[];
}

export function OffboardingWorkflow() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const employees: OffboardingEmployee[] = [
    {
      id: 'OFF001',
      name: 'Thomas Bernard',
      jobTitle: 'Développeur Senior',
      departureDate: '2026-06-30',
      departureReason: 'Démission',
      completedSteps: 3,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Matériel retourné', completed: true, completedAt: '2026-06-05 14:30' },
        { id: 'c2', label: 'Accès systèmes révoqués', completed: true, completedAt: '2026-06-06 09:15' },
        { id: 'c3', label: 'Dossiers administratifs clos', completed: true, completedAt: '2026-06-07 11:20' },
        { id: 'c4', label: 'Document de passation généré', completed: false },
        { id: 'c5', label: 'Entretien de départ réalisé', completed: false },
      ],
    },
    {
      id: 'OFF002',
      name: 'Julie Martin',
      jobTitle: 'Responsable Marketing',
      departureDate: '2026-07-15',
      departureReason: 'Fin de Contrat',
      completedSteps: 1,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Matériel retourné', completed: true, completedAt: '2026-06-03 16:45' },
        { id: 'c2', label: 'Accès systèmes révoqués', completed: false },
        { id: 'c3', label: 'Dossiers administratifs clos', completed: false },
        { id: 'c4', label: 'Document de passation généré', completed: false },
        { id: 'c5', label: 'Entretien de départ réalisé', completed: false },
      ],
    },
    {
      id: 'OFF003',
      name: 'Marc Dubois',
      jobTitle: 'Commercial',
      departureDate: '2026-06-20',
      departureReason: 'Licenciement',
      completedSteps: 4,
      totalSteps: 5,
      checklist: [
        { id: 'c1', label: 'Matériel retourné', completed: true, completedAt: '2026-06-02 10:00' },
        { id: 'c2', label: 'Accès systèmes révoqués', completed: true, completedAt: '2026-06-02 10:05' },
        { id: 'c3', label: 'Dossiers administratifs clos', completed: true, completedAt: '2026-06-04 15:30' },
        { id: 'c4', label: 'Document de passation généré', completed: true, completedAt: '2026-06-05 14:00' },
        { id: 'c5', label: 'Entretien de départ réalisé', completed: false },
      ],
    },
  ];

  const stats = [
    { label: 'Départs en cours', value: '8' },
    { label: 'Terminés ce mois', value: '12' },
    { label: 'Tâches en retard', value: '3', color: DARK.red, bg: DARK.redBg },
    { label: 'Temps moyen (jours)', value: '14' },
  ];

  const getReasonColor = (reason: string) => {
    if (reason === 'Démission') return DARK.orange;
    if (reason === 'Fin de Contrat') return DARK.blue;
    return DARK.red;
  };

  const getReasonBg = (reason: string) => {
    if (reason === 'Démission') return DARK.orangeBg;
    if (reason === 'Fin de Contrat') return DARK.blueBg;
    return DARK.redBg;
  };

  return (
    <div style={{ flex: 1, backgroundColor: DARK.bg, overflowY: 'auto', padding: 32, fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: DARK.text, marginBottom: 8 }}>Workflow d'Offboarding</h1>
        <p style={{ fontSize: 14, color: DARK.textDim }}>Gérez les départs d'employés et assurez la conformité des procédures de sortie</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, color: DARK.textDim, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color || DARK.text, marginBottom: 4 }}>
              {stat.value}
            </div>
            {stat.bg && (
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: stat.bg, borderRadius: 6, marginTop: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: stat.color }}>
                  Action Requise
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Offboardings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {employees.map(emp => {
          const isExpanded = expandedId === emp.id;
          const progressPercent = (emp.completedSteps / emp.totalSteps) * 100;

          return (
            <div
              key={emp.id}
              style={{ backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.15s' }}
            >

              {/* Collapsed State */}
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>

                  {/* Avatar */}
                  <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.bg, border: `2px solid ${DARK.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: DARK.amber, flexShrink: 0 }}>
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 18, fontWeight: 600, color: DARK.text, marginBottom: 4 }}>{emp.name}</div>
                    <div style={{ fontSize: 14, color: DARK.textDim }}>{emp.jobTitle}</div>
                  </div>

                  {/* Departure Date */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: DARK.textDim, marginBottom: 4 }}>Date de Départ</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: DARK.text }}>{emp.departureDate}</div>
                  </div>

                  {/* Departure Reason Badge */}
                  <div>
                    <span style={{ display: 'inline-block', padding: '6px 14px', backgroundColor: getReasonBg(emp.departureReason), borderRadius: 6, fontSize: 13, fontWeight: 600, color: getReasonColor(emp.departureReason) }}>
                      {emp.departureReason}
                    </span>
                  </div>

                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: DARK.textDim }}>Progression</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: DARK.text }}>{emp.completedSteps} sur {emp.totalSteps} étapes complétées</span>
                  </div>
                  <div style={{ width: '100%', height: 10, backgroundColor: DARK.bg, borderRadius: 5, overflow: 'hidden' }}>
                    <div
                      style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent === 100 ? DARK.green : DARK.amber, borderRadius: 5, transition: 'width 0.3s ease' }}
                    />
                  </div>
                </div>

                {/* View Checklist Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : emp.id)}
                  style={{ height: 40, padding: '0 20px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                >
                  {isExpanded ? 'Masquer la checklist' : 'Voir la checklist'}
                </button>

              </div>

              {/* Expanded State - Checklist */}
              {isExpanded && (
                <div style={{ borderTop: `1px solid ${DARK.border}`, padding: 24, backgroundColor: DARK.bg }}>

                  <h4 style={{ fontSize: 16, fontWeight: 600, color: DARK.text, marginBottom: 20 }}>Checklist de sortie</h4>

                  {/* Checklist Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                    {emp.checklist.map(item => (
                      <div
                        key={item.id}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, backgroundColor: DARK.card, border: `1px solid ${DARK.border}`, borderRadius: 8 }}
                      >
                        {/* Checkbox */}
                        <div
                          onClick={() => { if(!item.completed) alert(`Tâche "${item.label}" marquée comme terminée.`); }}
                          style={{ width: 24, height: 24, borderRadius: 6, border: `2px solid ${item.completed ? DARK.green : DARK.border}`, backgroundColor: item.completed ? DARK.green : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}
                        >
                          {item.completed && (
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L5 9L13 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>

                        {/* Label */}
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 500, color: item.completed ? DARK.textDim : DARK.text, textDecoration: item.completed ? 'line-through' : 'none' }}>
                            {item.label}
                          </div>
                          {item.completedAt && (
                            <div style={{ fontSize: 12, color: DARK.textDim, marginTop: 4 }}>
                              Terminé à : {item.completedAt}
                            </div>
                          )}
                        </div>

                        {/* Mark Done Button */}
                        {!item.completed && (
                          <button
                            onClick={() => alert(`Tâche "${item.label}" marquée comme terminée.`)}
                            style={{ height: 36, padding: '0 16px', backgroundColor: DARK.amber, border: 'none', borderRadius: 6, color: '#000', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                          >
                            Marquer comme terminé
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={() => alert('Génération des documents de sortie (Solde de tout compte, Certificat de travail)...')}
                      style={{ height: 44, padding: '0 24px', backgroundColor: DARK.amber, border: 'none', borderRadius: 8, color: '#000', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = DARK.amberDark)}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = DARK.amber)}
                    >
                      Générer les documents de sortie
                    </button>
                    <button
                      onClick={() => alert('Ouverture du profil complet de l\'employé...')}
                      style={{ height: 44, padding: '0 24px', backgroundColor: 'transparent', border: `1px solid ${DARK.border}`, borderRadius: 8, color: DARK.text, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = DARK.cardHover; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; }}
                    >
                      Voir le profil de l'employé
                    </button>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Floating AI Button */}
      <button
        onClick={() => alert('Assistant IA d\'Offboarding : "Comment puis-je vous aider pour le départ de ce collaborateur ?"')}
        style={{ position: 'fixed', bottom: 28, right: 28, width: 56, height: 56, borderRadius: '50%', backgroundColor: DARK.amber, border: 'none', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, transition: 'transform 0.15s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        ✦
      </button>

    </div>
  );
}
