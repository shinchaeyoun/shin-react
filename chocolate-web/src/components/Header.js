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
  font-family: ${props => props.theme.fonts.outfit};
  text-align: ${props => props.$ta || 'left'};

  li {
    margin-bottom: 7px;
  }
`
const Logo = styled.div`
  position: absolute;
  top: 5px; left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
`
function Header() {
  return(
    <>
      <SideNav $left='20px'>
        <ul>
          <li>Brand</li>
          <li>Making</li>
          <li>Event</li>
          <li>Store</li>
          <li>Contact</li>
          <li><OuterLink>Customer Service</OuterLink></li>
          <li><OuterLink>Instagram</OuterLink></li>
        </ul>
      </SideNav>

      <Logo>----</Logo>

      <SideNav $right='20px' $ta='right'>
        <ul>
          <li>Menu 1</li>
          <li>Menu 20</li>
          <li>Menu 300</li>
          <li>Menu 40</li>
          <li>Menu 5</li>
        </ul>
      </SideNav>
    </>
  )
}

export default Header;