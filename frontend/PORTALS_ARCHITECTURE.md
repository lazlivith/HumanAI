# HUMAI - Architecture des 6 Portails Utilisateurs

## 📋 Vue d'ensemble

Chaque type d'utilisateur dispose de son propre **portail personnalisé** avec un dashboard, des fonctionnalités et une navigation adaptés à son rôle et ses besoins.

---

## 🏗️ Architecture Générale

```
┌─────────────────────────────────────────────────────────┐
│ Login Page (commune)                                     │
│   ├─ Authentification                                    │
│   └─ Détection du rôle utilisateur                       │
└─────────────────────────────────────────────────────────┘
                         ↓
        ┌────────────────┴────────────────┐
        │  Redirection selon rôle         │
        └────────────────┬────────────────┘
                         ↓
    ┌────────────────────┴────────────────────────┐
    │                                              │
    ↓                                              ↓
Portail A                                    Portail B
(Collaborateur)                              (Manager)
    │                                              │
    ↓                                              ↓
Portail C                                    Portail D
(RH)                                         (Direction)
    │                                              │
    ↓                                              ↓
Portail E                                    Portail F
(Admin)                                      (QVT)
```

### Éléments communs à tous les portails
- **Sidebar** : Personnalisée selon le rôle
- **Header** : Breadcrumb + profil utilisateur
- **Floating AI Assistant** : Adapté aux permissions
- **Custom cursor** : Même expérience UX
- **Design system** : Palette navy/teal cohérente

### Éléments différenciés
- **Navigation** : Items spécifiques au rôle
- **Dashboard** : KPI et widgets adaptés
- **Fonctionnalités** : Selon permissions
- **Couleur d'accent** : Variante pour identification visuelle

---

## 1️⃣ Portail Collaborateur (Employee Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Teal clair (#3ECFBA)
- **Icon** : 👤 User

### 📊 Dashboard "Mon Espace"

**Layout** : Centré sur les informations personnelles

```
┌─────────────────────────────────────────────────────┐
│  Bienvenue, [Prénom] !                              │
│  [Message personnalisé selon date/événements]       │
└─────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Mes Congés   │ Mes Absences │ Mes Documents│
│ 12 jours     │ 2 jours      │ 5 docs       │
│ restants     │ ce mois      │ disponibles  │
└──────────────┴──────────────┴──────────────┘

┌─────────────────────────────────────────────────────┐
│  Onboarding Progress (si < 3 mois ancienneté)       │
│  [Progress bar] 75% complété                        │
│  ✅ Formation sécurité | ✅ Tour bureaux            │
│  ⏳ Entretien 30j | ⬜ Feedback manager            │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Actions Rapides     │  Actualités RH               │
│  • Demander congé    │  • Nouvelle politique télét. │
│  • Générer document  │  • Inscriptions formation Q3 │
│  • Consulter paie    │  • Event team building       │
│  • Mobilité interne  │                              │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Assistant IA - Questions fréquentes                │
│  💬 "Combien de RTT me restent ?"                   │
│  💬 "Comment modifier mes coordonnées bancaires ?"  │
│  💬 "Quand ai-je droit à une augmentation ?"        │
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Mon Profil
──────────
Dashboard         ⭐
Mes Congés        📅
Mes Documents     📄
Mes Formations    🎓
Mon Équipe        👥

DEMANDES
──────────
Nouvelle Demande  ➕
Mes Demandes      📋
Historique        🕐

RESSOURCES
──────────
Politique RH      📖
Guides Internes   📚
FAQ              ❓
Support RH       💬
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- Carte de bienvenue personnalisée
- KPI personnels (congés, absences, ancienneté)
- Onboarding progress (si nouveau)
- Actions rapides
- Actualités RH
- Questions fréquentes suggérées

**Page "Mes Congés"**
- Solde congés/RTT
- Calendrier personnel
- Historique congés pris
- Formulaire demande congé
- Planning équipe (qui est absent)

**Page "Mes Documents"**
- Liste documents RH (contrat, avenants, attestations)
- Bulletins de paie
- Générateur de documents (attestation employeur, etc.)
- Téléchargements

**Page "Mes Formations"**
- Formations suivies
- Formations recommandées
- Catalogue formations disponibles
- Inscriptions en cours

**Page "Mon Équipe"**
- Organigramme département
- Contacts clés
- Manager et équipe

**Page "Nouvelle Demande"**
- Formulaire unifié : congé, formation, mobilité, matériel, etc.
- Génération assistée par IA

**Page "Mes Demandes"**
- Demandes en cours (statut)
- Notifications

**Assistant IA**
- Questions RH courantes
- Génération documents
- Navigation guidée

---

## 2️⃣ Portail Manager (Manager Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Navy/Teal gradient
- **Icon** : 👔 Briefcase

### 📊 Dashboard "Vue Équipe"

```
┌─────────────────────────────────────────────────────┐
│  Mon Équipe - [Nom département]                     │
│  [Période] | [Nombre collaborateurs]                │
└─────────────────────────────────────────────────────┘

