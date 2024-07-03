import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PaperListPage from '../pages/PaperListPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from '../guards/ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';  // AuthProvider 추가
import AppBar from '../components/GlobalAppBar';

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppBar />
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
