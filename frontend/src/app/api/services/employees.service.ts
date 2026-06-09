/**
 * employees.service.ts
 * 
 * Service de gestion des employés.
 * Pattern : tente l'API réelle, bascule sur les données mock si le backend
 * n'est pas disponible (mode développement sans backend).
 */

import { apiClient } from '../client';

// ── Types ──────────────────────────────────────────────────────────────────

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  position: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  startDate: string;
  avatar?: string;
  managerId?: string;
}

export interface EmployeesResponse {
  data: Employee[];
  total: number;
  page: number;
  pageSize: number;
}

// ── Mock Data (utilisé quand le backend n'est pas accessible) ──────────────

const MOCK_EMPLOYEES: Employee[] = [
  { id: 'E-001', name: 'James Harlow',   email: 'j.harlow@company.com',   role: 'Collaborateur', department: 'Engineering', position: 'Senior Developer',    status: 'Active',   startDate: '2022-03-15' },
  { id: 'E-002', name: 'Sara Mitchell',  email: 's.mitchell@company.com',  role: 'Manager',       department: 'Marketing',   position: 'Marketing Manager',    status: 'Active',   startDate: '2021-07-01' },
  { id: 'E-003', name: 'David Osei',     email: 'd.osei@company.com',      role: 'Collaborateur', department: 'Design',      position: 'UI/UX Designer',       status: 'Active',   startDate: '2023-01-10' },
  { id: 'E-004', name: 'Priya Nair',     email: 'p.nair@company.com',      role: 'RH',            department: 'HR',          position: 'HR Specialist',        status: 'Active',   startDate: '2020-09-20' },
  { id: 'E-005', name: 'Carlos Rivera',  email: 'c.rivera@company.com',    role: 'Collaborateur', department: 'Sales',       position: 'Sales Representative', status: 'On Leave', startDate: '2022-11-05' },
  { id: 'E-006', name: 'Yuki Tanaka',    email: 'y.tanaka@company.com',    role: 'Collaborateur', department: 'Engineering', position: 'Frontend Developer',   status: 'Active',   startDate: '2023-05-22' },
  { id: 'E-007', name: 'Maria Lopez',    email: 'm.lopez@company.com',     role: 'Manager',       department: 'Operations',  position: 'Operations Manager',   status: 'Active',   startDate: '2019-04-11' },
  { id: 'E-008', name: 'Tom Brennan',    email: 't.brennan@company.com',   role: 'Collaborateur', department: 'Operations',  position: 'Ops Manager',          status: 'Active',   startDate: '2021-02-28' },
  { id: 'E-009', name: 'Jennifer Wu',    email: 'j.wu@company.com',        role: 'Collaborateur', department: 'Design',      position: 'Product Designer',     status: 'Active',   startDate: '2022-08-14' },
  { id: 'E-010', name: 'Robert Smith',   email: 'r.smith@company.com',     role: 'Collaborateur', department: 'Engineering', position: 'Backend Developer',    status: 'Active',   startDate: '2020-12-01' },
];

// ── Service Functions ──────────────────────────────────────────────────────

/**
 * Récupère la liste paginée des employés.
 * Tente l'API réelle, fallback sur les données mock si le backend est indisponible.
 */
export async function getEmployees(params?: {
  page?: number;
  pageSize?: number;
  department?: string;
  search?: string;
}): Promise<EmployeesResponse> {
  try {
    const response = await apiClient.get<EmployeesResponse>('/employees', { params });
    return response.data;
  } catch {
    // ── Mock fallback ──
    console.info('[HUMAI] Backend not reachable — using mock employee data');
    let filtered = [...MOCK_EMPLOYEES];
    if (params?.department) filtered = filtered.filter(e => e.department === params.department);
    if (params?.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(e => e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q));
    }
    const page = params?.page ?? 1;
    const pageSize = params?.pageSize ?? 10;
    const start = (page - 1) * pageSize;
    return {
      data: filtered.slice(start, start + pageSize),
      total: filtered.length,
      page,
      pageSize,
    };
  }
}

/**
 * Récupère le détail d'un employé par ID.
 */
export async function getEmployeeById(id: string): Promise<Employee> {
  try {
    const response = await apiClient.get<Employee>(`/employees/${id}`);
    return response.data;
  } catch {
    const employee = MOCK_EMPLOYEES.find(e => e.id === id);
    if (!employee) throw new Error(`Employee ${id} not found`);
    return employee;
  }
}

/**
 * Crée un nouvel employé.
 */
export async function createEmployee(data: Omit<Employee, 'id'>): Promise<Employee> {
  const response = await apiClient.post<Employee>('/employees', data);
  return response.data;
}

/**
 * Met à jour les informations d'un employé.
 */
export async function updateEmployee(id: string, data: Partial<Employee>): Promise<Employee> {
  const response = await apiClient.put<Employee>(`/employees/${id}`, data);
  return response.data;
}
