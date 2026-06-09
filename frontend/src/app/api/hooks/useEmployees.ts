/**
 * useEmployees.ts
 * 
 * Hook React pour récupérer et gérer la liste des employés.
 * Expose { employees, total, loading, error, refetch }.
 * 
 * Usage:
 *   const { employees, loading, error } = useEmployees({ page: 1, pageSize: 10 });
 */

import { useState, useEffect, useCallback } from 'react';
import { getEmployees, getEmployeeById, type Employee, type EmployeesResponse } from '../services/employees.service';

interface UseEmployeesParams {
  page?: number;
  pageSize?: number;
  department?: string;
  search?: string;
  enabled?: boolean; // permet de désactiver le fetch automatique
}

interface UseEmployeesResult {
  employees: Employee[];
  total: number;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useEmployees(params: UseEmployeesParams = {}): UseEmployeesResult {
  const { page = 1, pageSize = 10, department, search, enabled = true } = params;

  const [data, setData]       = useState<EmployeesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!enabled) return;
    setLoading(true);
    setError(null);
    try {
      const result = await getEmployees({ page, pageSize, department, search });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load employees');
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, department, search, enabled]);

  useEffect(() => { fetch(); }, [fetch]);

  return {
    employees: data?.data ?? [],
    total: data?.total ?? 0,
    loading,
    error,
    refetch: fetch,
  };
}

// ── Hook pour un employé unique ────────────────────────────────────────────

interface UseEmployeeResult {
  employee: Employee | null;
  loading: boolean;
  error: string | null;
}

export function useEmployee(id: string | null): UseEmployeeResult {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    getEmployeeById(id)
      .then(setEmployee)
      .catch(err => setError(err instanceof Error ? err.message : 'Not found'))
      .finally(() => setLoading(false));
  }, [id]);

  return { employee, loading, error };
}
