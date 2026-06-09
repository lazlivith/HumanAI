# HUMAI - Système de Design & Documentation UI Complète

## 📋 Vue d'ensemble
HUMAI est une plateforme RH complète avec un design system cohérent basé sur une palette navy/teal. L'application combine gestion des employés, recrutement, congés, paie, performance, rapports, paramètres et un assistant IA intégré.

---

## 🎨 Système de Couleurs

### Palette Principale
```javascript
const NC = {
  // Backgrounds & Surfaces
  bg:           '#EDF2F7',    // Fond de page principal (gris-bleu clair)
  card:         '#FFFFFF',    // Cartes et surfaces
  border:       '#E2E8F0',    // Bordures principales
  borderDim:    '#EEF2F6',    // Bordures subtiles/lignes de séparation
  
  // Texte (sur fonds clairs)
  fg:           '#1A2E45',    // Texte principal (navy foncé)
  fgDim:        '#374151',    // Texte secondaire
  muted:        '#6B7A8D',    // Texte tertiaire
  mutedDim:     '#9CA3AF',    // Texte désactivé/placeholder
  
  // Sidebar (gradient foncé)
  sidebarFg:    '#FFFFFF',    // Texte sur sidebar
  sidebarMuted: 'rgba(255,255,255,0.60)',  // Texte secondaire sidebar
  sidebarBorder:'rgba(255,255,255,0.10)',  // Bordures sidebar
  
  // Accents Navy/Teal
  navy:         '#1A4B6E',    // Navy principal
  teal:         '#1A8A7A',    // Teal moyen
  accent:       '#3ECFBA',    // Teal vif (éléments actifs)
  link:         '#0FA88A',    // Liens et actions
  accentBg:     'rgba(62,207,186,0.10)',   // Fond accent transparent
  accentBorder: 'rgba(62,207,186,0.28)',   // Bordure accent
  
  // États & Statuts
  red:          '#991B1B',    // Erreur/critique
  redBg:        '#FEF2F2',    // Fond erreur
  amber:        '#92400E',    // Avertissement
  amberBg:      '#FFFBEB',    // Fond avertissement
  green:        '#065F46',    // Succès
  greenBg:      '#ECFDF5',    // Fond succès
};
```

### Dégradés
```javascript
SIDEBAR_GRADIENT = 'linear-gradient(175deg, #1A4B6E 0%, #1A6B7A 50%, #1A8A7A 100%)'
BTN_GRADIENT     = 'linear-gradient(90deg, #1A4B6E, #0FA88A)'
```

---

## 🔤 Typographie

### Polices
- **Display/Headings**: `'Neue Montreal', 'Clash Display', sans-serif`
- **Body/UI**: `'Inter', sans-serif`

### Hiérarchie
- **Titres de page**: 18px, weight 700, Clash Display
- **Sous-titres**: 14px, weight 600, Clash Display
- **Labels de section**: 12px, weight 600, Clash Display
- **Corps de texte**: 11-13px, weight 400-500, Inter
- **Metriques/KPI**: 32px, weight 700, Clash Display
- **Micro-texte**: 9-10px, weight 400-600, Inter

---

## 🏗️ Architecture de l'Application

### Structure Principale
```
┌─────────────────────────────────────────────────┐
│ LoginPage (split-screen)                        │
│   ├─ Auth Panel (35-40%)                        │
│   └─ Preview Panel (60-65%)                     │
└─────────────────────────────────────────────────┘
              ↓ (après authentification)
┌─────────────────────────────────────────────────┐
│ App Principal                                    │
│ ┌──────────┬────────────────────────────────┐  │
│ │ Sidebar  │ Header                         │  │
│ │ (220px)  ├────────────────────────────────┤  │
│ │          │ Content Area                   │  │
│ │          │                                │  │
│ │          │                                │  │
│ └──────────┴────────────────────────────────┘  │
│                                                  │
│ ┌─────────────────────────┐                    │
│ │ Floating AI Button      │ (bottom-right)     │
│ └─────────────────────────┘                    │
│                                                  │
│ ┌─────────────────────────┐                    │
│ │ AI Drawer (720px)       │ (slide-in right)   │
│ └─────────────────────────┘                    │
└─────────────────────────────────────────────────┘
```

