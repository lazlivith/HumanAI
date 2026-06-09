import { UserRole } from '../context/AuthContext';

// We map these to the existing View types in App.tsx
export type View =
  | 'Dashboard'
  | 'Employees' | 'Recruitment' | 'Leave'
  | 'Payroll' | 'Performance'
  | 'Reports' | 'Settings'
  | 'Security Alerts' | 'AI Usage Logs' | 'Offboarding';

export const ROLE_NAVIGATION: Record<UserRole, View[]> = {
  Collaborateur: ['Dashboard', 'Leave'],
  Manager: ['Dashboard', 'Employees', 'Leave', 'Performance'],
  RH: [
    'Dashboard',
    'Employees',
    'Recruitment',
    'Leave',
    'Offboarding',
    'Payroll',
    'Performance',
    'Reports',
  ],
  Direction: ['Dashboard', 'Reports', 'Performance'],
  Admin: [
    'Dashboard',
    'Security Alerts',
    'AI Usage Logs',
    'Employees',
    'Settings',
  ],
  QVT: ['Dashboard', 'Reports'],
};
