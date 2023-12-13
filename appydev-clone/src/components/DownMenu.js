/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';
import S from '../Styles/GlobalBlock';
import './DownMenu.scss';

import { ReactComponent as Tools } from '../assets/images/menu.svg';
import { ReactComponent as Community } from '../assets/images/community.svg';
import { ReactComponent as Podcast } from '../assets/images/podcast.svg';


const animationTiming = {
  enter: 200,
  exit: 200,
};

const MenuItem = styled.li`
  display: flex;
  align-items: center;

  padding: 3px 15px;
  height: 48px;
  line-height: 40px;

  > svg {
    margin-right: 8px;
  }
`
const DownMenu = styled(S.ShadowBox)`
  position: absolute;
  top: 55px;
  left: 0px;

  width: 200px;
  border-width: 2px;

  background-color: #fff;
  transition: opacity .3s;

  z-index: 999;

  ${MenuItem}{
    border-bottom: 2px solid #000;
    &:last-child {
      border-bottom: none;
    }
  }
`

const modal = (props,ref) => {
  const navigate = useNavigate();

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <DownMenu as="ul">
        <MenuItem onClick={()=>{
          navigate('/');
          props.showHandle(!props.show);
        }}><Tools width='20px' height='20px'/>Tools</MenuItem>
        <MenuItem onClick={()=>{
          navigate('/communities');
          props.showHandle(!props.show);
        }}><Community  width='20px' height='20px'/>Communities</MenuItem>
        <MenuItem onClick={()=>{
          navigate('/podcasts');
          props.showHandle(!props.show);
        }}><Podcast width='20px' height='20px'/>Podcasts</MenuItem>
      </DownMenu>
    </CSSTransition>
  );
};

export default modal;