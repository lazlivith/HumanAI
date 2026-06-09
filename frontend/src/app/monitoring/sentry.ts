/**
 * sentry.ts
 * 
 * Initialisation du monitoring d'erreurs avec Sentry.
 * 
 * - Actif UNIQUEMENT en staging et en production (pas en développement local)
 * - Capture automatiquement les erreurs JavaScript non gérées
 * - Attache le contexte utilisateur (rôle) à chaque rapport d'erreur
 * 
 * ⚠️  Pour activer :
 *   1. Créer un compte sur https://sentry.io (plan gratuit disponible)
 *   2. Créer un projet "React"
 *   3. Copier le DSN dans la variable VITE_SENTRY_DSN du .env de production
 *   4. Installer le SDK : npm install @sentry/react
 */

// Sentry SDK (à installer : npm install @sentry/react)
// import * as Sentry from '@sentry/react';

interface SentryUser {
  id?: string;
  email?: string;
  role?: string;
}

const IS_PRODUCTION = import.meta.env.VITE_APP_ENV === 'production';
const IS_STAGING    = import.meta.env.VITE_APP_ENV === 'staging';
const SENTRY_DSN    = import.meta.env.VITE_SENTRY_DSN;

/**
 * Initialise Sentry. À appeler une seule fois au démarrage de l'app (dans main.tsx).
 */
export function initSentry(): void {
  if (!SENTRY_DSN || (!IS_PRODUCTION && !IS_STAGING)) {
    console.info('[HUMAI Monitoring] Sentry désactivé (mode développement)');
    return;
  }

  // Décommentez quand @sentry/react est installé :
  /*
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.VITE_APP_ENV,
    release: `humai-frontend@${import.meta.env.VITE_APP_VERSION ?? '1.0.0'}`,

    // Taux d'échantillonnage des traces de performance (10% = 1 requête sur 10 tracée)
    tracesSampleRate: IS_PRODUCTION ? 0.1 : 1.0,

    // Intégrations recommandées pour une SPA React
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,      // Masque le texte (RGPD)
        blockAllMedia: true,    // Bloque les images/médias dans les replays
      }),
    ],

    // Taux d'échantillonnage des replays de session
    replaysSessionSampleRate: 0.05,   // 5% des sessions normales
    replaysOnErrorSampleRate: 1.0,    // 100% des sessions avec erreur
  });
  */

  console.info('[HUMAI Monitoring] Sentry initialisé (environnement:', import.meta.env.VITE_APP_ENV, ')');
}

/**
 * Attache le profil utilisateur au contexte Sentry.
 * À appeler après une connexion réussie.
 */
export function setSentryUser(user: SentryUser | null): void {
  if (!SENTRY_DSN) return;

  // Décommentez quand @sentry/react est installé :
  // if (user) {
  //   Sentry.setUser({ id: user.id, email: user.email, role: user.role });
  // } else {
  //   Sentry.setUser(null);
  // }
}

/**
 * Capture manuellement une erreur avec du contexte supplémentaire.
 * Utile pour les erreurs d'API ou les cas limite métier.
 */
export function captureError(error: Error, context?: Record<string, unknown>): void {
  console.error('[HUMAI Error]', error, context);

  // Décommentez quand @sentry/react est installé :
  // Sentry.withScope(scope => {
  //   if (context) scope.setExtras(context);
  //   Sentry.captureException(error);
  // });
}
