/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import S from '../styles/GlobalBlock';


const GridItem = styled(S.GridItem)`
  &:hover{
    border: 2px solid #dd1818;
  }
`

function Main(){
  const navigate = useNavigate();

  return (
    <S.GridContainer gridRows='500px 400px' gridColumns='2fr 1fr'>
      <GridItem bg="/images/main/main4.jpg" onClick={()=>{navigate('/project')}}>
        project
      </GridItem>
      <GridItem bg="/images/main/main3.png" onClick={()=>{navigate('/career')}}>
        career
      </GridItem>
      <GridItem bg="/images/main/main2.jpg" onClick={()=>{navigate('/contact')}}>
        contact
      </GridItem>
      <GridItem bg="/images/main/main1.jpg" onClick={()=>{navigate('/introduce')}}>
        introduce
      </GridItem>
    </S.GridContainer>
  )
};

export default Main;