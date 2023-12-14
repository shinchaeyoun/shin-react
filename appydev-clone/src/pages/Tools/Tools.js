/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import './Tools.scss';

import ToolsItemPage from '../components/ToolsItemPage.js'


const List = styled.ul`
  padding: 60px 0;
  height: 100%;
  `
const ListItem = styled(S.BorderBox)`
  font-size: 14px;
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
const Title = styled(S.Title)`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #2d3748;

  > svg {
    width: 26px; height: 26px;
  }

  > * {
    margin-right: 5px;
  }
`
const ToolItem = styled(S.ShadowBox)`
  min-height: 400px;
  margin: 0 4px 15px;
  border-bottom-width: 2px;

  background-color: #fff;
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
  padding: 80px 0px;
  width: 80%;
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

  const [activeCate, setActiveCate] = useState(0);
  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [toolsItem, setToolsItem] = useState(toolsItmes);
  const [title, setTitle] = useState('');
  const [nowPage, setNowPage] = useState('/');

  const [itemLength, setItemLength] = useState(toolsItem.length);
  
  
  return(
    <Main>
      <List>
        {
          toolsCategoty.map((item, index) => {
            return (
              <ListItem as='li' key={index}
                onClick={()=>{
                  navigate(item.link);
                  setActiveCate(index);
                  setNowPage(item.link);
                  setTitle(item.name);
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
        {
          nowPage==='/' ?
          <Title>
            <span>
              All
            </span>
            <span>({itemLength})</span>
          </Title>
          :
          <Title>
            {toolsCategoty[activeCate].icon}
            <span>
              {title}
            </span>
            <span>(Found {itemLength})</span>
          </Title>
        }
        
        <ToolsItemPage $nowPage={nowPage} $itemLength={itemLength} $setItemLength={setItemLength}/>
      </Section>
    </Main>
  )
}

export default Tools;