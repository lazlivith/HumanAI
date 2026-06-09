/**
 * useLeaves.ts
 * 
 * Hook React pour les congés et absences.
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getAllLeaves, getMyLeaves, getMyLeaveBalance,
  approveLeave, declineLeave,
  type LeaveRequest, type LeaveBalance,
} from '../services/leaves.service';
import { useAuth } from '../../context/AuthContext';

// ── Hook : toutes les demandes (Manager/RH) ────────────────────────────────

export function useAllLeaves() {
  const [leaves, setLeaves]   = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      setLeaves(await getAllLeaves());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading leaves');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const approve = async (id: string) => {
    const updated = await approveLeave(id);
    setLeaves(prev => prev.map(l => l.id === id ? updated : l));
  };

  const decline = async (id: string, reason?: string) => {
    const updated = await declineLeave(id, reason);
    setLeaves(prev => prev.map(l => l.id === id ? updated : l));
  };

  return { leaves, loading, error, refetch: fetch, approve, decline };
}

// ── Hook : mes congés (Collaborateur) ─────────────────────────────────────

export function useMyLeaves() {
  const [leaves, setLeaves]     = useState<LeaveRequest[]>([]);
  const [balance, setBalance]   = useState<LeaveBalance | null>(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const [myLeaves, myBalance] = await Promise.all([getMyLeaves(), getMyLeaveBalance()]);
      setLeaves(myLeaves);
      setBalance(myBalance);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading your leaves');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  return { leaves, balance, loading, error, refetch: fetch };
}

// ── Hook auto-sélectif selon le rôle ──────────────────────────────────────

export function useLeaves() {
  const { user } = useAuth();
  const isCollaborateur = user?.role === 'Collaborateur';
  const myLeaves = useMyLeaves();
  const allLeaves = useAllLeaves();
  return isCollaborateur ? myLeaves : allLeaves;
}