---

## 📄 Page: Login

### Layout
- **Split-screen**: Panneau gauche (auth) 38% / Panneau droit (preview) 62%
- **Auth panel**: fond blanc, padding 48px, centré verticalement
- **Preview panel**: fond #EDF2F7, affiche mockup du dashboard

### Éléments Auth Panel
1. **Logo** (top)
   - Icône: 36×36px, border-radius 8px, gradient navy→teal
   - Texte: "HUM**AI**" (AI en teal accent)
   
2. **Titre de bienvenue**
   - "Welcome Back" - 28px, weight 700, color navy
   - Sous-titre: "Sign in to access your HR workspace" - 13px, muted

3. **Form**
   - **Email Input**: 
     - Label: 12px, weight 500, color #6B7A8D
     - Input: height 44px, border 1.5px #E2E8F0, radius 8px
     - Focus state: border teal #0FA88A + box-shadow rgba(15,168,138,0.12)
   
   - **Password Input**: 
     - Même style que email
     - Bouton "show/hide" à droite (icône œil)
   
   - **Checkbox "Remember me"**: 
     - 16×16px, border-radius 4px
     - Checked: border teal, bg rgba(15,168,138,0.08), checkmark teal
   
   - **Lien "Forgot password"**: 
     - 12px, color teal link, aligné à droite

4. **Bouton Sign In**
   - Height 48px, full width
   - Background: gradient navy→teal
   - Text: white, 14px, weight 600
   - Loading state: spinner + texte "Signing in..."
   - Hover: scale 1.02, shadow enhanced

5. **Footer**
   - Texte: "Don't have an account?" + lien "Sign up"
   - 12px, color muted, lien en teal

### Decorative Elements
- Cercles flous en arrière-plan (top-left, bottom-right)
- Animation fade-in sur tout le panel (initial opacity 0, y: 20)

---

## 🧭 Navigation: Sidebar

### Dimensions
- Width: 220px fixe
- Background: gradient #1A4B6E → #1A6B7A → #1A8A7A (175deg)
- Shadow: 3px 0 20px rgba(26,75,110,0.18)

### Structure (top → bottom)

1. **Logo Section** (height 56px)
   - Indicateur pulse: 5×22px, teal accent, border-radius 3px
   - Logo text: "HUM**AI**" (AI en teal)
   - Border-bottom: 1px solid sidebarBorder

2. **Role Badge** (compact)
   - Texte: "Admin — HR Department"
   - 9px uppercase, letterspacing 0.12em, color sidebarMuted
   - Border-bottom: 1px solid sidebarBorder

3. **Navigation** (scrollable)
   - **Items sans groupe**:
     - Dashboard (top-level)
   
   - **Groupe PEOPLE**:
     - Employees
     - Recruitment
     - Leave
   
   - **Groupe OPERATIONS**:
     - Payroll
     - Performance
   
   - **Groupe SYSTEM**:
     - Reports
     - Settings

   **Nav Item (inactif)**:
   - Height 33px, padding 0 10px
   - Dot: 5×5px, bg rgba(255,255,255,0.28)
   - Text: 12px, color rgba(255,255,255,0.65)
   - Hover: bg rgba(255,255,255,0.07)

   **Nav Item (actif)**:
   - Background: rgba(62,207,186,0.15)
   - Border-left: 2px teal accent
   - Dot: teal accent
   - Text: weight 600, color white
   - Indicator dot (right): 5×5px teal, opacity 0.7

   **Nav Group Label**:
   - 9px uppercase, letterspacing 0.16em
   - Color: rgba(255,255,255,0.40)
   - Padding: 12px 10px 5px

4. **User Strip** (bottom, height ~62px)
   - Border-top: 1px solid sidebarBorder
   - Avatar: 34×34px circle, border 1.5px white/22%, initials "AD"
   - Name: "Admin User" - 12px, white
   - Email: "hr@company.com" - 10px, sidebarMuted
   - Dropdown icon: triangle down, rgba(255,255,255,0.35)

