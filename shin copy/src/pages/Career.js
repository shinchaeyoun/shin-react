import React from 'react';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';

const Title = styled(S.Title)`
  font-size: 20px;
  font-family: 'NotoSerifBold';
  // color: ${({theme}) => theme.colors.pointColor};
  margin-bottom: 3px;
`
const SubTitle = styled(S.SubTitle)`
  font-family: 'NotoSerifSemiBold';
  color: ${({theme}) => theme.colors.piontColor};
`
const GridContainer = styled(S.GridContainer)`
  gap: 30px;
  margin-top: 10px;
`
const GridItem = styled(S.GridItem)`
  font-family: 'NotoSansRegular';
  font-size: 14px;
  line-height: 20px;
`

function Career(){
  return (
    <S.Wrap>
      <S.Block>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>

        <GridContainer>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>

        <GridContainer>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>

        <GridContainer>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>

        <GridContainer>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>

        <GridContainer>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridContainer>
      </S.Block>
    </S.Wrap>
  )
};

export default Career;