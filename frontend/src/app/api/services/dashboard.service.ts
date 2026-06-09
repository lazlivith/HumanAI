/**
 * dashboard.service.ts
 * 
 * Service de récupération des KPIs par rôle pour les dashboards.
 */

import { apiClient } from '../client';

// ── Types ──────────────────────────────────────────────────────────────────

export interface RHKpis {
  totalEmployees: number;
  activeEmployees: number;
  onLeaveToday: number;
  openPositions: number;
  retentionRate: number;
  turnoverRate: number;
}

export interface ManagerKpis {
  teamSize: number;
  absentToday: number;
  performanceAvg: number;
  pendingApprovals: number;
}

export interface AdminKpis {
  aiRequestsToday: number;
  aiAnsweredPct: number;
  aiBlockedPct: number;
  serverUptime: number;
  securityAlerts: number;
}

export interface DirectionKpis {
  totalPayroll: string;
  staffGrowth: number;
  globalTurnover: number;
  wellbeingIndex: number;
}

// ── Mock Data ──────────────────────────────────────────────────────────────

const MOCK_RH_KPIS: RHKpis = {
  totalEmployees: 248,
  activeEmployees: 231,
  onLeaveToday: 12,
  openPositions: 17,
  retentionRate: 93.1,
  turnoverRate: 4.2,
};

const MOCK_MANAGER_KPIS: ManagerKpis = {
  teamSize: 12,
  absentToday: 2,
  performanceAvg: 8.4,
  pendingApprovals: 3,
};

const MOCK_ADMIN_KPIS: AdminKpis = {
  aiRequestsToday: 12400,
  aiAnsweredPct: 82,
  aiBlockedPct: 3,
  serverUptime: 99.9,
  securityAlerts: 0,
};

const MOCK_DIRECTION_KPIS: DirectionKpis = {
  totalPayroll: '4.2M€',
  staffGrowth: 12,
  globalTurnover: 4.2,
  wellbeingIndex: 78,
};

// ── Service Functions ──────────────────────────────────────────────────────

export async function getRHKpis(): Promise<RHKpis> {
  try {
    const response = await apiClient.get<RHKpis>('/dashboard/rh');
    return response.data;
  } catch {
    console.info('[HUMAI] Backend not reachable — using mock RH KPIs');
    return MOCK_RH_KPIS;
  }
}

export async function getManagerKpis(): Promise<ManagerKpis> {
  try {
    const response = await apiClient.get<ManagerKpis>('/dashboard/manager');
    return response.data;
  } catch {
    return MOCK_MANAGER_KPIS;
  }
}

export async function getAdminKpis(): Promise<AdminKpis> {
  try {
    const response = await apiClient.get<AdminKpis>('/dashboard/admin');
    return response.data;
  } catch {
    return MOCK_ADMIN_KPIS;
  }
}

export async function getDirectionKpis(): Promise<DirectionKpis> {
  try {
    const response = await apiClient.get<DirectionKpis>('/dashboard/direction');
    return response.data;
  } catch {
    return MOCK_DIRECTION_KPIS;
  }
}
