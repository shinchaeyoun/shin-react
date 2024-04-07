import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';



const NavWrap = styled.div`
  position: sticky;
  top: 30px;
  width: 200px;
  height: 100%;
  // border: 1px solid #000;

  > * {
    cursor: pointer;
  }
`
const Logo = styled.div`
  font-size: 22px;
  font-weight: 800;
  font-family: 'Outfit';
`

const NavList = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Outfit';
`
const NavItem = styled.div`
  margin-bottom: 5px;
`

function Nav(){
  const navigate = useNavigate();

  return (
    <NavWrap>
      <Logo onClick={()=>{navigate('/')}}>Shin</Logo>

      <NavList>
        <NavItem onClick={()=>{navigate('/introduce')}}>Introduce</NavItem>
        <NavItem onClick={()=>{navigate('/project')}}>Project</NavItem>
        <NavItem onClick={()=>{navigate('/career')}}>Career</NavItem>
        <NavItem onClick={()=>{navigate('/contact')}}>Contact</NavItem>
      </NavList>
    </NavWrap>
  )
};

export default Nav;