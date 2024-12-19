/* eslint-disable */
import React from "react";
import styled, { css } from 'styled-components';
import S from '../styles/GlobalBlock';
import useInput from './useInput.js';

export default function Section4 (){
    const userValue = useInput();
    return (
        <S.Section>
            Section4

            <input type="text" id="userValue" {...userValue} />
        </S.Section>
    )
}