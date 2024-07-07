import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();


  useEffect(() => {
    console.log('ProtectedRoute useEffect - user:', user);
  }, [user]);

  if (!user) {
    return <Navigate to="/error?type=auth" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
