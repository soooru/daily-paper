import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/PaperList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/papers" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
