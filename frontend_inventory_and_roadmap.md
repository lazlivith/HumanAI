# 🛠️ Audit & Roadmap Frontend - Plateforme IA RH (YDAYS 2026)

*Rédigé par ton Product Engineer React.*

L'objectif de ce document est de faire le pont entre le **cahier des charges global YDAYS 2026** et **l'état actuel du code source frontend**. Il te servira de feuille de route (Roadmap) pour savoir exactement ce qui est déjà fait (le "design") et ce que tu dois implémenter (la "logique et les APIs").

---

## 1. 🔍 Inventaire de l'Existant (Ce que nous avons déjà)

Notre projet possède actuellement une interface utilisateur (UI) très avancée. Cependant, la grande majorité de ces pages sont actuellement des **Mockups statiques** (des coquilles vides visuellement parfaites mais avec des données codées en dur).

Voici la cartographie des composants existants par rapport au cahier des charges :

| Composant existant | Correspondance Cahier des Charges YDAYS | État Actuel |
| :--- | :--- | :--- |
| `LoginPage.tsx` | Authentification & Contrôle d'accès | **Fonctionnel** (API `/auth/login` intégrée, JWT, Router) |
| `App.tsx` (MainLayout) | Navigation dynamique selon le rôle (RBAC) | **Fonctionnel** (Routing & Context en place) |
| `EmployeesDashboard.tsx` | Base de données RH interne (Consultation) | 🎨 *Visuel uniquement* (Données en dur) |
| `LeaveDashboard.tsx` | Parcours collaborateur (Congés) | 🎨 *Visuel uniquement* |
| `DocumentsDashboard.tsx` | Moteur de génération automatique de documents RH | 🎨 *Visuel uniquement* |
| `OffboardingWorkflow.tsx` | Workflows agentiques d'offboarding | 🎨 *Visuel uniquement* |
| `SecurityAlertsPanel.tsx` | Alertes RH et Administrateurs | 🎨 *Visuel uniquement* |
| `AIUsageLogsView.tsx` | Module de supervision des usages de l'assistant IA | 🎨 *Visuel uniquement* |
| `AIChatDashboard.tsx` | Assistant IA RH conversationnel | 🎨 *Visuel uniquement* |
| `FloatingAIAssistant.tsx` | Expérience collaborateur (Chatbot omniprésent) | 🎨 *Visuel uniquement* |
| `PerformanceDashboard.tsx`| Détection précoce du désengagement (KPIs) | 🎨 *Visuel uniquement* |

---

## 2. 🎯 Ta Roadmap (Tes prochaines tâches)

En tant que **Front-End Developer**, ta mission principale n'est plus de créer le CSS (qui est déjà bien avancé), mais de **donner vie à ces pages** en implémentant la logique métier (Hooks, State Management) et en les connectant au Backend du *Backend Developer* et du *Chatbot Architect*.

Voici tes "Epics" (grands chantiers) classés par ordre logique d'implémentation :

### 📦 EPIC 1 : Nettoyage et Refactoring "React Way"
Avant de connecter les API, il faut préparer le terrain. Actuellement, les tableaux de bord contiennent des tableaux de données codés en dur directement dans le composant (ex: `const kpis = [...]`).
- **Tâche 1.1** : Créer des dossiers `src/app/types` pour définir les interfaces TypeScript exactes attendues par le Backend (ex: `Employee`, `Alert`, `Document`).
- **Tâche 1.2** : Créer des hooks custom (ex: `useEmployees()`, `useAlerts()`) qui, pour le moment, retournent les mocks, afin de nettoyer les composants visuels.

### 🔌 EPIC 2 : Connexion des Dashboards (Méthodes GET)
Permettre aux pages d'afficher les vraies données provenant de la base de données RH interne.
- **Tâche 2.1 - `EmployeesDashboard`** : Implémenter l'appel `apiClient.get('/api/employees')`. Gérer le state de chargement (Spinner) et l'état vide (Empty State).
- **Tâche 2.2 - `SecurityAlertsPanel`** : Connecter l'API pour récupérer les alertes de sécurité pour le rôle Admin.
- **Tâche 2.3 - `AIUsageLogsView`** : Récupérer les logs d'utilisation de l'IA.

### 🤖 EPIC 3 : Implémentation de l'Assistant IA Conversationnel
C'est le cœur du sujet YDAYS. Il faut connecter le composant de Chat (`AIChatDashboard.tsx` / `FloatingAIAssistant.tsx`) avec le pipeline RAG du Backend.
- **Tâche 3.1** : Créer l'état local du chat (messages utilisateur vs messages IA).
- **Tâche 3.2** : Implémenter l'API `apiClient.post('/api/chat', { prompt })` et afficher un indicateur "L'IA réfléchit..." pendant la requête.
- **Tâche 3.3** : *(Avancé)* Gérer le streaming (Server-Sent Events) si le Chatbot Architect l'exige, pour afficher la réponse de l'IA mot par mot (façon ChatGPT).

### 📝 EPIC 4 : Workflows et Génération de Documents (Méthodes POST/PUT)
Permettre aux utilisateurs de créer de la donnée.
- **Tâche 4.1 - `DocumentsDashboard`** : Coder le formulaire pour demander la génération d'un document (ex: Attestation). Envoyer la requête au backend et gérer le téléchargement du PDF/Word retourné.
- **Tâche 4.2 - `OffboardingWorkflow`** : Connecter le workflow agentique. L'UI doit permettre à un RH de déclencher l'offboarding (`POST /api/workflows/offboarding`) et de consulter son statut en temps réel.

### 🛡️ EPIC 5 : Le Contrôle d'Accès basé sur les Rôles (RBAC) UI
Nous avons le composant `<ProtectedRoute>` pour bloquer des *pages entières*, mais il faut aussi masquer des *bouts de pages*.
- **Tâche 5.1** : Créer un composant ou un hook (ex: `HasRole`) pour masquer dynamiquement des boutons (ex: cacher le bouton "Supprimer un employé" si l'utilisateur connecté n'est pas Admin ou RH).

---

## 💡 Mes conseils de Product Engineer
1. **Communique avec le Backend** : Demande très vite au développeur Backend les "contrats d'API" (les formats JSON exacts qu'il compte t'envoyer et recevoir) ou le Swagger s'il en fait un.
2. **Utilise React Query (Optionnel mais recommandé)** : Pour gérer tes appels API (Epic 2), si le projet grandit, installer `@tanstack/react-query` t'évitera de faire des `useEffect` manuels et gérera le cache tout seul.
3. **Garde tes composants purs** : Sépare toujours l'UI (le design) de la logique (le fetch). Par exemple, `EmployeesDashboard` ne devrait faire que du rendu visuel, et appeler un hook `useFetchEmployees()` pour obtenir sa data.
