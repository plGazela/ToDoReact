import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from "../components/Navbar"

function NewTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskSubmitted, setTaskSubmitted] = useState(false);

  function handleSumbit(e) {
    e.preventDefault();
  
    const task = {taskId: crypto.randomUUID(), taskName, taskDescription};

    setTaskSubmitted(true);
  }

	return (
		<>    
      <Navbar />
			<form className="mt-4" onSubmit={handleSumbit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task name</label>
          <input type="text" className="form-control" id="taskName" value={taskName} onChange={e => setTaskName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Description</label>
          <textarea className="form-control" id="taskDescription" rows="3" aria-label="Task description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)}></textarea>
        </div>

        <div className="mb-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Add task</button>
        </div>

        <div className="d-none alert alert-success" role="alert">
          Task added to the list!
        </div>
      </form>

      {taskSubmitted && <Navigate to="/" />}
		</>
	);
}

export default NewTask;