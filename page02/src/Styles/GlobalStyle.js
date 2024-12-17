/* eslint-disable */
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{box-sizing:border-box;}
  body {
    position: relative;
    color: ${({theme})=> theme.txtColor};
    background-color: ${({theme})=> theme.bgColor}
  }
`;
export default GlobalStyles;