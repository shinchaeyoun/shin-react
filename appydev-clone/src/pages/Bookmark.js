/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import S from './../Styles/GlobalBlock';
import { AppContext } from '../Router';

import { ReactComponent as UnhappyFace } from '../assets/images/unhappy-face.svg';

const Title = styled(S.Title)`
  font-size: 34px;
`
const EmptyBookmark = styled.div`
  text-align: center;

  padding: 80px 0;

  > p {
    margin-top: 20px;
  }
`
const Main = styled(S.Main)`
  width: 640px;
  min-height: 400px;

  padding: 60px 0;

  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.outfit};
`
function Bookmark() {
  const { isBookMark, setIsBookmark } = useContext(AppContext);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(()=>{
    console.log(isBookMark,'isBookMark');
    if(isBookMark > 0) {
      setIsEmpty(false);
    }
  }, []);
  return(
    <Main>
      <Title>Bookmarks</Title>
      {
        isEmpty ?
        <EmptyBookmark>
          <UnhappyFace/>
          <p>
            No bookmarks found, go add something and you can even email it to youself.
          </p>
        </EmptyBookmark>
        :
        <div>have</div>
      }
    </Main>
  )
}

export default Bookmark;