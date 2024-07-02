import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import useAuth, { User, LoginResult } from '../hooks/useAuth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  handleLogin: (username: string, password: string) => Promise<LoginResult>;
  handleLogout: () => void;
  handleCheckUser: () => User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { handleLogin, handleLogout, handleCheckUser, loading, error } = useAuth();
  const [user, setUser] = useState<User | null>(handleCheckUser());

  useEffect(() => {
    const currentUser = handleCheckUser();
    setUser(currentUser);
        console.log('AuthProvider useEffect',currentUser)
  }, []);

  return (
    <AuthContext.Provider value={{ setUser, handleLogin, handleLogout, handleCheckUser, loading, error, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
