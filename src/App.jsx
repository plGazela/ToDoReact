import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";

function App() {
  return (
    <div className="container">
      <h1 className="h1 my-5 text">🖊️ To-Do React</h1>

      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>

    </div>
  );
}

export default App;