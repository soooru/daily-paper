import React from 'react';
import AppRoutes from './routes';
import './assets/styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="daily-paper-app">
      <AppRoutes />
    </div>)
};

export default App;
