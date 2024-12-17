import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle.js';
import GlobalFont from './Styles/GlobalFont.js';
import theme from './Styles/theme';
import Router from './Router';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);