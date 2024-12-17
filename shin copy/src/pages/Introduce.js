/* eslint-disable */
import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import S from '../styles/GlobalBlock';


const TextBlock = styled(S.GridItem)``
const ImgBlock = styled(S.GridItem)`
  font-size: 100px;
  text-align: center;
  font-weight: bold;
  color: blue;
`

const GridContainer = styled(S.GridContainer)`
  grid-template-rows: minmax(610px, auto);
`

function Introduce() {
  const imgArr = [
    '/images/introduce/sample1.png',
    '/images/introduce/sample2.png',
    '/images/introduce/sample3.png',
    '/images/introduce/sample4.png',
    '/images/introduce/sample5.png',
    '/images/introduce/sample6.png',
    '/images/introduce/sample7.png',
    '/images/introduce/sample8.png',
    '/images/introduce/sample9.png',
    '/images/introduce/sample10.png',
    '/images/introduce/sample11.png',
    '/images/introduce/sample12.png',
    '/images/introduce/sample13.png',
    '/images/introduce/sample14.png',
    '/images/introduce/sample15.png',
    '/images/introduce/sample16.png',
    '/images/introduce/sample17.png',
    '/images/introduce/sample18.png',
    '/images/introduce/sample19.png',
    '/images/introduce/sample20.png',
    '/images/introduce/sample21.png',
    '/images/introduce/sample22.png',
    '/images/introduce/sample23.png',
    '/images/introduce/sample24.png',
    '/images/introduce/sample25.png',
    '/images/introduce/sample26.png',
    '/images/introduce/sample27.png',
    '/images/introduce/sample28.png',
    '/images/introduce/sample29.png',
    '/images/introduce/sample30.png',
    '/images/introduce/sample31.png',
    '/images/introduce/sample32.png',
    '/images/introduce/sample33.png',
    '/images/introduce/sample34.png',
    '/images/introduce/sample35.png',
    '/images/introduce/sample36.png',
    '/images/introduce/sample37.png',
    '/images/introduce/sample38.png',
    '/images/introduce/sample39.png',
    '/images/introduce/sample40.png',
    '/images/introduce/sample41.png',
    '/images/introduce/sample42.png',
    '/images/introduce/sample43.png',
    '/images/introduce/sample44.png',
    '/images/introduce/sample45.png',
    '/images/introduce/sample46.png',
    '/images/introduce/sample47.png',
    '/images/introduce/sample48.png',
    '/images/introduce/sample49.png',
    '/images/introduce/sample50.png',
    '/images/introduce/sample51.png',
    '/images/introduce/sample52.png',
    '/images/introduce/sample53.png',
    '/images/introduce/sample54.png',
    '/images/introduce/sample55.png',
    '/images/introduce/sample56.png',
    '/images/introduce/sample57.png',
    '/images/introduce/sample58.png',
    '/images/introduce/sample59.png',
    '/images/introduce/sample60.png',
    '/images/introduce/sample61.png',
    '/images/introduce/sample62.png',
    '/images/introduce/sample63.png',
    '/images/introduce/sample64.png',
    '/images/introduce/sample65.png',
    '/images/introduce/sample66.png',
    '/images/introduce/sample67.png',
    '/images/introduce/sample68.png',
    '/images/introduce/sample69.png',
    '/images/introduce/sample70.png',
    '/images/introduce/sample71.png',
    '/images/introduce/sample72.png',
    '/images/introduce/sample73.png',
    '/images/introduce/sample74.png',
    '/images/introduce/sample75.png',
    '/images/introduce/sample76.png',
    '/images/introduce/sample77.png',
    '/images/introduce/sample78.png',
    '/images/introduce/sample79.png',
    '/images/introduce/sample80.png',
    '/images/introduce/sample81.png',
    '/images/introduce/sample82.png',
    '/images/introduce/sample83.png',
    '/images/introduce/sample84.png',
  ];

  const [isHover, setHover] = useState(0);

  return (
    <GridContainer>
      <TextBlock>
        <S.Block>
          <S.Title>Title</S.Title>
          <S.Content>
            <div><span>span </span>div</div>
            <div><span>span </span>div</div>
            <div><span>span </span>div</div>
            <div><span>span </span>div</div>
            <div><span>span </span>div</div>
          </S.Content>
        </S.Block>

        <S.Block>
          <S.Title>Title</S.Title>
          <S.Content>
            <div>Content</div>
          </S.Content>
        </S.Block>

        <S.Block>
          <S.Title>Title</S.Title>
          <S.Content>
            <div>Content</div>
          </S.Content>
        </S.Block>
      </TextBlock>

      <ImgBlock onMouseOver={() => {
        setHover(Math.floor(Math.random() * (imgArr.length)));
      }}
        bg={imgArr[isHover]}
      ></ImgBlock>
    </GridContainer>
  )
};

export default Introduce;