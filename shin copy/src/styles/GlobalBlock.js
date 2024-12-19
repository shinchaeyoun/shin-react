/* eslint-disable */
import styled from 'styled-components';


const Frame = styled.div`
  position: fixed;

  width: 100vw; height: 100vh;

  border: 20px solid #fff;

  z-index: 100;
  clip-path: polygon(0% 0%, 0px 100%, 22px 100%, 22px 22px, calc(100vw - 22px) 22px, calc(100vw - 22px) calc(100vh - 22px), 0% calc(100vh - 22px), 0% 100%, 100% 100%, 100% 0%)
`
const FrameInner = styled.div`
  padding: 30px;
`
const InnerFrame = styled.div`
  border: 2px solid #dd1818;
  width: 100%; height: 100%;
`
const Wrap = styled.div`

`
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.gridRows || 'minmax(auto, auto)'};
  grid-template-columns: ${props => props.gridColumns || '1fr 1fr'};
  gap: ${props => props.gap || '10px'};
`
const GridContent = styled.div`
display: grid;
  grid-template-rows: ${props => props.gridRows || 'minmax(auto, auto)'};
  grid-template-columns: ${props => props.gridColumns || '1fr 1fr'};
  gap: ${props => props.gap || '10px'};
`
const GridItem = styled.div`
  // color: ${({ theme }) => theme.colors.subGray};

  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Block = styled.div`
  margin-bottom: 30px;

  font-size: 14px;
  font-family: 'NotoSansRegular';
  line-height: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`
const ImgBlock = styled.div`
  
  border: 1px solid #222;
  > img {
    width: 100%;
  }
`
const Title = styled.div`
  margin-bottom: 10px;
  font-family: 'Outfit';
  font-size: 22px;
  text-transform: capitalize;
`
const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.pointColor};
  font-family: 'NotoSansMedium';
`
const Content = styled.div`
  font-family: 'NotoSansRegular';
`

const Section = styled.div`
  min-height: 100vh;
  background-color: #eee;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const S = {
  Frame,
  InnerFrame,
  FrameInner,
  Wrap,
  GridContainer,
  GridContent,
  GridItem,
  Block,
  ImgBlock,
  Title,
  SubTitle,
  Content,
  Section,
};

export default S;