┌──────────┬──────────┬──────────┬──────────┬─────────┐
│Effectif  │Engagement│Absentéism│Turnover  │Alertes  │
│   12     │   4.2/5  │   2.8%   │   0%     │    3    │
│ +1 ce    │ Stable   │ -0.5 pts │ Stable   │⚠️ Urgent│
│ mois     │          │          │          │         │
└──────────┴──────────┴──────────┴──────────┴─────────┘

┌─────────────────────────────────────────────────────┐
│  🚨 Alertes Prioritaires                            │
│  ⚠️  Marc D. - Absentéisme inhabituel (+40%)       │
│      → Planifier entretien de suivi                │
│  ⚠️  Julie K. - Risque désengagement détecté       │
│      → Vérifier charge de travail                  │
│  ℹ️  3 objectifs en retard - Q2 Review            │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Charge de Travail   │  Disponibilité Équipe        │
│  [Heat map équipe]   │  [Calendrier congés]         │
│  🟢 5 OK             │  Cette semaine : 10/12       │
│  🟡 4 Moyenne        │  Prochaine sem : 12/12       │
│  🔴 3 Élevée         │  Absences à venir : 2        │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Performance & Objectifs                            │
│  [Chart progression objectifs trimestriels]         │
│  • 8/12 collaborateurs on track                     │
│  • 3 en retard (formations suggérées)              │
│  • 1 en avance                                      │
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Dashboard         📊
──────────
Vue Équipe        ⭐
Mes Alertes       🚨
Performance       🎯

MON ÉQUIPE
──────────
Liste Équipe      👥
Organigramme      🌳
Absences          📅
Demandes          📋

PILOTAGE
──────────
KPI Équipe        📈
Rapports          📄
Objectifs         🎯
1-on-1            💬

ACTIONS
──────────
Plans d'Action    ✅
Formations        🎓
Mobilité          🔄
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- KPI équipe en temps réel
- Alertes prioritaires
- Charge de travail (heat map)
- Disponibilité équipe (calendrier)
- Performance globale

**Page "Mes Alertes"**
- Alertes désengagement triées par priorité
- Risques burnout
- Absentéisme inhabituel
- Objectifs en retard
- Actions recommandées par l'IA

**Page "Performance"**
- Tableau progression objectifs
- Scores individuels
- Historique entretiens
- Planning reviews

**Page "Liste Équipe"**
- Tableau collaborateurs
- Informations clés
- Statut (actif, congé, arrêt)
- Accès profils détaillés

**Page "Absences"**
- Calendrier équipe
- Demandes de congés à valider
- Historique absences
- Planning prévisionnel

**Page "Demandes"**
- Demandes en attente de validation
- Historique décisions
- Workflow approbation

**Page "KPI Équipe"**
- Dashboard analytique détaillé
- Tendances long terme
- Comparaison avec objectifs

**Page "Plans d'Action"**
- Actions suggérées par l'IA
- Suivi mise en œuvre
- Checklist interventions

**Assistant IA Manager**
- Questions sur équipe
- Recommandations actions
- Simulations scenarios

---

## 3️⃣ Portail RH (HR Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Teal professionnel (#0FA88A)
- **Icon** : 🏢 Building

### 📊 Dashboard "Vue Globale RH"

