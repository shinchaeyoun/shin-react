/* eslint-disable */
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';

import styled from 'styled-components';
import S from '../Styles/GlobalBlock';

import { ReactComponent as Arrow } from "../assets/images/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";
import { ReactComponent as Bookmark } from "../assets/images/bookmark.svg";

import { ReactComponent as Tools } from '../assets/images/menu.svg';
import { ReactComponent as Community } from '../assets/images/menu.svg';
import { ReactComponent as Podcast } from '../assets/images/menu.svg';

const NavBorderBox = styled(S.BorderBox)`
  padding: 0 10px;
  height: 48px;
  line-height: 40px;
  text-align: center;
  
  &:active{
    border-bottom-width: 2px;
    line-height: 42px;
  }
`
const MenuItem = styled.li`
  display: flex;
  align-items: center;

  padding: 3px 15px;

  > svg {
    margin-right: 8px;
  }
`
const DownMenu = styled(S.ShadowBox)`
  position: absolute;
  top: 52px;
  left: 0px;

  width: 200px;
  border-width: 2px;

  background-color: #fff;

  ${MenuItem}{
    border-bottom: 2px solid #000;
    &:last-child {
      border-bottom: none;
    }
  }

`
const NavItme = styled(NavBorderBox)`
  display: flex;
  align-items: center;

  position: relative;

  margin-right: 5px;
  padding-bottom: 2px;

  color: ${props => props.$fontColor};
  background-color: ${props => props.$btnColor};

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
  const [isDownMenu, setIsDownMenu] = useState(false);

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
            <NavItme onClick={()=>{navigate('/sponsors')}}
              $btnColor='#667eea' $fontColor='#fff'
            >
              Sponsors
            </NavItme>
            <NavItme onClick={()=>{
              // navigate('/explore');
                setIsDownMenu(!isDownMenu);
                console.log(isDownMenu,'isDownMenu');
              }}>
              Explore <Arrow width='20px' height='20px'/>
              <Transition
                in={isDownMenu} timeout={300}
                onEnter={() => console.log('onEnter')}
                onEntering={() => console.log('onEntering')}
                onEntered={() => console.log('onEntered','true 일 때')}
                onExit={() => console.log('onExit')}
                onExiting={() => console.log('onExiting')}
                onExited={() => console.log('onExited', 'false 일 때')}
              >
                {state => (
                  <DownMenu as="ul" show={isDownMenu}>
                    {state}
                    <MenuItem><Tools width='20px' height='20px'/>Tools</MenuItem>
                    <MenuItem><Community  width='20px' height='20px'/>Communities</MenuItem>
                    <MenuItem><Podcast width='20px' height='20px'/>Podcasts</MenuItem>
                  </DownMenu>
                )}
              </Transition>
              {/* {
                }
                isDownMenu ?
                <DownMenu as="ul">
                  <MenuItem><Tools width='20px' height='20px'/>Tools</MenuItem>
                  <MenuItem><Community  width='20px' height='20px'/>Communities</MenuItem>
                  <MenuItem><Podcast width='20px' height='20px'/>Podcasts</MenuItem>
                </DownMenu>
                :
                null
              } */}
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