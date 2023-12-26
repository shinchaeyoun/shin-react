/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import filterData from './ToolsData.js';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import './Tools.scss';


import DownMenu from '../../components/DownMenu';
import ToolsItemPage from './ToolsItemPage.js'

import {listIcon} from './ListIcon.js';

import { ReactComponent as Arrow } from "../../assets/images/arrow-down.svg";




const DownMenuWrap = styled.div`
  position: relative;
`
const List = styled.ul`
  padding: 60px 0;
  height: 100%;
  width: 20%;
`
const ListIcon = styled.span`
  margin-right: 5px;
  width: 20px;
`
const ListItem = styled(S.BorderBox)`
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #ddd;

  cursor: pointer;

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
const DownMenuBtn = styled(S.BorderBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 15px;
  height: 48px;
  line-height: 40px;

  font-family: ${({theme}) => theme.fonts.assistant};
  text-align: center;
  background-color: #fff;

  cursor: pointer;

  > svg {
    margin-left: 5px;
  }

  &:active{
    border-bottom-width: 2px;
    line-height: 42px;
  }
`
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 48px;
  ${DownMenuWrap}{
    text-transform: capitalize;
  }
`
const Section = styled(S.Section)`
  padding: 80px 0px 80px 15px;
  width: 80%;

`
const Main = styled(S.Main)`
  display: flex;
  justify-content: space-between;

  max-width: 1024px;
`

function Tools() {
  // 순서 정리하기
  const navigate = useNavigate();
  const [isDownMenu, setIsDownMenu] = useState(false);
  const [isFilter, setIsFilter] = useState('all');
  const [activeCate, setActiveCate] = useState(0);
  const [title, setTitle] = useState('');
  const [nowPage, setNowPage] = useState('/');
  const downMenuRef = useRef();
  const toolsCategotys = useSelector((state) => state.categorys);
  const [toolsCategoty, setToolsCategoty] = useState(toolsCategotys);
  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [toolsItem, setToolsItem] = useState(toolsItmes);
  const [itemLength, setItemLength] = useState(toolsItem.length);

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
                  index === 0 && setIsFilter('all'); // filter reset
                }}
              >
                <div className={activeCate == index ? 'active':null}>
                  {listIcon.map(({name, icon}, idx)=>(
                    idx === index &&
                    <ListIcon key={idx}>
                      {icon()}
                    </ListIcon> 
                  ))}
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
          <>
            <TitleBox>
              <Title>
                <span>
                  All
                </span>
                <span>({itemLength})</span>
              </Title>
                
              <DownMenuWrap ref={downMenuRef}>
                <DownMenuBtn onClick={()=>{setIsDownMenu(!isDownMenu);}}>
                  {
                    isFilter === 'all' ? 'Filter': isFilter
                  }
                  <Arrow className={isDownMenu ? 'active' : null} width='20px' height='20px'/>
                </DownMenuBtn>
                <DownMenu
                  header={false}
                  show={isDownMenu}
                  showHandle={setIsDownMenu}
                  info={filterData}
                  $top='55px'
                  $left='initial'
                  $right='0px'
                  $border={false}
                  filter={isFilter}
                  filterHandle={setIsFilter}
                />
              </DownMenuWrap>
            </TitleBox>

            <ToolsItemPage
              mapContent={toolsItem}
              $nowPage={isFilter}
              $setItemLength={setItemLength}/>
          </>
          :
          <>
            <TitleBox>
              <Title>
                {toolsCategoty[activeCate].icon}
                <span>
                  {title}
                </span>
                <span>(Found {itemLength})</span>
              </Title>
            </TitleBox>
            
            <ToolsItemPage
              mapContent={toolsItem}
              $nowPage={nowPage}
              $setItemLength={setItemLength}/>
          </>
        }
      </Section>
    </Main>
  )
}

export default Tools;