```
┌─────────────────────────────────────────────────────┐
│  Dashboard RH - Vue Entreprise                      │
│  [Date] | [Effectif total]                          │
└─────────────────────────────────────────────────────┘

┌────────┬────────┬────────┬────────┬────────┬────────┐
│Effectif│Actifs  │Congés  │Recrut. │Turnover│Alerte  │
│  248   │  231   │   12   │   17   │  12%   │   15   │
│ +3 mois│ 93.1% │ 4.8%   │ 5 int. │ +2 pts │⚠️ 3 🔴 │
└────────┴────────┴────────┴────────┴────────┴────────┘

┌─────────────────────────────────────────────────────┐
│  🚨 Alertes RH Critiques                            │
│  🔴 Tentative accès non autorisé - User #2847      │
│      → Investigation en cours                       │
│  🟠 5 départs simultanés Dept. Sales (risque)      │
│      → Analyse causes + plan rétention             │
│  🟡 12 demandes congés simultanées - Juillet        │
│      → Validation planning nécessaire              │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Processus Actifs    │  Projections 12 mois         │
│  • 8 Onboardings     │  [Chart effectifs prévus]    │
│  • 3 Offboardings    │  Effectif prévu : 265        │
│  • 23 Dem. congés    │  Masse salariale : +8.5%     │
│  • 12 Dem. formation │  Besoins recrut. : 22 postes │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Analytics Prédictive                               │
│  • Risque turnover Q3 : 14% (+2 pts)               │
│  • 18 collaborateurs à risque désengagement        │
│  • Absentéisme prévu Août : 6.2% (pic estival)    │
│  • Budget formation consommé : 67%                 │
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Dashboard         📊
──────────
Vue Globale       ⭐
Alertes RH        🚨
Analytics         📈

GESTION
──────────
Employés          👥
Recrutement       📢
Congés            📅
Paie              💰
Performance       🎯
Formation         🎓

PROCESSUS
──────────
Onboarding        🚀
Offboarding       👋
Demandes          📋
Documents         📄

PILOTAGE
──────────
Rapports          📊
Prédictions       🔮
Conformité        ✅
Audits            🔍

SYSTÈME
──────────
Base de Données   💾
Imports           📥
Exports           📤
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- KPI globaux entreprise
- Alertes RH critiques multi-niveaux
- Processus actifs (onboarding/offboarding en cours)
- Projections 12 mois
- Analytics prédictive

**Page "Alertes RH"**
- Dashboard alertes sécurité (tentatives accès)
- Alertes opérationnelles (risques turnover, désengagement)
- Alertes processus (demandes en attente)
- Classification par gravité
- Workflows résolution

**Page "Analytics"**
- Analyses prédictives avancées
- Simulations scénarios
- Détection signaux faibles
- Recommandations stratégiques

**Page "Employés"**
- Table complète 248 employés
- Filtres avancés
- Import/Export CSV
- Fiches détaillées
- Modifications

**Page "Recrutement"**
- Postes ouverts (17)
- Pipeline candidats
- Entretiens planifiés
- Offres en cours

**Page "Congés"**
- Demandes à valider
- Calendrier global
- Conflits détectés
- Approbations massives

**Page "Onboarding"**
- Nouveaux arrivants
- Workflows actifs
- Progression par personne
- Génération plans intégration

**Page "Offboarding"**
- Départs planifiés
- Checklists conformité
- Restitution matériel
- Capitalisation connaissances

**Page "Rapports"**
- Génération rapports RH
- Templates personnalisables
- Exports multi-formats
- Planification automatique

**Page "Base de Données"**
- Gestion centralisée données RH
- Mise à jour manuelle
- Vérification cohérence
- Historique modifications

**Assistant IA RH**
- Génération documents complexes
- Analyses avancées
- Recommandations stratégiques
- Support workflows

---

## 4️⃣ Portail Direction (Executive Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Navy Executive (#1A4B6E)
- **Icon** : 📊 Chart

### 📊 Dashboard "Vue Exécutive"

```
┌─────────────────────────────────────────────────────┐
│  Executive Dashboard                                │
│  [Trimestre] | [Période de référence]               │
└─────────────────────────────────────────────────────┘

┌────────────┬────────────┬────────────┬─────────────┐
│Masse Sal.  │Effectif    │Turnover    │ROI RH       │
│  €2.4M     │    248     │    12%     │   +15%      │
│  +8.5% YoY │   +3 mois  │  +2 pts    │  +3 pts YoY │
└────────────┴────────────┴────────────┴─────────────┘

