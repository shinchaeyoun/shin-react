/* eslint-disable */
import React, { useState, useEffect } from 'react';

import ItemData from './PodcastsData';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Letter } from '../../assets/images/Communities/letter.svg';
import { ReactComponent as Add } from "../../assets/images/tools-item/add-circle.svg";
import { ReactComponent as Check } from "../../assets/images/tools-item/check-circle.svg";

const animationTiming = {
  enter: 200,
  exit: 200,
};

const PodcastItem = styled(S.ShadowBox)`
  align-self: stretch;
  justify-self: stretch;

  position: relative;
  
  background-image: url(${props => props.$bg});
  border: none;
  box-shadow: 0 4px 8px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.01);
`
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto));
  grid-auto-rows: minmax(200px, auto);
  
  column-gap: 10px;
  row-gap: 10px;

  padding-right: 20px;
  width: 70%;
`
const TitleArea = styled.div`
  padding: 0 20px;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  color: ${({theme}) => theme.colors.deepGray};
  
  ${S.Title}{
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
`
const Section = styled(S.Section)`
  display: flex;
  padding: 0 20px;
  width: 100%;
/* background-color: #fff; */
`
const Main = styled(S.Main)`
  max-width: 1024px;
  font-family: ${({theme}) => theme.fonts.outfit};
`

function Podcasts() {
  const [isHover, setIsHover] = useState(false);
  const [hoverIdx, setHoverIdx] = useState('');
  const [isBookmark, setIsBookmark] = useState(false);

  const handleMouseOver = (index) => {
    setIsHover(true);
    setHoverIdx(index);
  };
  
  const handleMouseOut = () => {
    setIsHover(false);
    setHoverIdx('');
  };

  const bookmarkFn= (bool) => {
    console.log(bool,'bool');
    setIsBookmark(bool);
  };

  // useEffect(() => {
  //   console.log('?');
  // },[isBookmark])

  return(
    <Main>
      <TitleArea>
        <S.Title>Podcasts</S.Title>
        <p>A collection of amazing podcasts that will definitely help you become a better developer, creator & a better 'marker'.</p>
      </TitleArea>

      <Section>
        <ItemContainer>
          {
            ItemData.map((item, index) => {
              return (
                <PodcastItem key={index} $bg={require('../../assets/images/podcasts/'+item.potcastImg+'.png')} title={item.name}
                onMouseOver={()=>{handleMouseOver(index)}}
                onMouseOut={()=>{handleMouseOut()}}
                >
                  {
                    index === hoverIdx &&
                    <CSSTransition
                      in={isHover}
                      timeout={animationTiming}
                      mountOnEnter
                      unmountOnExit
                    >
                      <S.HoverBox>
                        <S.Bookmark
                          className='fade-slide'
                          onClick={()=>{
                            item.bookmark = !item.bookmark;
                            setIsBookmark(item.bookmark);
                          }}>
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
                        </S.Bookmark>
                      </S.HoverBox>
                    </CSSTransition>
                  }
                </PodcastItem>
              )
            })
          }
        </ItemContainer>

        <S.NewsLetterWrap>
          <S.NewsLetter>
            <S.TopArea>
              <Letter width='25px' height='25px' />
              <div>Newsletter</div>
            </S.TopArea>
            <p>A curated list of handpicked products delivered to your email every week</p>
            <S.BottomArea>
              <input placeholder='Enter your email address'></input>
              <button>Join</button>
            </S.BottomArea>
          </S.NewsLetter>
        </S.NewsLetterWrap>
      </Section>
    </Main>
  )
}

export default Podcasts;