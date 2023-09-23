import { useState } from "react";
import { Link } from "react-router-dom";

function TasksNavbar({ handleFilteredView }) {
  const [currentView, setCurrentView] = useState("all");

  return (
    <nav className="p-0 navbar navbar-expand border-bottom">
      <div className="p-0 container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={"nav-link py-3 " + (currentView === "all" ? "active border-bottom border-2 border-primary" : "")} aria-label="All" href="#">All</a>
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