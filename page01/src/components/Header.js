/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

const OuterLink = styled.span`
  font-size: 14px;
`
const SideNav = styled.div`
  position: fixed;
  top: 10px;
  left: ${props => props.$left};
  right: ${props => props.$right};

  font-size: 18px;
  text-align: ${props => props.$ta || 'left'};

  li {
    margin-bottom: 7px;
    color: #eee;
    cursor: pointer;
  }
`
const Logo = styled.div`
  position: absolute;
  top: 5px; left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  color: ${props => props.theme.colors.pointColor}
`
function Header({ onClickSideNav,isNav,setSideNav }) {
  const mainContent = ['Inner link1', 'Inner link2', 'Inner link3', 'Inner link4'];

  const onClick = (id) => {
    console.log('on click', isNav);
    setSideNav(id);
    console.log('on click', isNav);
  }

  return (
    <>
      <SideNav $left='20px'>
        <ul>
          {
            mainContent.map((item, index) => {
              let idx = index + 1;
              
              return (
                <li
                  key={index}
                  onClick={()=>onClick(idx)}
                >
                  {item} &nbsp; {idx}
                </li>
              )
            })
          }
          {/* <li>Inner link1</li>
          <li>Inner link2</li>
          <li>Inner link3</li>
          <li>Inner link4</li> */}
          <li><OuterLink>OuterLink</OuterLink></li>
          <li><OuterLink>OuterLink</OuterLink></li>
        </ul>
      </SideNav>

      <Logo>-</Logo>

      <SideNav $right='20px' $ta='right'>
        <ul>
          <li>li</li>
          <li>li</li>
          <li>li</li>
          <li>li</li>
          <li>li</li>
        </ul>
      </SideNav>
    </>
  )
}

export default Header;