---

## 🎯 Header (Top Bar)

### Dimensions
- Height: 56px fixe
- Background: white
- Border-bottom: 1px solid #E2E8F0
- Shadow: 0 1px 0 rgba(0,0,0,0.04)

### Layout (flex, space-between)

**Left Side - Breadcrumb**:
- "HUMAI / Dashboard" - 10px uppercase, mutedDim
- Page title: 14px, weight 600, Clash Display, navy

**Right Side - Controls**:
1. **Search Bar**:
   - Width 176px, height 32px
   - Border: 1px #E2E8F0, bg #F1F5F9
   - Icon: circle 11×11px + texte "Search..."

2. **Notification Button**:
   - 32×32px, bg #F1F5F9, border 1px
   - Icon: square 13×13px
   - Badge: 6×6px teal accent (top-right)

3. **Settings Button**:
   - 32×32px, même style
   - Icon: circle 13×13px

4. **User Menu**:
   - Border-left separator
   - Avatar: 30×30px, gradient navy→teal
   - Name: "Admin" - 11px, weight 500
   - Role: "HR Manager" - 9px, muted

---

## 📊 Dashboard Principal (Overview)

### Layout Vertical (padding 24px, gap 20px)

**1. Notification Banner**
- NCCard avec border-left 3px teal
- Pulse indicator: 8×8px teal
- Message + deux boutons (Review Now, Dismiss)

**2. KPI Row (4 colonnes égales)**
Chaque carte contient:
- Label: 10px uppercase, muted, letterspacing 0.08em
- Value: 32px, weight 700, Clash Display, navy
- Subtitle: 10px, mutedDim
- Mini chart: 10 barres verticales (height proportionnelle)
  - Dernière barre: teal accent
  - Autres: accentBg

KPIs:
- Total Employees: 248 (+3 this month)
- Active Employees: 231 (93.1% retention)
- On Leave Today: 12 (4.8% of workforce)
- Open Positions: 17 (5 pending interviews)

**3. Charts Row (2fr 1fr grid)**

**Left - Headcount Trend (NCCard, padding 20)**:
- Section label: "Headcount Trend"
- Line chart avec:
  - Y-axis: 100-300 (labels 9px, mutedDim)
  - X-axis: Jan-Oct (labels 9px, mutedDim)
  - Grid: 1px borderDim
  - Line: 2px teal accent, points avec border
  - Fill: gradient teal (20% → 0% opacity)

**Right - Dept Distribution (NCCard, padding 20)**:
- Section label: "Dept. Distribution"
- Donut chart:
  - Center: "248" (18px weight 700) + "total" (8px uppercase)
  - Segments: Engineering 35%, Marketing 20%, Sales 18%, Design 15%, Ops 12%
  - Colors: navy, teal variants + gray
- Legend below: dot + name + count

**4. Bottom Row (2 colonnes égales)**

**Left - Recent Activity**:
- 5 items avec timestamp (10px, mutedDim) + description (11px, fgDim)
- Border-left 2px accentBorder
- "View all" button en bas

**Right - Upcoming Events**:
- 5 items avec:
  - Date badge: border accentBorder, bg accentBg, text teal
  - Event label: 11px, muted
- Border-bottom entre items (sauf dernier)

---

## 👥 Dashboard: Employees

### Header Section
- Titre: "Employee Management" (18px, weight 700)
- Sous-titre: "Manage employee records, profiles, and organizational structure"
- Boutons: "Import CSV" + "+ Add Employee" (primary)

### Stats Row (4 colonnes)
- Total Employees: 248 (+3 this month)
- Active: 231 (93.1%)
- On Leave: 12 (4.8%)
- Avg. Tenure: 2.4 yrs (+0.3 YoY)

### Employee Table (NCCard)

**Controls Bar**:
- Label: "Employee Directory" + badge "248 total"
- Search: 200px width, "Search employees..."
- Filters: Department, Status, Role (dropdown buttons)

