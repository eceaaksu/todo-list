import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ListGroup className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
