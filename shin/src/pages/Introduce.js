/* eslint-disable */

import React, {useState} from 'react';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';

// 오른쪽 
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const TextBlock = styled.div`
`
const ImgBlock = styled.div`
  > img {
    width: 100%; height: 100%;
    object-fit: cover;
  }
`

function Introduce(){
  

  const imgArr = [
    'https://i.pinimg.com/736x/42/64/26/4264263a52c590ba0697942407971b32.jpg',
    'https://i.pinimg.com/564x/a5/c7/6f/a5c76f3eca890ac527a6c0c05940e3d6.jpg',
    'https://i.pinimg.com/564x/f1/2c/47/f12c47bf097e960cb8c1d304c318c134.jpg',
    'https://i.pinimg.com/564x/69/b3/2a/69b32a821ae4cc48d648e857060a9236.jpg',
    'https://i.pinimg.com/564x/e6/17/6b/e6176b4b56c0f8817c4f0076f5becf61.jpg',
    'https://i.pinimg.com/564x/c5/4e/f0/c54ef052f7857b54eac84eec76ae2115.jpg',
    'https://i.pinimg.com/564x/10/98/cd/1098cdb1f31ad70f1a84775ef3ce3ee7.jpg'
  ];

  const randomNum = Math.floor(Math.random() * (imgArr.length - 1) + 1);
  const [isHover, setHover] = useState(randomNum);

  return (
    <Wrap>
      <TextBlock>
        <S.Block>
          <S.BlockTitle>Profile</S.BlockTitle>
          <ul>
            <li>이름: 신채연</li>
            <li>생년월일: 1998.02.17</li>
            <li>주소: 서울시 강서구</li>
            <li>연락처: 010-9230-9218</li>
            <li>이메일: jun29182877@gmail.com</li>
          </ul>
        </S.Block>

        <S.Block>
          <S.BlockTitle>Greeting</S.BlockTitle>
          <ul>
            <li>최승철</li>
            <li>윤정한</li>
            <li>홍지수</li>
            <li>문준휘</li>
            <li>권순영</li>
            <li>전원우</li>
            <li>이지훈</li>
            <li>서명호</li>
            <li>김민규</li>
            <li>이석민</li>
            <li>부승관</li>
            <li>최한솔</li>
            <li>이찬</li>
          </ul>
        </S.Block>

        <S.Block>
          <S.BlockTitle>interest</S.BlockTitle>
          <ul>
            <li>운전</li>
            <li>사진</li>
            <li>독서</li>
          </ul>
        </S.Block>

        <S.Block>
          <S.BlockTitle>Personality</S.BlockTitle>
          <ul>
            <li>게으름</li>
            <li>낮가림</li>
            <li>살가움</li>
            <li>무던함</li>
          </ul>
        </S.Block>

        <S.Block>
          <S.BlockTitle>motive</S.BlockTitle>
          <ul>
            <li>프리랸서가 되기 가장 빠른 길인 것 같아서</li>
          </ul>
        </S.Block>

        <S.Block>
          <S.BlockTitle>future plang</S.BlockTitle>
          <ul>
            <li>프리랸서가 될 것이다.</li>
          </ul>
        </S.Block>
      </TextBlock>

      <ImgBlock onMouseOver={()=>{
        setHover(Math.floor(Math.random() * (imgArr.length - 1) + 1));
      }}>
        <img src={imgArr[isHover]}/>
      </ImgBlock>
    </Wrap>
  )
};

export default Introduce;