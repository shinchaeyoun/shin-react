import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const SideBlock = styled.div`
    width: 10%;
    position: fixed;
    top: 5rem;
    right: 5rem;
    margin-top: 70px;
    
    div {
        display: flex;
        flex-direction: column;
    }
`

const Side = () => {
    return (
        <SideBlock>
            <div>
                <Link to='1' spy={true} smooth={true}>page1</Link>
                <Link to='2' spy={true} smooth={true}>page2</Link>
                <Link to='3' spy={true} smooth={true}>page3</Link>
                <Link to='4' spy={true} smooth={true}>page4</Link>
            </div>
        </SideBlock>
    )
}

export default Side;