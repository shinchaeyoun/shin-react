/* eslint-disable */
// import './App.css';
import React, { useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
// import MainPage from './routes/MainPage.js';

const GlobalStyle = createGlobalStyle`
  body {

  }
`;


export const AppContext = createContext();

function App() {
  return (
    <ThemeProvider>
     
      <AppContext.Provider>
          <GlobalStyle />
          <div>
            {/* <Header /> */}

            <Routes>
              {/* <Route path="/" element={<MainPage />} /> */}
            </Routes>

            {/* <Footer/> */}
          </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
