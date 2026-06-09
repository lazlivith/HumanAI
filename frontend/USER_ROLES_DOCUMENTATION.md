# HUMAI - Types d'Utilisateurs & Rôles

## 📋 Vue d'ensemble

Basé sur le cahier des charges YDAYS 2026, la plateforme HUMAI s'adresse à **6 profils d'utilisateurs distincts**, chacun ayant des besoins, permissions et fonctionnalités spécifiques.

---

## 👥 Les 6 Profils Utilisateurs

### 1. 👤 Collaborateurs (Employees)
**Rôle**: Utilisateurs finaux
**Niveau d'accès**: Restreint (données personnelles uniquement)

#### Besoins
- Réponses rapides et fiables aux questions RH
- Accès 24/7 aux informations administratives
- Autonomie dans les démarches RH courantes
- Réduction du temps d'attente pour les réponses

#### Questions typiques
- "Combien de jours de congé me reste-t-il ?"
- "Comment faire une demande de mobilité interne ?"
- "Quels sont mes avantages sociaux ?"
- "Quelle est la procédure pour un arrêt maladie ?"
- "Où trouver mon bulletin de paie ?"
- "Qui est mon référent RH ?"

#### Fonctionnalités accessibles

**Assistant IA RH conversationnel**
- Réponse instantanée aux questions courantes (congés, absences, paie, mobilité, procédures)
- Interface web simple, disponible 24/7
- Réponses basées sur documents RH validés (politique RH, conventions, guides internes)
- Redirection automatique vers un référent RH pour demandes sensibles
- Refus contrôlé si demande hors périmètre d'autorisation

**Génération automatique de documents**
- Attestations employeur
- Formulaires de demande (congés, mobilité, formation)
- Demandes internes
- Synthèses RH personnelles
- Préremplissage intelligent depuis données autorisées
- Historique des documents générés

**Parcours d'onboarding personnalisé** (nouveaux arrivants)
- Calendrier d'intégration structuré (30 jours)
- Synthèse des manuels internes et feuilles de route métier
- Recommandation de formations
- Liste des interlocuteurs clés
- Documents à lire et actions à effectuer
- Suivi d'avancement + alertes si étape non réalisée

#### Permissions
- ✅ Accès à leurs propres données RH
- ✅ Consultation de leur historique de congés/absences
- ✅ Génération de documents personnels
- ✅ Accès aux politiques RH générales
- ❌ Pas d'accès aux données d'autres collaborateurs
- ❌ Pas d'accès aux KPI globaux
- ❌ Pas d'accès aux données sensibles (salaires autres employés)

#### Expérience améliorée
- Accès centralisé aux informations RH essentielles
- Réduction du temps d'attente pour réponses administratives
- Meilleure compréhension des processus internes
- Renforcement de l'autonomie dans démarches RH courantes

---

### 2. 👔 Managers (Responsables d'équipe)
**Rôle**: Utilisateurs opérationnels
**Niveau d'accès**: Équipe sous responsabilité

#### Besoins
- Indicateurs clairs pour suivre l'engagement de leurs équipes
- Détection précoce des risques (départ, désengagement)
- Suivi de l'absentéisme et charge de travail
- Identification des besoins d'accompagnement
- Prise de décision éclairée pour le management

#### Fonctionnalités accessibles

**Dashboard managérial**
- KPI de l'équipe : engagement, absentéisme, charge de travail
- Visualisation par collaborateur ou vue d'ensemble
- Tendances et évolutions temporelles
- Comparaison avec moyennes départementales

**Alertes préventives**
- Détection de signaux faibles de désengagement
- Risques de burnout détectés
- Alertes sur absentéisme inhabituel
- Risques de départ identifiés par l'IA
- Notification en cas de charge de travail excessive

**Plans d'action recommandés**
- Entretien de suivi suggéré
- Ajustement de charge recommandé
- Accompagnement managérial proposé
- Formations ciblées
- Mobilité interne envisageable

**Suivi des performances**
- Scores de performance des membres de l'équipe
- Progression des objectifs
- Historique des entretiens annuels
- Calendrier des reviews

