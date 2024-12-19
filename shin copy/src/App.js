/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import styled, { css } from 'styled-components';
import S from './styles/GlobalBlock';

import Section1 from './components/Section1.js'
import Section2 from './components/Section2.js'
import Section3 from './components/Section3.js'
import Section4 from './components/Section4.js'

const Wrap = styled(S.FrameInner)`
  position: relative;
  display: flex;
`
const Main = styled.main`
  width: calc( 100%);
`
const NavWrap = styled.div`
  flex-shrink: 0;
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
function App() {
  const navs = ['nav', 'nav', 'nav', 'nav'];
  const sections = [<Section1 />, <Section2 />, <Section3 />, <Section4 />];

  const [isActive, setIsActive] = useState(0);
  const [isDownMenu, setIsDownMenu] = useState(false);
  const downMenuRef = useRef();

  const scrollRef = useRef([]);

  const navItem = navs.map((item, index) => {
    return (
      <NavItem key={index}
        onClick={() => {
          // scrollRef.current[index].scrollIntoView({behavior: "smooth"});
          window.scrollTo({
            top: scrollRef.current[index].offsetTop - 35,
            behavior: "smooth"
          });
        }}
      >
        <p>{item}</p>
      </NavItem >
    );
  });
  const sectionItem = sections.map((item, index) => {
    return (
      <NavItem key={index} ref={(el) => (scrollRef.current[index] = el)}>
        {sections[index]}
      </NavItem>
    )
  });

  return (
    <Wrap>
      <NavWrap>
        <Logo>
          <p className={isActive == 0 ? 'active' : null}>Nav</p>
        </Logo>

        <NavList>
          {navItem}
        </NavList>
      </NavWrap>

      <Main id="main">
        {sectionItem}
      </Main>
    </Wrap>
  )
};

export default App;