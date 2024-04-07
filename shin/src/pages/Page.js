import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';

import Nav from '../components/Nav';


const MainWrap = styled.div`
  display: flex;
  position: relative;
`

// const NavList = styled.ul`
//   border: 1px solid #000;
//   width: 200px;
// `


function Page(){

  return (
    <MainWrap>
      <Nav />
      
      <section>
        <Outlet></Outlet>
      </section>
    </MainWrap>
  )
};

export default Page;