#### Permissions
- ✅ Accès aux données de leur équipe directe
- ✅ Consultation des KPI d'équipe
- ✅ Vue sur alertes concernant leurs collaborateurs
- ✅ Historique des absences de l'équipe
- ✅ Planning et disponibilité de l'équipe
- ❌ Pas d'accès aux données salaires détaillées
- ❌ Pas d'accès aux équipes d'autres managers
- ❌ Pas d'accès aux données médicales sensibles

#### Indicateurs clés suivis
- Taux d'engagement équipe
- Taux d'absentéisme
- Charge de travail moyenne
- Nombre de risques détectés
- Taux de turnover équipe
- Progression des objectifs collectifs

---

### 3. 🏢 Équipes RH (HR Teams)
**Rôle**: Utilisateurs administratifs et stratégiques
**Niveau d'accès**: Toutes données RH de l'entreprise

#### Besoins
- Réduction des tâches répétitives
- Automatisation de la génération documentaire
- Fiabilisation des reportings
- Gestion des processus onboarding/offboarding
- Supervision des alertes sensibles
- Priorisation des actions à forte valeur humaine

#### Fonctionnalités accessibles

**Base de données RH interne**
- Centralisation informations collaborateurs, absences, documents, postes, départements
- Alimentation par saisie manuelle, import fichiers, formulaires
- Mise à jour contrôlée par profils autorisés
- Architecture préparée pour future intégration SIRH

**Dashboard RH automatisé et prédictif**
- KPI RH : effectifs, absentéisme, turnover, mobilité, pyramide âges, masse salariale, engagement
- Mise à jour automatique depuis base interne
- Visualisation par entité, département, site, équipe
- Centralisation source unique (fin des fichiers dispersés)

**Analyse prédictive et scénarios**
- Projection évolution effectifs et masse salariale
- Simulation scénarios (turnover, absentéisme, mobilité)
- Détection écarts inhabituels
- Rapports conformes et auditables

**Détection précoce désengagement**
- Croisement données : absentéisme, arrêts maladie, enquêtes engagement, entretiens annuels, charge travail, feedbacks
- Identification signaux faibles (burnout, désengagement, départ)
- Génération alertes préventives
- Proposition plans d'action ciblés

**Analyse comportements avec assistant IA**
- Collecte logs interactions IA
- Détection anomalies et comportements inhabituels
- Demandes répétées d'accès données confidentielles
- Tentatives contournement règles
- Indicateurs de sécurité
- Espace supervision pour administrateurs

**Alertes RH et administrateurs**
- Déclenchement si tentative accès info non autorisée
- Notification selon niveau gravité (simple, répétée, critique, fuite)
- Historique alertes pour audits et investigations

**Workflows agentiques d'offboarding**
- Formulaires sortie personnalisés (poste, ancienneté, contexte)
- Suivi automatique étapes conformité : restitution matériel, révocation accès, clôture admin, transfert responsabilités
- Capitalisation connaissances avant départ
- Synthèse transfert (projets, outils, contacts, procédures)

**Génération automatique documents**
- Contrats, avenants, attestations
- Courriers administratifs
- Synthèses RH
- Rapports de conformité
- Vérification cohérence avant validation
- Historisation

#### Permissions
- ✅ Accès complet base données RH
- ✅ Modification données collaborateurs (contrôlée)
- ✅ Consultation de toutes les alertes
- ✅ Génération rapports globaux
- ✅ Configuration workflows onboarding/offboarding
- ✅ Accès logs assistant IA
- ✅ Gestion demandes sensibles

#### Pilotage RH augmenté
- Centralisation données dans interface unique
- Priorisation automatique situations nécessitant intervention humaine
- Aide à la décision
- Libération temps pour missions stratégiques

---

### 4. 📊 Direction Générale & Contrôle de Gestion
**Rôle**: Utilisateurs décisionnels
**Niveau d'accès**: Vue consolidée et stratégique

#### Besoins
- Tableaux de bord consolidés en temps réel
- Indicateurs actualisés pour pilotage stratégique
- Projections masse salariale et effectifs
- Vue d'ensemble turnover, absentéisme, mobilité
- Aide à la décision pour orientations RH

#### Fonctionnalités accessibles

