import './App.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import TodoModal from './components/TodoModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
    closeModal();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <Button className="btn btn-primary" onClick={openModal}>
          Add Task
        </Button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              Task: {task.task}, Due Date: {task.dueDate}, Urgency: {task.urgency}
            </li>
          ))}
        </ul>
        <TodoModal show={showModal} handleClose={closeModal} handleSubmit={handleFormSubmit} />
      </header>
    </div>
  );
}

export default App;
