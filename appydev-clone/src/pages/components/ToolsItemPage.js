/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock.js';

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
          
          if($nowPage === item.category || $nowPage === item.option || $nowPage === '/' || $nowPage === 'all'){
            return (
              <MovingUp key={index}>
                <ToolItem className='tool_item'>
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