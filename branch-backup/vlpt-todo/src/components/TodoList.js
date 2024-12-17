import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


const yoosa = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

console.log(yoosa);

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="11" done={true} />
      <TodoItem text="22" done={true} />
      <TodoItem text="33" done={false} />
      <TodoItem text="44" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;