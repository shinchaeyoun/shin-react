/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import styled, { css } from 'styled-components';
import S from '../Styles/GlobalBlock';
import './DownMenu.scss';

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
  
  &:hover {
    background-color: #edf2f7;
  }
  > svg {
    margin-right: 8px;
  }
  `
const DownMenu = styled(S.ShadowBox)`
  position: absolute;
  top: ${props => props.$top || '55px'};
  left: ${props => props.$left || '0px'};
  right: ${props => props.$right};
  
  width: 200px;
  border-width: 2px;
  
  background-color: #fff;
  transition: opacity .3s;
  
  z-index: 999;
  overflow: hidden;

  ${props => props.$border &&
    css`
      ${MenuItem}{
        border-bottom: 2px solid #000;
        &:last-child {
          border-bottom: none;
        }
      }
    `
  }
`

const downMenu = (props,ref) => {
  const navigate = useNavigate();
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <DownMenu as="ul" $top={props.$top} $left={props.$left} $right={props.$right} $border={props.$border}>
        {
          props.info.map((item, index)=>{
            const link = item.link;
            if(props.header){
              return (
                <MenuItem key={index} onClick={()=>{
                  navigate(link);
                  props.showHandle(!props.show);
                }}>{item.icon} {item.name}</MenuItem>
              )
            } else {
              return (
                <MenuItem key={index} onClick={()=>{
                  navigate(link);
                  props.showHandle(!props.show);
                  props.filterHandle(item.name);
                }}>{item.icon} {item.name}</MenuItem>
              )
            }
          })
        }
      </DownMenu>
    </CSSTransition>
  );
};

export default downMenu;





/*
사용하는 부모컴포넌트에서 받아올 구조
const downMenuInfo = [
  {
    name: 'Tools',
    icon: <Tools width='20px' height='20px'/>,
    link: '/'
  },
]

사용할 때
<DownMenu show={isDownMenu} showHandle={setIsDownMenu} info={downMenuInfo}/>

사용하는 부모컴포넌트에서 넣을 것
useEffect(()=>{
  const handleOutside = (e) => {
    if(downMenuRef.current && !downMenuRef.current.contains(e.target)){
      setIsDownMenu(false);
    };
  };
  document.addEventListener("mousedown", handleOutside);
  return () => {
    document.removeEventListener("mousedown", handleOutside);
  };
},[downMenuRef]);

*/