┌─────────────────────────────────────────────────────┐
│  Projections 12 mois                                │
│  [Chart évolution effectifs + masse salariale]      │
│  • Effectif prévu T4 2026 : 265 (+17)              │
│  • Masse salariale prévue : €2.62M (+9.2%)         │
│  • Besoins recrutement : 22 postes                 │
│  • Budget formation requis : €185K                 │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Performance RH      │  Risques Identifiés          │
│  [Scorecard]         │  🔴 Turnover Sales élevé     │
│  • Rétention : 88%   │     (18% vs 12% global)      │
│  • Engagement : 4.2  │  🟠 Surcharge Engineering    │
│  • Time-to-hire: 42j │     (3 burnout risks)        │
│  • eNPS : +32        │  🟡 Budget formation 67%     │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Analyse Stratégique                                │
│  Top 3 Priorités RH détectées par l'IA :           │
│  1. Plan rétention département Sales (urgent)       │
│  2. Recrutement 8 profils Engineering Q3-Q4        │
│  3. Programme bien-être (12 situations à risque)   │
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Dashboard         📊
──────────
Vue Exécutive     ⭐
KPI Stratégiques  📈
Projections       🔮

ANALYSES
──────────
Masse Salariale   💰
Effectifs         👥
Turnover          📉
Performance       🎯

RAPPORTS
──────────
COMEX             📋
Trimestriels      📅
Annuels           📆
Sur Mesure        ⚙️

DÉCISIONS
──────────
Simulations       🎲
Scénarios         📊
Benchmarks        📏
ROI Actions       💹
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- KPI stratégiques (masse salariale, effectif, turnover, ROI)
- Projections 12/24 mois
- Performance RH (scorecard)
- Risques majeurs identifiés
- Priorités stratégiques suggérées par IA

**Page "KPI Stratégiques"**
- Tableau de bord détaillé indicateurs clés
- Évolutions temporelles
- Comparaisons inter-départements
- Alertes seuils

**Page "Projections"**
- Modèles prédictifs effectifs
- Simulations masse salariale
- Impacts décisions stratégiques
- Sensibilité scénarios

**Page "Masse Salariale"**
- Analyse détaillée coûts RH
- Répartition par département/poste
- Évolution historique
- Projections et optimisations

**Page "Effectifs"**
- Pyramide des âges
- Répartition géographique
- Évolution par métier
- Besoins futurs

**Page "Turnover"**
- Analyse causes départs
- Coûts turnover
- Comparaisons sectorielles
- Plans rétention

**Page "COMEX"**
- Rapports exécutifs prêts à présenter
- Slides automatisés
- Synthèses décisionnelles
- Exports PowerPoint

**Page "Simulations"**
- Scénarios croissance/réduction
- Impact décisions RH
- Analyses coûts/bénéfices
- Aide à la décision

**Assistant IA Direction**
- Analyses stratégiques complexes
- Recommandations décisionnelles
- Préparation rapports COMEX
- Veille RH

---

## 5️⃣ Portail Admin (Admin Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Red/Orange (#E53E3E)
- **Icon** : 🔧 Settings

### 📊 Dashboard "Supervision Système"

