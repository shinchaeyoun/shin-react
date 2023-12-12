import React from 'react';
import styled from 'styled-components';

const IconLogo = styled.div`
  
`
const Container = styled.div`
  font-family: ${({theme}) => theme.fonts.outfit};

  width: 100%;
  height: 80px;

  background-color: #fff;
  border-bottom: 0 solid #e2e8f0;
  /* box-shadow: 0px 0px 1px 1px #c3c3c33d; */
`
function Header() {
  return(
    <>
      <Container>
        <div>
          <IconLogo></IconLogo>
        </div>
      </Container>
    </>
  )
}

export default Header;