**Table Columns**:
1. Checkbox (14×14px)
2. ID (11px, mutedDim)
3. Employee:
   - Avatar: 34×34px circle, initials, accentBg
   - Name: 11px, weight 500, fg
   - Manager: 10px, mutedDim
4. Department (11px, muted)
5. Role (11px, muted)
6. Contact:
   - Email: 11px, fgDim
   - Phone: 10px, mutedDim
7. Joined (11px, muted)
8. Status: Badge (Active/On Leave/Inactive)
9. Actions: Kebab menu (28×28px)

**Row Behavior**:
- Hover: bg #F9FAFB
- Border-bottom: 1px borderDim (sauf dernière ligne)

### Status Badges
- **Active**: bg greenBg, border green, text green
- **On Leave**: bg amberBg, border amber, text amber
- **Inactive**: bg redBg, border red, text red
- Style: padding 4px 10px, border-radius 999px, 10px weight 600

---

## 📝 Dashboard: Recruitment

### Header
- Titre: "Recruitment Pipeline"
- Sous-titre: "Track open positions, candidates, and hiring progress"
- Boutons: "Export Report" + "+ Create Job Posting"

### Stats Row (5 colonnes)
- Open Positions: 17
- Total Applicants: 187
- In Review: 43
- Interviews Scheduled: 12
- Offers Pending: 3

### Job Postings Table

**Columns**:
- Job ID
- Position (title)
- Department
- Type (Full-time/Contract)
- Posted (date)
- Applicants (count)
- Status (Active/Reviewing badge)
- Actions

**Row Data Example**:
- JOB-301 | Senior Frontend Engineer | Engineering | Full-time | 2024-05-15 | 42 | Active

### Candidates Section
Liste de cartes avec:
- Name + avatar
- Position applied for
- Current stage (Phone Screen/Technical Test/Final Round/Offer Sent)
- Score: barre de progression (0-100)
- Applied date

**Stage Pills**:
- Different colors par étape
- Border-radius 999px, padding 4px 10px

---

## 🏖️ Dashboard: Leave

### Stats Row (4 colonnes)
- Total Leave Days: 1,247
- Pending Requests: 8
- Approved This Month: 34
- Team Availability: 94.2%

### Calendar View
- Grille mensuelle avec jours
- Indicators pour congés:
  - Full day: fond teal
  - Half day: fond teal/50%
  - Pending: border orange dashed

### Leave Requests Table

**Columns**:
- Employee (avatar + name)
- Type (Vacation/Sick/Personal)
- Start Date
- End Date
- Days (count)
- Status (Pending/Approved/Rejected)
- Actions

**Type Badges**:
- Vacation: blue bg/border
- Sick: red bg/border
- Personal: amber bg/border

---

## 💰 Dashboard: Payroll

### Stats Row (5 colonnes)
- Total Payroll: $2.4M
- Employees Paid: 231
- Avg. Salary: $10.4K
- Next Cycle: Jun 15
- Pending Approvals: 3

### Payroll Cycle Section
- Timeline horizontal avec étapes:
  1. Timesheet Review (complete)
  2. Approval (current)
  3. Processing (pending)
  4. Distribution (pending)

### Payroll Table

**Columns**:
- Employee
- Base Salary
- Bonuses
- Deductions
- Net Pay
- Pay Date
- Status
- Actions

**Status Types**:
- Processed: green
- Pending: amber
- Failed: red
- On Hold: gray

---

## 🎯 Dashboard: Performance

### Stats Row (4 colonnes)
- Avg. Performance Score: 4.2/5
- Reviews Completed: 89%
- Goals on Track: 156
- Overdue Reviews: 4

### Review Cycle Timeline
Barre de progression avec jalons:
- Q1 Reviews (complete)
- Q2 Self-Assessment (current)
- Q2 Manager Review (upcoming)
- Q2 Calibration (upcoming)

### Performance Table

**Columns**:
- Employee
- Department
- Last Review (date)
- Score (1-5 avec étoiles)
- Goals Progress (barre %)
- Next Review
- Actions

