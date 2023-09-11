function Task({ task, completeTask, deleteTask }) {
  return (
    <div className="my-3 card">
      <div className="card-header">
        <div className="row">
          <div className="col d-flex align-items-center">
            { !task.inProgress ? <span className="badge text-bg-success">Done</span> : <span className="badge text-bg-warning">In progress</span> }
          </div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-danger px-2 py-1" onClick={ () => deleteTask(task.id) }><i className="bi bi-trash"></i></button>
          </div>
        </div>
        
      </div>
      <div className="row g-0">
        <div className="col-auto py-3 ps-3">
          <form className="form-check d-flex justify-content-center">
            <input className="form-check-input" type="checkbox" id="taskCompleted" onChange={ (e) => completeTask(task.id, !e.target.checked) } />
          </form>
        </div>
        <div className="col-10">
          <div className="card-body">
            <h5 className="card-title">{ task.title }</h5>
            <p className="card-text">{ task.description }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;