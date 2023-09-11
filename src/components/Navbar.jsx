import PageNavbar from "./PageNavbar";
import TasksNavbar from "./TasksNavbar";

function Navbar({ type }) {
  return (
    type === "default" ? <TasksNavbar /> : <PageNavbar title="Add new task" />
  );
}

export default Navbar;