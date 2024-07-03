import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLoginSuccess = () => {
    navigate(from, { replace: true }); // 로그인 성공 후 원래 가려던 페이지로 리디렉션
  };

  return (
    <div className="pt-10 text-center">
      <h1>접근하기 위해서는 로그인이 필요합니다.</h1>
      <p>로그인 후 이용해 주세요</p>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
