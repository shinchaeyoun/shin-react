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
        <Title>(주)피디씨컴퍼니</Title>
        <SubTitle>인턴 4개월 2015.09 ~ 2015.12</SubTitle>

        <GridContainer>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>(주)제이엔에스트레이드</Title>
        <SubTitle>웹디자이너 4년 4개월 2016.04 ~ 2020.07</SubTitle>

        <GridContainer>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>(주)커피101스트릿</Title>
        <SubTitle>매니저 1년 6개월 2020.07 ~ 2021.12</SubTitle>

        <GridContainer>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>(주)씨엠와이케이</Title>
        <SubTitle>퍼블리셔 3개월 2022.06 ~ 2022.08</SubTitle>

        <GridContainer>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
        </GridContainer>
      </S.Block>

      <S.Block>
        <Title>(주)위두커뮤니케이션즈</Title>
        <SubTitle>퍼블리셔 1년 3개월 2022.09 ~ 2023.12</SubTitle>

        <GridContainer>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
          <GridItem>대한민국은 민주공화국이다. 국회의원과 정부는 법률안을 제출할 수 있다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. </GridItem>
        </GridContainer>
      </S.Block>
    </S.Wrap>
  )
};

export default Career;