**Dashboard exécutif**
- KPI stratégiques : effectifs totaux, masse salariale, turnover global, absentéisme, mobilité interne
- Tendances long terme
- Comparaisons inter-départements
- Pyramide des âges
- Répartition géographique

**Projections et simulations**
- Évolution prévisionnelle effectifs
- Projections masse salariale (6-12-24 mois)
- Scénarios de croissance/réduction
- Impact mobilité interne
- Coûts prévisionnels recrutement/formation

**Analyses stratégiques**
- Taux de rétention par département/poste
- Analyse causes turnover
- ROI actions RH
- Benchmarks internes
- Indicateurs conformité

**Rapports exécutifs**
- Synthèses mensuelles/trimestrielles
- Rapports conformes pour COMEX
- Exports pour audits
- Présentations automatisées

#### Permissions
- ✅ Vue consolidée toutes données (anonymisées si besoin)
- ✅ Accès projections et simulations
- ✅ Consultation KPI stratégiques
- ✅ Export rapports exécutifs
- ❌ Pas d'accès données individuelles détaillées (sauf DRH)
- ❌ Pas de modification base de données

#### Indicateurs clés suivis
- Masse salariale totale
- Effectif total par catégorie
- Taux de turnover global
- Taux d'absentéisme moyen
- Coût moyen recrutement
- Délai moyen pourvoi poste
- Budget formation consommé
- ROI actions RH

---

### 5. 🔧 Administrateurs de la Plateforme
**Rôle**: Profils techniques responsables sécurité
**Niveau d'accès**: Configuration système et sécurité

#### Besoins
- Configuration accès et gestion rôles
- Suivi des logs techniques
- Surveillance comportements suspects
- Traitement alertes sécurité
- Maintenance intégrité système
- Conformité et auditabilité

#### Fonctionnalités accessibles

**Gestion des accès**
- Configuration rôles utilisateurs (Collaborateur, Manager, RH, Direction, Admin)
- Gestion permissions par rôle
- Activation/désactivation comptes
- Réinitialisation mots de passe
- Gestion authentification

**Supervision sécurité**
- Dashboard alertes sécurité en temps réel
- Logs d'accès et actions réalisées
- Détection comportements suspects avec assistant IA
- Tentatives accès non autorisés
- Requêtes répétées vers données confidentielles
- Tentatives contournement règles

**Système d'alertes intelligent**
- Classification alertes par gravité :
  - Simple anomalie
  - Tentative répétée
  - Tentative critique
  - Risque fuite données
- Notification administrateurs/RH autorisés
- Historique alertes pour audits
- Tableaux de bord événements critiques

**Analyse logs assistant IA**
- Fréquence tentatives accès refusées
- Requêtes sensibles détectées
- Patterns d'utilisation anormaux
- Statistiques sécurité globales
- Sans exposer contenu personnel conversations

**Audit et conformité**
- Journalisation complète activités
- Historique modifications base données
- Traçabilité actions critiques
- Rapports conformité RGPD
- Documentation finalités traitement
- Gestion droits accès, suppression, anonymisation

**Configuration plateforme**
- Paramétrage workflows
- Configuration règles métier
- Gestion intégrations externes
- Sauvegarde et restauration
- Monitoring performance

#### Permissions
- ✅ Accès complet configuration système
- ✅ Gestion tous rôles et permissions
- ✅ Consultation tous logs et alertes
- ✅ Modification paramètres sécurité
- ✅ Accès historique complet
- ✅ Export données pour audits
- ⚠️ Accès données personnelles limitée (sauf investigation)

#### Indicateurs de sécurité suivis
- Nombre tentatives accès refusées/jour
- Nombre alertes critiques/semaine
- Taux requêtes sensibles
- Nombre comptes suspects
- Temps moyen résolution incident
- Taux conformité audits

---

### 6. 🏥 Médecine du Travail & Responsables QVT
**Rôle**: Parties prenantes prévention risques psychosociaux
**Niveau d'accès**: Données santé/bien-être (anonymisées ou autorisées)

#### Besoins
- Prévention risques psychosociaux
- Détection précoce situations désengagement
- Amélioration qualité vie au travail
- Identification signaux faibles burnout
- Suivi indicateurs santé globaux
- Propositions actions préventives

