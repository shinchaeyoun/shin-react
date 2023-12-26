/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBookmark } from '../../store';

import styled, { keyframes } from 'styled-components';
import S from '../../Styles/GlobalBlock.js';
import { CSSTransition } from 'react-transition-group';

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
const ImgBox = styled.div`
  max-height: 192px;
  overflow: hidden;
  > img {
    width: 100%; height: 100%;
  }
`
const Shopicon = styled(S.ShadowBox)`
  position: absolute;
  top: 162px;
  left: 10px;
  width: 60px; height: 60px;
  color: #718096;
  border-radius: 50%;
  border-bottom-width: 2px;
  border-color:#a0aec0a1;
  overflow: hidden;
  > img {
    width: 100%; height: 100%;
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
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [hoverIdx, setHoverIdx] = useState('');
  
  const toolsItmes = useSelector((state) => state.toolsItmes);
  const [toolsItem, setToolsItem] = useState(toolsItmes);

  const handleMouseOver = (index) => {
    setIsHover(true);
    setHoverIdx(index);
  };

  const handleMouseOut = () => {
    setIsHover(false);
    setHoverIdx('');
  };

  const bookmarkFn = (index) => {
    console.log('클릭마다 실행?');
    setIsBookmark(!isBookmark);
    dispatch(setBookmark([index, isBookmark]));
  };

  useEffect(()=>{
    // isBookmark가 수정될 때 마다 실행되는 useEffectcig
    console.log(isBookmark,'isBookmark changing');
  }, [isBookmark]);

  useEffect(()=>{
    let arr = [];
    for (let i = 0; i < toolsItmes.length; i++) {
      const item = toolsItmes[i];
      if(item.category === $nowPage || $nowPage === item.option || $nowPage === '/' || $nowPage === 'all') {
        arr.push(item);
      };
    };

    $setItemLength(arr.length);
  },[$nowPage]);
  
  return(
    <ItemWrap>
      {
        toolsItmes.map((item, index) => {
          if($nowPage === item.category || $nowPage === item.option || $nowPage === '/' || $nowPage === 'all'){

            return (
              <MovingUp key={index}
                onMouseOver={()=>{handleMouseOver(index)}}
                onMouseOut={()=>{handleMouseOut}}
              >
                <ToolItem className='tool_item'>
                  {
                    index === hoverIdx &&
                  
                  <CSSTransition
                    in={isHover}
                    timeout={animationTiming}
                    mountOnEnter
                    unmountOnExit
                  >
                      <HoverBox onClick={()=>{
                        bookmarkFn(index);
                      }}>
                        <Bookmark className='fade-slide'>
                        {
                          item.bookmark ?
                          <>
                            <Check width='15px' height='15px'/>
                            <p>bookmarked</p>
                          </>
                          :
                          <>
                            <Add width='15px' height='15px'/>
                            <p>bookmark</p>
                          </>
                        }
                        </Bookmark>
                            
                        <ToLink className='fade-slide'>
                          <Link width='12px' height='12px'/>
                        </ToLink>
                      </HoverBox>
                  </CSSTransition>
                    }
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
                  
                  <ImgBox>
                    <img src={require('../../assets/images/tools-item/'+item.img+'.png')} alt={item.img}/>
                  </ImgBox>

                  <Shopicon>
                    {/* {item.icon} */}
                    <img src={require('../../assets/images/tools-item/'+item.icon+'.png')} alt={item.icon}/>
                  </Shopicon>

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