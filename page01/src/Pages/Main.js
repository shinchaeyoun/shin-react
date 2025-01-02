/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact.js';

const MainContent = styled.div`
  width: 50%;
  height: 100vh;
  border: 1px solid #ddd;
  background-image: url(${props => props.$bgi});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const MainSection = styled.div`
  display: flex;
`

const GroupBox = styled.div`
  height: 100vh;
`
function Main() {
  return (
    <>
      <MainSection>
        <MainContent>1</MainContent>
        <MainContent>2</MainContent>
      </MainSection>

      <GroupBox>
        GroupBox<br/>
        1
      </GroupBox>

      <GroupBox>
        GroupBox<br/>
        2
      </GroupBox>

      <GroupBox>
        GroupBox<br/>
        3
      </GroupBox>

      <GroupBox>
        GroupBox<br/>
        4
        <Contact />
      </GroupBox>
    </>
  )
}

export default Main;