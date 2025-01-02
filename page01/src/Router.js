/* eslint-disable */
import React, { useState } from 'react';
import { theme, darkTheme, lightTheme } from './Styles/theme.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';
import Header from './components/Header.js'

const Router = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prev) => !prev);
  // };

  const [isNav, setSideNav] = useState('');

  return (
    <BrowserRouter>
      <Header isNav={isNav} setSideNav={setSideNav} />
      {/* <Routes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}> */}
      <Routes>
        {/* <Link to="/"></Link> */}
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;