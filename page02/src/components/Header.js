import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const HeaderWrap = styled.header`
    height: 40px;
    border: 1px solid #eee;
    align-content: center;
    text-align: center;
`

const SideNav = styled.div`
    
`

const ThemeBtn = styled.button`
    width: 60px;
    height: 30px;
    border-radius: 25px;
    border: 1px solid #ddd;

    border: none;
    position: relative;

    span {
        position: absolute;
        top: 50%;
        left: ${({ theme }) => theme.btnPos};
        transform: translateY(-50%);
        width: 25px; height: 25px;
        background-color: #ccc;
        display:inline-block;
        border-radius: 50%;
        transition: left .5s;
    }
`

function Header({ props, isTheme, toggleTheme }) {
    return (
        <HeaderWrap>
            <ThemeBtn onClick={toggleTheme} isTheme={isTheme}>
                <span>
                    {isTheme === true ? 'D' : 'L'}
                </span>
            </ThemeBtn>

            <SideNav>
                <Link to="/Page/1">1</Link>
                <Link to="/Page/2">2</Link>
                <Link to="/Page/3">3</Link>
                <Link to="/Page/4">4</Link>
            </SideNav>
        </HeaderWrap>
    )
};

export default Header;