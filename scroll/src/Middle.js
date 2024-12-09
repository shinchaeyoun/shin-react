import React from 'react';
import styled from 'styled-components';

const pages = ['page1','page2','page3','page4'];
const listItem = pages.map(function(idx){
    console.log(idx);
    return idx+1;
})


console.log(listItem);


const Middle = () => {
    return (
        <MiddleBlock>
            {
                pages.map((item,index) => {
                    return (
                        <div id={item}>{item}</div>
                    )
                })
            }
            {/* <div id='1'>page1</div>
            <div id='2'>page2</div>
            <div id='3'>page3</div>
            <div id='4'>page4</div> */}
        </MiddleBlock>
    )
};

const MiddleBlock = styled.div`
    div {
        height: 500px;
    }
`

export default Middle;