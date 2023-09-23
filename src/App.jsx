import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("savedTasks");

    if (savedTasks === null) {
      return [];
    } else {
      return JSON.parse(savedTasks);
    }
  });

  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks(tasks => [...tasks, task]);
  }

  function completeTask(taskId, isCompleted) {
    setTasks(tasks.map(task => task.id === taskId ? {...task, inProgress: isCompleted} : task));
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }
  
  return (
    <div className="container">
      <h1 className="h1 my-5 text">🖊️ To-Do React</h1>

      <Routes>
        <Route path="/" element={<Tasks tasks={ tasks } completeTask={ completeTask } deleteTask={ deleteTask } />} />
        <Route path="/new-task" element={<NewTask onFormSubmit={addTask} />} />
      </Routes>

    </div>
  );
}

export default App;