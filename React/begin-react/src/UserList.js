import React, { useEffect } from 'react';

function UserList({users, onRemove, onToggle}) {
  return(
    <div>
      {
        users.map((user,index) => (
          <User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>
        ))
      }
    </div>
  )
}

function User({user, onRemove, onToggle}) {
  useEffect(() => {
    // console.log('user 값이 설정됨');
    // console.log(user);
    // return () => {
    //   console.log('user가 바뀌기 전');
    //   console.log(user);
    // }
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={()=>onToggle(user.id)}
      >
        {user.username}
      </b>
      
      <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  )
}

export default React.memo(UserList);