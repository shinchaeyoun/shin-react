/* eslint-disable */
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

import OutfitMedium from '../fonts/Outfit-Medium.woff2';
import OutfitLight from '../fonts/Outfit-Light.woff2';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{box-sizing:border-box;}
  body {
    position: relative;
    font-family: 'OutfitLight';
    // background-color: #edf2f6;
    // -ms-overflow-style: none;
  }
  
  // ::-webkit-scrollbar {
  //   display: none;
  // }

  @font-face {
    font-family: 'OutfitLight';
    src: local('OutfitLight'), local('OutfitLight');
    font-style: normal;
    src: url(${OutfitLight}) format('woff2');
  }
  @font-face {
    font-family: 'Outfit';
    src: local('OutfitMedium'), local('OutfitMedium');
    font-style: normal;
    src: url(${OutfitMedium}) format('woff2');
  }
 
`;
export default GlobalStyles;