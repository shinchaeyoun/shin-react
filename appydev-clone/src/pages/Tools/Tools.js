/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import './Tools.scss';

import DownMenu from '../../components/DownMenu';
import ToolsItemPage from '../components/ToolsItemPage.js'


import { ReactComponent as Arrow } from "../../assets/images/arrow-down.svg";

const downMenuInfo = [
  {
    name: 'all',
    link: '/'
  },
  {
    name: 'Free',
    link: '/'
  },
  {
    name: 'freemium',
    link: '/'
  },
  {
    name: 'generous free plan',
    link: '/'
  },
  {
    name: 'open source',
    link: '/'
  },
  {
    name: 'paid',
    link: '/'
  },
  {
    name: 'paid with trial',
    link: '/'
  },
  {
    name: 'practially free',
    link: '/'
  },
]

const DownMenuWrap = styled.div`
  position: relative;
`
const List = styled.ul`
  padding: 60px 0;
  height: 100%;
  width: 20%;
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
  padding: 80px 0px;
  width: 80%;
`
const Main = styled(S.Main)`
  display: flex;
  justify-content: space-between;

  max-width: 1024px;
`

function Tools() {
  const navigate = useNavigate();
  const [isDownMenu, setIsDownMenu] = useState(false);
  const [isFilter, setIsFilter] = useState('Filter');
  const toolsCategotys = useSelector((state) => state.categorys);
  const [toolsCategoty, setToolsCategoty] = useState(toolsCategotys);

  // const toolsItmes = useSelector((state) => state.toolsItmes);
  // const [toolsItem, setToolsItem] = useState(toolsItmes);

  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [toolsItem, setToolsItem] = useState(toolsItmes);
  const filterContent = toolsItem.filter((toolsItem) => toolsItem.option == isFilter);
  const [activeCate, setActiveCate] = useState(0);
  const [title, setTitle] = useState('');
  const [nowPage, setNowPage] = useState('/');

  const [itemLength, setItemLength] = useState(toolsItem.length);

  const downMenuRef = useRef();

  
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
                  info={downMenuInfo}
                  $top='55px'
                  $left='initial'
                  $right='0px'
                  $border={false}
                  filter={isFilter}
                  filterHandle={setIsFilter}
                  />
              </DownMenuWrap>
            </TitleBox>
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
            
          </>
        }
        
        <ToolsItemPage mapContent={toolsItem} $nowPage={nowPage} $setItemLength={setItemLength}/>
        <ToolsItemPage mapContent={filterContent} $nowPage={nowPage} $setItemLength={setItemLength}/>
        
      </Section>
    </Main>
  )
}

export default Tools;