```
┌─────────────────────────────────────────────────────┐
│  Administration Système                             │
│  [Date] | [Statut plateforme]                       │
└─────────────────────────────────────────────────────┘

┌─────────┬─────────┬─────────┬─────────┬────────────┐
│Users    │Sessions │Alertes  │Tentatives│Incidents   │
│  248    │   142   │   15    │   47     │     2      │
│ +3 mois │  actives│  🔴 3   │ refusées │  🟠 ouverts│
└─────────┴─────────┴─────────┴─────────┴────────────┘

┌─────────────────────────────────────────────────────┐
│  🚨 Alertes Sécurité Critiques                      │
│  🔴 User #2847 - 5 tentatives accès salaires       │
│      Timestamp: 14:32 | IP: 192.168.1.45           │
│      → ACTION: Compte suspendu - Investigation     │
│  🟠 Pattern détecté - Requêtes inhabituelles       │
│      User #1523 - 12 requêtes données perso/10min  │
│      → ACTION: Surveillance renforcée              │
│  🟡 Pic connexions inhabituel (18:45-19:00)        │
│      75 connexions vs 12 moyenne                    │
│      → Logs capturés - Analyse en cours            │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Logs Assistant IA   │  Performance Système         │
│  [Chart activité]    │  [Métriques temps réel]      │
│  • 847 requêtes/jour │  • CPU: 42%                  │
│  • 23 refusées       │  • RAM: 68%                  │
│  • 8 redirections RH │  • Latence API: 180ms        │
│  • 0 erreurs         │  • Uptime: 99.97%            │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Audit & Conformité                                 │
│  • Dernière sauvegarde : il y a 2h                 │
│  • RGPD Compliance : ✅ 98%                        │
│  • Logs archivés : 90 jours                        │
│  • Prochain audit : 15 jours                       │
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Dashboard         🖥️
──────────
Supervision       ⭐
Alertes           🚨
Monitoring        📡

SÉCURITÉ
──────────
Logs              📜
Tentatives        🔒
Incidents         ⚠️
Audits            🔍

UTILISATEURS
──────────
Comptes           👤
Rôles             🎭
Permissions       🔐
Sessions          🔗

SYSTÈME
──────────
Configuration     ⚙️
Base de Données   💾
Intégrations      🔌
Sauvegardes       💿

CONFORMITÉ
──────────
RGPD              🛡️
Journaux          📖
Rapports          📋
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- Métriques système en temps réel
- Alertes sécurité critiques
- Logs assistant IA
- Performance plateforme
- Statut conformité

**Page "Alertes"**
- Flux alertes en temps réel
- Classification par gravité
- Filtres (type, user, période)
- Actions rapides
- Historique résolutions

**Page "Monitoring"**
- Graphiques performance (CPU, RAM, latence)
- Nombre requêtes/seconde
- Taux erreurs
- Disponibilité services

**Page "Logs"**
- Logs système complets
- Filtres avancés
- Recherche full-text
- Export pour analyse
- Rétention 90 jours

**Page "Tentatives"**
- Liste tentatives accès refusées
- Détails par utilisateur
- Patterns suspects détectés
- Géolocalisation IP
- Blocages automatiques

**Page "Incidents"**
- Incidents ouverts/résolus
- Workflow investigation
- Traçabilité actions
- Post-mortem

**Page "Comptes"**
- Gestion 248 comptes utilisateurs
- Activation/désactivation
- Réinitialisation mots de passe
- Historique connexions

**Page "Rôles"**
- 6 rôles : Collaborateur, Manager, RH, Direction, Admin, QVT
- Configuration permissions
- Matrice accès
- Modifications auditées

**Page "Configuration"**
- Paramètres système
- Règles métier
- Seuils alertes
- Workflows automatisés

**Page "RGPD"**
- Dashboard conformité
- Droits d'accès/suppression
- Consentements
- Rapports DPO

**Assistant IA Admin**
- Diagnostic problèmes
- Suggestions optimisations
- Aide configuration
- Analyse logs

---

## 6️⃣ Portail QVT (Workplace Quality Portal)

### 🎨 Identité visuelle
- **Accent secondaire** : Vert bien-être (#065F46)
- **Icon** : 🏥 Health

### 📊 Dashboard "Santé & Bien-être"

```
┌─────────────────────────────────────────────────────┐
│  Qualité de Vie au Travail                          │
│  [Période] | [Population suivie]                    │
└─────────────────────────────────────────────────────┘

┌─────────┬─────────┬─────────┬─────────┬────────────┐
│Absentéis│Arrêts   │Engage.  │Risques  │Situations  │
│  4.8%   │   8     │  4.2/5  │Burnout  │à Risque    │
│ -0.5 pts│ longue  │ Stable  │   3     │    12      │
│         │ durée   │         │⚠️ Urgent│   🟠 Suivi │
└─────────┴─────────┴─────────┴─────────┴────────────┘