#### Fonctionnalités accessibles

**Dashboard QVT**
- Indicateurs bien-être globaux (anonymisés)
- Taux absentéisme par cause
- Arrêts maladie longue durée
- Enquêtes satisfaction/engagement
- Signaux faibles détectés par IA

**Alertes préventives santé**
- Situations à risque burnout
- Charge de travail excessive détectée
- Absentéisme répété inhabituel
- Feedback négatifs récurrents
- Stress élevé identifié

**Analyses tendances**
- Évolution indicateurs QVT dans le temps
- Comparaison inter-services
- Corrélations charge/absentéisme
- Impact actions préventives
- Zones à risque identifiées

**Recommandations**
- Actions préventives suggérées
- Campagnes sensibilisation ciblées
- Besoins formation détectés
- Ajustements organisationnels proposés

#### Permissions
- ✅ Accès données santé/bien-être (anonymisées en général)
- ✅ Alertes désengagement/burnout
- ✅ Statistiques absentéisme par cause
- ✅ Enquêtes satisfaction
- ✅ Tendances QVT globales
- ⚠️ Accès données individuelles uniquement si autorisé (secret médical)
- ❌ Pas d'accès données salariales
- ❌ Pas de modification base RH

#### Indicateurs clés suivis
- Taux absentéisme global
- Nombre arrêts maladie longue durée
- Score engagement moyen
- Nombre situations à risque détectées
- Taux participation enquêtes bien-être
- Évolution satisfaction au travail

---

## 🔐 Matrice des Permissions

| Fonctionnalité | Collaborateur | Manager | RH | Direction | Admin | QVT |
|----------------|---------------|---------|----|-----------| ------|-----|
| **Données personnelles** | ✅ Soi-même | ✅ Équipe | ✅ Tous | ✅ Consolidé | ⚠️ Audit | ⚠️ Anonymisé |
| **Assistant IA RH** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Génération documents** | ✅ Perso | ✅ Équipe | ✅ Tous | ❌ | ❌ | ❌ |
| **Dashboard KPI** | ❌ | ✅ Équipe | ✅ Tous | ✅ Global | ⚠️ Monitoring | ✅ QVT |
| **Alertes désengagement** | ❌ | ✅ Équipe | ✅ Tous | ❌ | ⚠️ Sécurité | ✅ Prévention |
| **Logs assistant IA** | ❌ | ❌ | ⚠️ Alertes | ❌ | ✅ Complet | ❌ |
| **Gestion rôles** | ❌ | ❌ | ⚠️ Limité | ❌ | ✅ | ❌ |
| **Rapports prédictifs** | ❌ | ⚠️ Équipe | ✅ | ✅ | ❌ | ✅ Santé |
| **Onboarding/Offboarding** | ✅ Soi | ⚠️ Suivi | ✅ Gestion | ❌ | ❌ | ❌ |
| **Modification BDD** | ❌ | ❌ | ✅ | ❌ | ✅ Config | ❌ |

**Légende**:
- ✅ Accès complet
- ⚠️ Accès limité/conditionnel
- ❌ Pas d'accès

---

## 🎯 Principe du Moindre Privilège

Chaque utilisateur a accès **uniquement** aux données strictement nécessaires à son rôle :

### Règles de sécurité
1. **Vérification systématique du rôle** avant toute réponse de l'assistant IA
2. **Refus contrôlé** si demande hors périmètre d'autorisation
3. **Redirection automatique** vers référent RH pour demandes sensibles
4. **Alertes déclenchées** en cas de tentatives répétées d'accès non autorisé
5. **Journalisation** de toutes les interactions sensibles
6. **Anonymisation** des données pour analyses ne nécessitant pas identification

---

## 📈 Cas d'Usage par Profil

### Collaborateur - Sarah, Designer
**Lundi 9h30** : "Combien de jours de congé me reste-t-il ?"
→ Assistant IA répond instantanément : "Vous avez 12 jours de congé restants."

**Mardi 14h** : Génère une attestation employeur pour dossier location
→ Document prérempli, vérifié et disponible en 30 secondes

