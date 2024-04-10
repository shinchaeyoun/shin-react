/* eslint-disable */
import React from 'react';

import styled, {css} from 'styled-components';
import S from '../styles/GlobalBlock';

const BlockTitle = styled(S.BlockTitle)`
  margin-bottom: 10px;
`
const Block = styled(S.Block)`
  margin-bottom: 30px;
`
const InnerWrap = styled.div`
  display: grid;
  grid-template-rows: 480px;
  grid-template-columns: 3fr 1fr;
  gap: 10px 10px;
`
const PageImgBlock = styled.div`
  overflow-y: scroll;
  border: 2px solid ${({theme}) => theme.colors.pointColor};
  border: 1px solid #222;
  >img {
    width: 100%;
  }
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-top: 10px; 
  font-size: 14px;
`
const SubTitle = styled.div`
  margin-top: 20px;
  color: ${({theme}) => theme.colors.pointColor};
  font-family: 'NotoSansMedium';
`
const Content = styled.div`
  font-family: 'NotoSansRegular';

  &:nth-last-child(1) {
    margin-bottom: 10px;
  }
`

function Project(){
  return (
    <S.Wrap>
      <Block>
        <BlockTitle>Eigenhain</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>
      
      <Block>
        <BlockTitle>London</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
          <img src="/images/project/london_fullpage.png" alt="london page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>MMCA</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/mmca_fullpage.png" alt="mmca page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>Seed</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/seed_fullpage.png" alt="seed page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>Sony</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/sony_fullpage.png" alt="sony page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>Canvas</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>Appydev</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>

      <Block>
        <BlockTitle>Todo List</BlockTitle>
        
        <InnerWrap>
          <PageImgBlock>
            <img src="/images/project/eigenhain_fullpage.png" alt="eigenhain page"/>
          </PageImgBlock>
          <TextBlock>
            <SubTitle>사용언어</SubTitle>
            <Content>HTML, CSS, jQuery</Content>
            
            <SubTitle>사용기능</SubTitle>
            <Content>drop drag canvas strong</Content>

            <SubTitle>기획의도</SubTitle>
            <Content>rlghlrdmleh rlghlrdmleh seventeen seventeen seventeen seventeen seventeen seveteen</Content>

            <SubTitle>제작후기</SubTitle>
            <Content>content content content content content content</Content>
          </TextBlock>
        </InnerWrap>
      </Block>
    </S.Wrap>
  )
};

export default Project;