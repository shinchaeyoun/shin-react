import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import Router from './Router';
import './Styles/variables.scss'

import Header from './components/Header.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Router />
  </ThemeProvider>
);