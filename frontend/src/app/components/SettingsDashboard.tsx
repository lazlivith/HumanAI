// Settings Dashboard — system configuration
import React from 'react';

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
  green:        '#065F46',
  greenBg:      '#ECFDF5',
} as const;

const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";

export function SettingsDashboard() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: FONT_CLASH, fontSize: 18, fontWeight: 700, color: NC.fg, marginBottom: 4, letterSpacing: '0.02em' }}>Paramètres du Système</h2>
          <p style={{ fontSize: 11, color: NC.muted }}>Configurez les préférences du système, les rôles utilisateurs et les intégrations</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={() => alert('Modifications enregistrées avec succès.')}>
            <NCButton primary>Enregistrer les modifications</NCButton>
          </div>
        </div>
      </div>

      {/* Settings categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { label: 'Général', desc: 'Infos entreprise & préférences' },
          { label: 'Utilisateurs & Rôles', desc: 'Gérer les accès' },
          { label: 'Sécurité', desc: 'Auth & conformité' },
          { label: 'Intégrations', desc: 'Services connectés' },
        ].map((cat) => (
          <NCCard
            key={cat.label}
            onClick={() => alert(`Navigation vers les paramètres : ${cat.label}`)}
            style={{ padding: 18, cursor: 'pointer' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F9FAFB'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = NC.card; }}
            data-cursor
          >
            <div style={{ width: 40, height: 40, border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, borderRadius: 8, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 18, height: 18, border: `1.5px solid ${NC.accent}`, borderRadius: 2 }} />
            </div>
            <div style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, marginBottom: 4 }}>{cat.label}</div>
            <div style={{ fontSize: 10, color: NC.muted }}>{cat.desc}</div>
          </NCCard>
        ))}
      </div>

      {/* General settings */}
      <NCCard style={{ padding: 20 }}>
        <NCSectionLabel label="Paramètres Généraux" />
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 10, color: NC.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Nom de l'Entreprise</label>
              <div style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', backgroundColor: '#F9FAFB' }}>
                <span style={{ fontSize: 11, color: NC.fgDim }}>HUMAI Corporation</span>
              </div>
            </div>
            <div onClick={() => alert('Sélection du fuseau horaire...')} style={{ cursor: 'pointer' }}>
              <label style={{ display: 'block', fontSize: 10, color: NC.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Fuseau Horaire</label>
              <div style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F9FAFB' }} data-cursor>
                <span style={{ fontSize: 11, color: NC.fgDim }}>UTC +01:00 (Paris)</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div onClick={() => alert('Sélection du format de date...')} style={{ cursor: 'pointer' }}>
              <label style={{ display: 'block', fontSize: 10, color: NC.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Format de Date</label>
              <div style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F9FAFB' }} data-cursor>
                <span style={{ fontSize: 11, color: NC.fgDim }}>JJ/MM/AAAA</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </div>
            </div>
            <div onClick={() => alert('Sélection de la devise...')} style={{ cursor: 'pointer' }}>
              <label style={{ display: 'block', fontSize: 10, color: NC.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Devise</label>
              <div style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F9FAFB' }} data-cursor>
                <span style={{ fontSize: 11, color: NC.fgDim }}>EUR (€)</span>
                <div style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderTop: `4px solid ${NC.muted}` }} />
              </div>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 10, color: NC.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Horaires de Travail</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div onClick={() => alert('Modifier l\'heure de début')} style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', backgroundColor: '#F9FAFB', cursor: 'pointer' }}>
                <span style={{ fontSize: 11, color: NC.fgDim }}>Début : 09:00</span>
              </div>
              <div onClick={() => alert('Modifier l\'heure de fin')} style={{ height: 36, border: `1px solid ${NC.border}`, borderRadius: 6, padding: '0 12px', display: 'flex', alignItems: 'center', backgroundColor: '#F9FAFB', cursor: 'pointer' }}>
                <span style={{ fontSize: 11, color: NC.fgDim }}>Fin : 18:00</span>
              </div>
            </div>
          </div>

        </div>
      </NCCard>

      {/* User roles & permissions */}
      <NCCard style={{ padding: 0 }}>
        <div style={{ borderBottom: `1px solid ${NC.border}`, padding: '16px 20px' }}>
          <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>Rôles & Permissions Utilisateurs</span>
        </div>

        <div style={{ padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { role: 'Admin', users: 3, perms: ['Accès total', 'Gestion utilisateurs', 'Config système'] },
              { role: 'Manager', users: 12, perms: ['Voir toutes les données', 'Éditer les employés', 'Approuver les requêtes'] },
              { role: 'Employé', users: 233, perms: ['Voir ses propres données', 'Soumettre des requêtes', 'Voir le calendrier'] },
            ].map((r) => (
              <div key={r.role} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg }}>{r.role}</span>
                  <div style={{ height: 22, padding: '0 8px', backgroundColor: NC.accentBg, border: `1px solid ${NC.accentBorder}`, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: NC.link, fontWeight: 600 }}>{r.users} utilisateurs</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
                  {r.perms.map((p) => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 14, height: 14, border: 'none', backgroundColor: NC.accent, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <div style={{ width: 8, height: 5, borderLeft: '2px solid white', borderBottom: '2px solid white', transform: 'rotate(-45deg)', marginTop: -2 }} />
                      </div>
                      <span style={{ fontSize: 11, color: NC.fgDim }}>{p}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => alert(`Édition des permissions pour le rôle : ${r.role}`)} data-cursor style={{ width: '100%', height: 28, border: `1px solid ${NC.border}`, borderRadius: 6, fontSize: 11, color: NC.muted, cursor: 'pointer', backgroundColor: 'transparent' }}>
                  Éditer les Permissions
                </button>
              </div>
            ))}
          </div>
        </div>
      </NCCard>

      {/* Bottom row: Security & Integrations */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

        {/* Security settings */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Sécurité & Conformité" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { setting: 'Authentification à Deux Facteurs (2FA)', enabled: true },
              { setting: 'Expiration Mot de Passe (90 jours)', enabled: true },
              { setting: 'Expiration Session (30 min)', enabled: true },
              { setting: 'Liste Blanche IP', enabled: false },
              { setting: 'Journal d\'Audit', enabled: true },
              { setting: 'Chiffrement des Données au Repos', enabled: true },
            ].map((s, i) => (
              <div key={s.setting} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: i < 5 ? `1px solid ${NC.borderDim}` : 'none' }}>
                <span style={{ fontSize: 11, color: NC.fgDim }}>{s.setting}</span>
                <div onClick={() => alert(`Bascule de l'état pour : ${s.setting}`)} data-cursor style={{ width: 42, height: 22, borderRadius: 999, position: 'relative', cursor: 'pointer', background: s.enabled ? BTN_GRADIENT : NC.border, transition: 'background 0.2s' }}>
                  <div style={{ position: 'absolute', top: 2, width: 18, height: 18, backgroundColor: '#FFFFFF', borderRadius: '50%', transition: 'all 0.2s', left: s.enabled ? 22 : 2, boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }} />
                </div>
              </div>
            ))}
          </div>
        </NCCard>

        {/* Integrations */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Intégrations Connectées" />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: 'Slack', status: 'Connecté', desc: 'Notifications d\'équipe' },
              { name: 'Google Workspace', status: 'Connecté', desc: 'Synchronisation calendrier & emails' },
              { name: 'QuickBooks', status: 'Connecté', desc: 'Intégration de la paie' },
              { name: 'Zoom', status: 'Déconnecté', desc: 'Entretiens vidéo' },
              { name: 'LinkedIn', status: 'Déconnecté', desc: 'Sourcing pour le recrutement' },
            ].map((int) => (
              <div key={int.name} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 38, height: 38, border: `1.5px solid ${NC.border}`, backgroundColor: NC.accentBg, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: 16, height: 16, border: `1.5px solid ${NC.accent}`, borderRadius: 2 }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 2 }}>{int.name}</div>
                  <div style={{ fontSize: 10, color: NC.muted }}>{int.desc}</div>
                </div>
                {int.status === 'Connecté' ? (
                  <button onClick={() => alert(`Déconnexion de l'intégration : ${int.name}`)} data-cursor style={{ padding: '0 12px', height: 26, border: `1px solid ${NC.border}`, borderRadius: 5, fontSize: 11, color: NC.muted, cursor: 'pointer', backgroundColor: 'transparent' }}>Déconnecter</button>
                ) : (
                  <button onClick={() => alert(`Connexion à l'intégration : ${int.name}`)} data-cursor style={{ padding: '0 12px', height: 26, border: 'none', borderRadius: 5, fontSize: 11, color: '#FFFFFF', cursor: 'pointer', background: BTN_GRADIENT, fontWeight: 600 }}>Connecter</button>
                )}
              </div>
            ))}
          </div>
        </NCCard>

      </div>

      {/* Notification preferences */}
      <NCCard style={{ padding: 20 }}>
        <NCSectionLabel label="Préférences de Notification" />
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { event: 'Nouvel employé intégré', email: true, push: true, sms: false },
            { event: 'Demande de congé soumise', email: true, push: true, sms: false },
            { event: 'Paie traitée', email: true, push: false, sms: true },
            { event: 'Évaluation de performance due', email: true, push: true, sms: false },
            { event: 'Mise à jour des politiques', email: true, push: false, sms: false },
            { event: 'Maintenance du système', email: true, push: true, sms: true },
          ].map((n) => (
            <div key={n.event} style={{ border: `1px solid ${NC.border}`, borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 11, color: NC.fg, fontWeight: 500, marginBottom: 12 }}>{n.event}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Email', checked: n.email },
                  { label: 'Push', checked: n.push },
                  { label: 'SMS', checked: n.sms },
                ].map((ch) => (
                  <div key={ch.label} onClick={() => alert(`Modification de l'option ${ch.label} pour : ${n.event}`)} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                    <div data-cursor style={{ width: 16, height: 16, borderRadius: 3, border: ch.checked ? 'none' : `1.5px solid ${NC.border}`, backgroundColor: ch.checked ? NC.accent : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      {ch.checked && <div style={{ width: 8, height: 5, borderLeft: '2px solid white', borderBottom: '2px solid white', transform: 'rotate(-45deg)', marginTop: -2 }} />}
                    </div>
                    <span style={{ fontSize: 11, color: NC.fgDim }}>{ch.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </NCCard>

    </div>
  );
}

function NCCard({ children, style, ...props }: { children: React.ReactNode; style?: React.CSSProperties; [key: string]: any }) {
  return <div style={{ backgroundColor: NC.card, border: `1px solid ${NC.border}`, borderRadius: 10, boxShadow: '0 1px 4px rgba(26,75,110,0.06)', ...style }} {...props}>{children}</div>;
}

function NCButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button data-cursor style={{ height: 28, padding: '0 14px', border: primary ? 'none' : `1px solid ${NC.border}`, borderRadius: 999, background: primary ? BTN_GRADIENT : 'transparent', color: primary ? '#FFFFFF' : NC.muted, boxShadow: primary ? '0 2px 8px rgba(26,75,110,0.22)' : 'none', fontSize: 11, fontWeight: primary ? 600 : 400, cursor: 'pointer', transition: 'opacity 0.15s' }}>
      {children}
    </button>
  );
}

function NCSectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_CLASH, fontSize: 12, fontWeight: 600, color: NC.fg, letterSpacing: '0.03em' }}>{label}</span>
      <button onClick={() => alert('Afficher toutes les options...')} data-cursor style={{ height: 20, padding: '0 8px', border: `1px solid ${NC.border}`, borderRadius: 4, backgroundColor: 'transparent', fontSize: 9, color: NC.mutedDim, cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Voir tout</button>
    </div>
  );
}
