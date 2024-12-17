/* eslint-disable */
import React, { useState, useRef } from 'react';

import styled from 'styled-components';

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
        background-color: ${({ theme }) => theme.colors.pointColor};
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
        background-color: ${({ theme }) => theme.colors.pointColor};
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

function Nav() {
  const navs = ['navItem', 'navItem', 'navItem', 'navItem'];

  const [isActive, setIsActive] = useState(0);
  const [isDownMenu, setIsDownMenu] = useState(false);
  const downMenuRef = useRef();


  const scrollRef = useRef([]);

  const navItem = navs.map((item, index) => {
    console.log(item, index);
    return (
      <NavItem key={index} ref={(el) => (scrollRef.current[index] = el)} onClick={() => { console.log(scrollRef.current) }}>
        <p>{item}</p>
      </NavItem>
    )
  });

  const handleScrollView = (event) => {
    const name = event.target.innerText;
    const category = {
      One: 0,
      Two: 1,
      Three: 2,
    };
    scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };


  return (
    <NavWrap>
      <Logo>
        <p className={isActive == 0 ? 'active' : null}>Nav</p>
      </Logo>

      <NavList>
        {navItem}
      </NavList>
    </NavWrap>
  )
};

export default Nav;