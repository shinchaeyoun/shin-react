import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tools from './pages/Tools.js';
import Sponsors from './pages/Sponsors.js';
import Explore from './pages/Explore.js';
import Submit from './pages/Submit.js';
import Bookmark from './pages/Bookmark.js';

import Header from './components/Header.js';

export const AppContext = createContext();

const Router = () => {
  const [isBookMark, setIsBookmark] = useState('0');

  return (
    <AppContext.Provider value={{ isBookMark, setIsBookmark }}>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Tools />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;