**Mercredi** : Consulte procédure mobilité interne
→ Guide étape par étape fourni par l'assistant IA

---

### Manager - Thomas, Responsable Engineering
**Lundi matin** : Consulte dashboard équipe
→ Alerte : "Marc a un taux d'absentéisme inhabituel ce mois-ci (+40%)"

**Mardi** : Plan d'action recommandé par l'IA
→ "Planifier entretien de suivi avec Marc pour identifier causes et besoins d'accompagnement"

**Mercredi** : Suivi performance équipe
→ "3 collaborateurs en retard sur objectifs trimestriels - formations suggérées"

---

### RH - Marie, HR Business Partner
**Mardi** : Reçoit alerte de sécurité
→ "Utilisateur X a tenté 5 fois d'accéder à des données salariales hors périmètre"

**Mercredi** : Génère rapport turnover
→ Dashboard automatisé : "Turnover département Sales : 18% (+5 pts vs année dernière)"

**Jeudi** : Lance workflow offboarding
→ Agent IA génère checklist départ pour collaborateur démissionnaire

---

### Direction - Philippe, DRH
**Lundi COMEX** : Présente projections effectifs
→ "Projection +15 ETP sur 12 mois | Impact masse salariale : +1.2M€"

**Mardi** : Analyse causes turnover
→ "Top 3 motifs départ : rémunération (35%), évolution (28%), management (22%)"

---

### Admin - Karim, IT Security
**Lundi** : Dashboard sécurité
→ "47 tentatives accès refusées ce mois | 3 alertes critiques"

**Mardi** : Investigation alerte critique
→ "Utilisateur Y a tenté d'extraire liste complète salaires via assistant IA"
→ Action : Suspension compte + investigation

---

### QVT - Dr. Léa, Médecin du travail
**Mercredi** : Consultation dashboard bien-être
→ "Département Finance : 12 situations à risque burnout détectées"

**Jeudi** : Recommandations préventives
→ "Suggérer audit charge travail + formation gestion stress managers"

---

## 🚀 Évolution des Rôles

### Phase 1 (V1 - MVP)
- Collaborateurs : Assistant IA + Documents
- RH : Dashboard manuel + Alertes basiques
- Admin : Gestion accès simple

### Phase 2 (V2 - 6 mois)
- Managers : Dashboard équipe + Alertes
- RH : Onboarding/Offboarding automatisé
- Direction : Rapports prédictifs

### Phase 3 (V3 - 12 mois)
- Tous profils : Fonctionnalités complètes
- QVT : Dashboard bien-être
- Intégration SIRH externe

---

## 📋 Checklist Implémentation Rôles

Lors de l'ajout d'une nouvelle fonctionnalité :

- [ ] Définir quels profils y ont accès
- [ ] Implémenter vérification rôle côté backend
- [ ] Filtrer données selon périmètre autorisation
- [ ] Masquer UI si fonctionnalité non autorisée
- [ ] Logger accès pour audit
- [ ] Déclencher alerte si tentative non autorisée
- [ ] Tester avec chaque profil utilisateur
- [ ] Documenter permissions dans matrice
- [ ] Vérifier conformité RGPD
- [ ] Former utilisateurs concernés

---

## 🔒 Sécurité & Conformité

### Protection données personnelles
- **Chiffrement** données sensibles au repos et en transit
- **Journalisation** accès et modifications
- **Conservation maîtrisée** selon finalité
- **Séparation** données sensibles dans modules analytiques

### Contrôle accès
- **Authentification** sécurisée compatible standards entreprise
- **Gestion rôles** granulaire (Collaborateur, Manager, RH, Direction, Admin, QVT)
- **Principe moindre privilège** appliqué systématiquement
- **Vérification rôle** avant toute réponse assistant IA

### Audit & traçabilité
- **Logs complets** interactions, consultations, modifications
- **Historique alertes** pour investigations
- **Rapports conformité** RGPD
- **Documentation** finalités traitement et droits d'accès

---

**Fin de la documentation des rôles utilisateurs**

Cette matrice de permissions garantit que chaque utilisateur dispose exactement des accès nécessaires à son rôle, tout en protégeant la confidentialité des données RH sensibles et en respectant la réglementation RGPD.
