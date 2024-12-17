/* eslint-disable */
import React from 'react';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';

const Title = styled(S.Title)`
  margin-left: 5px;
`
const GridContainer = styled(S.GridContainer)`
  grid-template-rows: 480px;
  grid-template-columns: 3fr 1fr;
`
const PageImgBlock = styled.div`
  border: 1px solid #222;
  overflow-y: scroll;

  >img {
    width: 100%;
  }
`
const TextBlock = styled(S.GridItem)`
  align-self: end;

  margin-bottom: 10px;
  font-size: 14px;
`
const SubTitle = styled(S.SubTitle)`
  margin-top: 20px;
`
const Content = styled(S.Content)`
`

function Project(){
  return (
    <S.Wrap>
      <S.Block>
        <Title>Title</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>

          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>
      
      <S.Block>
        <Title>London</Title>
        
        <GridContainer>
          <PageImgBlock>
          <img src="/images/project/london_fullpage.png" alt="london page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>MMCA</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/mmca_fullpage.png" alt="mmca page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Seed</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/seed_fullpage.png" alt="seed page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Sony</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/sony_fullpage.png" alt="sony page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Canvas</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Appydev</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>Todo List</Title>
        
        <GridContainer>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
            
            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>

            <SubTitle>SubTitle</SubTitle>
            <Content>Content</Content>
          </TextBlock>
        </GridContainer>
      </S.Block>
    </S.Wrap>
  )
};

export default Project;