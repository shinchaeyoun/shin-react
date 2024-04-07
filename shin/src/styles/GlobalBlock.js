/* eslint-disable */
import styled, { keyframes } from 'styled-components';

const openHover = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const closeMenu = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.98);
  }
`


const Title = styled.div`
  font-weight: bold;
  font-family: ${({theme}) => theme.fonts.outfit};
`
const MovingUp = styled.div`
  transition: all .5s;
  &:hover {
    transform: translateY(-7px);
  };
`
const BorderBox = styled.div`
  border: 2px solid #000;
  border-bottom-width: 4px;
  border-radius: 8px;
`
const ShadowBox = styled(BorderBox)`
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
`
const TopArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  > svg {
    margin-right: 8px;
  }
`
const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  height: 40px;

  border: 2px solid #cbd5df;
  border-radius: 7px;

  overflow: hidden;
  input,button { height: 100%; border: none; outline: none;}
  input {
    width: 80%;
    padding: 0 10px;

    &::placeholder{
      color: #a6b1be;
    }
  }
  button {
    width: 20%;
    background-color: #cbd5df;
    color: #49586d;
  }
`
const NewsLetter = styled(ShadowBox)`
  padding: 20px;
  color: ${({theme}) => theme.colors.deepGray};

  font-size: 16px;
  border: none;
  background-color: #fff;
  box-shadow: 0 4px 8px -3px rgba(0,0,0,.1), 0 2px 6px -2px rgba(0,0,0,.05);
`
const NewsLetterWrap = styled.div`
  width: 30%;
`
const Bookmark = styled.div`
  display: flex;
  align-items: center;

  padding: 0 8px;
  height: 30px;
  border: 2px solid ${({theme}) => theme.colors.deepGray};
  border-radius: 4px;
  > svg {margin-right: 5px;}
`
const HoverBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  padding: 10px;

  font-size: 12px;

&.enter-active {
  > div {
    animation: ${openHover} 0.2s infinite;
  }
}
&.exit-active {
  > div {
    animation: ${closeMenu} 0.2s infinite;
  }
}

`
const Section = styled.section`
`
const Main = styled.main`
  margin: 0 auto;
`

const FrameInner = styled.div`
  padding: 30px;
`
const Frame = styled.div`
  position: fixed;

  width: 100vw; height: 100vh;

  border: 20px solid #fff;

  z-index: 100;
  clip-path: polygon(0% 0%, 0 100%, 2.3% 100%, 2.3% 3.3%, 97.7% 3.3%, 97.7% 96.7%, 0% 96.7%, 0% 100%, 100% 100%, 100% 0%);
`
const InnerFrame = styled.div`
  border: 2px solid #dd1818;
  width: 100%; height: 100%;
`



const S = {
  Title,
  MovingUp,
  BorderBox,
  ShadowBox,
  Section,
  Main,
  TopArea,
  BottomArea,
  NewsLetter,
  NewsLetterWrap,
  Bookmark,
  HoverBox,
  Frame,
  InnerFrame,
  FrameInner
};

export default S;