import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main.js';
import A from './Page/A.js';
import Header from './components/Header.js';

const Router = ({ isTheme, toggleTheme }) => {
  return (
    <BrowserRouter>
      <Header isTheme={isTheme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;