import React from 'react';
import { useLocation } from 'react-router';

import styled from 'styled-components';
import S from '../../Styles/GlobalBlock';

const ReturnBtn = styled.div`

`

function Podcast() {
  const location = useLocation();

  const state = location.state;

  // const 
  console.log(state.is,state.set);
  console.log(state);
  return(
    <>
      
      <ReturnBtn onClick={()=>{}}><span>←</span> Podcast</ReturnBtn>
    </>
  )
}

export default Podcast;