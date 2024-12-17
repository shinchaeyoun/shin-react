import React, { useState } from 'react';
import { theme, darkTheme, lightTheme } from './Styles/theme.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';

const Router = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Routes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        <Route path="/" element={<Main />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;