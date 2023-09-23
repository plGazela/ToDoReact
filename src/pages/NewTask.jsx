import { useState } from "react";
import { Navigate } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from "../components/Navbar"

function NewTask({onFormSubmit}) {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [taskSubmitted, setTaskSubmitted] = useState(false);

  function handleSumbit(e) {
    e.preventDefault();
    const newTask = {id: crypto.randomUUID(), inProgress: true, title, description};

    onFormSubmit(newTask);
    setTaskSubmitted(true);
  }

	return (
		<>    
      <Navbar />
			<form className="mt-4" onSubmit={handleSumbit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task name</label>
          <input type="text" className="form-control" id="taskName" value={title} onChange={e => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Description</label>
          <textarea className="form-control" id="taskDescription" rows="3" aria-label="Task description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
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