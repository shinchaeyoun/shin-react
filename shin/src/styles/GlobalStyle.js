/* eslint-disable */
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{box-sizing:border-box;}
  body {
    position: relative;
    background-color: #edf2f6;
  }
`;
export default GlobalStyles;