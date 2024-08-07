import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos/todosSlice";
import { useTranslation } from "react-i18next";
import "../App.css";

const TodoItem = ({ todo }) => {
  const { t } = useTranslation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(new Date(todo.date));
  const [priority, setPriority] = useState(todo.priority);
  const dispatch = useDispatch();

  const handleUpdateClose = () => setShowUpdateModal(false);
  const handleUpdateShow = () => setShowUpdateModal(true);

  const handleDeleteClose = () => setShowDeleteModal(false);
  const handleDeleteShow = () => setShowDeleteModal(true);

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title,
        description,
        date,
        priority,
      })
    );
    handleUpdateClose();
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
    handleDeleteClose();
  };

  return (
    <>
      <tr>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{new Date(todo.date).toLocaleDateString()}</td>
        <td>{todo.priority}</td>
        <td className="todo-item-buttons">
          <Button variant="success" onClick={handleUpdateShow}>
            {t("todo.update")}
          </Button>
          <Button variant="danger" onClick={handleDeleteShow}>
            {t("todo.delete")}
          </Button>
        </td>
      </tr>

      <Modal show={showUpdateModal} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("todo.update")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{t("todo.title")}</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("todo.description")}</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("todo.date")}</Form.Label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="form-control"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("todo.priority")}</Form.Label>
              <Form.Control
                as="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">{t("todo.priority")}</option>
                <option value="Medium">{t("todo.priority")}</option>
                <option value="High">{t("todo.priority")}</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdateClose}>
            {t("todo.close")}
          </Button>
          <Button variant="danger" onClick={handleUpdate}>
            {t("todo.saveChanges")}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("todo.delete")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("todo.deleteConfirmation")}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleDeleteClose}>
            {t("todo.close")}
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            {t("todo.delete")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoItem;