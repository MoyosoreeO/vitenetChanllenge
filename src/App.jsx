import { useSelector } from "react-redux";
import "./App.css";
import ProjectRoot from "./Components/ProjectRoot";
import TaskList from "./Components/TaskList";

function App() {
  const store = useSelector((state) => {
    return state;
  });
  return (
    <>
      <ProjectRoot />
      {store.openProject && <TaskList tasks={store.openedProject} />}
    </>
  );
}

export default App;
