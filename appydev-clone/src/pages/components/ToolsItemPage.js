/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled, { keyframes } from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import Transition, { CSSTransition } from 'react-transition-group';


import { ReactComponent as Add } from "../../assets/images/tools-item/add-circle.svg";
import { ReactComponent as Check } from "../../assets/images/tools-item/check-circle.svg";
import { ReactComponent as Link } from "../../assets/images/tools-item/external-link.svg";


const animationTiming = {
  enter: 200,
  exit: 200,
};

const openHover = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const closeMenu = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.98);
  }
`

const Bookmark = styled.div`
  display: flex;
  align-items: center;

  padding: 0 8px;
  height: 30px;
  border: 2px solid ${({theme}) => theme.colors.darkNavy};
  border-radius: 4px;
  > svg {margin-right: 5px;}
`
const ToLink = styled.div`
  width: 30px; height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  background-color: #4a5568;
`
const HoverBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  padding: 10px;

  font-size: 12px;

&.enter-active {
  > div {
    animation: ${openHover} 0.2s infinite;
  }
}
&.exit-active {
  > div {
    animation: ${closeMenu} 0.2s infinite;
  }
}

`
const ToolItem = styled(S.ShadowBox)`
  min-height: 410px;
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

  padding: 20px 0;
`

function ToolsItemPage({ mapContent, $nowPage, $setItemLength }) {
  const [isHover, setIsHover] = useState(true);

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }
  useEffect(()=>{
    let arr = [];
    for (let i = 0; i < mapContent.length; i++) {
      const item = mapContent[i];
      if(item.category === $nowPage || $nowPage === item.option || $nowPage === '/' || $nowPage === 'all') {
        arr.push(item);
      };
    };

    $setItemLength(arr.length);
  },[$nowPage]);
  
  return(
    <ItemWrap>
      {
        mapContent.map((item, index) => {
          // all 이라는 옵션을 가지고 있는 아이템이 없어서.. 모든 아이템에 all 이라는 옵션을 넣어주거나, 모든 아이템을 선택할 수 있는 코드를 만들어야함. 
          // ItemPage 라던가 새 컴포넌트 만들어서 tools, commuitis, potcast 모든 페이지 돌리는 건 디자인이 달라서 안돼려나.
          // 페이지마다 디자인을 설정한다면?
          // 뭘 수정했는지 모르겟는데 일단 되는 중
          if($nowPage === item.category || $nowPage === item.option || $nowPage === '/' || $nowPage === 'all'){
            return (
              <MovingUp key={index}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <ToolItem className='tool_item'>
                  
                  <CSSTransition
                    in={isHover}
                    timeout={animationTiming}
                    mountOnEnter
                    unmountOnExit
                  >
                    <HoverBox>
                      {
                        item.bookmark ?
                        <Bookmark className='fade-slide'>
                          <Check width='15px' height='15px'/>
                          <p>bookmarked</p>
                        </Bookmark>
                        :
                        <Bookmark className='fade-slide'>
                          <Add width='15px' height='15px'/>
                          <p>bookmark</p>
                        </Bookmark>
                      }
                      <ToLink className='fade-slide'>
                        <Link width='12px' height='12px'/>
                      </ToLink>
                    </HoverBox>
                  </CSSTransition>
                  {/* {
                    isHover &&
                    <HoverBox>
                      {
                        item.bookmark ?
                        <Bookmark>
                          <Check width='15px'/>
                          <p>bookmarked</p>
                        </Bookmark>
                        :
                        <Bookmark>
                          <Add width='15px'/>
                          <p>bookmark</p>
                        </Bookmark>
                      }
                      <ToLink>
                        <Link width='12px'/>
                      </ToLink>
                    </HoverBox>
                  } */}
                  
                  <div className='imgBox'>
                    {item.img}
                  </div>

                  <S.ShadowBox className='shopIcon'>{item.icon}</S.ShadowBox>

                  <div className='txtBox'>
                    <S.Title className='title'>
                      {item.name}
                    </S.Title>
                    <div className='explain'>{item.explain}</div>

                    <div className='bottomBox'>
                      <div className='tag'>
                        <S.BorderBox>
                          #{item.tag}
                        </S.BorderBox>
                        </div>
                      <div className='byName'>{item.artist}</div>
                    </div>
                  </div>
                </ToolItem>
              </MovingUp>
            )
          }
        })
      }
    </ItemWrap>
  )
}

export default ToolsItemPage;