┌─────────────────────────────────────────────────────┐
│  🚨 Situations Prioritaires                         │
│  🔴 Engineering - 3 risques burnout détectés       │
│      Causes : Charge travail élevée (75h/sem moy)  │
│      → ACTION : Audit charge + formation managers  │
│  🟠 Finance - Absentéisme +40% vs trim. dernier    │
│      12 arrêts maladie dont 3 longue durée         │
│      → ACTION : Entretiens individuels + suivi     │
│  🟡 Marketing - Score engagement en baisse         │
│      4.5 → 3.8 en 3 mois                           │
│      → ACTION : Enquête ciblée + actions correc.   │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────┐
│  Tendances Santé     │  Actions Préventives         │
│  [Chart évolution]   │  [Timeline actions]          │
│  • Absences maladie  │  • Formation stress (Mars)   │
│  • Arrêts longue dur.│  • Télétravail étendu (Avr)  │
│  • Accidents travail │  • Programme sport (Mai)     │
│  • Consultations PSY │  • Soutien PSY gratuit (Jun) │
└──────────────────────┴──────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Analyses & Recommandations IA                      │
│  • Corrélation charge/absentéisme : r=0.78 (forte) │
│  • Département à surveiller : Engineering, Finance  │
│  • Actions suggérées :                              │
│    1. Audit charge Engineering (urgent)            │
│    2. Renforcer soutien PSY (3 mois)               │
│    3. Formation managers bien-être (trim. prochain)│
└─────────────────────────────────────────────────────┘
```

### 🧭 Navigation Sidebar

```
HUMAI

Dashboard         🏥
──────────
Vue QVT           ⭐
Alertes Santé     🚨
Tendances         📈

INDICATEURS
──────────
Absentéisme       📅
Engagement        💚
Risques PSY       🧠
Accidents         ⚠️

PRÉVENTION
──────────
Situations        👥
Actions           ✅
Programmes        🎯
Formations        🎓

ANALYSES
──────────
Corrélations      🔗
Par Département   🏢
Évolutions        📊
Benchmarks        📏

RESSOURCES
──────────
Support PSY       💬
Médecine Travail  🩺
Documentation     📚
```

### ⚙️ Fonctionnalités

**Page "Dashboard"**
- KPI bien-être globaux (anonymisés)
- Situations prioritaires
- Tendances santé
- Actions préventives en cours
- Recommandations IA

**Page "Alertes Santé"**
- Risques burnout détectés
- Absentéisme inhabituel
- Signaux faibles désengagement
- Charge excessive
- Classement par urgence

**Page "Tendances"**
- Évolution indicateurs QVT
- Comparaisons temporelles
- Identification patterns
- Projections

**Page "Absentéisme"**
- Taux global et par département
- Causes (maladie, accident, autre)
- Arrêts longue durée
- Coûts estimés

**Page "Engagement"**
- Score engagement moyen
- Évolution par département
- Enquêtes satisfaction
- eNPS

**Page "Risques PSY"**
- Dashboard risques psychosociaux
- Situations identifiées
- Niveau de criticité
- Plans d'intervention

**Page "Situations"**
- 12 situations à risque
- Détails anonymisés
- Causes identifiées
- Actions recommandées
- Suivi interventions

**Page "Actions"**
- Plans d'action préventifs
- Programmes bien-être
- Formations
- Suivi efficacité

**Page "Corrélations"**
- Analyses statistiques
- Charge ↔ Absentéisme
- Engagement ↔ Turnover
- Insights actionnables

**Page "Support PSY"**
- Ressources disponibles
- Consultations proposées
- Statistiques utilisation (anonymisées)

**Assistant IA QVT**
- Analyses bien-être
- Recommandations préventives
- Suggestions actions ciblées

---

## 🔄 Navigation Inter-Portails

### Scénarios de basculement

**Cas 1 : Manager → RH**
- Manager identifie situation critique dans son équipe
- Bouton "Escalader vers RH" dans page Alertes
- Crée ticket RH automatique avec contexte

**Cas 2 : RH → Admin**
- RH détecte tentative accès suspect
- Bouton "Signaler à Admin" dans Alertes
- Notification immédiate Admin + logs

**Cas 3 : Direction → RH**
- Direction veut détails d'un KPI
- Lien "Voir détails RH" sur widget Dashboard
- Ouvre vue RH filtrée sur le sujet

**Cas 4 : Collaborateur → Manager**
- Collaborateur veut contacter son manager
- Bouton "Contacter Manager" dans Mon Équipe
- Ouvre chat IA ou email pré-rempli

---

## 🎨 Différenciation Visuelle des Portails

### Codes couleur secondaires
```javascript
const PORTAL_COLORS = {
  employee:   '#3ECFBA',  // Teal clair
  manager:    '#1A6B7A',  // Navy-Teal blend
  hr:         '#0FA88A',  // Teal pro
  executive:  '#1A4B6E',  // Navy exec
  admin:      '#E53E3E',  // Red alert
  qvt:        '#065F46',  // Green wellness
};
```

### Indicateurs visuels
- **Badge rôle** dans header (couleur selon portail)
- **Accent sidebar** : ligne gauche items actifs
- **Icons personnalisés** : cohérents avec rôle
- **Wording adapté** : "Mon Équipe" vs "Employés" vs "Population"

---

## 📱 Responsive & Mobile

### Priorisation Mobile par portail

**Collaborateur (haute priorité)**
- Dashboard simplifié
- Actions rapides
- Assistant IA plein écran

**Manager (priorité moyenne)**
- Alertes en top
- Liste équipe
- Actions essentielles

**RH/Direction/Admin/QVT (desktop priority)**
- Navigation complète desktop
- Mobile : vues essentielles uniquement

---

## 🚀 Implémentation Technique

### Structure fichiers suggérée
```
src/app/components/portals/
├── EmployeePortal/
│   ├── EmployeeDashboard.tsx
│   ├── MyLeaves.tsx
│   ├── MyDocuments.tsx
│   └── MyRequests.tsx
├── ManagerPortal/
│   ├── ManagerDashboard.tsx
│   ├── TeamAlerts.tsx
│   ├── TeamPerformance.tsx
│   └── TeamList.tsx
├── HRPortal/
│   ├── HRDashboard.tsx
│   ├── HRAlerts.tsx
│   ├── EmployeeManagement.tsx
│   ├── OnboardingWorkflows.tsx
│   └── OffboardingWorkflows.tsx
├── ExecutivePortal/
│   ├── ExecutiveDashboard.tsx
│   ├── StrategicKPIs.tsx
│   ├── Projections.tsx
│   └── COMEXReports.tsx
├── AdminPortal/
│   ├── AdminDashboard.tsx
│   ├── SecurityAlerts.tsx
│   ├── UserManagement.tsx
│   └── SystemLogs.tsx
└── QVTPortal/
    ├── QVTDashboard.tsx
    ├── WellnessAlerts.tsx
    ├── AbsenteeismAnalysis.tsx
    └── PreventiveActions.tsx