**Score Display**:
- 5 étoiles (filled/outline)
- Color: 4.5-5 = green, 3.5-4.4 = teal, <3.5 = amber

---

## 📈 Dashboard: Reports

### Quick Stats (4 colonnes)
- Total Reports: 142
- Scheduled: 23
- Last Run: 2 hours ago
- Favorites: 8

### Report Categories Grid (3 colonnes)

**Chaque carte de catégorie**:
- Icon (28×28px, accentBg)
- Title: 12px weight 600
- Description: 10px muted
- Count: "X reports"
- Border: 1px, hover → border teal

Categories:
- **People Analytics**: headcount, turnover, demographics
- **Financial**: payroll, budgets, expenses
- **Time & Attendance**: hours, overtime, absences
- **Recruitment**: pipeline, time-to-hire, source effectiveness
- **Performance**: ratings distribution, goal completion
- **Compliance**: certifications, training, audits

### Recent Reports Table

**Columns**:
- Report Name
- Category
- Generated By
- Date
- Format (PDF/Excel/CSV icon)
- Actions (Download, Schedule, Share)

---

## ⚙️ Dashboard: Settings

### Layout: Sidebar + Content (2-col grid 240px / 1fr)

**Settings Sidebar**:
- Categories avec icons:
  - General
  - Company Profile
  - Users & Permissions
  - Integrations
  - Notifications
  - Security
  - Billing
  - API

**Content Area**:
Varie selon section active

**General Settings Example**:
- Language: dropdown (English selected)
- Time Zone: dropdown (UTC-5)
- Date Format: radio buttons (MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)
- Currency: dropdown (USD)

**Company Profile**:
- Company Name: input
- Logo Upload: drag-drop zone
- Industry: dropdown
- Size: radio buttons (1-50, 51-200, 201-500, 500+)
- Website: input

**Users & Permissions**:
- Table avec columns:
  - User
  - Email
  - Role (Admin/Manager/Employee)
  - Status
  - Last Active
  - Actions (Edit, Deactivate)

**Notification Settings**:
- Toggles pour:
  - Email notifications
  - Slack notifications
  - Leave request alerts
  - Payroll reminders
  - Performance review deadlines
  - System updates

---

## 🤖 AI Chat Assistant

### Floating Button
- Position: fixed, bottom 28px, right 28px
- Size: 54×54px circle
- Background: gradient navy→teal
- Shadow: 0 4px 20px rgba(26,75,110,0.30)
- Icon: "✦ AI" (12px, weight 700, white)
- Hover: scale 1.08

### AI Drawer (slide from right)
- Width: 720px
- Background: white
- Border-left: 1px
- Shadow: -8px 0 32px rgba(26,75,110,0.12)
- Animation: spring (damping 30, stiffness 300)

**Drawer Header**:
- Height: 56px
- Background: gradient navy→teal
- Icon + Title: "HUMAI AI Assistant"
- Subtitle: "HR Intelligence · Always available"
- Close button (X) - 30×30px

**Chat Area**:
- Message bubbles:
  - **User**: align-right, bg #F1F5F9, text navy, max-width 70%
  - **AI**: align-left, bg accentBg, border 1px accentBorder, text navy
- Timestamp: 9px, mutedDim
- Avatar: AI = gradient circle avec "✦", User = initials

**Input Bar** (bottom):
- Height: 64px
- Border-top: 1px
- Textarea: flex 1, placeholder "Ask HUMAI anything..."
- Send button: 40×40px, gradient, icon arrow
- Attach button: 32×32px, paperclip icon

**AI Features Display**:
- Quick actions chips:
  - "Summarize leave requests"
  - "Show top performers"
  - "Payroll status"
  - "Schedule interview"
- Keyboard shortcut: Cmd+K to open

---

## 🎨 Composants Réutilisables

### NCCard
```javascript
{
  backgroundColor: '#FFFFFF',
  border: '1px solid #E2E8F0',
  borderRadius: 10,
  boxShadow: '0 1px 4px rgba(26,75,110,0.06)'
}
```

