/**
 * leaves.service.ts
 * 
 * Service de gestion des congés et absences.
 */

import { apiClient } from '../client';

// ── Types ──────────────────────────────────────────────────────────────────

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'Annual Leave' | 'Sick Leave' | 'Personal' | 'Remote' | 'Emergency';
  from: string;
  to: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Declined' | 'Active';
  reason?: string;
  approvedBy?: string;
}

export interface LeaveBalance {
  annualLeave: { used: number; total: number };
  sickLeave: { used: number; total: number };
  personalDays: { used: number; total: number };
  remoteDays: { used: number; total: number };
}

// ── Mock Data ──────────────────────────────────────────────────────────────

const MOCK_LEAVES: LeaveRequest[] = [
  { id: 'LV-001', employeeId: 'E-007', employeeName: 'Maria Lopez',   type: 'Annual Leave', from: '2026-06-10', to: '2026-06-14', days: 5, status: 'Pending' },
  { id: 'LV-002', employeeId: 'E-010', employeeName: 'Robert Smith',  type: 'Sick Leave',   from: '2026-06-03', to: '2026-06-03', days: 1, status: 'Approved', approvedBy: 'Priya Nair' },
  { id: 'LV-003', employeeId: 'E-009', employeeName: 'Jennifer Wu',   type: 'Personal',     from: '2026-06-08', to: '2026-06-09', days: 2, status: 'Pending' },
  { id: 'LV-004', employeeId: 'E-008', employeeName: 'Lisa Taylor',   type: 'Annual Leave', from: '2026-06-20', to: '2026-06-28', days: 7, status: 'Approved', approvedBy: 'Priya Nair' },
  { id: 'LV-005', employeeId: 'E-003', employeeName: 'David Osei',    type: 'Annual Leave', from: '2026-06-01', to: '2026-06-07', days: 5, status: 'Active' },
  { id: 'LV-006', employeeId: 'E-005', employeeName: 'Carlos Rivera', type: 'Emergency',    from: '2026-06-05', to: '2026-06-05', days: 1, status: 'Pending' },
];

const MOCK_MY_BALANCE: LeaveBalance = {
  annualLeave: { used: 8,  total: 20 },
  sickLeave:   { used: 2,  total: 10 },
  personalDays:{ used: 1,  total: 5  },
  remoteDays:  { used: 24, total: 60 },
};

// ── Service Functions ──────────────────────────────────────────────────────

/** Récupère toutes les demandes de congés (Manager / RH). */
export async function getAllLeaves(): Promise<LeaveRequest[]> {
  try {
    const response = await apiClient.get<LeaveRequest[]>('/leaves');
    return response.data;
  } catch {
    console.info('[HUMAI] Backend not reachable — using mock leave data');
    return MOCK_LEAVES;
  }
}

/** Récupère les demandes de l'employé connecté. */
export async function getMyLeaves(): Promise<LeaveRequest[]> {
  try {
    const response = await apiClient.get<LeaveRequest[]>('/leaves/mine');
    return response.data;
  } catch {
    return MOCK_LEAVES.filter(l => l.employeeId === 'E-001');
  }
}

/** Récupère le solde de congés de l'employé connecté. */
export async function getMyLeaveBalance(): Promise<LeaveBalance> {
  try {
    const response = await apiClient.get<LeaveBalance>('/leaves/balance');
    return response.data;
  } catch {
    return MOCK_MY_BALANCE;
  }
}

/** Soumet une nouvelle demande de congé. */
export async function createLeaveRequest(data: Omit<LeaveRequest, 'id' | 'employeeId' | 'employeeName' | 'status'>): Promise<LeaveRequest> {
  const response = await apiClient.post<LeaveRequest>('/leaves', data);
  return response.data;
}

/** Approuve une demande de congé (Manager / RH). */
export async function approveLeave(leaveId: string): Promise<LeaveRequest> {
  const response = await apiClient.put<LeaveRequest>(`/leaves/${leaveId}/approve`);
  return response.data;
}

/** Refuse une demande de congé (Manager / RH). */
export async function declineLeave(leaveId: string, reason?: string): Promise<LeaveRequest> {
  const response = await apiClient.put<LeaveRequest>(`/leaves/${leaveId}/decline`, { reason });
  return response.data;
}
