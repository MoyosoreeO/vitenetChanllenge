import style from "../Components/SubTask.module.css";
const SubTask = ({ task }) => {
  const deleteClickHandler = (itemId) => {};
  const openClickHandler = (itemId) => {};
  return (
    <section>
      {task[0].children.map((item) => {
        return (
          <div className={style["task-container"]} key={item.id}>
            <div className={style.info}>
              <div>
                <h3>{item.name}</h3>
                <span>{item.status}</span>
              </div>{" "}
              <div>
                <p>{item.description}</p>
              </div>
              <div className={style.controls}>
                <span>Edit</span>
                <span>Add</span>
              </div>
            </div>
            <div>
              <button onClick={openClickHandler.bind(null, item.id)}>
                Open
              </button>
              <button onClick={deleteClickHandler.bind(null, item.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default SubTask;
