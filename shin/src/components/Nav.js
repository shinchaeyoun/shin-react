/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';



const NavWrap = styled.div`
  position: sticky;
  top: 30px;
  width: 12rem;
  height: 100%;

  > * {
    cursor: pointer;
  }
`
const Logo = styled.div`
  font-size: 22px;
  font-weight: 800;
  font-family: 'Outfit';

  > P {
    display: inline;
    position: relative;

    &.active {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${({theme}) => theme.colors.pointColor};
        bottom: 1px;
      }
    }
  }
`

const NavList = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Outfit';
`
const NavItem = styled.div`
  margin-bottom: 8px;
  
  > P {
    display: inline;
    position: relative;

    &.active {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${({theme}) => theme.colors.pointColor};
        bottom: 1px;
        z-index: -1;
      }
    }
  }
`
const DownMenu = styled.ul`
  margin-left: 20px;
  font-size: 16px;
  font-family: 'OutfitLight';

  > li {
    margin-top: 5px;
  }
`

function Nav(){
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(0);
  const [isDownMenu, setIsDownMenu] = useState(false);
  const downMenuRef = useRef();


  useEffect(()=>{
    const handleOutside = (e) => {
      if(downMenuRef.current && !downMenuRef.current.contains(e.target)){
        setIsDownMenu(false);
        console.log('false');
      };
    };
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  },[downMenuRef]);

  return (
    <NavWrap>
      <Logo onClick={()=>{
        navigate('/');
        setIsActive(0);
      }}>
        <p className={isActive == 0 ? 'active' : null }>Shin</p>
      </Logo>

      <NavList>
        <NavItem onClick={()=>{navigate('/introduce'); setIsActive(1);}}>
          <p className={isActive == 1 ? 'active' : null }>Introduce</p>
        </NavItem>
        <NavItem ref={downMenuRef} onClick={()=>{
          navigate('/project');
          setIsActive(2);
          setIsDownMenu(true);
        }}>
          <p className={isActive == 2 ? 'active' : null }>Project</p>
          {
            isDownMenu ?
            <DownMenu>
              <li>Eigenhain</li>
              <li>London</li>
              <li>MMCA</li>
              <li>Seed</li>
              <li>Sony</li>
              <li>Canvas</li>
              <li>Appydev</li>
              <li>Todo List</li>
            </DownMenu>
            :
            null
          }
          
        </NavItem>
        <NavItem onClick={()=>{navigate('/career'); setIsActive(3);}}>
          <p className={isActive == 3 ? 'active' : null }>Career</p>
        </NavItem>
        <NavItem onClick={()=>{navigate('/contact'); setIsActive(4);}}>
          <p className={isActive == 4 ? 'active' : null }>Contact</p>
        </NavItem>
      </NavList>
    </NavWrap>
  )
};

export default Nav;