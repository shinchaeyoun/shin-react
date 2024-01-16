/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock';
import { CSSTransition } from 'react-transition-group';
// import './style.scss'

const animationTiming = {
  enter: 2000,
  exit: 2000,
};

const ReturnBtn = styled.div`
  border: 1px solid #000;
  width: 500px;
  height: 100px;
`

function Podcast() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [enter, isEnter] = useState(false);

  const { isOutletShow, setIsOutletShow, setIsMenuShow } = useOutletContext();

  function extiFn () {
    navigate('/submit');
    setIsOutletShow(!isOutletShow);
    setIsMenuShow(true);
  };

  useEffect(()=>{
    console.log('enter',isOutletShow);

    return () => {
      console.log('exit',isOutletShow);
    }
  });

  return(
    // <CSSTransition
    //   in={isOutletShow}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    //   classNames='movingPage'
    //   >
      <ReturnBtn
        onClick={()=>{
          extiFn();
        }}
        >
        Podcast
      </ReturnBtn>
    // {/* </CSSTransition> */}
  )
}

export default Podcast;