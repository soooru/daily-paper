import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PaperListPage from '../pages/PaperListPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from '../guards/ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';  // AuthProvider 추가

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/papers"
            element={
              <ProtectedRoute>
                <PaperListPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
