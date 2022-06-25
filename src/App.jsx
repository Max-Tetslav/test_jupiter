import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
