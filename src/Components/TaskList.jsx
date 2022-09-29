import SubTask from "./SubTask";

import { useDispatch, useSelector } from "react-redux";
import style from "../Components/TaskList.module.css";
import { dataAction } from "./Store/Redux";

const TaskList = ({ tasks }) => {
  const store = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const openTaskHandler = (itemId) => {
    dispatch(dataAction.openTask(itemId));
  };
  const deleteTaskHandler = (itemId) => {};
  const taskList = tasks[0].map((item) => {
    return (
      <div className={style["task-container"]} key={item.id}>
        <div className={style.info}>
          <div>
            <h3>{item.name}</h3>
            <span>{item.status}</span>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div className={style.controls}>
            <span>Edit</span>
            <span>Add</span>
          </div>
        </div>

        <div>
          <button onClick={openTaskHandler.bind(null, item.id)}>Open</button>
          <button onClick={deleteTaskHandler.bind(null, item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      {tasks.length > 0 && (
        <>
          {taskList}
          {store.openTask && <SubTask task={store.openedTask} />}
        </>
      )}
    </>
  );
};
export default TaskList;
