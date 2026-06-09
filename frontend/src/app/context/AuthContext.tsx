import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '../api/client';

export type UserRole = 'Collaborateur' | 'Manager' | 'RH' | 'Direction' | 'Admin' | 'QVT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial check on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('humai_token');
      if (storedToken) {
        try {
          // Normally we'd fetch the user profile from the backend with the token
          // For now, we simulate a mock fetch or expect the token payload to have info
          // Example: const response = await apiClient.get('/auth/me');
          // setUser(response.data.user);
          
          // Temporary mock user extraction from localstorage for frontend dev:
          const storedUser = localStorage.getItem('humai_user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
          } else {
            // Invalid state
            localStorage.removeItem('humai_token');
          }
        } catch (error) {
          console.error("Failed to authenticate token", error);
          localStorage.removeItem('humai_token');
          localStorage.removeItem('humai_user');
        }
      }
      setIsLoading(false);
    };

    initializeAuth();

    // Listen to unauthorized events from apiClient interceptor
    const handleUnauthorized = () => logout();
    window.addEventListener('auth:unauthorized', handleUnauthorized);
    
    return () => {
      window.removeEventListener('auth:unauthorized', handleUnauthorized);
    };
  }, []);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('humai_token', newToken);
    localStorage.setItem('humai_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('humai_token');
    localStorage.removeItem('humai_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
