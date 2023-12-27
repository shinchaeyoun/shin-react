/* eslint-disable */
import React, { useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock';
import { CSSTransition } from 'react-transition-group';
import './style.scss'

const animationTiming = {
  enter: 2000,
  exit: 2000,
};

const ReturnBtn = styled.div`
  border: 1px solid #000;
  width: 500px;
  height: 100px;
`

function Tool() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const { isOutletShow, setIsOutletShow, setIsMenuShow } = useOutletContext();
  return(
    <CSSTransition
      in={isOutletShow}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <ReturnBtn
        onClick={()=>{
          navigate('/submit');
          setIsOutletShow(!isOutletShow);
          setIsMenuShow(true);
        }}
        >
        Tool
      </ReturnBtn>
    </CSSTransition>
  )
}

export default Tool;