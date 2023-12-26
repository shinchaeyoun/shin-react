/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled, {css} from 'styled-components';
import S from '../Styles/GlobalBlock';

import { ReactComponent as Arrow } from "../assets/images/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";
import { ReactComponent as Bookmark } from "../assets/images/bookmark.svg";

import { ReactComponent as Tools } from '../assets/images/menu.svg';
import { ReactComponent as Community } from '../assets/images/community.svg';
import { ReactComponent as Podcast } from '../assets/images/podcast.svg';

import './Header.scss';
import DownMenu from '../components/DownMenu';


const downMenuInfo = [
  {
    name: 'Tools',
    icon: <Tools width='20px' height='20px'/>,
    link: '/'
  },
  {
    name: 'Communities',
    icon: <Community width='20px' height='20px'/>,
    link: '/communities'
  },
  {
    name: 'Podcasts',
    icon: <Podcast width='20px' height='20px'/>,
    link: '/podcasts'
  },
]

const NavBorderBox = styled(S.BorderBox)`
  padding: 0 10px;
  height: 48px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  
  &:active{
    border-bottom-width: 2px;
    line-height: 42px;
  }
`
const NavItme = styled(NavBorderBox)`
  display: flex;
  align-items: center;

  /* margin-left: 5px; */
  padding-bottom: 2px;

  color: ${props => props.$fontColor};
  background-color: ${props => props.$btnColor};

  /* &:last-child {
    margin-right: 0;
  } */
`
const DownMenuWrap = styled.div`
  position: relative;
`
const NavItemWrap = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 430px;
` 
const IconLogo = styled(NavBorderBox)`
  width: 50px;
  font-size: 24px;
  font-weight: bold;
`
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
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
  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [isDownMenu, setIsDownMenu] = useState(false);
  const [isBookmarkNum, setIsBookmarkNum] = useState(0);
  const downMenuRef = useRef();
  let bmArr = [];

  const bookmarkFn = () => {
    for (let i = 0; i < toolsItmes.length; i++) {
      const item = toolsItmes[i];
      if(item.bookmark) {
        bmArr.push(item);
      };
      setIsBookmarkNum(bmArr.length);
    };
  };

  useEffect(()=>{
    bookmarkFn();
    console.log('toolsItmes changing');
  }, [toolsItmes]);

  useEffect(()=>{
    const handleOutside = (e) => {
      if(downMenuRef.current && !downMenuRef.current.contains(e.target)){
        setIsDownMenu(false);
      };
    };
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  },[downMenuRef]);

  return(
    <>
      <Nav>
        <Container>
          <IconLogo onClick={()=>{navigate('/')}}>#</IconLogo>
          <Logo onClick={()=>{navigate('/')}}>appydev</Logo>

          <SearchBox>
            <div>0</div>
            <input placeholder='Search Tools, Creators & Communities'></input>
          </SearchBox>

          <NavItemWrap>
            <NavItme onClick={()=>{navigate('/sponsors')}}
              $btnColor='#667eea' $fontColor='#fff'
            >
              Sponsors
            </NavItme>
            <DownMenuWrap ref={downMenuRef}>
              <NavItme onClick={()=>{setIsDownMenu(!isDownMenu)}}>
                  Explore <Arrow width='20px' height='20px'/>
              </NavItme>
              <DownMenu header={true} show={isDownMenu} showHandle={setIsDownMenu} info={downMenuInfo} $border={true}/>
            </DownMenuWrap>
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