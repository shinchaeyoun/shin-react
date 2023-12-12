import React from 'react';
import styled from 'styled-components';
import S from '../Styles/GlobalBlock';

import { ReactComponent as Tools } from '../assets/images/menu.svg';
import { ReactComponent as Community } from '../assets/images/menu.svg';
import { ReactComponent as Podcast } from '../assets/images/menu.svg';

const Title = styled(S.Title)`
  width: 100%;
  font-size: 34px;
  text-align: center;
`
const TxtBox = styled.div`
  line-height: 28px;
`
const Item = styled(S.ShadowBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 20px;

  width: calc(100% / 3);
  width: 240px;
  height: 280px;

  text-align: center;
  background-color: #fff;
  border-width: 3px;

  transition: all .5s;

  &:nth-child(2) {
    margin: 0 12px;
  };
  ${Title} {
    margin: 15px 0;
    color: ${({theme}) => theme.colors.darkNavy};
    font-size: 18px;
  };
  &:hover {
    transform: translateY(-7px);
  };
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`
const Main = styled(S.Main)`
  padding: 60px 0;
  width: 740px;
  min-height: 500px;
`
function Submit() {
  return(
    <Main>
      <Title>What do you want to submit?</Title>

      <ItemContainer>
        <Item>
          <Tools width='64px' height='64px'/>
          <Title>Tool</Title>
          <TxtBox>Submit a tool or product which you think other people should be using more often</TxtBox>
        </Item>

        <Item>
          <Community width='64px' height='64px'/>
          <Title>Communities</Title>
          <TxtBox>If you are a member of or know a awesome community, do let us know</TxtBox>
        </Item>

        <Item>
          <Podcast width='64px' height='64px'/>
          <Title>Podcast</Title>
          <TxtBox>If you are hooked to some awsome podcasts, do share is with us.</TxtBox>
        </Item>
      </ItemContainer>

      <div>
        Help Appydev collect more tools, communities & podcasts which other can use and share. Plus the indie developers get their products & tools more exposure and ger benefited.
      </div>
    </Main>
  )
}

export default Submit;