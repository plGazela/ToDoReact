import Navbar from "../components/Navbar";
import Task from "../components/Task";

function Tasks({ tasks, completeTask, deleteTask }) {
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