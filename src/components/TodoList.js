import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { useTranslation } from "react-i18next";
import "../App.css";

const TodoList = () => {
  const { t } = useTranslation();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="table-container">
      <Table className="table">
        <thead>
          <tr>
            <th>{t("todo.title")}</th>
            <th>{t("todo.description")}</th>
            <th>{t("todo.date")}</th>
            <th>{t("todo.priority")}</th>
            <th>{t("todo.actions")}</th>
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
