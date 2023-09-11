import { Link } from "react-router-dom";

function TasksNavbar() {
  return (
    <nav className="p-0 navbar navbar-expand border-bottom">
      <div className="p-0 container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active border-bottom border-2 border-primary py-3" aria-label="All" href="#">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-3" aria-label="In progress" href="#">In progress</a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-3" aria-label="Done" href="#">Done</a>
          </li>
        </ul>
        <form className="d-flex">
          <Link to="/new-task" className="btn btn-primary">+ Add task</Link>
        </form>
      </div>
    </nav>
  );
}

export default TasksNavbar;