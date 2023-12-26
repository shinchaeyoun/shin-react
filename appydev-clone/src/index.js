import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import Router from './Router';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import './Styles/variables.scss'

import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </Provider>
);