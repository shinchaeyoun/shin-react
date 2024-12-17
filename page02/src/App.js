import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle.js';
import GlobalFont from './Styles/GlobalFont.js';
import { theme,light, dark } from './Styles/theme';
import Router from './Router';



function App() {
    const [isTheme ,setIsTheme] = useState(false);
    const toggleTheme = () => {
        setIsTheme((prev) => !prev);
      };
    return (
        <ThemeProvider theme={isTheme ? dark : light}>
            <GlobalStyle />
            <GlobalFont />
            <Router isTheme={isTheme} toggleTheme={toggleTheme} />
        </ThemeProvider>
    )
};

export default App;