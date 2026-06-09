import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NC, FONT_CLASH } from '../../theme';
import { NCCard, NCSectionLabel, NCKpiCard, NCButton } from '../ui/SharedPrimitives';
import { useAuth } from '../../context/AuthContext';

export function CollaboratorDashboard() {
  const { user } = useAuth();
  const [docModalOpen, setDocModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('');
  const [docGenerating, setDocGenerating] = useState(false);

  const kpis = [
    { label: 'Congés payés restants', val: '14.5', sub: 'Jours ouvrés', bars: [100,100,100,100,100,100,100,0,0,0] },
    { label: 'RTT restants', val: '4', sub: 'Jours', bars: [20,40,60,80,100,20,40,0,0,0] },
    { label: 'Absences validées', val: '2', sub: 'Sur le trimestre en cours', bars: [100,100,100,0,0,0,0,0,0,0] },
  ];

  const handleOpenDoc = (docName: string) => {
    setSelectedDoc(docName);
    setDocModalOpen(true);
  };

  const handleSubmitDoc = () => {
    setDocGenerating(true);
    setTimeout(() => {
      setDocGenerating(false);
      setDocModalOpen(false);
      // In a real app, this would trigger a toast notification
    }, 1500);
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 24, backgroundColor: '#F8FAFC' }}>
      
      {/* Bandeau de bienvenue */}
      <div style={{ marginBottom: 4 }}>
        <h1 style={{ fontFamily: FONT_CLASH, fontSize: 26, fontWeight: 600, color: '#1E293B', margin: 0 }}>
          Bonjour {user?.name?.split(' ')[0] || 'Collaborateur'}, ravi de vous retrouver.
        </h1>
        <p style={{ fontSize: 14, color: '#64748B', marginTop: 6 }}>
          Voici le résumé de votre activité et vos actions rapides.
        </p>
      </div>

      {/* Mon Compteur de Congés */}
      <div>
        <NCSectionLabel label="Mon Compteur de Congés" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
          {kpis.map(k => <NCKpiCard key={k.label} {...k} />)}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
        
        {/* Parcours d'Onboarding */}
        <NCCard style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <NCSectionLabel label="Parcours d'Onboarding" />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#01637A', backgroundColor: 'rgba(1,99,122,0.1)', padding: '4px 10px', borderRadius: 999 }}>
              Nouveau
            </span>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6, color: '#475569', fontWeight: 500 }}>
              <span>Progression</span>
              <span>Jour 12 sur 30</span>
            </div>
            <div style={{ width: '100%', height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '40%', height: '100%', backgroundColor: '#01637A', borderRadius: 3 }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontSize: 13, color: '#475569', textDecoration: 'line-through' }}>Lire le manuel interne</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid #EE7836', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#EE7836' }} />
              </div>
              <span style={{ fontSize: 13, color: '#1E293B', fontWeight: 500 }}>Configurer le poste de travail</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid #CBD5E0', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#64748B' }}>Rencontrer le parrain de l'équipe</span>
            </div>
          </div>
        </NCCard>

        {/* Génération Documentaire Rapide */}
        <NCCard style={{ padding: 20 }}>
          <NCSectionLabel label="Génération Documentaire Rapide" />
          <p style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
            Obtenez instantanément vos documents RH officiels grâce à l'automatisation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <button 
              onClick={() => handleOpenDoc('Attestation de travail')}
              style={{ padding: '16px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#01637A'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(1,99,122,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#01637A' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#1E293B', textAlign: 'center' }}>Attestation de travail</span>
            </button>

            <button 
              onClick={() => handleOpenDoc('Synthèse de paie')}
              style={{ padding: '16px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#01637A'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(238,120,54,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EE7836' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#1E293B', textAlign: 'center' }}>Synthèse de paie</span>
            </button>
          </div>
        </NCCard>

      </div>

      {/* Modal for Document Generation */}
      <AnimatePresence>
        {docModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDocModalOpen(false)}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 1000, backdropFilter: 'blur(2px)' }}
            />
            <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001, pointerEvents: 'none' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 32, width: '100%', maxWidth: 500, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', pointerEvents: 'auto' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <h2 style={{ margin: 0, fontSize: 18, fontFamily: FONT_CLASH, fontWeight: 600, color: '#1E293B' }}>{selectedDoc}</h2>
                  <button onClick={() => setDocModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: 24, color: '#94A3B8', cursor: 'pointer', lineHeight: 1 }}>×</button>
                </div>
                
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: 20, marginBottom: 24 }}>
                  <div style={{ height: 16, width: '60%', backgroundColor: '#E2E8F0', borderRadius: 4, marginBottom: 12 }} />
                  <div style={{ height: 12, width: '100%', backgroundColor: '#E2E8F0', borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 12, width: '90%', backgroundColor: '#E2E8F0', borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 12, width: '95%', backgroundColor: '#E2E8F0', borderRadius: 4, marginBottom: 20 }} />
                  <div style={{ height: 12, width: '40%', backgroundColor: '#E2E8F0', borderRadius: 4 }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button onClick={() => setDocModalOpen(false)} style={{ padding: '0 16px', height: 40, borderRadius: 6, border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', fontSize: 14, fontWeight: 500, color: '#475569', cursor: 'pointer' }}>
                    Annuler
                  </button>
                  <button onClick={handleSubmitDoc} style={{ padding: '0 20px', height: 40, borderRadius: 6, border: 'none', backgroundColor: '#01637A', fontSize: 14, fontWeight: 500, color: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {docGenerating ? (
                      <>
                        <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#FFFFFF', animation: 'spin 0.6s linear infinite' }} />
                        Génération...
                      </>
                    ) : 'Soumettre à la validation RH'}
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

