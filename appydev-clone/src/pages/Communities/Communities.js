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

  > svg {
    margin-left: 8px;
  }
`
const Explain = styled.p`
  padding: 10px 0;
  color: #4a5568;
  font-size: 22px;
  font-weight: 500;
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
    color: #4a5568;
  }
`
const CommuItem = styled(S.ShadowBox)`
  margin-bottom: 20px;
  /* height: 534px; */
  overflow: hidden;
  border: none;
`
const CommunitiesWrap = styled.div`
  padding-right: 30px;
  width: 70%;
`

const TopArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  > svg {
    margin-right: 8px;
  }
`
const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  height: 40px;

  border: 2px solid #cbd5df;
  border-radius: 7px;

  overflow: hidden;
  input,button { height: 100%; border: none; outline: none;}
  input {
    width: 80%;
    padding: 0 10px;

    &::placeholder{
      color: #a6b1be;
    }
  }
  button {
    width: 20%;
    background-color: #cbd5df;
    color: #49586d;
  }
`
const NewsLetter = styled(S.ShadowBox)`
  padding: 20px;
  color: #4a5568;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background-color: #fff;
`
const NewsLetterWrap = styled.div`
  width: 30%;
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

  ${S.Title}{
    font-size: 28px;
  }
  p {
    color: #4a5568;
    font-size: 20px;
  }
`
const Main = styled(S.Main)`
  max-width: 1024px;
`
function Communities() {
  return(
    <Main>
      <TitleArea>
        <S.Title>Communities</S.Title>
        <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
      </TitleArea>

      <Section>
        <CommunitiesWrap>
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
                        item.icon.map((icon, idx) => (icon))
                      }
                      {/* {item.icon} */}
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
        </CommunitiesWrap>

        <NewsLetterWrap>
          <NewsLetter>
            <TopArea>
              <Letter width='25px' height='25px' />
              <div>Newsletter</div>
            </TopArea>
            <p>A curated list of handpicked products delivered to your email every week</p>
            <BottomArea>
              <input placeholder='Enter your email address'></input>
              <button>Join</button>
            </BottomArea>
          </NewsLetter>
        </NewsLetterWrap>
      </Section>
    </Main>
  )
}

export default Communities;