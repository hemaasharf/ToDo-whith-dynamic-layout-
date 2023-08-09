import { useState } from "react";

function AddTask({ taskList, setTaskList }) {
  const [taskName, setTaskName] = useState('')
  const handleChange = (e) => {
    setTaskName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const time = new Date();
    const newTask = {
      id: time.getTime(),
      name: taskName,
      time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
    }
    setTaskList([...taskList, newTask])
    setTaskName('')

  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          placeholder="addTask"
          autoComplete="off"
          value={taskName} />
        <button>Add Task</button>
      </form>
    </section>
  );
}

export default AddTask;
