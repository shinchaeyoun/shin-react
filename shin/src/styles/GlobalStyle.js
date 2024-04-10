/* eslint-disable */
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

import OutfitMedium from '../fonts/Outfit-Medium.woff2';
import OutfitLight from '../fonts/Outfit-Light.woff2';
import Assistant from '../fonts/Assistant-Medium.woff';
import NotoSans from '../fonts/NotoSansKR-Light.ttf';
import NotoSansRegular from '../fonts/NotoSansKR-Regular.ttf';
import NotoSansMedium from '../fonts/NotoSansKR-Medium.ttf';
import NotoSerif from '../fonts/NotoSerifKR-Light.otf';
import NotoSerifMedium from '../fonts/NotoSerifKR-Medium.otf';

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
  @font-face {
    font-family: 'Assistant';
    src: local('Assistant'), local('Assistant');
    font-style: normal;
    src: url(${Assistant}) format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    src: local('NotoSans'), local('NotoSans');
    font-style: normal;
    src: url(${NotoSans}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansRegular';
    src: local('NotoSansRegular'), local('NotoSansRegular');
    font-style: normal;
    src: url(${NotoSansRegular}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansMedium';
    src: local('NotoSansMedium'), local('NotoSansMedium');
    font-style: normal;
    src: url(${NotoSansMedium}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSerif';
    src: local('NotoSerif'), local('NotoSerif');
    font-style: normal;
    src: url(${NotoSerif}) format('opentype');
  }
  @font-face {
    font-family: 'NotoSerifMedium';
    src: local('NotoSerifMedium'), local('NotoSerifMedium');
    font-style: normal;
    src: url(${NotoSerifMedium}) format('opentype');
  }
 
`;
export default GlobalStyles;