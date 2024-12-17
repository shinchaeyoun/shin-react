import React from 'react';
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
function Header() {
  return(
    <>
      <SideNav $left='20px'>
        <ul>
          <li>Inner link</li>
          <li>Inner link</li>
          <li>Inner link</li>
          <li>Inner link</li>
          <li>Inner link</li>
          <li><OuterLink>OuterLink</OuterLink></li>
          <li><OuterLink>OuterLink</OuterLink></li>
        </ul>
      </SideNav>

      <Logo>----</Logo>

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