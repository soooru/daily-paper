import { useState } from 'react';
import Cookies from 'js-cookie';

export interface User {
  id: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
}

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string): Promise<LoginResult> => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연 (예시)
      
      if (username === 'user' && password === 'pass') {
        const user = { id: username };
        Cookies.set('user', JSON.stringify(user), { expires: 1 }); // 24시간 동안 쿠키 저장
        setLoading(false);
        return { success: true, message: 'Login successful' };
      } else {
        setLoading(false);
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred during login');
      return { success: false, message: 'An error occurred' };
    }
  };

  const handleLogout = () => {
    Cookies.remove('user');
  };

  const handleCheckUser = (): User | null => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      return JSON.parse(userCookie);
    }
    return null;
  };

  return { handleLogin, handleLogout, handleCheckUser, loading, error };
};

export default useAuth;