### NCButton
**Primary**:
```javascript
{
  height: 28,
  padding: '0 14px',
  border: 'none',
  borderRadius: 999,
  background: BTN_GRADIENT,
  color: '#FFFFFF',
  boxShadow: '0 2px 8px rgba(26,75,110,0.22)',
  fontSize: 11,
  fontWeight: 600
}
```

**Secondary**:
```javascript
{
  height: 28,
  padding: '0 14px',
  border: '1px solid #E2E8F0',
  borderRadius: 999,
  background: 'transparent',
  color: '#6B7A8D',
  fontSize: 11,
  fontWeight: 400
}
```

### NCSectionLabel
```javascript
// Label
{
  fontFamily: FONT_CLASH,
  fontSize: 12,
  fontWeight: 600,
  color: '#1A2E45',
  letterSpacing: '0.03em'
}

// "See all" button
{
  height: 20,
  padding: '0 8px',
  border: '1px solid #E2E8F0',
  borderRadius: 4,
  fontSize: 9,
  color: '#9CA3AF',
  textTransform: 'uppercase',
  letterSpacing: '0.06em'
}
```

### StatusBadge
```javascript
{
  padding: '4px 10px',
  borderRadius: 999,
  fontSize: 10,
  fontWeight: 600,
  border: '1px solid',
  // Colors selon type:
  // Active: greenBg + green border/text
  // Pending: amberBg + amber border/text
  // Inactive: redBg + red border/text
  // Info: accentBg + teal border/text
}
```

### NCKpiCard
```javascript
// Container
{
  padding: '18px 20px'
}

// Label
{
  fontSize: 10,
  color: '#6B7A8D',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: 8
}

// Value
{
  fontFamily: FONT_CLASH,
  fontSize: 32,
  fontWeight: 700,
  color: '#1A2E45',
  lineHeight: 1,
  marginBottom: 4
}

// Subtitle
{
  fontSize: 10,
  color: '#9CA3AF',
  marginBottom: 14
}

// Mini bars chart
{
  display: 'flex',
  gap: 2,
  height: 24,
  // Barres: flex 1, height proportionnelle, 
  // dernière barre = teal accent, autres = accentBg
}
```

### Input Field
```javascript
// Label
{
  fontSize: 12,
  fontWeight: 500,
  color: '#6B7A8D',
  marginBottom: 6,
  letterSpacing: '0.01em'
}

// Input wrapper
{
  height: 44,
  backgroundColor: '#FFFFFF',
  border: '1.5px solid #E2E8F0', // focused: #0FA88A
  borderRadius: 8,
  padding: '0 14px',
  boxShadow: focused ? '0 0 0 3px rgba(15,168,138,0.12)' : 'none'
}

// Input element
{
  flex: 1,
  fontSize: 13,
  color: '#1A2E45'
}
```

### Table Styles
```javascript
// Table wrapper: NCCard with padding: 0

// Controls bar
{
  borderBottom: '1px solid #E2E8F0',
  padding: '16px 20px',
  // Contains: title + badge, search, filters
}

// Table header
{
  borderBottom: '1px solid #E2E8F0',
  backgroundColor: '#EDF2F7'
}

// TH
{
  textAlign: 'left',
  padding: 16,
  fontSize: 10,
  color: '#6B7A8D',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontWeight: 600
}

// TR hover
{
  backgroundColor: '#F9FAFB'
}

// TR border
{
  borderBottom: '1px solid #EEF2F6' // sauf last-child
}

// TD
{
  padding: 16,
  fontSize: 11,
  color: '#6B7A8D'
}
```

### Checkbox
```javascript
{
  width: 16,
  height: 16,
  borderRadius: 4,
  border: checked ? '1.5px solid #0FA88A' : '1.5px solid #CBD5E0',
  backgroundColor: checked ? 'rgba(15,168,138,0.08)' : 'transparent',
  // Checkmark SVG when checked: 9×7px, stroke #0FA88A
}
```

