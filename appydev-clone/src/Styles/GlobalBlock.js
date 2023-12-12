/* eslint-disable */
import styled from 'styled-components';

const Title = styled.div`
  font-weight: bold;
  font-family: ${({theme}) => theme.fonts.outfit};
`
const BorderBox = styled.div`
  border: 2px solid #000;
  border-bottom-width: 4px;
  border-radius: 8px;
`
const ShadowBox = styled(BorderBox)`
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
`
const Section = styled.section`
`
const Main = styled.main`
  margin: 0 auto;
  
`
const S = {
  Title,
  BorderBox,
  ShadowBox,
  Section,
  Main,

};

export default S;