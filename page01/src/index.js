import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme} from './Styles/theme.js';
import GlobalStyle from './Styles/GlobalStyle.js';
import GlobalFont from './Styles/GlobalFont.js';
import Router from './Router';
import Header from './components/Header.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFont />
    <Header />
    <Router />
  </ThemeProvider>
);
