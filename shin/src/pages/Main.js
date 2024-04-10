import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled, {css} from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-rows: 400px 300px;
  grid-template-columns: 2fr 1fr;
  gap: 10px 10px;
`
const ContentBlock = styled.div`
  background-position: center;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;

  &:hover{
    border: 2px solid #dd1818;
  }
`

function Main(){
  const navigate = useNavigate();
  

  return (
    <Wrap>
      <ContentBlock bg="https://i.pinimg.com/564x/71/2e/d3/712ed39ab7d1ec280ed7957653bd131a.jpg" onClick={()=>{navigate('/project')}}>
        project
      </ContentBlock>
      <ContentBlock bg="https://i.pinimg.com/564x/1e/50/75/1e5075849a49f1ee8db001b314de1888.jpg" onClick={()=>{navigate('/career')}}>
        career
      </ContentBlock>
      <ContentBlock bg="https://i.pinimg.com/564x/27/65/ae/2765ae2bd41c75ba729f5886868a1c22.jpg" onClick={()=>{navigate('/contact')}}>
        contact
      </ContentBlock>
      <ContentBlock bg="https://i.pinimg.com/564x/d3/ed/e6/d3ede645eb1147c084ef0bf6dedd5cec.jpg" onClick={()=>{navigate('/introduce')}}>
        introduce
      </ContentBlock>
    </Wrap>
  )
};

export default Main;