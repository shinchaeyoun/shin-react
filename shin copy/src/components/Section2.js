/* eslint-disable */
import React from "react";
import styled, { css } from 'styled-components';
import S from '../styles/GlobalBlock';

const Title = styled(S.Title)`
    margin-left: 5px;
`

const GridContent = styled(S.GridContent)`
    grid-template-rows: 400px;
    grid-template-columns: 2fr 1fr;
`

const TextBlock = styled(S.GridItem)`
    align-self: end;

    margin-bottom: 10px;
    font-size: 14px;
`
const SubTitle = styled(S.SubTitle)`
  margin-top: 20px;
`
const Content = styled.div``

function Section2() {
    return (
        <S.Section>
            <S.Block>
                <Title>Title</Title>

                <GridContent>
                    <S.ImgBlock>
                    </S.ImgBlock>

                    <TextBlock>
                        <SubTitle>
                            sub title
                        </SubTitle>
                        <Content>
                            Content
                        </Content>

                        <SubTitle>
                            sub title
                        </SubTitle>
                        <Content>
                            Content
                        </Content>

                        <SubTitle>
                            sub title
                        </SubTitle>
                        <Content>
                            Content
                        </Content>

                        <SubTitle>
                            sub title
                        </SubTitle>
                        <Content>
                            Content
                        </Content>
                    </TextBlock>
                </GridContent>
            </S.Block>
        </S.Section>
    )
}

export default Section2;