import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth, UserRole } from '../context/AuthContext';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Basic loading spinner while checking auth state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#EDF2F7' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid rgba(26,75,110,0.2)', borderTopColor: '#1A4B6E', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login but save the attempted url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // User role not authorized for this route
    // Redirect to their default dashboard
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