```

### Routing
```typescript
// App.tsx - Router selon rôle
const getPortalComponent = (role: UserRole) => {
  switch(role) {
    case 'employee':   return <EmployeePortal />;
    case 'manager':    return <ManagerPortal />;
    case 'hr':         return <HRPortal />;
    case 'executive':  return <ExecutivePortal />;
    case 'admin':      return <AdminPortal />;
    case 'qvt':        return <QVTPortal />;
  }
};
```

### Sidebar personnalisée
```typescript
const NAV_ITEMS: Record<UserRole, NavItem[]> = {
  employee: [
    { label: 'Dashboard', icon: '⭐', path: '/dashboard' },
    { label: 'Mes Congés', icon: '📅', path: '/leaves' },
    // ...
  ],
  manager: [
    { label: 'Vue Équipe', icon: '📊', path: '/dashboard' },
    { label: 'Alertes', icon: '🚨', path: '/alerts' },
    // ...
  ],
  // ... autres rôles
};
```

---

## ✅ Checklist Création Portail

Pour chaque nouveau portail :

- [ ] Définir identité visuelle (couleur accent, icon)
- [ ] Concevoir layout dashboard
- [ ] Lister navigation sidebar (items + groupes)
- [ ] Spécifier toutes les pages
- [ ] Définir KPI affichés
- [ ] Configurer permissions données
- [ ] Adapter assistant IA au contexte
- [ ] Créer composants dédiés
- [ ] Implémenter routing
- [ ] Tester avec données réalistes
- [ ] Valider responsive mobile
- [ ] Documenter fonctionnalités

---

**Fin de l'architecture des portails**

Chaque utilisateur HUMAI dispose maintenant d'un **espace personnalisé optimisé** pour son rôle, avec les bonnes informations, au bon niveau de détail, et les actions adaptées à ses responsabilités.
