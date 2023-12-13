/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import './Tools.scss';

import API from '../components/API.js';

const List = styled.ul`
  padding: 60px 0;
  height: 100%;
  `
const ListItem = styled(S.BorderBox)`
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #ddd;

  > div {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    transition: all .5s;
    &.active {
      background-color: #fff;
    }

    &:hover {
      transform: translateX(8px);
    }

    > .icon {
      margin-right: 5px;
    }
  }
`
const ToolItem = styled(S.ShadowBox)`
  
  min-height: 400px;
  /* margin-bottom: 15px; */
  margin: 0 4px 15px;
  border-bottom-width: 2px;
`
const MovingUp = styled(S.MovingUp)`
  transition: all .3s;
  &:hover {
    transform: translateY(-5px);
  }
`
const ItemWrap = styled.div`
  display: grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 120px 0;
`
const Section = styled(S.Section)`
  padding: 16px;
  width: 80%;
  background-color: #d4e4eb;
`
const Main = styled(S.Main)`
  display: flex;
  justify-content: space-between;


  max-width: 1000px;
`

function Tools() {
  const navigate = useNavigate();
  const toolsCategotys = useSelector((state) => state.categorys);
  const [toolsCategoty, setToolsCategoty] = useState(toolsCategotys);

  const [activeCate, setActiveCate] = useState(3);
  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [toolsItem, setToolsItem] = useState(toolsItmes);
  const [nowPage, setNowPage] = useState('api');
  return(
    <Main>
      <List>
        {
          toolsCategoty.map((item, index) => {
            return (
              <ListItem as='li' key={index}
                onClick={()=>{
                  navigate(item.link);
                  setNowPage(item.link)
                }}
              >
                <div className={activeCate == index ? 'active':null}>
                  <span className='icon'>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </ListItem>
            )
          })
        }
      </List>

      <Section>
        {/* <Routes path="/" element={<Tools />}>
          <Route path="/api" element={<API />} />
        </Routes> */}
        <S.Title>title</S.Title>
        <ItemWrap>
            {
              toolsItem.map((item, index) => {
                if(item.category === nowPage)
                return (
                  <MovingUp>
                    <ToolItem  key={index}>
                      {item.name}
                    </ToolItem>
                  </MovingUp>
                )
              })
            }
          
        </ItemWrap>
      </Section>
    </Main>
  )
}

export default Tools;