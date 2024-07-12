import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: Date.now(),
      title,
      description,
      date,
    }));
    setTitle('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <Form className="todo-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="form-control"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="form-control"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <DatePicker 
          selected={date} 
          onChange={(date) => setDate(date)} 
          className="form-control"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
