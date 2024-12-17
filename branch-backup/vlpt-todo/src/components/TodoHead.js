import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  .h4 {
    margin: 0px;
    color: #343a40;
    font-size: 36px;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    margin-top: 40px;
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`

function TodoHead () {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',weekday: 'long'
  });
  return (
    <TodoHeadBlock>
      <h4>{dateString}</h4>
      <div className='tasks-left'>{undoneTasks.length}</div>
    </TodoHeadBlock>
  )
};

export default TodoHead;