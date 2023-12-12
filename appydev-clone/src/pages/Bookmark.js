/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import S from './../Styles/GlobalBlock';
import { AppContext } from '../Router';

import { ReactComponent as UnhappyFace } from '../assets/images/unhappy-face.svg';

const Title = styled(S.Title)`
  
`
const EmptyBookmark = styled.div`
  text-align: center;
`
const Main = styled(S.Main)`
  width: 640px;
  min-height: 400px;

  padding: 148px 0;
  border: 1px solid #f00;

  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.outfit};
`
function Bookmark() {
  const { isBookMark, setIsBookmark } = useContext(AppContext);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(()=>{
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