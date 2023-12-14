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

function ToolsItemPage({ mapContent ,$nowPage, $setItemLength, $filter}) {
  
  
  function setLength () {
    let arr = [];
    for (let i = 0; i < mapContent.length; i++) {
      const item = mapContent[i];
      if(item.category === $nowPage || $nowPage === '/') {
        arr.push(item);
      };
    };

    $setItemLength(arr.length);
  };
  
  useEffect(()=>{
    let arr = [];
    for (let i = 0; i < mapContent.length; i++) {
      const item = mapContent[i];
      if(item.category === $nowPage || $nowPage === '/') {
        arr.push(item);
      };
    };

    $setItemLength(arr.length);
  },[$nowPage]);

  // const result = toolsItem.filter((toolsItem) => toolsItem.option == 'freemium')

  return(
    <ItemWrap>
      {
        mapContent.map((item, index) => {
          if($nowPage === item.category || $nowPage === '/'){
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