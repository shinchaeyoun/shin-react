/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import S from '../Styles/GlobalBlock';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Tools } from '../assets/images/menu.svg';
import { ReactComponent as Community } from '../assets/images/community.svg';
import { ReactComponent as Podcast } from '../assets/images/podcast.svg';

const animationTiming = {
  enter: 10000,
  exit: 10000,
};

const Title = styled(S.Title)`
  width: 100%;
  font-size: 34px;
  text-align: center;
`
const TxtBox = styled.div`
  line-height: 24px;
`
const Item = styled(S.ShadowBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  padding: 20px;

  width: calc(100% / 3);
  width: 240px;
  height: 260px;

  text-align: center;
  background-color: #fff;
  border-width: 3px;

  transition: all .5s;

  &:nth-child(2) {
    margin: 0 12px;
  };
  ${Title} {
    margin: 15px 0;
    color: ${({theme}) => theme.colors.darkNavy};
    font-size: 20px;
  };
  &:hover {
    transform: translateY(-7px);
  };
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`
const Main = styled(S.Main)`
  padding: 60px 0;
  width: 740px;
  min-height: 500px;
`
function Submit() {
  const submitCategory = [
    {
      title: 'tool',
      explan: 'Submit a tool or product which you think other people should be using more often',
      icon: <Tools width='64px' height='64px'/>,
      link: '/submit/tool',
    },
    {
      title: 'community',
      explan: 'If you are a member of or know a awesome community, do let us know',
      icon: <Community width='64px' height='64px'/>,
      link: '/submit/community',
    },
    {
      title: 'podcast',
      explan: 'If you are hooked to some awsome podcasts, do share is with us.',
      icon: <Podcast width='64px' height='64px'/>,
      link: '/submit/podcast',
    },
  ]

  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuShow, setIsMenuShow] = useState(true);
  const [isOutletShow, setIsOutletShow] = useState(false);

  useEffect(()=>{
    if(location.pathname == '/submit'){
      setIsMenuShow(true);
      setIsOutletShow(false);
    }
  },[location]);

  return(
    <Main>
      <Title>What do you want to submit?</Title>

      <CSSTransition
        in={isMenuShow}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames='movingPage'
      >
      {
        !isOutletShow ?
          <ItemContainer>
            {
              submitCategory.map((item, index) => {
                return (
                  <Item
                    key={index}
                    onClick={()=>{
                      setIsOutletShow(true);
                      setIsMenuShow(false);
                      navigate(item.link);
                    }}
                  >
                    {item.icon}
                    <Title>{item.title}</Title>
                    <TxtBox>{item.explan}</TxtBox>
                  </Item>
                )
              })
            }
          </ItemContainer>
          :
          <Outlet context={{ isOutletShow, setIsOutletShow, setIsMenuShow }} />
      }
      </CSSTransition>

      <div>
        Help Appydev collect more tools, communities & podcasts which other can use and share. Plus the indie developers get their products & tools more exposure and ger benefited.
      </div>
    </Main>
  )
}

export default Submit;