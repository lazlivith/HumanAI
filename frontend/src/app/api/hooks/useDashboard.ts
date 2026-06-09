/**
 * useDashboard.ts
 * 
 * Hook React pour les KPIs des dashboards par rôle.
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  getRHKpis, getManagerKpis, getAdminKpis, getDirectionKpis,
  type RHKpis, type ManagerKpis, type AdminKpis, type DirectionKpis,
} from '../services/dashboard.service';

type AnyKpis = RHKpis | ManagerKpis | AdminKpis | DirectionKpis | null;

interface UseDashboardResult {
  kpis: AnyKpis;
  loading: boolean;
  error: string | null;
}

export function useDashboard(): UseDashboardResult {
  const { user } = useAuth();
  const [kpis, setKpis]       = useState<AnyKpis>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchFn = () => {
      switch (user?.role) {
        case 'Manager':    return getManagerKpis();
        case 'Admin':      return getAdminKpis();
        case 'Direction':  return getDirectionKpis();
        default:           return getRHKpis(); // RH est le fallback global
      }
    };

    fetchFn()
      .then(setKpis)
      .catch(err => setError(err instanceof Error ? err.message : 'Error loading KPIs'))
      .finally(() => setLoading(false));
  }, [user?.role]);

  return { kpis, loading, error };
}

// ── Hooks typés par rôle (exports directs) ─────────────────────────────────

export function useRHKpis() {
  const [kpis, setKpis]       = useState<RHKpis | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRHKpis().then(setKpis).finally(() => setLoading(false));
  }, []);
  return { kpis, loading };
}

export function useManagerKpis() {
  const [kpis, setKpis]       = useState<ManagerKpis | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getManagerKpis().then(setKpis).finally(() => setLoading(false));
  }, []);
  return { kpis, loading };
}

export function useAdminKpis() {
  const [kpis, setKpis]       = useState<AdminKpis | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAdminKpis().then(setKpis).finally(() => setLoading(false));
  }, []);
  return { kpis, loading };
}
