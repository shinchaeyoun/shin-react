import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import fstyled, {css} from 'styled-components';
import S from './styles/GlobalBlock';

import Page from './pages/Page';
import Main from './pages/Main.js';
import Introduce from './pages/Introduce'; 
import Career from './pages/Career';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Nav from './components/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <S.FrameInner>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="/" element={<Main />} />
            <Route path="introduce" element={<Introduce />} />
            <Route path="project" element={<Project />} />
            <Route path="career" element={<Career />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </S.FrameInner>
    </BrowserRouter>
  );
};

export default Router;