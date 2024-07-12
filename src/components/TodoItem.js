import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todos/todosSlice';
import { ListGroup, Button } from 'react-bootstrap';
import '../App.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdate = () => {
    const newTitle = prompt("Enter new title:", todo.title);
    if (newTitle) {
      dispatch(updateTodo({
        ...todo,
        title: newTitle,
      }));
    }
  };
  const Update = () => {
    const newDescription = prompt("Enter new Description:", todo.description);
    if (newDescription) {
      dispatch(updateTodo({
        ...todo,
        description: newDescription,
      }));
    }
  };

  return (
    <ListGroup.Item className="todo-item">
      <div>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
        <p>{new Date(todo.date).toLocaleDateString()}</p>
      </div>
      <div className="todo-item-buttons">
        <Button variant="primary" onClick={handleUpdate}>Update</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
