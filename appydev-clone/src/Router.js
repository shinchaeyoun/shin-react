import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tools from './pages/Tools/Tools.js';
import Sponsors from './pages/Sponsors.js';
import Explore from './pages/Explore.js';
import Submit from './pages/Submit.js';
import Tool from './pages/Submit/Tool.js';
import Community from './pages/Submit/Community.js';
import Podcast from './pages/Submit/Podcast.js';
import Bookmark from './pages/Bookmark.js';
import Communities from './pages/Communities/Communities.js';
import Podcasts from './pages/Podcasts/Podcasts.js';

import Header from './components/Header.js';

// import Header from './components/Header.js';

export const AppContext = createContext();

const Router = () => {
  const [isBookMark, setIsBookmark] = useState('0');

  return (
    <AppContext.Provider value={{ isBookMark, setIsBookmark }}>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/*" element={<Tools />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/submit" element={<Submit />}>
            <Route path="tool" element={<Tool />} />
            <Route path="community" element={<Community />} />
            <Route path="podcast" element={<Podcast />} />
          </Route>
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;