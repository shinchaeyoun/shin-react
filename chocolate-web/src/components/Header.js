import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  color: ${props => props.theme.colors.pointColor};
  font-family: ${props => props.theme.fonts.outfit};
`
function Header() {
  return(
    <>
      <Test>Header</Test>
    </>
  )
}

export default Header;