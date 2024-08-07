import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const TodoForm = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      date: date.toISOString(),
      priority,
    };

    try {
      const response = await axios.post("http://localhost:3000/todos", newTodo);
      dispatch(addTodo(response.data));
      setTitle("");
      setDescription("");
      setDate(new Date());
      setPriority("Low");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <Form className="todo-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder={t("todo.taskPlaceholder")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder={t("todo.description")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </Form.Group>
      <Form.Group>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="form-control"
          dateFormat="MM/dd/yyyy"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-control"
        >
          <option value="Low">{t("todo.priority")}</option>
          <option value="Medium">{t("todo.priority")}</option>
          <option value="High">{t("todo.priority")}</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        {t("todo.addTask")}
      </Button>
    </Form>
  );
};

export default TodoForm;
