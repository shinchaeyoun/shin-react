/* eslint-disable */
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import S from '../Styles/GlobalBlock';

import { ReactComponent as Arrow } from "../assets/images/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";
import { ReactComponent as Bookmark } from "../assets/images/bookmark.svg";


const NavBorderBox = styled(S.BorderBox)`
  padding: 0 10px;
  height: 48px;
  line-height: 40px;
  text-align: center;
`
const NavItme = styled(NavBorderBox)`
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`
const NavItemWrap = styled.div`
  display: flex;
` 
const IconLogo = styled(NavBorderBox)`
  width: 50px;
  font-size: 24px;
  font-weight: bold;
`
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`
const SearchBox = styled(S.BorderBox)`
  display: flex;
  
  align-items: center;
  padding: 0 10px;
  width: 400px;
  height: 48px;

  > input {
    width: 100%;
    /* padding: 10px 0; */
    margin-left: 10px;
    font-size: 16px;
    outline: none;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.colors.gray};
    }
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
`
const Nav = styled.nav`
  font-family: ${({theme}) => theme.fonts.outfit};

  width: 100%;
  height: 80px;

  background-color: #fff;
  border-bottom: 0 solid #e2e8f0;
`
function Header() {
  const navigate = useNavigate();
  const [isBookmarkNum, setIsBookmarkNum] = useState(0);

  return(
    <>
      <Nav>
        <Container>
          <IconLogo onClick={()=>{navigate('/')}}>#</IconLogo>
          <Logo>appydev</Logo>

          <SearchBox>
            <div>O</div>
            <input placeholder='Search Tools, Creators & Communities'></input>
          </SearchBox>

          <NavItemWrap>
            <NavItme onClick={()=>{navigate('/sponsors')}}>
              Sponsors
            </NavItme>
            <NavItme onClick={()=>{navigate('/explore')}}>
              Explore <Arrow width='20px' height='20px'/>
            </NavItme>
            <NavItme onClick={()=>{navigate('/submit')}}>
              <ArrowUp width='20px' height='20px'/>
              Submit
            </NavItme>
            <NavItme onClick={()=>{navigate('/bookmark')}}>
              <Bookmark width='20px' height='20px'/>
              {isBookmarkNum} Bookmark
            </NavItme>
          </NavItemWrap>
        </Container>
      </Nav>
    </>
  )
}

export default Header;