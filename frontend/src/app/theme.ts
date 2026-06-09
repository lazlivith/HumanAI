export const NC = {
  /* page */
  bg:           '#EDF2F7',
  card:         '#FFFFFF',
  border:       '#E2E8F0',
  borderDim:    '#EEF2F6',
  /* text (light backgrounds) */
  fg:           '#1A2E45',
  fgDim:        '#374151',
  muted:        '#6B7A8D',
  mutedDim:     '#9CA3AF',
  /* sidebar (dark gradient) */
  sidebarFg:    '#FFFFFF',
  sidebarMuted: 'rgba(255,255,255,0.60)',
  sidebarBorder:'rgba(255,255,255,0.10)',
  /* accent */
  navy:         '#1A4B6E',
  teal:         '#1A8A7A',
  accent:       '#3ECFBA',
  link:         '#0FA88A',
  accentBg:     'rgba(62,207,186,0.10)',
  accentBorder: 'rgba(62,207,186,0.28)',
  /* status */
  red:          '#991B1B',
  redBg:        '#FEF2F2',
  amber:        '#92400E',
  amberBg:      '#FFFBEB',
  green:        '#065F46',
  greenBg:      '#ECFDF5',
  /* compat aliases used by shared primitives */
  mint:         '#0FA88A',
  mintBg:       'rgba(62,207,186,0.10)',
  mintBorder:   'rgba(62,207,186,0.28)',
  mintFill:     '#3ECFBA',
  indigo:       '#E53E3E',
  indigoBg:     'rgba(229,62,62,0.08)',
  blue:         '#4A90D9',
  blueBg:       'rgba(74,144,217,0.08)',
} as const;

export const SIDEBAR_GRADIENT = 'linear-gradient(175deg, #1A4B6E 0%, #1A6B7A 50%, #1A8A7A 100%)';
export const BTN_GRADIENT     = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';
export const FONT_CLASH       = "'Neue Montreal', 'Clash Display', sans-serif";
export const FONT_INTER       = "'Inter', sans-serif";
