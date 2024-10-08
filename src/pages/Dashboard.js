import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Table, Button } from "react-bootstrap";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("There was an error fetching the todos!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container">
      <h1>{t("dashboard.title")}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{t("todo.title")}</th>
            <th>{t("todo.description")}</th>
            <th>{t("todo.date")}</th>
            <th>{t("todo.priority")}</th>
            <th>{t("dashboard.action")}</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{new Date(todo.date).toLocaleDateString()}</td>
              <td>{todo.priority}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                  {t("todo.delete")}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
