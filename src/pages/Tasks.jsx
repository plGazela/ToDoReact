import { useState } from "react";
import Navbar from "../components/Navbar";
import Task from "../components/Task";

function Tasks() {
	const [tasks, setTasks] = useState([{id:"1", inProgress: true, title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card's content."}]);

  function completeTask(taskId, isCompleted) {
    setTasks(tasks.map(task => task.id === taskId ? {...task, inProgress: isCompleted} : task));
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  } 

	return (
		<>
      <Navbar type="default" />

      <section className="my-4">
        {
          tasks.map(task => {
            return (<Task key={ task.id } task={ task } completeTask={ completeTask } deleteTask={ deleteTask } />);
          })
        }
      </section>
		</>
	);
}

export default Tasks;