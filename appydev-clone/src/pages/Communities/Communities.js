/* eslint-disable */
import React from 'react';

import ItemData from './CommunitiesData';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock';

import { ReactComponent as Letter } from '../../assets/images/Communities/letter.svg';

const MainImg = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: 350px;
  overflow: hidden;

  > img {
    width: 100%; height: 100%;
  }
`
const Icon = styled.div`
  position: absolute;
  top: 30px; right: 20px;
  display: flex;
  align-items: center;

  > div {
    margin-left: 8px;
  }
`
const Explain = styled.p`
  padding: 20px 0;
  color: ${({theme}) => theme.colors.deepGray};

  font-size: 22px;
  line-height: 26px;
`
const FoundedInfo = styled.div`
  display: flex;
  align-items: center;
  > p {
    text-decoration: underline;
  }
`
const CircleBox = styled(S.ShadowBox)`
  margin-right: 10px;
  width: 60px; height: 60px;
  overflow: hidden;
  border-radius: 50%;
  border-width: 3px;
  border-bottom-width: 3px;
  border-color: ${({theme}) => theme.colors.darkGray};
`
const TextBox = styled.div`
  position: relative;
  padding: 30px 20px;
  height: 45%;
  background-color: #fff;
  ${S.Title}{
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.deepGray};
  }
`
const CommuItem = styled(S.ShadowBox)`
  margin-bottom: 20px;
  overflow: hidden;
  border: none;
`
const ItemContainer = styled.div`
  padding-right: 30px;
  width: 70%;
`
const Section = styled(S.Section)`
  display: flex;
  padding: 0 20px;
  width: 100%;
`
const TitleArea = styled.div`
  padding: 0 20px;
  margin-top: 120px;
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
const Main = styled(S.Main)`
  max-width: 1024px;
  padding: 0 20px;
  font-family: ${({theme}) => theme.fonts.outfit};
`
function Communities() {
  return(
    <Main>
      <TitleArea>
        <S.Title>Communities</S.Title>
        <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
      </TitleArea>

      <Section>
        <ItemContainer>
          {
            ItemData.map((item, index)=>{
              return (
                <CommuItem key={index}>
                  <MainImg>
                    <img src={require('../../assets/images/Communities/'+item.bgImg+'.png')} alt={item.bgImg}/>
                  </MainImg>

                  <TextBox>
                    <Icon>
                      {
                        item.icon.map((icon, idx) => (
                          <div key={idx}>{icon}</div>
                        ))
                      }
                    </Icon>
                    
                    <S.Title>{item.title}</S.Title>
                    <Explain>{item.explain}</Explain>

                    <FoundedInfo>
                      <CircleBox>
                        <img src={require('../../assets/images/Communities/'+item.byImg+'.png')}/>
                      </CircleBox>

                      <p>{item.name}</p>
                    </FoundedInfo>
                  </TextBox>
                </CommuItem>
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

export default Communities;