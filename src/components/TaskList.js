import ShowTask from "./ShowTask"

function ShowTaskList({ taskList, setTaskList }) {
  const handleDeleteTask = (id) => {
    const updatedList = taskList.filter((task) => task.id !== id)
    setTaskList(updatedList)
  }
  const handleEditForm = (newName, id) => {
    const editedList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: newName,
          time: `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
        }
      } else {
        return task
      }

    })
    setTaskList(editedList)
  }

  const rerenderTasks = taskList.map((task) => {

    return <ShowTask
      key={task.id}
      task={task}
      onDelete={handleDeleteTask}
      onEdit={handleEditForm}
    />
  })

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => { setTaskList([]) }} className="clearAll">ClearAll</button>
      </div>
      <ul>
        {rerenderTasks}
      </ul>
    </section>
  );
}

export default ShowTaskList;
