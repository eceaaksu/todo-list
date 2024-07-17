import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="table-container">
      <Table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
