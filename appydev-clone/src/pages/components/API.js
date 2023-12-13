import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function API() {
  let toolsItmes = useSelector((state) => state.toolsItmes);
  let [toolsItem, setToolsItem] = useState(toolsItmes);
  const [nowPage, setNowPage] = useState('api');
  return(
    <>
      <div>api</div>
      {
        toolsItem.map((item, index) => {
          if(item.category === nowPage)
          return (
            <div  key={index}>
              {item.name}
            </div>
          )
        })
      }
    </>
  )
}

export default API;