### Avatar
```javascript
{
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: '1.5px solid #E2E8F0',
  backgroundColor: 'rgba(62,207,186,0.10)',
  // Display initials (10px, weight 600, color #0FA88A)
  // OR gradient background for special users
}
```

---

## 🖱️ Interactions & Micro-animations

### Custom Cursor
```javascript
// Normal: 10×10px circle, bg teal accent, shadow
// Hover (sur boutons/liens): 28×28px circle, border 2px teal, transparent bg, shadow enhanced
// Transition: 0.14s ease
// Position: fixed, follow mouse, pointer-events none, z-index 9999
```

### Page Transitions
```javascript
// Framer Motion AnimatePresence
{
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.18, ease: 'easeOut' }
}
```

### Button Hover States
- Primary buttons: scale 1.02, shadow enhanced
- Secondary buttons: bg #F8FAFC
- Icon buttons: bg #F1F5F9

### Nav Item Interactions
- Inactive hover: bg rgba(255,255,255,0.07)
- Active: bg rgba(62,207,186,0.15), border-left 2px teal
- Transition: 0.15s ease

### Floating AI Button
- Hover: scale 1.08
- Click: drawer slides from right with spring animation
- Backdrop: rgba(26,46,69,0.18) + blur 2px

### Table Row Hover
- Background: #F9FAFB
- Transition: instant

### Input Focus
- Border: #E2E8F0 → #0FA88A
- Box-shadow: 0 0 0 3px rgba(15,168,138,0.12)
- Transition: 0.15s

### Loading States
- Button: spinner + "Loading..." text, disabled state
- Skeleton: animated gradient shimmer
- Progress bars: smooth width transition

### Pulse Animation
```css
@keyframes mintPulse {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.6 }
}
/* Duration: 3s, infinite */
```

---

## 📐 Spacing System

### Padding/Margin Scale
```javascript
{
  page: 24,           // Content padding
  card: 18-20,        // Card internal padding
  section: 14-16,     // Section spacing
  element: 8-12,      // Between elements
  compact: 4-6,       // Tight spacing
  gap: 10-20          // Grid/flex gaps
}
```

### Grid Systems
- KPI cards: `grid-template-columns: repeat(4, 1fr)` gap 16
- Stats (5 col): `repeat(5, 1fr)` gap 16
- Charts: `2fr 1fr` gap 20
- Two-col: `1fr 1fr` gap 20
- Settings sidebar: `240px 1fr` gap 24

---

## 🎬 Comportements Spécifiques

### Login Flow
1. User enter email + password
2. Click "Sign In" → loading state (900ms)
3. Transition → authenticated app

### Navigation
- Click sidebar item → set currentView → page transition
- AnimatePresence mode="wait"

### AI Assistant
- Click floating button → aiOpen = true → drawer slide-in
- Click backdrop OR close button → drawer slide-out
- Messages append to chat history
- Auto-scroll to bottom on new message

### Data Tables
- Hover row → highlight
- Click checkbox → select/deselect
- Click filter → dropdown
- Click search → focus input
- Click action menu → show options

### Forms
- Focus input → border color + shadow
- Type → live validation (future)
- Submit → loading state → success/error toast

### Notifications
- Toast appears top-right
- Auto-dismiss after 3s
- Click X to dismiss early

---

## 📱 Responsive Considerations

L'application est conçue pour desktop (1440×1024 base).

Pour mobile/tablet (futur):
- Sidebar → drawer hamburger
- Tables → cards stacked
- Grid 4-col → 2-col → 1-col
- Header search → icon only
- AI drawer → fullscreen

---

## 🛠️ Technologies

- **Framework**: React 18.3.1
- **Router**: React Router 7.13
- **Animation**: Framer Motion (motion/react) 12.23
- **Styling**: Tailwind CSS 4.1 (inline + theme.css)
- **Icons**: Lucide React
- **Charts**: Custom SVG (line, donut)
- **Forms**: React Hook Form 7.55
- **UI Components**: Radix UI primitives + custom
- **Build**: Vite 6.3

