import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { handleLogin, loading, error } = useAuthContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await handleLogin(username, password);
    if (result.success) {
      onLoginSuccess();
    } else {
      alert(result.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
