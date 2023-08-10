import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TodoModal({ show, handleClose, handleSubmit }) {
  const [formData, setFormData] = useState({
    task: '',
    dueDate: '',
    urgency: 'low',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      task: '',
      dueDate: '',
      urgency: 'low',
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              name="task"
              value={formData.task}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              className="form-control"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Urgency</label>
            <select
              className="form-control"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TodoModal;