---

## 🎯 Philosophie de Design

1. **Cohérence**: Même palette, typographie, spacing sur toutes les pages
2. **Hiérarchie Claire**: Headers → stats → content → actions
3. **Feedback Visuel**: Hovers, focus states, loading indicators
4. **Accessibilité**: Contraste suffisant, labels, keyboard navigation
5. **Performance**: Animations légères (0.15-0.18s), lazy rendering
6. **Scalabilité**: Composants réutilisables (NCCard, NCButton, etc.)
7. **Data-dense**: Tables compactes mais lisibles, charts informatifs
8. **Professionnel**: Navy/teal sophistiqué, pas de colors criardes
9. **Intelligence**: AI assistant intégré nativement
10. **Moderne**: Gradients subtils, shadows douces, borders arrondies

---

## 📋 Checklist d'Implémentation

Lors de l'ajout d'une nouvelle page/feature:

- [ ] Utiliser la palette NC (pas de couleurs custom)
- [ ] Respecter la typographie (Clash Display + Inter)
- [ ] Wrapper dans NCCard pour les surfaces
- [ ] Header avec titre + sous-titre + actions
- [ ] Stats row si applicable (4-5 colonnes)
- [ ] Tables avec NCCard + controls bar + responsive hover
- [ ] Boutons avec NCButton (primary/secondary)
- [ ] Status badges avec couleurs sémantiques
- [ ] Spacing cohérent (24px page, 20px gaps)
- [ ] Transitions AnimatePresence
- [ ] Custom cursor compatible (data-cursor)
- [ ] Icons de Lucide React
- [ ] Loading states
- [ ] Empty states avec message + CTA
- [ ] Error handling avec toasts

---

## 🚀 Prompt d'Utilisation

**Pour générer une nouvelle page similaire**:

> "Crée une page [NOM] pour HUMAI en suivant exactement le design system défini dans UI_SYSTEM_DOCUMENTATION.md. La page doit inclure:
> - Header avec titre '[TITRE]', sous-titre descriptif, et boutons d'action
> - Stats row avec [X] métriques KPI
> - [Description du contenu principal: table/chart/cards]
> - Utilise les composants NCCard, NCButton, NCSectionLabel
> - Applique la palette NC (navy/teal)
> - Typographie: Clash Display pour headings, Inter pour body
> - Même espacement (padding 24, gaps 16-20)
> - Transitions avec Framer Motion
> - Custom cursor compatible (data-cursor sur interactifs)
> - Style cohérent avec EmployeesDashboard/RecruitmentDashboard"

**Pour modifier le design system**:

> "Mets à jour [COMPOSANT/COULEUR/SPACING] dans le design system HUMAI:
> - Nouvelle valeur: [SPEC]
> - Applique le changement à tous les dashboards existants
> - Maintiens la cohérence avec la palette navy/teal
> - Documente dans UI_SYSTEM_DOCUMENTATION.md"

---

## 📞 Références Rapides

### Couleurs les plus utilisées
- Card background: `#FFFFFF`
- Page background: `#EDF2F7`
- Border: `#E2E8F0`
- Primary text: `#1A2E45`
- Muted text: `#6B7A8D`
- Accent: `#3ECFBA`
- Button gradient: `linear-gradient(90deg, #1A4B6E, #0FA88A)`

### Tailles communes
- Page padding: `24px`
- Card padding: `18-20px`
- Button height: `28px` (small), `48px` (large)
- Input height: `44px`
- Header height: `56px`
- Sidebar width: `220px`
- Border-radius card: `10px`
- Border-radius button: `999px`
- Border-radius input: `8px`

### Polices
- Display: `'Neue Montreal', 'Clash Display', sans-serif`
- Body: `'Inter', sans-serif`

---

**Fin de la documentation**

Cette documentation complète permet à n'importe quel développeur ou designer de comprendre et reproduire le design system HUMAI. Tous les composants, couleurs, espacements, interactions et comportements sont définis de manière précise pour maintenir une cohérence parfaite à travers toute l'application.
